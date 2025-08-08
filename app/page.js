import styles from "./page.module.css";
import InitDbComponent from "@/components/initdbcomponent";
//import AccountSummary from "@/components/accountsummary";
//import DelayedDisplay from "@/components/delayeddisplay";
//import { initDb } from "@/lib/db";
//import RedirectToHome from "@/components/redirecttohome";

export default function Root() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <InitDbComponent />
      </main>
    </div>
  );
}
