'use client'
import { useEffect, useState } from 'react'
import QuestionCard from "./questionCard";

export default function Quiz({ title, quiz }) {
    console.log(title);
    const quizKey = `quiz-${title}`;
    // localStorage.removeItem(quizKey);
    const [currentQuestion, setCurrentQuestion] = useState(() => {
        const answers = JSON.parse(localStorage.getItem(quizKey) || '[]');
        return answers.length;
    });
    const [completed, setCompleted] = useState(false);
    console.log(completed);
    // useEffect(() => {
    //     const answers = JSON.parse(localStorage.getItem(quizKey));
    //     setCurrentQuestion(answers ? answers.length : 0);
    // }, [quizKey])
    const nextQuestion = () => {
        if (currentQuestion < quiz.length - 1) {
            const question = currentQuestion + 1;
            setCurrentQuestion(question);
        } else {
            console.log('Quiz finished');
            setCompleted(true);
        }
    }
    const checkScore = () => {
        const answers = JSON.parse(localStorage.getItem(quizKey));
        const score = answers.filter((answer) => answer === 'correct').length;
        return <h3>you scored {score}/{quiz.length}</h3>;
    }
    const restart = () => {
        localStorage.removeItem(quizKey);
        setCurrentQuestion(0);
        setCompleted(false);
    }
    return (
        <>
            <div>{title}</div>
            <div>
                {completed ? (
                    <div>
                        <h1>Quiz Completed</h1>
                        {checkScore()}
                        <button onClick={() => restart()}>Retake Quiz</button>
                    </div>
                )
                    :

                    <QuestionCard quizKey={quizKey} Question={quiz[currentQuestion]} nextQuestion={nextQuestion} />
                }
            </div>
        </>
    )
}
