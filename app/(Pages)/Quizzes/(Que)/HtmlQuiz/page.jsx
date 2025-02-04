import React from 'react'
import Html from './Html';
import Image from 'next/image';
import back from '@/public/Imoji/paint.jpg'

export const metadata = {
    title: "𝗢𝘂𝘁𝗹𝗼𝘂𝗱 | Quizzes",
  };
const page = () => {
  return (
    <div className='w-screen h-screen  overflow-y-scroll overflow-x-hidden inset-0 fixed top-0 left-0 bg-[#eae9ee] z-10'>
        <Html/>
       
        
    </div>
  )
}

export default page
