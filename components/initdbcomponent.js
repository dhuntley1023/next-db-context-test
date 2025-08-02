'use server'

import { initDb } from "@/lib/db";
import AccountSummary from "./accountsummary";

export default async function InitDbComponent({ children }) {
  return (
    <div>
        DB Initialization Attempted: <br/> {await initDb()}
        <br/><br/>
        { children }
    </div>
  )
}