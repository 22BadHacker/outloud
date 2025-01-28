import React from 'react'
import Quiz from './Quiz';

export const metadata = {
    title: "𝗢𝘂𝘁𝗹𝗼𝘂𝗱 | Quizzes",
  };
const page = () => {
  return (
    <div className='h-screen w-full bg-[#f8f8f8]'>
        <Quiz/>
        <div className="w-full"></div>
    </div>
  )
}

export default page
