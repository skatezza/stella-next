import Hero from "@/components/hero";
import Clients from "@/components/clients";
import Features from "@/components/features";
import Features02 from "@/components/features-02";
import Features03 from "@/components/features-03";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import Features04 from "@/components/features-04";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import { getI18n } from "@/locale/server";

export default async function Home() {
  const t = await getI18n();

  return (
    <>
      <Hero />
      <Clients />
      <Features />
      <TestimonialsCarousel />
      <Features02 />
      {/* <Features04 /> */}
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      <Cta />
    </>
  );
}
