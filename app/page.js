import Image from "next/image";
import styles from "./page.module.css";
import SelectQuizCard from "./components/selectQuizCard";

export default function Home() {
  return (
    <div className={styles.startPage}>
      <h1>Select a quiz</h1>
      <div className={styles.selectCard}>
        <SelectQuizCard title="Quiz 1" image="/star-wars.jpg" />
        <SelectQuizCard title="Quiz 2" image="/star-wars.jpg" />
        <SelectQuizCard title="Quiz 3" image="/star-wars.jpg" />
        <SelectQuizCard title="Quiz 4" image="/star-wars.jpg" />
      </div>
    </div>
  );
}
