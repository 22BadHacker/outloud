import React from 'react'
import Logo from '@/public/Logo/black.svg'
import Link from 'next/link'
import Image from 'next/image'
import { HiOutlineChevronDown } from "react-icons/hi2";
import Explore from './Explore';

const Header = () => {
  return (
    <header className='w-screen h-[60px]  '>
      <nav className='max-w-[1650px] h-full mx-auto justify-between flex items-center px-10 py-5'>

        <div className="flex  items-center">
          <Link className='pr-20' href='/'>
            <Image className=' contrast-125  duration-200 ease-in-out' width={122} src={Logo} alt='OUTLOUD'/>
          </Link>

          <div className="flex items-center gap-6">
              <Link href={''} className='flex group relative hover:text-[#5e5e5e] duration-200 ease-in-out tracking-[.5px] text-[15.5px] font-apercuBold font-medium items-center gap-1'>Explore <HiOutlineChevronDown size={12}/>
              {/* <Explore /> */}
              </Link>
              <Link href={''} className='flex hover:text-[#5e5e5e] duration-200 ease-in-out tracking-[.5px] text-[15.5px] font-apercuBold font-medium items-center gap-1'>Showcase <HiOutlineChevronDown size={12}/></Link>
              <Link href={''} className='flex hover:text-[#5e5e5e] duration-200 ease-in-out tracking-[.5px] text-[15.5px] font-apercuBold font-medium items-center gap-1'>Challenges <HiOutlineChevronDown size={12}/></Link>
              <Link href={''} className='flex form relative w-fit hover:text-[#5e5e5e] duration-200 ease-in-out tracking-[.5px] text-[15.5px] font-apercuBold font-medium items-center gap-1'>Formation <HiOutlineChevronDown size={12}/></Link>
              <Link href={''} className='flex hover:text-[#5e5e5e] duration-200 ease-in-out tracking-[.5px] text-[15.5px] font-apercuBold font-medium items-center gap-1'>Contact</Link>
          </div>

        </div>

        <div className="flex gap-6 items-center">
            <Link className='text-[rgb(47,37,34,.95)]  duration-200 ease-in-out  text-[15.5px] font-apercuBold font-semibold  tracking-[.5px]' href=''>Log in</Link>
            {/* <div className='w-[.5px] h-5 rotate-[25deg] bg-[#000]'></div> */}
            <Link className='text-[rgb(47,37,34,.95)] duration-200 font-semibold ease-in-out text-[15.5px] font-apercuBold items-center  tracking-[.5px]' href=''>Sign up</Link>
            <Link className='flex px-5 hover:bg-[#383838] rounded-full py-[14px] text-[#fff]/80 bg-[#222222] duration-200 ease-in-out text-[15.5px]  font-apercuBold tracking-[.5px] items-center gap-1' href=''>Become a Student</Link>
        </div>

      </nav>

    </header>
  )
}

export default Header
