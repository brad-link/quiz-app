import React from 'react'
import { promises as fs } from 'fs';

export default async function LoadQuizData(title) {
    const file = await fs.readFile(process.cwd() + '/app/questions.json', 'utf-8');
    const quizData = JSON.parse(file);
    const quiz = quizData[title];
    return quiz;
}
