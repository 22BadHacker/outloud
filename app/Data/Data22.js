'use client'
import React, { useState } from 'react';
import { IoCloseOutline, IoCheckmarkOutline } from "react-icons/io5";
import { FaTrophy } from "react-icons/fa";

const questions = [
    {correctAnswer: '<h1>', options:['<h6>', '<heading>' , '<h1>', '<head>'], big:'Which tag creates the largest heading in HTML?'},
    {correctAnswer: '<a>', options:['<a>', '<link>' , '<href>', '<hyper>'], big:'What tag is used to define a hyperlink in HTML?'},
    {correctAnswer: 'Break line', options:['New paragraph', 'Break line' , 'Bold text', 'Create a list'], big:'What is the purpose of the <br> tag?'},
    {correctAnswer: '<img src="url"/>', options:['<img src="url"/>', '<src="url">' , '<image="url">', '<media src="url">'], big:'How do you add an image to a webpage?'},
];

const QCM = () => {
    const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
    const [points, setPoints] = useState(0);

    const handleSelect = (questionIndex, option) => {
        if (selectedAnswers[questionIndex] !== null) return; // Disable clicking after first selection

        const newAnswers = [...selectedAnswers];
        newAnswers[questionIndex] = option;
        setSelectedAnswers(newAnswers);

        if (option === questions[questionIndex].correctAnswer) {
            setPoints(points + 25); // Increment points for correct answers
        }
    };

    return (
        <div className="flex flex-col items-center space-y-6">
            {/* Points Tracker */}
            <div className="flex items-center px-5 py-2 bg-blue-500 text-white text-lg font-bold rounded-full border border-white shadow-lg">
                <FaTrophy className="mr-2" /> {points} points
            </div>
            
            {questions.map((item, i) => (
                <div key={i} className="grid grid-cols-1 gap-6 max-w-[750px]">
                    <h1 className="text-[32px] font-bold text-gray-900">{item.big}</h1>
                    <div className="grid grid-cols-2 gap-4">
                        {item.options.map((option) => (
                            <button
                                key={option}
                                onClick={() => handleSelect(i, option)}
                                className={`flex items-center justify-between w-full px-6 py-4 border-2 rounded-full text-lg font-medium transition-all 
                                    ${selectedAnswers[i] !== null ? (option === item.correctAnswer ? 'border-green-500 text-green-700' : 'border-red-500 text-red-700') : 'border-gray-400 text-gray-700'}
                                    ${selectedAnswers[i] !== null ? 'pointer-events-none' : ''}`}
                            >
                                {option}
                                <div className={`size-8 text-lg flex items-center justify-center rounded-full border-2 
                                    ${selectedAnswers[i] === option && option === item.correctAnswer ? 'bg-green-500 text-white' : ''}
                                    ${selectedAnswers[i] === option && option !== item.correctAnswer ? 'bg-red-500 text-white' : ''}`}
                                >
                                    {selectedAnswers[i] === option && (
                                        option === item.correctAnswer ? <IoCheckmarkOutline /> : <IoCloseOutline />
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default QCM;
