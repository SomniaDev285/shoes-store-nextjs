import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { headerLogo } from '../assets/images/index'
import { hamburger } from '../assets/icons/index'
import { navLinks } from '@/constant/Constant'
const Navbar = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className=' flex justify-between items-center max-container'>
        <Link href="/">
          <Image
            src={headerLogo}
            alt='logo'
            width={'130'}
            height={`50`}
          />
        </Link>
        <ul className=' flex-1 flex justify-center items-center gap-16 max-lg:hidden '>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className='text-slate-gray font-montserrat leading-normal text-lg'>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div  className='hidden max-lg:block'>
        <Image
        src={hamburger}
        alt='hamburger'
        width={'30'}
        height={`30`}
       
      />
        </div>
      

      </nav>
    </header>
  )
}

export default Navbar