'use client'
import { useEffect, useState } from 'react'
import QuestionCard from "./questionCard";

export default function Quiz({ title, quiz }) {
    console.log(title);
    const quizKey = `quiz-${title}`;
    const [currentQuestion, setCurrentQuestion] = useState(0);

    useEffect(() => {
        const answers = JSON.parse(localStorage.getItem(quizKey));
        setCurrentQuestion(answers ? answers.length : 0);
    }, [quizKey])
    const nextQuestion = () => {
        if (currentQuestion < quiz.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            console.log('Quiz finished');
        }
    }
    return (
        <>
            <div>Quiz</div>
            <div>
                <QuestionCard quizKey={quizKey} Question={quiz[currentQuestion]} nextQuestion={nextQuestion} />
            </div>
        </>
    )
}
