import { Check, Clock, Navigation, Phone, ShieldCheck, Star } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/animations/reveal";
import { CONTACT_INFO } from "@/lib/constants";
import { getGooglePlaceData } from "@/lib/google-places";
import { ctaButton } from "@/lib/button-styles";
import { cn } from "@/lib/utils";

export async function Hero() {
  const t = await getTranslations("Hero");
  const tc = await getTranslations("Common");
  const place = await getGooglePlaceData();

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-sky-bg via-cloud to-white">
      {/* Blobs orgánicos difusos — estética "fresca", sin fotos */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 -z-10 h-[28rem] w-[28rem] rounded-full bg-teal/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/3 -z-10 h-[26rem] w-[26rem] rounded-full bg-blue-primary/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-1/4 -z-10 h-64 w-64 rounded-full bg-red-accent/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8 lg:pb-28 lg:pt-24">
        {/* Columna de texto */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal-deep shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-red-accent" />
              {t("badge")}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-heading text-[2.6rem] font-extrabold leading-[1.02] tracking-tight text-slate-dark sm:text-5xl lg:text-6xl">
              {t("titleLead")}{" "}
              <span className="relative inline-block text-blue-primary">
                {t("titleHighlight")}
                <span className="absolute -bottom-1.5 left-0 h-1.5 w-full rounded-full bg-gradient-to-r from-blue-primary via-teal to-red-accent" />
              </span>
              <span className="mt-3 block text-xl font-semibold text-slate-muted sm:text-2xl">
                {t("titleTail")}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-primary">
              {t("subtitle")}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className={cn(ctaButton({ variant: "red", size: "lg" }))}
              >
                <Phone className="h-5 w-5" />
                {t("ctaCall")} · {CONTACT_INFO.phoneDisplay}
              </a>
              <a
                href={CONTACT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(ctaButton({ variant: "outline", size: "lg" }))}
              >
                <Navigation className="h-5 w-5" />
                {t("ctaDirections")}
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              <li className="inline-flex items-center gap-2 text-sm font-medium text-slate-primary">
                <Check className="h-4 w-4 text-teal-deep" />
                {t("trustWalkIn")}
              </li>
              <li className="inline-flex items-center gap-2 text-sm font-medium text-slate-primary">
                <Check className="h-4 w-4 text-teal-deep" />
                {t("trustInsurance")}
              </li>
            </ul>
          </Reveal>
        </div>

        {/* Tarjeta flotante navy (sección "oscura" como card sobre fondo claro) */}
        <Reveal delay={200} className="lg:justify-self-end">
          <div className="relative w-full max-w-md">
            {/* halo turquesa detrás de la tarjeta */}
            <div
              aria-hidden
              className="absolute -inset-3 -z-10 rounded-[2.4rem] bg-gradient-to-br from-teal/30 to-blue-primary/20 blur-2xl"
            />
            <div className="rounded-3xl bg-blue-deep p-7 text-sky-bg shadow-2xl shadow-blue-deep/30 ring-1 ring-white/10 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-teal-light">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-success" />
                  {t("openToday")}
                </span>
                <span className="font-heading text-sm font-semibold text-white/70">
                  {CONTACT_INFO.city}, TX
                </span>
              </div>

              <div className="mt-6 flex items-end gap-3">
                <span className="font-heading text-5xl font-extrabold text-white">
                  {place.averageRating.toFixed(1)}
                </span>
                <div className="mb-1.5">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-teal text-teal" />
                    ))}
                  </div>
                  <p className="mt-1 text-sm text-sky-bg/70">
                    {tc("ratingSummary", { count: place.totalReviews })}
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4 border-t border-white/10 pt-6">
                <div className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-teal-light">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-heading font-bold text-white">
                      Lunes a Domingo
                    </p>
                    <p className="text-sm text-sky-bg/70">9:00 AM – 9:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-red-light">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-heading font-bold text-white">
                      {t("trustWalkIn")}
                    </p>
                    <p className="text-sm text-sky-bg/70">{t("trustInsurance")}</p>
                  </div>
                </div>
              </div>

              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className={cn(
                  ctaButton({ variant: "white", size: "md" }),
                  "mt-7 w-full",
                )}
              >
                <Phone className="h-4 w-4" />
                {t("ctaCall")} · {CONTACT_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
