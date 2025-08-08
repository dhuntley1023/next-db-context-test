'use client'

import { initDb } from "@/actions/dbinit";
//import AccountSummary from "@/components/accountsummary";
//import AccountSummaryClient from "./accountsummaryclient" 
import { useEffect, useState } from "react";
//import { Account } from "@/lib/db";
import AccountListClient from "@/components/accountlist-client";

export default function SPA() {

const [message, setMessage] = useState('Loading...');
  const [ isLoading, setIsLoading] = useState(true);

  useEffect(
    () => { 
      async function doInitDb() { await initDb() }; 
      doInitDb();  // The useEffect function must be regular function.  Move await into new func and call it
      //setMessage(<AccountSummary id='1' />)},
      setIsLoading(false)
    },
    []
  );

  // return <div>{message}</div>;

  
  return (<div>
            {isLoading ?
              <p>Loading...</p> 
              : <AccountListClient idList={[1,2,3,4,5]}/>
            }
            </div>
  );
}