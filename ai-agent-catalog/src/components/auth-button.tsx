"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function AuthButton() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const { data: session, status } = useSession();

  if (!mounted) return null;

  if (status === "loading") return null;

  if (session) {
    return (
      <button
        onClick={() => signOut()}
        className="px-4 py-2 rounded-md bg-secondary hover:bg-secondary/80"
      >
        Sign out
      </button>
    );
  }

  return (
    <button
      onClick={() => signIn("google")}
      className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/80"
    >
      Sign in with Google
    </button>
  );
} 