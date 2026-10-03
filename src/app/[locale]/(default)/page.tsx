import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { JsonLdMedicalClinic } from "@/components/seo/json-ld";
import { Hero } from "@/components/sections/hero";
import { Promotions } from "@/components/sections/promotions";
import { Services } from "@/components/sections/services";
import { Gynecology } from "@/components/sections/gynecology";
import { MensHealth } from "@/components/sections/mens-health";
import { Testimonials } from "@/components/sections/testimonials";
import { BlogPreview } from "@/components/sections/blog-preview";
import { About } from "@/components/sections/about";
import { Faq } from "@/components/sections/faq";
import { Location } from "@/components/sections/location";
import { Contact } from "@/components/sections/contact";
import { ScrollSpy } from "@/components/layout/scroll-spy";
import { SITE_CONFIG } from "@/lib/constants";
import { buildAlternates, buildSocial } from "@/lib/seo";
import type { Locale } from "@/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  const title = isEn
    ? "Hispanic Clinic in La Porte, TX | Walk-Ins, No Insurance"
    : "Clínica Hispana en La Porte, TX | Sin Cita y Sin Seguro";
  // Meta de la home (landing de Ads): ≤155 caracteres. SITE_CONFIG.description
  // sigue siendo la descripción larga del schema, llms y manifest.
  const description = isEn
    ? "Hispanic clinic in La Porte, TX: care in Spanish, walk-ins welcome, no insurance needed. Family medicine, lab, gynecology, DOT and immigration exams."
    : "Clínica hispana en La Porte, TX: atención en español, sin cita y sin seguro. Medicina familiar, laboratorio, ginecología, examen DOT e inmigración.";
  return {
    title,
    description,
    alternates: buildAlternates("/", locale as Locale),
    ...buildSocial({ title, description, path: "/", locale: locale as Locale }),
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return (
    <>
      <JsonLdMedicalClinic locale={locale as Locale} />
      <Hero />
      <Promotions />
      <Services />
      <Gynecology />
      <MensHealth />
      <Testimonials />
      <BlogPreview />
      <About />
      <Faq />
      <Location />
      <Contact />
      <ScrollSpy
        ids={[
          "inicio",
          "promociones",
          "servicios",
          "ginecologia",
          "salud-masculina",
          "testimonios",
          "blog",
          "faq",
          "ubicacion",
          "contacto",
        ]}
      />
    </>
  );
}
