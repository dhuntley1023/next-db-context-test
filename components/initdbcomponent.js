'use server'

import { initDb } from "@/actions/dbinit";
import RedirectToHome from "./redirecttohome";

export default async function InitDbComponent({ children }) {
  const msg = await initDb();
  return (<RedirectToHome auto={true}/>);
  
  //redirect('/home'); <= This causes a scoped context refresh.
}