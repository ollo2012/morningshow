import { notFound } from "next/navigation";
import { baeckereien } from "@/lib/data/baeckereien";
import Slideshow from "@/components/slideshow";
import MotivationSlide from "@/components/slides/motivation-slide";
import ProduktPromotionSlide from "@/components/slides/produkt-promotion-slide";
import AnkuendigungenSlide from "@/components/slides/ankuendigungen-slide";

export function generateStaticParams() {
  return Object.keys(baeckereien).map((slug) => ({ baeckerei: slug }));
}

export default async function BaeckereiPage({
  params,
}: {
  params: Promise<{ baeckerei: string }>;
}) {
  const { baeckerei: slug } = await params;
  const decoded = decodeURIComponent(slug);
  const daten = baeckereien[decoded];

  if (!daten) {
    notFound();
  }

  return (
    <Slideshow richtung="horizontal">
      <MotivationSlide data={daten.motivation} />
      <ProduktPromotionSlide data={daten.produktPromotion} />
      <AnkuendigungenSlide data={daten.ankuendigungen} />
    </Slideshow>
  );
}
