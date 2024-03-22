'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'
// import LoadQuizData from "./loadQuizData";

export default function ProgressBar({ title, quizData }) {
  const quizKey = `quiz-${title}`;
  console.log(quizKey);
  console.log(quizData.length);
  // const quizData = await LoadQuizData(title);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const answers = JSON.parse(localStorage.getItem(quizKey) || '[]');
    console.log(answers.length);
    setProgress(Math.floor((answers.length / quizData.length) * 100));
  }, [quizKey, quizData])

  return (
    <div>
      <label htmlFor="file">progress:</label>
      <progress id="file" value={progress} max="100">{progress}% </progress>
    </div>
  )
}
