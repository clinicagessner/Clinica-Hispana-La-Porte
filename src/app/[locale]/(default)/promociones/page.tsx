import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft, Phone } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/animations/reveal";
import { StarRating } from "@/components/shared/star-rating";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { ContactForm } from "@/components/forms/contact-form";
import {
  PromotionsGrid,
  type PromotionGridItem,
} from "@/components/sections/promotions-grid";
import { JsonLdBreadcrumb, JsonLdFaqPage } from "@/components/seo/json-ld";
import { CONTACT_INFO, PROMOTIONS } from "@/lib/constants";
import { getServiceCardData } from "@/lib/services";
import { getGooglePlaceData } from "@/lib/google-places";
import { getPromotionsLandingContent } from "@/lib/promotions-landing";
import { absoluteUrl, buildAlternates } from "@/lib/seo";
import { ctaButton } from "@/lib/button-styles";
import { cn } from "@/lib/utils";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/types";

const PATH = "/promociones";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const c = getPromotionsLandingContent(locale as Locale);
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: buildAlternates(PATH, locale as Locale),
  };
}

export default async function PromocionesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const loc = locale as Locale;
  const isEn = loc === "en";
  const c = getPromotionsLandingContent(loc);

  const [tHero, place] = await Promise.all([
    getTranslations("Hero"),
    getGooglePlaceData(),
  ]);

  const services = getServiceCardData(loc).map((s) => ({
    value: s.slug,
    label: s.title,
  }));

  const promoItems: PromotionGridItem[] = PROMOTIONS.map((promo) => ({
    slug: promo.slug,
    src: `/images/promotions/${promo.slug}.webp`,
    alt: isEn ? promo.altEn : promo.alt,
    title: isEn ? promo.titleEn : promo.title,
    price: promo.price,
    blurb: isEn ? promo.blurbEn : promo.blurb,
    includes: isEn ? promo.includesEn : promo.includes,
  }));

  return (
    <>
      <JsonLdBreadcrumb
        items={[
          { name: "Home", url: absoluteUrl("/", loc) },
          { name: c.eyebrow, url: absoluteUrl(PATH, loc) },
        ]}
      />
      <JsonLdFaqPage faqs={c.faqs} />

      {/* Encabezado compacto */}
      <section className="bg-linear-to-br from-blue-deep via-blue-dark to-blue-primary py-14 text-sky-bg lg:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-bg/70 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            {c.backToHome}
          </Link>
          <Reveal className="mt-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal-light">
              {c.eyebrow}
            </span>
            <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl">
              {c.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-sky-bg/85">
              {c.subtitle}
            </p>
            <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5">
              <StarRating rating={place.averageRating} starClassName="h-4 w-4" />
              <span className="text-sm font-semibold text-white">
                {tHero("reviewsBadge", { count: place.totalReviews })}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Promociones: grid de cards compactas + dialog con el detalle y CTAs */}
      <section className="bg-sky-alt py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <PromotionsGrid
            items={promoItems}
            labels={{
              limitedTime: c.limitedTime,
              priceLabel: c.priceLabel,
              includesLabel: c.includesLabel,
              viewDetails: c.viewDetails,
              ctaCall: c.ctaCall,
              ctaDirections: c.ctaDirections,
              ctaForm: c.ctaForm,
              close: c.close,
            }}
            contact={{
              phone: CONTACT_INFO.phone,
              phoneDisplay: CONTACT_INFO.phoneDisplay,
              mapsUrl: CONTACT_INFO.googleMapsUrl,
            }}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sky-bg py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-center font-heading text-3xl font-extrabold tracking-tight text-slate-dark">
            {c.faqTitle}
          </h2>
          <div className="mt-8 rounded-2xl border border-blue-light bg-white px-6 py-2">
            <FaqAccordion items={c.faqs} />
          </div>
        </div>
      </section>

      {/* Lead form */}
      {/* TODO(ads): disparar gtag('event','conversion',{send_to:'AW-XXXX/LABEL'})
          al enviar el formulario y/o en el clic a Llamar cuando tengamos el
          conversion label de Google Ads. */}
      <section
        id="lead-form"
        className="scroll-mt-24 bg-linear-to-br from-blue-deep via-blue-dark to-blue-deep py-16 text-sky-bg lg:py-20"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
              {c.finalTitle}
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-sky-bg/85">
              {c.finalBody}
            </p>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className={cn(ctaButton({ variant: "gold", size: "lg" }), "mt-7")}
            >
              <Phone className="h-5 w-5" />
              {CONTACT_INFO.phoneFormatted}
            </a>
          </div>
          <ContactForm services={services} />
        </div>
      </section>
    </>
  );
}
