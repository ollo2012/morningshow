import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { baeckereien, firmenLogo } from "@/lib/data/baeckereien";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function generateStaticParams() {
  return Object.keys(baeckereien).flatMap((baeckerei) => {
    const daten = baeckereien[baeckerei];
    return daten.produktPromotion.produkte.map((_, i) => ({
      baeckerei,
      index: String(i),
    }));
  });
}

export default async function ProduktDetailPage({
  params,
}: {
  params: Promise<{ baeckerei: string; index: string }>;
}) {
  const { baeckerei: baeckereiSlug, index } = await params;
  const decoded = decodeURIComponent(baeckereiSlug);
  const daten = baeckereien[decoded];

  if (!daten) notFound();

  const produkt = daten.produktPromotion.produkte[Number(index)];
  if (!produkt) notFound();

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-3 sm:px-6">
          <Link
            href={`/${baeckereiSlug}#uebersicht`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Übersicht
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-muted-foreground">
              {daten.name}
            </span>
            <Image
              src={daten.logo}
              alt={`${daten.name} Logo`}
              width={32}
              height={32}
              className="h-8 w-auto object-contain"
            />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="mb-2 flex items-center gap-3">
          <Image
            src={firmenLogo}
            alt="Firmenlogo"
            width={40}
            height={40}
            className="h-8 w-auto object-contain"
          />
          <span className="text-sm text-muted-foreground">
            {daten.produktPromotion.titel}
          </span>
        </div>

        <div className="mb-8 flex items-start justify-between gap-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {produkt.name}
          </h1>
          {produkt.neu && <Badge className="mt-1.5 shrink-0">NEU</Badge>}
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base text-muted-foreground">Beschreibung</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base leading-relaxed">{produkt.beschreibung}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base text-muted-foreground">Preis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{produkt.preis}</p>
            </CardContent>
          </Card>

          {produkt.bild && (
            <Card>
              <CardContent className="pt-6">
                <Image
                  src={produkt.bild}
                  alt={produkt.name}
                  width={600}
                  height={400}
                  className="w-full rounded-lg object-cover"
                />
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
