"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "@/app/admin/components/LogoutButton";

export function AdminNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Announcements", href: "/admin/announcements" },
  ];

  return (
    <nav className="space-y-2">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              isActive
                ? "bg-zinc-100 text-black dark:bg-zinc-900 dark:text-white"
                : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-300"
            }`}
          >
            {item.name}
          </Link>
        );
      })}
      <div className="mt-4">
        <LogoutButton />
      </div>
    </nav>
  );
}