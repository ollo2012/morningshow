import Link from "next/link";
import { baeckereien } from "@/lib/data/baeckereien";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function Home() {
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
          <Link key={slug} href={`/${slug}`}>
            <Card className="transition-colors hover:bg-muted/50">
              <CardHeader>
                <CardTitle>{daten.name}</CardTitle>
                <CardDescription>Zum Morgenbriefing →</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
