"use client";

import { Translate } from "./localization/en";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>{Translate.TITLE}</h1>
      </main>
    </div>
  );
}
