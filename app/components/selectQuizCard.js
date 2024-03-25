'use client'
import React, { useEffect, useState } from 'react'
import Styles from './selectQuizCard.module.css'
import Link from "next/link"
import ProgressBar from "./progressBar";



export default function SelectQuizCard(Quiz) {
    const title = Quiz.title;
    const quizKey = `quiz-${title}`;
    const [active, setActive] = useState(() => {
        const answers = JSON.parse(localStorage.getItem(quizKey) || '[]');
        return answers.length > 0;
    });

    return (
        <div className={Styles.selectCard}>
            <Link className={Styles.link} href={`/${title}`}>
                <img src={Quiz.image} alt={Quiz.title} />
                <div className={Styles.info}>
                    <h1>{Quiz.title}</h1>
                    {active && <>
                        <p>Continue Quiz</p>
                        <ProgressBar title={title} quizData={Quiz.questions} />
                    </>
                    }
                </div>
            </Link>
        </div>
    )
}
