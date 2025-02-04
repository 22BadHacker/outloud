'use client'
import React, {useState} from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { IoCheckmarkOutline } from "react-icons/io5";


const questions = [
    {correctAnswer: '<h1>', options:['<h6>', '<heading>' , '<h1>', '<head>'], big:'Which tag creates the largest heading in HTML?'},
    {correctAnswer: '<a>', options:['<a>', '<link>' , '<href>', '<hyper>'], big:'What tag is used to define a hyperlink in HTML?'},
    {correctAnswer: 'Break line', options:['New paragraph', 'Break line' , 'Bold text', 'Create a list'], big:'What is the purpose of the <br> tag?'},
    {correctAnswer: '<img src="url"/>', options:['<img src="url"/>', '<src="url">' , '<image="url">', '<media src="url">'], big:'How do you add an image to a webpage?'},
    {correctAnswer: '<table>', options:['<table>', '<td>' , '<th>', '<tr>'], big:'Which HTML tag is used to define a table cell?'},
    {correctAnswer: 'Unordered list', options:['Ordered list', 'Unordered list' , 'Underlined list', 'Universal list'], big:'What does the <ul> tag represent?'},
    {correctAnswer: '<b>', options:['<strong>', '<bold>' , '<b>', '<em>'], big:'Which tag is used to make text bold?'},
    {correctAnswer: '<!-- comment -->', options:['# comment', '/* comment */>' , '// comment //', '<!-- comment -->'], big:'How is a comment inserted in an HTML document?'},
    {correctAnswer: 'href', options:['link', 'src' , 'href', 'url'], big:'Which attribute specifies the URL in an <a> tag for linking?'},
    {correctAnswer: 'href', options:['Not an Html tag', 'in the body section' , 'in the head section', 'null'], big:'Where would the ˂title˃...˂/title˃ tags appear in a HTML file?'},
]

export const QCM = ({correctAnswer, options, big}) => {
    return (
        <>
          {questions.map((item, i) => {
            const [selected, setSelected] = useState(null);
            const { correctAnswer, options, big } = item;
    
            return (
              <div key={i} className='grid grid-cols-1 gap-20'>
                <div className='h-auto py-20 max-w-[750px] text-left'>
                  <h1 className='text-[46px] pb-4 leading-tight tracking-[.020rem] font-TitlingReg font-bold text-[#2c2531]/95'>
                    {big}
                  </h1>
                  <div className='grid grid-cols-2 gap-4 mt-6'>
                    {options.map((option) => (
                      <button
                        key={option}
                        onClick={() => setSelected(option)}
                        className={`flex font-apercu items-center hover:border-[#2c2531]/60 justify-between w-full px-6 py-4 border-[2px] border-[#a59da0]/50 rounded-full text-[#2c2531] text-[22px] font-medium transition-all 
                          ${selected === option ? (option === correctAnswer ? 'border-[#2c2531]' : 'border-[#2c2531]/70') : 'border-[#a59da0]/50'}`}
                      >
                        {option}
                        <div className={`size-10 text-[22px] ${selected === option && option === correctAnswer ? 'text-white bg-[#2c2531]' : 'text-black bg-transparent'} border-[#a59da0]/50 border-[2px] rounded-full flex items-center justify-center`}>
                          {selected === option && (option === correctAnswer ? <IoCheckmarkOutline /> : <IoCloseOutline />)}
                        </div>
                      </button>
                    ))}
                  </div>
                  {selected && (
                    <p className='mt-10 text-[20px] font-apercuBold text-[#2c2531]/90 flex items-center'>
                      <span className={`size-4 ${selected === correctAnswer ? 'bg-[#5bbeeb]': 'bg-pink-500'} rounded-full inline-block mr-2`}></span>
                      {selected === correctAnswer ? "That's correct! Way to go Champion" : `The correct answer is` }
                    </p>
                  )}
                </div>
                <div className='w-full grid grid-cols-1 h-[2px] bg-[#c6c5cb]/80'></div>
              </div>
            );
          })}
        </>
      );
}