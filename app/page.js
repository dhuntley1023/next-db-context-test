import styles from "./page.module.css";
import InitDbComponent from "@/components/initdbcomponent";
import AccountSummary from "@/components/accountsummary";
import DelayedDisplay from "@/components/delayeddisplay";
import { initDb } from "@/lib/db";

export default function Root() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <InitDbComponent />
      </main>
    </div>
  );
}
