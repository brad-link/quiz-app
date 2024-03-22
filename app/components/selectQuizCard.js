'use client'
import React from 'react'
import Styles from './selectQuizCard.module.css'
import Link from "next/link"
import ProgressBar from "./progressBar";



export default function SelectQuizCard(Quiz) {
    const title = Quiz.title;

    return (
        <div className={Styles.selectCard}>
            <Link href={`/${title}`}>
                <img src={Quiz.image} alt={Quiz.title} />
                <h1>{Quiz.title}</h1>
                <ProgressBar title={title} quizData={Quiz.questions} />
            </Link>
        </div>
    )
}
