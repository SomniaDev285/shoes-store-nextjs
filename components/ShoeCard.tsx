
"use client"
import Image from 'next/image';
import React from 'react'
interface ShoesCardProps {
  imgUrl?: { bigShoe: string, thumbnail: string };
  bigShoeImg?: string;
  changeBigShoeimage?: (imgUrl: string) => void;
}
const ShoeCard = ({ imgUrl, bigShoeImg, changeBigShoeimage }: ShoesCardProps) => {

  const handleChange = () => {
    if (imgUrl && changeBigShoeimage && bigShoeImg !== imgUrl.bigShoe) {
      changeBigShoeimage(imgUrl.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-lg ${bigShoeImg === imgUrl?.bigShoe ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1`} onClick={handleChange}

    >
      <div className=' bg-slate-500 flex justify-center items-center bg-cover  bg-center sm:w-40 sm:h-40 rounded-sm max-sm:p-4'>
        {imgUrl && <Image
          src={imgUrl?.thumbnail}
          alt="shoe"
          width={127}
          height={100}
          className='object-contain'
        />}

      </div></div>
  )
}

export default ShoeCard