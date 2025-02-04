import React from 'react'
import { useQuiz } from './QuizContext';
import Link from 'next/link';
import { IoReload } from 'react-icons/io5';

const Score = () => {
    const total = 10;
    const { answeredCount, correctCount,  setCorrectCount,setAnsweredCount } = useQuiz();
    const isQuizFinished = answeredCount === total;

    const resetQuiz = () => {
        setAnsweredCount(0);
        setCorrectCount(0);
    };

  return (

    <>
    {
        isQuizFinished && (
            <div className='absolute border-white/40 flex flex-col items-center justify-center gap-0 border-[.5px] size-[400px] rounded-full backdrop-blur-[20px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <p className='text-[#eae9ee] font-TitlingReg text-[18px]'>Your score</p>
                <p className="text-[100px] font-apercuBold  font-bold mt-0 text-[#f8f8f8] ">{correctCount} / {total}</p>
                <button 
                        onClick={resetQuiz} 
                        className="mt-2 font-semibold text-[#2c2531]  font-apercu flex items-center px-8 py-3 bg-[#f8f8f8] rounded-full text-lg "
                    >
                        <IoReload className="mr-2 text-xl" /> Retry
                    </button>
            </div>

        )
    }
    </>
  )
}

export default Score
