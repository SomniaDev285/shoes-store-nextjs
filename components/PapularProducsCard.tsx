import { star } from '@/assets/icons'
import Image from 'next/image'
import React from 'react'
interface PapularProducsCardProps {

    imgURL: string
    name: string
    price: number
  
}
const PapularProducsCard = ({ imgURL, name, price}:PapularProducsCardProps) => {
  return (
    <div
    className='flex flex-1 w-full max-sm:w-full flex-col'
    >
        {imgURL &&
        <Image

        src={imgURL}
        alt='shoe'
        className='w-[300px] h-[300px] object-contain'
        />
        
}
<div className='mt-8 flex justify-start gap-2.5'>
    <Image
  src= {star}
  alt='star'
  width={24}
  height={24}
    />
<p className='font-montserrat text-xl'>(4.5)</p>

</div>
<p className=' mt-4 flex justify-start text-xl font-palanquin font-bold'>{name}</p>
<p className='mt-3 text-coral-red font-mono font-semibold'>{price}</p>
    </div>
  )
}

export default PapularProducsCard