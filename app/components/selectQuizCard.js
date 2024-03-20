import React from 'react'
import Styles from './selectQuizCard.module.css'

export default function SelectQuizCard(Quiz) {
    return (
        <div className={Styles.selectCard}>
            <img src={Quiz.image} alt={Quiz.title} />
            <h1>{Quiz.title}</h1>
        </div>
    )
}
