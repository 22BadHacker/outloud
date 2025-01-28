'use client'
import React,{useState} from 'react'
import { MarqueeData } from '@/app/Data/Data';

const Marquee = () => {
const [stop, setStop] = useState(false)
  
  return (
    <div className='w-screen mar h-[50px] bg-[rgb(235,235,235,.8)] flex items-center overflow-x-hidden gap-4'>
        <div onMouseEnter={()=>setStop(true)} onMouseLeave={()=>setStop(false)} className={`flex ${stop ? "paused" : ""} h-full cursor-pointer animate-marquee w-full whitespace-nowrap  gap-5`}>
            <MarqueeData />
            <MarqueeData />
            <MarqueeData />
            <MarqueeData />
            <MarqueeData />
            <MarqueeData />
        </div>
      
    </div>
  )
}

export default Marquee
