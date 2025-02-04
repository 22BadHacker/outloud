"use client";
import React, { useState } from 'react';
import { IoCloseOutline, IoCheckmarkOutline, IoReload } from 'react-icons/io5';
import { useQuiz } from '../(Pages)/Quizzes/(Que)/HtmlQuiz/QuizContext';

const questions = [
    { correctAnswer: '<h1>', options: ['<h6>', '<heading>', '<h1>', '<head>'], big: 'Which tag creates the largest heading in HTML?' },
    { correctAnswer: '<a>', options: ['<a>', '<link>', '<href>', '<hyper>'], big: 'What tag is used to define a hyperlink in HTML?' },
    { correctAnswer: 'Break line', options: ['New paragraph', 'Break line', 'Bold text', 'Create a list'], big: 'What is the purpose of the <br> tag?' },
    { correctAnswer: '<img src="url"/>', options: ['<img src="url"/>', '<src="url">', '<image="url">', '<media src="url">'], big: 'How do you add an image to a webpage?' },
    { correctAnswer: '<table>', options: ['<table>', '<td>', '<th>', '<tr>'], big: 'Which HTML tag is used to define a table cell?' },
    {correctAnswer: 'Unordered list', options:['Ordered list', 'Unordered list' , 'Underlined list', 'Universal list'], big:'What does the <ul> tag represent?'},
    {correctAnswer: '<b>', options:['<strong>', '<bold>' , '<b>', '<em>'], big:'Which tag is used to make text bold?'},
    {correctAnswer: '<!-- comment -->', options:['# comment', '/* comment */>' , '// comment //', '<!-- comment -->'], big:'How is a comment inserted in an HTML document?'},
    {correctAnswer: 'href', options:['link', 'src' , 'href', 'url'], big:'Which attribute specifies the URL in an <a> tag for linking?'},
    {correctAnswer: 'in the head section', options:['Not an Html tag', 'in the body section' , 'in the head section', 'null'], big:'Where would the ˂title˃...˂/title˃ tags appear in a HTML file?'},
];








export const QCM = () => {
    const {handleAnswer } = useQuiz()
    
   
    return (
        <div>
            {questions.map((item, index) => (
                <Question key={index} {...item} onAnswer={handleAnswer} />
            ))}
        </div>
    );
};

const Question = ({ correctAnswer, options, big, onAnswer }) => {
    
    const [selected, setSelected] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);

    const handleClick = (option) => {
        if (!isAnswered) {
            setSelected(option);
            setIsAnswered(true);
            onAnswer(option === correctAnswer);
        }
    };

    return (
        <div className='grid relative max-w-[780px] px-5 grid-cols-1 gap-20'>
            <div className='h-auto lg:px-0 px-4 pt-10 lg:pb-[70px] md:pt-[60px] lg:pt-[140px] text-left'>
                <h1 className='lg:text-[2.9vw] sm:text-[40px] text-[39px] pb-6 leading-tight font-semibold tracking-[.050rem] font-TitlingReg text-[#2c2531]'>
                    {big}
                </h1>
                <div className='grid md:grid-cols-2 gap-4 mt-6'>
                    {options.map((option) => (
                        <button
                            key={option}
                            onClick={() => handleClick(option)}
                            disabled={isAnswered}
                            className={`flex ${!selected && 'hover:border-[#2c2531]'} duration-[.05s] ease-out items-center font-apercu justify-between w-full pl-6 pr-4 md:py-3 py-[14px] lg:py-[14px] border-2 rounded-full sm:text-[16px] text-[17px] lg:text-[1.3vw] font-medium 
                                ${selected === option ? (option === correctAnswer ? 'border-green-600 text-green-600' : 'border-red-600 text-red-600') : 'border-[#a59da0]/50 text-[#2c2531]'}
                                ${isAnswered && option === correctAnswer ? 'border-green-600 text-green-600' : ''}`}
                        >
                            {option}
                            <div className={`lg:size-11 size-8 text-[22px] border-2 border-[#c6c5cb] rounded-full flex items-center justify-center
                                ${selected === option && option === correctAnswer ? 'bg-green-600 text-white' : ''}
                                ${selected === option && option !== correctAnswer ? 'bg-red-600 text-white' : ''}
                                ${isAnswered && option === correctAnswer ? 'bg-green-600 text-white' : ''}`}
                            >
                                {selected === option ? (option === correctAnswer ? <IoCheckmarkOutline /> : <IoCloseOutline />) : ''}
                                {isAnswered && option === correctAnswer && selected !== correctAnswer ? <IoCheckmarkOutline /> : ''}
                            </div>
                        </button>
                    ))}
                </div>
                {isAnswered && selected !== correctAnswer && (
                    <p className='mt-12 text-[20px] font-TitlingMed text-[#2c2531]/90 flex items-center'>
                        <span className='size-[16px] bg-pink-500 rounded-full inline-block mr-3'></span>
                        The correct answer is <span className='font-bold text-[#2c2531] ml-1'>{correctAnswer}</span>
                    </p>
                )}

                {isAnswered && selected === correctAnswer && (
                    <p className='mt-12 text-[20px] font-TitlingMed text-[#2c2531]/90 flex items-center'>
                        <span className='size-[16px] bg-[#5bbeeb] rounded-full inline-block mr-2'></span>
                        Absolutely! You nailed it, Champ! 🎉🔥
                    </p>
                )}
            </div>
            <div className='w-full grid grid-cols-1 h-[1px] bg-[#c6c5cb]'></div>
        </div>
    );
};



// export default QCM;


