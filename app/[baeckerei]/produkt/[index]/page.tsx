import { notFound } from "next/navigation";
import { baeckereien, firmenLogo } from "@/lib/data/baeckereien";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Slide from "@/components/slide";
import BottomNav from "@/components/bottom-nav";
import Image from "next/image";

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
    <div className="flex h-screen flex-col">
      <Slide
        titel={produkt.name}
        untertitel={daten.produktPromotion.titel}
        firmenLogo={firmenLogo}
        baeckereiLogo={daten.logo}
        baeckereiName={daten.name}
        hintergrundFarbe={daten.hintergrundFarbe}
        className="flex-1"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            {produkt.neu && <Badge>NEU</Badge>}
            <span className="text-3xl font-bold">{produkt.preis}</span>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-base text-muted-foreground">Beschreibung</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base leading-relaxed">{produkt.beschreibung}</p>
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
      </Slide>
      <BottomNav backHref={`/${baeckereiSlug}#uebersicht`} />
    </div>
  );
}
