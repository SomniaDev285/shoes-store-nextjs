import { services } from '@/constant/Constant'
import React from 'react'
import ServiceCard from './ServiceCard'

const Servies = () => {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9'>
    {services.map((service) => (
      <ServiceCard key={service.label} {...service} />
    ))}
  </section>
  )
}

export default Servies