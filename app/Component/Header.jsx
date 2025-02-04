import React from 'react'
import Logo from '@/public/Logo/Orange.svg'
import Link from 'next/link'
import Image from 'next/image'
import { HiOutlineChevronDown } from "react-icons/hi2";
import Explore from './Explore';

const Header = () => {
  return (
    <header className='w-screen bg-[#f8f8f8] h-[70px]  '>
      <nav className='max-w-[1650px] mx-auto h-full  justify-between flex items-center px-10 py-5'>

        <div className="flex  items-center">
          <Link className='pr-[60px]' href='/'>
            <Image className=' contrast-125  duration-200 ease-in-out' width={125} src={Logo} alt='OUTLOUD'/>
          </Link>

          <div className="lg:flex items-center  gap-6 hidden">
              <Link href={''} className='flex group  relative hover:text-[#5d5d5d] duration-200 ease-in-out tracking-[.5px] text-[15.5px] font-apercuBold font-medium items-center gap-1'>Explore <HiOutlineChevronDown size={9}/>
              {/* <Explore /> */}
              </Link>
              <Link href={''} className='flex group  relative hover:text-[#5d5d5d] duration-200 ease-in-out tracking-[.5px] text-[15.5px] font-apercuBold font-medium items-center gap-1'>Showcase </Link>
              <Link href={''} className='flex group  relative hover:text-[#5d5d5d] duration-200 ease-in-out tracking-[.5px] text-[15.5px] font-apercuBold font-medium items-center gap-1'>Formation </Link>
              <Link href={''} className='flex group  relative hover:text-[#5d5d5d] duration-200 ease-in-out tracking-[.5px] text-[15.5px] font-apercuBold font-medium items-center gap-1'>Challenges </Link>
              <Link href={''} className='flex group  relative hover:text-[#5d5d5d] duration-200 ease-in-out tracking-[.5px] text-[15.5px] font-apercuBold font-medium items-center gap-1'>Contact</Link>
              {/* 5e5e5e */}
          </div>

        </div>

        <div className="flex gap-6 items-center">
            <Link className='text-[rgb(47,37,34,.95)]  hover:text-[#ff472b] duration-200 ease-in-out  text-[15.5px] font-apercuBold font-semibold  tracking-[.5px]' href='/Log_in/'>Log in</Link>
            {/* <div className='w-[.5px] h-5 rotate-[25deg] bg-[#000]'></div> */}
            <Link className='text-[rgb(47,37,34,.95)] hover:text-[#ff472b] duration-200 font-semibold ease-in-out text-[15.5px] font-apercuBold items-center  tracking-[.5px]' href='/Sign_up/'>Sign up</Link>
            <Link className='flex px-[14px] ml-1 overflow-hidden btn relative z-[1]  rounded-full py-[14.5px] text-[#fff]/90 font-bold duration-200 ease-in-out  text-[12.5px]  font-apercuBold tracking-[.5px] items-center gap-1' href=''>Become a Student</Link>

            <div className="size-[45px] menu flex-col md:hidden items-center justify-center gap-2 relative">
                <div className="w-full bar-1 h-[1.5px] bg-black/80 absolute left-0 top-[60%] -translate-y-1/2 overflow-hidden"></div>
                <div className="w-full bar-2 h-[1.2px] bg-black/80 absolute left-0 top-[40%] -translate-y-[50%] overflow-hidden"></div>
            </div>
        </div>

      </nav>

    </header>
  )
}

export default Header
