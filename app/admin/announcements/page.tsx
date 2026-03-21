"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import LogoutButton from "@/app/components/LogoutButton";

interface Announcement {
  id: string;
  title: string;
  text: string;
  date: string;
  author: string;
}

export default function AnnouncementsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  // Redirect if not logged in
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
    fetchAnnouncements();
  }, [status, router]);

  const fetchAnnouncements = async () => {
    const res = await fetch("/api/announcements");
    if (res.ok) {
      const data = await res.json();
      setAnnouncements(data);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/announcements", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        text,
        date: new Date().toLocaleDateString(),
      }),
    });

    if (res.ok) {
      setTitle("");
      setText("");
      fetchAnnouncements(); // Refresh the list
    }
    setLoading(false);
  };

  if (status === "loading") return <div className="p-8">Loading...</div>;
  if (!session) return null;

  return (
    <div className="flex-1 bg-zinc-50 dark:bg-black p-8">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">Announcements</h1>
          <p className="text-zinc-600 dark:text-zinc-400">Welcome back, {session.user?.name}</p>
          <LogoutButton />
        </header>

        {/* Form to add new announcements */}
        <section className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">Post New Announcement</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Title"
              required
              className="w-full p-2 rounded border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Announcement text..."
              required
              rows={4}
              className="w-full p-2 rounded border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-black dark:bg-zinc-50 dark:text-black text-white rounded-full hover:opacity-80 transition-opacity disabled:opacity-50"
            >
              {loading ? "Posting..." : "Post Announcement"}
            </button>
          </form>
        </section>

        {/* List of existing announcements */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">Recent Updates</h2>
          {announcements.length === 0 ? (
            <p className="text-zinc-500">No announcements yet.</p>
          ) : (
            announcements.slice().reverse().map((item) => (
              <div key={item.id} className="p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">{item.title}</h3>
                  <span className="text-sm text-zinc-500">{item.date}</span>
                </div>
                <p className="text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap">{item.text}</p>
                <div className="mt-4 text-xs text-zinc-400">Posted by {item.author}</div>
              </div>
            ))
          )}
        </section>
      </div>
    </div>
  );
}