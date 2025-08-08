import AccountSummaryClient from "@/app/spa/accountsummaryclient";

export default function AccountListClient({idList}) {
  console.log(`accountClientList(): ${JSON.stringify(idList)}`)
 return (
  <div>
    <br/>
    <h1>Account List</h1>
    {idList.map((element, index) => { return <div key={index}><AccountSummaryClient id={element} /> <br/></div> })}
  </div>
 ); 
}