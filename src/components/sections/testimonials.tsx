import { Star } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { Reveal } from "@/components/animations/reveal";
import {
  TestimonialsCarousel,
  type CarouselTestimonial,
} from "@/components/sections/testimonials-carousel";
import { CONTACT_INFO, FALLBACK_TESTIMONIALS } from "@/lib/constants";
import { getGooglePlaceData } from "@/lib/google-places";
import { ctaButton } from "@/lib/button-styles";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types";

export async function Testimonials() {
  const t = await getTranslations("Testimonials");
  const tc = await getTranslations("Common");
  const locale = (await getLocale()) as Locale;
  const place = await getGooglePlaceData();

  // Reseñas en vivo si existen; si no, testimonios de respaldo localizados.
  const items: CarouselTestimonial[] =
    place.reviews.length >= 3
      ? place.reviews.map((r) => ({
          author: r.author,
          rating: r.rating,
          text: r.text,
          relativeTime: r.relativeTime,
          photoUrl: r.photoUrl,
        }))
      : FALLBACK_TESTIMONIALS.map((r) => ({
          author: r.author,
          rating: r.rating,
          text: locale === "en" ? r.textEn : r.text,
          relativeTime: r.relativeTime,
        }));

  return (
    <section className="bg-gradient-to-b from-sky-bg to-cloud py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-deep">
              {t("eyebrow")}
            </p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-slate-dark sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-primary">
              {t("subtitle")}
            </p>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5 lg:text-right">
            <div className="inline-flex items-center gap-3 rounded-2xl border border-blue-light bg-white px-5 py-3 shadow-sm">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-teal text-teal"
                  />
                ))}
              </div>
              <span className="font-heading text-sm font-bold text-blue-dark">
                {tc("ratingSummary", { count: place.totalReviews })}
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160} className="mt-12">
          <TestimonialsCarousel items={items} verifiedLabel={t("verified")} />
        </Reveal>

        <div className="mt-10 flex justify-center">
          <a
            href={CONTACT_INFO.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(ctaButton({ variant: "outline", size: "md" }))}
          >
            {t("reviewCta")}
          </a>
        </div>
      </div>
    </section>
  );
}
