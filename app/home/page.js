import styles from "@/app/page.module.css";
//import InitDbComponent from "@/components/initdbcomponent";
//import AccountSummary from "@/components/accountsummary";
//import AccountSummaryClient from "../spa/accountsummaryclient";
import AccountListClient from "@/components/accountlist-client";
import DelayedDisplay from "@/components/delayeddisplay";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
          <DelayedDisplay seconds="0">
            <AccountListClient idList={[1,3,5]} />
          </DelayedDisplay>
      </main>
    </div>
  );
}
