"use client";

import { useState } from "react";
import Link from "next/link";
import { baeckereien } from "@/lib/data/baeckereien";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function Home() {
  const [farben, setFarben] = useState<Record<string, string>>(() =>
    Object.fromEntries(
      Object.entries(baeckereien).map(([slug, daten]) => [
        slug,
        daten.hintergrundFarbe,
      ])
    )
  );

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">Morningshow</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Wähle deine Bäckerei
        </p>
      </div>
      <div className="grid w-full max-w-md gap-4">
        {Object.entries(baeckereien).map(([slug, daten]) => (
          <Card key={slug} className="transition-colors hover:bg-muted/50">
            <Link href={`/${slug}?farbe=${encodeURIComponent(farben[slug])}`}>
              <CardHeader>
                <CardTitle>{daten.name}</CardTitle>
                <CardDescription>Zum Morgenbriefing →</CardDescription>
              </CardHeader>
            </Link>
            <CardContent>
              <label className="flex items-center gap-3 text-sm">
                <span className="text-muted-foreground">Hintergrundfarbe</span>
                <input
                  type="color"
                  value={farben[slug]}
                  onChange={(e) =>
                    setFarben((prev) => ({ ...prev, [slug]: e.target.value }))
                  }
                  className="h-8 w-12 cursor-pointer rounded border border-border"
                />
                <span className="font-mono text-xs text-muted-foreground">
                  {farben[slug]}
                </span>
              </label>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
