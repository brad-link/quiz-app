'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'

export default function QuestionCard({ quizKey, Question, nextQuestion }) {
    const answerKey = ['A', 'B', 'C', 'D'];
    const [currentAnswers, setCurrentAnswers] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    useEffect(() => {
        // localStorage.removeItem(quizKey);
        console.log(quizKey);
        const answers = JSON.parse(localStorage.getItem(quizKey) || '[]');
        console.log(JSON.parse(localStorage.getItem(quizKey)));
        setCurrentAnswers(answers);
    }, [quizKey]);
    const optionSelected = (e) => {
        setSelectedAnswer(e.target.value);
        console.log(e.target.value);
    }
    const checkAnswer = () => {
        if (selectedAnswer === Question.correct_answer) {
            console.log('Correct');
            const updatedAnswers = [...currentAnswers, 'correct'];
            localStorage.setItem(quizKey, JSON.stringify(updatedAnswers));
            console.log(JSON.parse(localStorage.getItem(quizKey)));
            setCurrentAnswers(updatedAnswers);
            setSelectedAnswer(null);
            nextQuestion();
        } else {
            console.log('Incorrect');
            const updatedAnswers = [...currentAnswers, 'wrong'];
            localStorage.setItem(quizKey, JSON.stringify(updatedAnswers));
            console.log(JSON.parse(localStorage.getItem(quizKey)));
            setCurrentAnswers(updatedAnswers);
            setSelectedAnswer(null);
            nextQuestion();
        }
    }
    return (
        <div>
            <h3>{Question.question}</h3>
            {answerKey.map((key) => (
                <div key={key}>
                    <input type="radio" id={key} checked={selectedAnswer === key} onChange={optionSelected} value={key} name="option" />
                    <label htmlFor={key}>{Question.answers[key]}</label>
                </div>
            ))}


            <button onClick={checkAnswer}>Next</button>

        </div>
    )
}