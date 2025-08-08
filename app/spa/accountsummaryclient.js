'use client'
import { getAccount } from "@/actions/dbinit";
import { useEffect, useState } from 'react';

export default function AccountSummaryClient({id}) {
  const [account, setAccount] = useState(null);
  const [loadingState, setLoadingState ] = useState('loading');

  console.log(`AccountSummaryClient(id=${id})`);
  useEffect(
    () => {
      async function doitall(id) {
        const output = await getAccount(id);
        console.log(`async call ${JSON.stringify(output)}`);
        //setAccount(JSON.parse(output));
        setAccount(output);
        setLoadingState(output ? 'loaded' : 'notfound')
      };
      doitall(id);
    },
  []);


  let message = 'Loading...';
  if (loadingState == 'loaded') {
    message = `Success: Account ${id} is ${account.Name}`;
  } else if (loadingState == 'notfound') {
    message = `Failed: Account ${id} doesn't exist`;
  } 
  
  return (
    <div>
      Account Fetch Attempted [Client]
      <br/>{message}
    </div>
  )
}