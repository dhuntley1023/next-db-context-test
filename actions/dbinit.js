'use server'

import { Account } from "@/lib/db";

export async function initDb() {
  try {
    await Account.initModel();
    await Account.sync({force: true});
    await Account.create({Id: 1, Name: "Accounts Payable" });
    return "DB initialized"
  } catch (error) {
    return `DB not initialized: ${error.message}`
  }
}

export async function getAccount(id) {
  let output=null;
  
  try {
    console.log(`action getAccount(): id=${id}`)
//  const output= JSON.stringify(await Account.findByPk(id));
    const account= (await Account.findByPk(id, { rejectOnEmpty: false }));
    // if rejectOnEmpty = false, evaluate account null to identify failure
    const output = account? account.toJSON(): null;  
    console.log(`Type = ${typeof output}  Output = ${JSON.stringify(output)}`);
    return output;
  } catch(error) { // if rejectOnEmpty = true, handle failure in catch()
      console.log(`Caught error ${JSON.stringify(error)}`);
    return null;
  }
}