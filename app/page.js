import Image from "next/image";
import styles from "./page.module.css";
import SelectQuizCard from "./components/selectQuizCard";
import LoadQuizData from "./components/loadQuizData";
import { promises as fs } from 'fs';




export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/app/questions.json', 'utf-8');
  const quizData = JSON.parse(file);
  // const  getQuiz = (title) => {
  //   const quiz = await LoadQuizData(title);
  //   return quiz;
  // }
  return (
    <div className={styles.startPage}>
      <h1>Select a quiz</h1>
      <div className={styles.selectCard}>
        <SelectQuizCard title="General Knowledge" image="/star-wars.jpg" questions={quizData["General Knowledge"]} />
        <SelectQuizCard title="Films" image="/star-wars.jpg" questions={quizData["Films"]} />
        <SelectQuizCard title="Sports" image="/star-wars.jpg" questions={quizData["Sports"]} />
        <SelectQuizCard title="Music" image="/star-wars.jpg" questions={quizData["Music"]} />
      </div>
    </div>
  );
}
