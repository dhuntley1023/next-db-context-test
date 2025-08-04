'use server'
import { Account } from "@/lib/db";

export default async function AccountSummary({id}) {
  const account = await Account.findByPk(id);
  
  const message = account ?
              `Success: Account ${id} is ${account.Name}`
              : `Failed: Account ${id} doesn't exist`;
  
  return (
    <div>Account Fetch Attempted
      <br/>{message}
    </div>
  )
}