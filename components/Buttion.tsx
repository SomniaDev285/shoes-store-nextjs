import Image from 'next/image'
import React, { ReactNode } from 'react'
interface ButtionProps {
    label?: string,
    Iconsrc?: string
}
const Buttion = ({ label, Iconsrc }: ButtionProps) => {
    return (
        <button className='flex bg-coral-red  justify-center  text-lg px-5 py-3 border text-white border-coral-red leading-none font-montserrat rounded-full   items-center gap-2'>
            {label && label}

            {Iconsrc && (<Image
                src={Iconsrc}
                alt='icon'

                className=' ml-2 w-5 h-5 rounded-full'
            />)}
        </button>

    )
}

export default Buttion