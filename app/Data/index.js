'use client'
import React, { useState } from 'react';
import { IoCloseOutline, IoCheckmarkOutline } from 'react-icons/io5';
import { FaTrophy } from 'react-icons/fa';

const questions = [
    { correctAnswer: '<h1>', options: ['<h6>', '<heading>', '<h1>', '<head>'], big: 'Which tag creates the largest heading in HTML?' },
    { correctAnswer: '<a>', options: ['<a>', '<link>', '<href>', '<hyper>'], big: 'What tag is used to define a hyperlink in HTML?' },
    { correctAnswer: 'Break line', options: ['New paragraph', 'Break line', 'Bold text', 'Create a list'], big: 'What is the purpose of the <br> tag?' },
    { correctAnswer: '<img src="url"/>', options: ['<img src="url"/>', '<src="url">', '<image="url">', '<media src="url">'], big: 'How do you add an image to a webpage?' },
];

export const Quizz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selected, setSelected] = useState(null);
    const [points, setPoints] = useState(0);
    const [answered, setAnswered] = useState(false);
    
    const handleAnswer = (option) => {
        if (answered) return;
        setSelected(option);
        setAnswered(true);
        
        if (option === questions[currentQuestion].correctAnswer) {
            setPoints(points + 25);
        }
    };

    const nextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelected(null);
            setAnswered(false);
        }
    };

    return (
        <div className="max-w-[750px] text-left">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Quiz</h2>
                <div className="flex items-center px-4 py-2 border rounded-full text-white bg-blue-500">
                    <FaTrophy className="mr-2" /> {points} points
                </div>
            </div>
            <h1 className="text-[32px] pb-4 font-bold">{questions[currentQuestion].big}</h1>
            <div className="grid grid-cols-2 gap-4 mt-6">
                {questions[currentQuestion].options.map((option) => (
                    <button
                        key={option}
                        onClick={() => handleAnswer(option)}
                        className={`flex items-center justify-between w-full px-6 py-4 border-2 rounded-full text-lg font-medium transition-all 
                            ${selected === option ? (option === questions[currentQuestion].correctAnswer ? 'border-green-500' : 'border-red-500') : 'border-gray-300'}`}
                        disabled={answered}
                    >
                        {option}
                        <div className={`size-10 text-lg border-2 rounded-full flex items-center justify-center 
                            ${selected === option ? (option === questions[currentQuestion].correctAnswer ? 'bg-green-500 text-white' : 'bg-red-500 text-white') : 'border-gray-300'}`}>
                            {selected === option && (option === questions[currentQuestion].correctAnswer ? <IoCheckmarkOutline /> : <IoCloseOutline />)}
                        </div>
                    </button>
                ))}
            </div>
            {answered && currentQuestion < questions.length - 1 && (
                <button onClick={nextQuestion} className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full">Next Question</button>
            )}
        </div>
    );
};
