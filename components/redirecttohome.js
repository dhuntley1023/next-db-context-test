'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function RedirectToHome() {
  // const router = useRouter();

  // useEffect(() => {
  //   router.push('/home');
  // }, []);

  // return null;

  return (
    <div>
      DB Initialized<br />
      <Link href='/home'>Click to continue</Link>
    </div>
  );
}