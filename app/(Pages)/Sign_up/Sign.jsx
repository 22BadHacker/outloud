import React from 'react'
import Image from 'next/image'
import pic from '@/public/Logo/Google.svg'
import { Checkbox } from '@heroui/checkbox'
import Link from 'next/link'
import out from '@/public/Logo/black.svg'
import Border from '@/app/Component/Border'
import er from '@/public/Imoji/dd3.png'


const Sign = () => {
  return (
    <div className='max-w-[1650px] h-full mx-auto justify-center  flex relative top-10   px-12 pt-12'>
        <div className="flex card z-[1]  bg-[#f8f8f8] shadow-md flex-col relative  py-10 rounded-md px-10 gap-4 h-fit  w-[600px]">
         
         
         
        
          <Border />
             <Image loading='lazy' className='w-full opacity-80  absolute top-0 left-0 h-full z-[-1] object-cover' alt='' src={er} />
             <div className={`size-20 bg-red-500  absolute bottom-0 left-0 blur-[90px]`}></div>
              <div className={`size-[100px]  bg-blue-500 absolute top-0 right-0 blur-[90px]`}></div>
              
            <div className="flex items-center gap-5 pb-8">
               
                <h1 className='text-[28px]   text-black opacity-75 leading-tight font-apercuBold font-semibold'>Register with your e-mail</h1>
  
              </div>          

            <form action="" className="flex flex-col gap-5">

                <div className="grid grid-cols-1 gap-2 w-full">
                    <label className='text-[12px] tracking-wide text-[#3f3f46] opacity-80 font-light uppercase font-apercu ' htmlFor="email">USERName (*)</label>
                      <input className='outline-none user text-black opacity-65 placeholder:text-[rgb(0,0,0,.3)] bg-transparent w-[80%]   py-3 px-5' type="email" name="email" id="email" placeholder='Username'/>
                      <div className="w-full line relative"></div>
                </div>

            

                <div className="grid grid-cols-1 gap-2 w-full">
                    <label className='text-[12px] tracking-wide text-[#3f3f46] opacity-80 font-light uppercase font-apercu ' htmlFor="email">email (*)</label>
                      <input className='outline-none user text-black opacity-65 placeholder:text-[rgb(0,0,0,.3)] bg-transparent w-[80%]   py-3 px-5' type="email" name="email" id="email" placeholder='example@gmail.com'/>
                      <div className="w-full line relative"></div>
                   
                </div>
                <div className="grid grid-cols-1 gap-2 w-full">
                    <label className='text-[12px] tracking-wide text-[#3f3f46] opacity-80 font-light uppercase font-apercu ' htmlFor="password">password (*)</label>
                      <input className='outline-none user text-black opacity-65 placeholder:text-[rgb(0,0,0,.3)] bg-transparent w-[80%]   py-3 px-5' type="password" name="password" id="password" placeholder='**************************'/>
                      <div className="w-full line relative"></div>

                </div>
                

                <Checkbox className='font-apercuBold py-3'  color="default"><span className='text-[14.5px] text-black/70'>I agree to all Terms, Privacy and Policy </span></Checkbox>

                <div className="w-full pt-2 grid grid-cols-[1fr_.4fr_1fr] items-center place-content-center">
                  <input className='outline-none duration-150 ease-in-out font-semibold hover:bg-[#272727]/90 cursor-pointer bg-[#272727] text-white w-full border-[.5px]  border-black/30 rounded-md py-4 px-5' type="submit" value='Create Account'/>
                    <p className='text-[16px]   text-black/50 font-semibold text-center'>Or</p>
                  <div className="flex text-black/80 font-semibold w-full h-[56px] cursor-pointer  backdrop-blur-[20px] hover:bg-white/90 duration-150 ease-in-out  justify-center border-[1px] border-black/20  bg-transparent rounded-md gap-3 items-center font-apercuBold">
                      <Image className='size-[20px] object-cover ' alt="" src={pic}/>
                      Register with Google
                  </div>
                </div>

            </form>
            <h5 className='text-[16px] w-full  pt-4 text-black/70 font-apercuBold'>Already have an account? <Link href={'/Log_in/'} className='font-apercuBold text-[#272727] font-bold underline'>Log in now</Link></h5>
        </div>

       
    </div>
  )
}

export default Sign
