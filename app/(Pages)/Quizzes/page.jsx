import React from 'react'
import Quiz from './Quiz';
import er from '@/public/Imoji/dd3.png'
import Image from 'next/image';

export const metadata = {
    title: "𝗢𝘂𝘁𝗹𝗼𝘂𝗱 | Quizzes",
  };
const page = () => {
  return (
    <div className='h-auto z-[-2] w-screen bg-[#f8f8f8]'>
        <Quiz/>
        
    </div>
  )
}

export default page
