import { Hero, PapularProducs, SpecialOffer, Servies, SuperQuality, Suscribe, CustomerReview } from '@/components'


export default function Home() {
  return (
    <>
      <section className='xl:padding-1 wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='padding'>
        <PapularProducs />
      </section>
      <section className='padding'>
        <SuperQuality />
      </section>
      <section className='padding-x py-10'>
        <Servies />
      </section>
      <section className='padding'>
        <SpecialOffer />
      </section>
      <section className='bg-pale-blue padding '>
        <CustomerReview />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Suscribe />
      </section>
    </>


  )
}
