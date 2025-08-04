'use client'
import { getAccount } from "@/actions/dbinit";
import { useEffect, useState } from 'react';

export default function AccountSummaryClient({id}) {
  const [account, setAccount] = useState(null);
  console.log(`AccountSummaryClient(id=${id})`);
  useEffect(
    () => {
      async function doitall(id) {
        const output = await getAccount(id);
        console.log(`async call ${JSON.stringify(output)}`);
        //setAccount(JSON.parse(output));
        setAccount(output);
      };
      doitall(id);
    },
  []);


  let message = account ?
              `Success: Account ${id} is ${account.Name}`
              : `Failed: Account ${id} doesn't exist`;
  
  return (
    <div>
      <p>Account Fetch Attempted</p>
      <br/><p>{message}</p>
    </div>
  )
}