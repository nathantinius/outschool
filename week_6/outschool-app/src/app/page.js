import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.horizontal}>
        <div className={styles.helloWorld}>
          <h1>Hello World</h1>
        </div>
        <div className={styles.yeah}>
          <p>YEAH!</p>
        </div>
      </div>
    </div>
  );
}
