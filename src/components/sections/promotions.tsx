import { ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/animations/reveal";
import {
  PromotionsCarousel,
  type PromotionItem,
} from "@/components/sections/promotions-carousel";
import { CONTACT_INFO, PROMOTIONS } from "@/lib/constants";
import { ctaButton } from "@/lib/button-styles";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types";

export function Promotions() {
  const t = useTranslations("Promotions");
  const locale = useLocale() as Locale;
  const isEn = locale === "en";

  const items: PromotionItem[] = PROMOTIONS.map((promo) => {
    const title = isEn ? promo.titleEn : promo.title;
    return {
      slug: promo.slug,
      src: `/images/promotions/${promo.slug}.webp`,
      alt: isEn ? promo.altEn : promo.alt,
      title,
      price: promo.price,
      blurb: isEn ? promo.blurbEn : promo.blurb,
      includes: isEn ? promo.includesEn : promo.includes,
      openLabel: t("openAria", { name: title }),
    };
  });

  return (
    <section
      id="promociones"
      className="scroll-mt-24 bg-sky-alt py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Encabezado centrado */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-deep">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-slate-dark sm:text-4xl">
            {t("title")}
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-20 rounded-full bg-linear-to-r from-blue-primary to-teal" />
          <p className="mt-4 text-base leading-relaxed text-slate-primary">
            {t("subtitle")}
          </p>
        </Reveal>

        {/* Carrusel de flyers (abre el detalle en un modal, sin salir de la home) */}
        <div className="mt-12">
          <PromotionsCarousel
            items={items}
            labels={{
              viewDetail: t("viewDetail"),
              prev: t("prev"),
              next: t("next"),
            }}
            dialogLabels={{
              limitedTime: t("limitedTime"),
              priceLabel: t("priceLabel"),
              includesLabel: t("includesLabel"),
              ctaCall: t("ctaCall"),
              ctaDirections: t("ctaDirections"),
              ctaForm: t("ctaForm"),
              close: t("close"),
            }}
            contact={{
              phone: CONTACT_INFO.phone,
              phoneDisplay: CONTACT_INFO.phoneDisplay,
              mapsUrl: CONTACT_INFO.googleMapsUrl,
            }}
            formHref="#contacto"
          />
        </div>

        {/* Pista de deslizar (solo móvil/tablet) */}
        <p className="mt-6 flex items-center justify-center gap-1.5 text-sm font-medium text-slate-muted md:hidden">
          {t("swipeHint")}
          <ArrowRight className="h-4 w-4" />
        </p>

        {/* CTA a la página completa de promociones */}
        <div className="mt-10 flex justify-center">
          <Link href="/promociones" className={cn(ctaButton({ size: "lg" }))}>
            {t("viewAll")}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
