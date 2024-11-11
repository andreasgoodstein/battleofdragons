"use client";

import { PreBattleSetup } from "./components/PreBattleSetup";
import { Translate } from "./localization/en";
import styles from "./page.module.css";
import { Client, QueryClientProvider } from "./services/serviceClient";

export default function Home() {
  return (
    <QueryClientProvider client={Client}>
      <div className={styles.page}>
        <main className={styles.main}>
          <h1>{Translate.TITLE}</h1>

          <PreBattleSetup />
        </main>
      </div>
    </QueryClientProvider>
  );
}
