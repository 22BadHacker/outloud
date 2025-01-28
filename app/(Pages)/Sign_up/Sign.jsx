import React from 'react'
import Image from 'next/image'
import Out from '@/public/Logo/Out.svg'
import Ima from '@/public/Logo/Ima.svg'
import pic from '@/public/Logo/Google.svg'
import { Checkbox } from '@heroui/checkbox'
import Link from 'next/link'
import out from '@/public/Logo/black.svg'
import Border from '@/app/Component/Border'

const Sign = () => {
  return (
    <div className='max-w-[1650px] h-full mx-auto justify-center  flex relative top-10   px-12 pt-12'>
        <div className="flex card z-[1]  bg-[#f8f8f8] flex-col relative  py-10 rounded-md px-10 gap-4 h-fit  w-[600px]">
         
          <Border />
         
         
        <div className="absolute inset-0 -z-10 h-full opacity-70 w-full bg-[#f8f8f8] bg-[linear-gradient(to_right,#8080800a_1px,transparent_.5px),linear-gradient(to_bottom,#8080800a_.5px,transparent_.5px)] bg-[size:14px_24px]"></div>

            <div className="flex items-center gap-5 pb-8">
                <Image src={out} alt='Imap' width={130}/>
                <div className="w-[1px] h-8 bg-black opacity-55"></div>
                <h1 className='text-[28px]   text-black opacity-75 leading-tight font-apercuBold font-semibold'>Register with your e-mail</h1>
  
              </div>
           
            {/* <h1 className='text-[35px] text-center pb-7 text-black opacity-75 leading-tight font-apercuBold font-semibold max-w-[500px]'>Register with your e-mail</h1> */}
            {/* <p className='text-[18px] text-black/40  pb-7'>Start your journey with us</p> */}

           

            <form action="" className="flex flex-col gap-5">

                <div className="grid grid-cols-1 gap-2 w-full">
                    <label className='text-[12px] tracking-wide text-[#3f3f46] opacity-80 font-light uppercase font-apercu ' htmlFor="email">USERName (*)</label>
                      <input className='outline-none user text-black opacity-65 placeholder:text-[rgb(0,0,0,.3)] bg-transparent w-[80%]   py-3 px-5' type="email" name="email" id="email" placeholder='Username'/>
                      <div className="w-full line relative"></div>
            
                </div>

                <div className="grid grid-cols-1 gap-2 w-full">
                    <label className='text-[12px] tracking-wide text-[#3f3f46] opacity-80 font-light uppercase font-apercu ' htmlFor="email">email (*)</label>
                      <input className='outline-none user text-black opacity-65 placeholder:text-[rgb(0,0,0,.3)] bg-transparent w-[80%]   py-3 px-5' type="email" name="email" id="email" placeholder='Email'/>
                      <div className="w-full line relative"></div>
                   
                </div>
                <div className="grid grid-cols-1 gap-2 w-full">
                    <label className='text-[12px] tracking-wide text-[#3f3f46] opacity-80 font-light uppercase font-apercu ' htmlFor="email">password (*)</label>
                      <input className='outline-none user text-black opacity-65 placeholder:text-[rgb(0,0,0,.3)] bg-transparent w-[80%]   py-3 px-5' type="email" name="email" id="email" placeholder='Password'/>
                      <div className="w-full line relative"></div>

                </div>
                

                <Checkbox className='font-apercuBold py-3'  color="default"><span className='text-[14.5px] text-black/70'>I agree to all Terms, Privacy and Policy </span></Checkbox>

                <div className="w-full pt-2 grid grid-cols-[1fr_.4fr_1fr] items-center place-content-center">
                  <input className='outline-none bg-[#272727] text-white w-full border-[.5px]  border-black/30 rounded-md py-4 px-5' type="submit" value='Create Account'/>
                    <p className='text-[16px]   text-black/50 font-semibold text-center'>Or</p>
                  <div className="flex w-full h-[56px]  justify-center border-[1px] border-black/20  bg-transparent rounded-md gap-3 items-center font-apercuBold">
                      <Image className='size-[20px] object-cover' alt="" src={pic}/>
                      Register with Google
                  </div>
                </div>

            </form>

            {/* <div className=" w-[80%] items-center pt-5 py-3 gap-2 grid-cols-[1fr_auto_1fr] grid">
                <div className="h-[.5px] bg-black/30 w-full"></div>
                <p className='text-[16px] text-black/50 font-semibold text-center'>Or</p>
                <div className="h-[.5px] bg-black/30 w-full"></div>
            </div> */}

            <h5 className='text-[16px] w-full  pt-4 text-black/70 font-apercuBold'>Already have an account? <Link href={'/Log_in/'} className='font-apercuBold text-[#272727] font-bold underline'>Log in now</Link></h5>
        </div>

       
    </div>
  )
}

export default Sign


// <div className="w-full justify-center flex gap-5 items-center">
// <Image src={Ima} alt='Imap' width={40} height={40}/>
//   <div className="w-[1px] h-8 bg-black opacity-55"></div>
// <Image src={Out} alt='Imap' width={40} height={40}/>
// </div>
