import React from 'react'
import Quiz from './components/quiz';
import loadQuizData from '../components/loadQuizData';
import styles from './page.module.css';
import { promises as fs } from 'fs';


export default async function QuizPage({ params }) {
  const title = decodeURIComponent(params.title);
  // const quiz = await loadQuizData(title);
  const file = await fs.readFile(process.cwd() + '/app/questions.json', 'utf-8');
  const quizData = JSON.parse(file);
  const quiz = quizData[title];
  console.log(title);


  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      {/* <ProgressBar quiz={title} /> */}
      <Quiz title={title} quiz={quiz} />
    </div>

  )
}
