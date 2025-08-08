'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function RedirectToHome({auto}) {
  const router = useRouter();
  // Automatic redirection upon load

  useEffect(() => {
    if (auto) { 
      router.push('/home'); }
  }, []);

  if (auto) {
    return null;
  } else {
    return (
      <div>
        DB Initialized<br />
        <Link href='/home'>Click to continue</Link>
      </div>
    );
  }
}