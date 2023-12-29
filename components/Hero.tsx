"use client"
import React from 'react'
import Buttion from './Buttion'
import { arrowRight } from '@/assets/icons'
import { shoes, statistics } from '@/constant/Constant'
import Image from 'next/image'
import { bigShoe1 } from '@/assets/images'
import ShoeCard from './ShoeCard'
const Hero = () => {

  const [bigShowImg , setBigShowImg] = React.useState(bigShoe1)
  return (
    <section
      id='home'
      className=' w-full min-h-screen flex justify-center  flex-col xl:flex-row max-container '
    >

      <div className='w-full xl:w-2/5 flex flex-col justify-center items-start relative max-xl:padding-x pt-28  '>
        <p className='font-montserrat text-xl text-coral-red mt-4'>
          Our summer collection is here!
        </p>
        <h1 className='mt-10 text-8xl font-palanquin font-bold leading-xl max-s:text-[72px] max-sm:leading-[90px]'>
          <span className='relative z-10 xl:bg-white xl:whitespace-nowrap pr-10'>
            The New Arrival
          </span>
          <br />
          <span className=' text-coral-red inline-block mt-3'>
            Nike
          </span> Shoes
        </h1>
        <p className='font-montserrat text-lg text-slate-gray leading-8 mt-10'> Discover the new collection. Nike shoes is here</p>
        <Buttion label='Shop Now' Iconsrc={arrowRight} />

        <div className='flex justify-start items-start w-full flex-wrap mt-20 gap-5'>
          {
            statistics.map((state, index)=>(
              <div key={index}>
                <p className='text-4xl font-bold font-palanquin'> {state.value}</p>
                <p className='text-slate-gray leading-7 font-montserrat'>{state.label}</p>
              </div>
            ))
          }
          
        </div>
      </div>
      <div className='relative   bg-primary bg-cover bg-center justify-center items-center flex flex-1 xl:min-h-screen max-xl:py-40'>
        <Image
        src ={bigShowImg}
        alt='bigShoe'
      width={500}
      height={500}
        className='object-contain z-10 relative'
        />
        <div className='flex sm:gap-6 gap-4 justify-center px-10  sm:left-[10%] max-sm:px-6 -bottom-[10%]   absolute'>

          {
            shoes.map((shoe, index)=>(
              <div key={index} >
                <ShoeCard
            imgUrl={shoe && shoe} // Assuming shoe object has 'bigShoe' and 'thumbnail' properties
            changeBigShoeimage={(shoe) => setBigShowImg(shoe)}
            bigShoeImg={bigShowImg}
                />
              </div>
            ))
          }
        </div>
      </div>

    </section>

  )
}

export default Hero