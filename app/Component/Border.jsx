import React from 'react'
import { PiSparkleThin } from "react-icons/pi";

const Border = () => {
  return (
    <>

         <div className="h-[120%] w-[1px] bg-[#eeeeee] absolute -left-5 top-1/2 -translate-y-1/2 "></div> 
        <div className="h-[120%] w-[1px] bg-[#eeeeee] absolute -right-5 top-1/2 -translate-y-1/2 "></div> 
            <div className="w-[115%] h-[1px] bg-[#eeeeee] absolute -top-5 left-1/2 -translate-x-1/2 "></div> 
            <div className="w-[115%] h-[1px] bg-[#eeeeee] absolute -bottom-5 left-1/2 -translate-x-1/2 "></div> 

            {/* <div className="size-fit p-3 bg-[#f8f8f8] absolute -left-9 -top-9 text-black/50 font-bold text-[18px] ">+</div>  */}
            <div className="size-[25px] flex items-center justify-center bg-[#f8f8f8] absolute -left-8 -top-8 text-black/50 font-bold text-[18px] "><PiSparkleThin/></div> 
            <div className="size-[25px] flex items-center justify-center bg-[#f8f8f8] absolute -right-8 -top-8 text-black/50 font-bold text-[18px] "><PiSparkleThin/></div> 
            <div className="size-[25px] flex items-center justify-center bg-[#f8f8f8] absolute -left-8 -bottom-8 text-black/50 font-bold text-[18px] "><PiSparkleThin/></div> 
            <div className="size-[25px] flex items-center justify-center bg-[#f8f8f8] absolute -right-8 -bottom-8 text-black/50 font-bold text-[18px] "><PiSparkleThin/></div> 
      
    </>
  )
}

export default Border
