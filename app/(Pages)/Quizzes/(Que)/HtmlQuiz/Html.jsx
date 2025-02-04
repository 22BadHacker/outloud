'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import { QCM,Pro } from '@/app/Data/Data2';
// import { Quizz } from '@/app/Data';
import Link from 'next/link';
import back from '@/public/Imoji/hand.jpg'
import loud from '@/public/Logo/white.svg'
import ProgressBar from './ProgressBar';
import { QuizProvider } from './QuizContext';
import Score from './Score';



const Html = () => {

  return (
    <QuizProvider>
        <div className='w-screen h-auto '>
            {/* <Bubb/> */}
            <div className="lg:px-4  relative  mx-auto   w-screen h-full flex  items-center justify-center">

                <div className="w-full  relative grid lg:gap-10 place-content-center  md:grid-cols-[1fr] lg:grid-cols-[.65fr_1fr]">
                  <div className="  sticky bg-[#eae9ee] overflow-hidden top-0  p-3  lg:top-4 z-[10] w-full lg:p-1 h-[300px] lg:h-[97vh]">
                    
                    <div className="w-full h-full relative lg:pr-0 pr-4">
                        
                      <Image alt='' src={back} className='w-full picc saturate-[1.1] h-full object-cover'/>
                      <div className="flex w-full gap-4 items-center absolute top-2 left-5 lg:top-11 lg:left-10">
                        <Image className='lg:w-[120px] w-[100] ' src={loud} alt='ouut'/>
                        <div className="w-[.5px] bg-white h-[20px]"></div>
                        <p className='text-[#eff4ed] font-apercuBold text-[20px]'>Dare to Dream</p>
                      </div> 
                      
                      <ProgressBar />
                      <Score />
                    </div>
                    <div className="absolute w-full h-full top-0 left-0"></div>

                  </div>

                  
                  <div className='w-full pt-5 overflow-hidden h-full flex items-center justify-center'>
                    
                    <QCM/>     
                  </div>

                </div>
                
                    
            </div>
        
        </div>
    </QuizProvider>
  )
}

export default Html
