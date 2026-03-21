import { notFound } from "next/navigation";
import { baeckereien, firmenLogo } from "@/lib/data/baeckereien";

const PRODUKT_BILDER = [
  "/images/produkte/landbrot.svg",
  "/images/produkte/buttercroissant.svg",
  "/images/produkte/dinkel-vollkorn.svg",
  "/images/produkte/blueberry-cheesecake.svg",
  "/images/produkte/espresso-brownie.svg",
  "/images/produkte/sourdough-jazz.svg",
  "/images/produkte/zimt-kardamom.svg",
];
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Slide from "@/components/slide";
import BottomNav from "@/components/bottom-nav";
import { AllergenBadges } from "@/components/allergen-badge";
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

          {produkt.allergene && produkt.allergene.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-base text-muted-foreground">Allergene</CardTitle>
              </CardHeader>
              <CardContent>
                <AllergenBadges allergene={produkt.allergene} />
              </CardContent>
            </Card>
          )}

          {produkt.naehrwerte && (
            <Card>
              <CardHeader>
                <CardTitle className="text-base text-muted-foreground">
                  Nährwerte pro {produkt.naehrwerte.portionsgroesse}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <table className="w-full text-sm">
                  <tbody className="divide-y">
                    {[
                      { label: "Kalorien", value: produkt.naehrwerte.kalorien },
                      { label: "Kohlenhydrate", value: produkt.naehrwerte.kohlenhydrate },
                      { label: "davon Zucker", value: produkt.naehrwerte.davonZucker, indent: true },
                      { label: "Fett", value: produkt.naehrwerte.fett },
                      { label: "davon gesättigt", value: produkt.naehrwerte.davonGesaettigt, indent: true },
                      { label: "Eiweiß", value: produkt.naehrwerte.eiweiss },
                      { label: "Salz", value: produkt.naehrwerte.salz },
                    ].map(({ label, value, indent }) => (
                      <tr key={label}>
                        <td className={`py-1.5 text-muted-foreground ${indent ? "pl-4" : ""}`}>{label}</td>
                        <td className="py-1.5 text-right font-medium">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardContent className="pt-6">
              <Image
                src={PRODUKT_BILDER[Number(index) % PRODUKT_BILDER.length]}
                alt={produkt.name}
                width={600}
                height={400}
                className="w-full rounded-lg object-cover"
              />
            </CardContent>
          </Card>
        </div>
      </Slide>
      <BottomNav backHref={`/${baeckereiSlug}#uebersicht`} />
    </div>
  );
}
