import React from 'react'
import Quiz from './components/quiz';
import loadQuizData from '../components/loadQuizData';
import styles from './page.module.css';


export default async function QuizPage({ params }) {
  const title = decodeURIComponent(params.title);
  const quiz = await loadQuizData(title);
  console.log(title);


  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      {/* <ProgressBar quiz={title} /> */}
      <Quiz title={title} quiz={quiz} />
    </div>

  )
}
