import { notFound } from "next/navigation";
import { baeckereien, firmenLogo } from "@/lib/data/baeckereien";
import Slideshow from "@/components/slideshow";
import MotivationSlide from "@/components/slides/motivation-slide";
import ProduktPromotionSlide from "@/components/slides/produkt-promotion-slide";
import AnkuendigungenSlide from "@/components/slides/ankuendigungen-slide";
import UebersichtSlide from "@/components/slides/uebersicht-slide";

export function generateStaticParams() {
  return Object.keys(baeckereien).map((slug) => ({ baeckerei: slug }));
}

export default async function BaeckereiPage({
  params,
  searchParams,
}: {
  params: Promise<{ baeckerei: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { baeckerei: slug } = await params;
  const query = await searchParams;
  const decoded = decodeURIComponent(slug);
  const daten = baeckereien[decoded];

  if (!daten) {
    notFound();
  }

  const farbe =
    typeof query.farbe === "string" ? query.farbe : daten.hintergrundFarbe;

  const logos = {
    firmenLogo,
    baeckereiLogo: daten.logo,
    baeckereiName: daten.name,
    hintergrundFarbe: farbe,
  };

  return (
    <Slideshow richtung="horizontal">
      <MotivationSlide data={daten.motivation} {...logos} />
      <ProduktPromotionSlide data={daten.produktPromotion} {...logos} />
      <AnkuendigungenSlide data={daten.ankuendigungen} {...logos} />
      <UebersichtSlide
        baeckereiSlug={slug}
        motivation={daten.motivation}
        produktPromotion={daten.produktPromotion}
        ankuendigungen={daten.ankuendigungen}
        {...logos}
      />
    </Slideshow>
  );
}
