'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'

export default function ProgressBar({ title, quizData }) {
  const quizKey = `quiz-${title}`;
  console.log(quizKey);
  console.log(quizData.length);
  const [progress, setProgress] = useState(() => {
    const answers = JSON.parse(localStorage.getItem(quizKey) || '[]');
    return Math.floor((answers.length / quizData.length) * 100);
  });

  return (
    <div>
      <progress id="file" value={progress} max="100">{progress}% </progress>
    </div>
  )
}
