"use client";
import { createContext, useContext, useState } from 'react';

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const [answeredCount, setAnsweredCount] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);

    const handleAnswer = (isCorrect) => {
        setAnsweredCount((prev) => prev + 1);
        if (isCorrect) {
            setCorrectCount((prev) => prev + 1);
        }
    };

    // const resetQuiz = () => {
    //     setAnsweredCount(0);
    //     // setCorrectCount(0);
    // };


    return (
        <QuizContext.Provider value={{ answeredCount, correctCount, handleAnswer,setAnsweredCount, setCorrectCount }}>
            {children}
        </QuizContext.Provider>
    );
};

export const useQuiz = () => useContext(QuizContext);