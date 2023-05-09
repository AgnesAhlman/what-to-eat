import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>What to eat</h1>

      <Link href="/login"> Go to log in </Link>
    </>
  );
}
