
import React from 'react'
import { useParams } from 'next/navigation'
import { promises as fs } from 'fs';
import Quiz from './components/quiz';
import loadQuizData from '../components/loadQuizData';
import ProgressBar from "../components/progressBar";


export default async function QuizPage({ params }) {
  // const file = await fs.readFile(process.cwd() + '/app/questions.json', 'utf-8');
  // const quizData = JSON.parse(file);
  const title = decodeURIComponent(params.title);
  const quiz = await loadQuizData(title);
  console.log(title);


  return (
    <div>{title}
      {/* <ProgressBar quiz={title} /> */}
      <Quiz title={title} quiz={quiz} />
    </div>

  )
}
