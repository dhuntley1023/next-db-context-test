import styles from "@/app/page.module.css";
import InitDbComponent from "@/components/initdbcomponent";
import AccountSummary from "@/components/accountsummary";
import DelayedDisplay from "@/components/delayeddisplay";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
          <DelayedDisplay seconds="0">
            <AccountSummary id='1' /><br/>
            <AccountSummary id='2' />
          </DelayedDisplay>
      </main>
    </div>
  );
}
