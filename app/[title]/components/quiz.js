'use client';
import { useEffect, useState } from 'react'
import QuestionCard from "./questionCard";
import styles from './quiz.module.css';
import ProgressBar from "@/app/components/progressBar";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

export default function Quiz({ title, quiz }) {
    console.log(title);
    const quizKey = `quiz-${title}`;
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [iscompleted, setCompleted] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const answers = JSON.parse(localStorage.getItem(quizKey) || '[]');
        setCurrentQuestion(answers.length);
        setCompleted(answers.length === quiz.length);
        setLoading(false);
    }, [quizKey, quiz.length]);

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
        return <div className={styles.results}>
            <h3>you scored {score}/{quiz.length}</h3>
            {answers.map((answer, index) => (
                <p key={index}>Q{index + 1} {answer === 'correct' ? <CheckCircleIcon className={styles.correct} /> : <CancelIcon className={styles.incorrect} />}</p>
            ))}
        </div>;
    }
    const restart = () => {
        localStorage.removeItem(quizKey);
        setCurrentQuestion(0);
        setCompleted(false);
    }

    if (loading) {
        return <h1 className={styles.loading}>Loading...</h1>
    } else
        return (
            <>

                <div className={styles.quiz}>
                    {iscompleted ? (
                        <div className={styles.completedCard}>
                            <h1>Quiz Completed</h1>
                            {checkScore()}
                            <button className={styles.restart} onClick={() => restart()}>Retake Quiz</button>
                        </div>
                    )
                        :

                        <QuestionCard quizKey={quizKey} Question={quiz[currentQuestion]} nextQuestion={nextQuestion} />
                    }
                </div>
            </>
        )
}
