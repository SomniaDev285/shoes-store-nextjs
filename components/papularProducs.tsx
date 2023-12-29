import { products } from '@/constant/Constant'
import React from 'react'
import PapularProducsCard from './PapularProducsCard'

const PapularProducs = () => {
  return (
  <section id="popular" 
  className='max-container max-xl:mt-12 '>
<div className='flex justify-start flex-col gap-5'>
  <h2 className='text-4xl font-bold font-palanquin'>
   Our 
   <span className='text-coral-red'>Papular</span> Products
  </h2>
<p className='font-montserrat text-gray'>
  Experience the latest in shoe collections.  
</p>
</div>

<div className='mt-14 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-5'>
{products.map((product, index)=>(
  <PapularProducsCard key={index} {...product} />
))}
</div>
  </section>

  )
}

export default PapularProducs