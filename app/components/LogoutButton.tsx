"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/login" })}
      className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] px-4 py-2 text-sm font-medium transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20"
    >
      Log Out
    </button>
  );
}