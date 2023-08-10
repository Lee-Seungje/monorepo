import styles from "./page.module.css";
import { Button } from "@common/components";

export default function Home() {
  return (
    <main className={styles.main}>
      <Button />
      admin입니다.
    </main>
  );
}
