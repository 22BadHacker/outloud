import React from 'react'
import Side from '@/app/QuizComponent/Side'

const Quiz = () => {
  return (
    <div className="w-screen h-full">
        <div className='max-w-[1650px]  mx-auto py-10 px-10 w-screen h-full grid grid-cols-[auto_1fr]'>
            <Side/>
        </div>

    </div>
    
  )
}

export default Quiz
