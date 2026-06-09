import Image from "next/image";
import { Check, Clock, Navigation, Phone, ShieldCheck, Star } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { CONTACT_INFO } from "@/lib/constants";
import { getGooglePlaceData } from "@/lib/google-places";

export async function Hero() {
  const t = await getTranslations("Hero");
  const tc = await getTranslations("Common");
  const place = await getGooglePlaceData();

  return (
    <section className="relative isolate flex min-h-[620px] items-center justify-center overflow-hidden sm:min-h-[92vh]">
      {/* Foto de fondo a pantalla completa */}
      <Image
        src="/images/hero-bg.webp"
        alt="Equipo de Clínica Hispana Nueva Salud La Porte recibiendo a una familia hispana en la clínica"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-center"
      />
      {/* Oscurecido general para contraste del texto centrado */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-blue-deep/55" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(110%_80%_at_50%_40%,transparent_35%,rgba(11,42,74,0.6)_100%)]"
      />
      {/* Degradado inferior: la imagen se funde con la siguiente sección */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-44 bg-linear-to-b from-transparent to-cloud"
      />

      {/* Píldora flotante: rating (arriba, oculta en móvil) */}
      <div className="absolute right-5 top-5 hidden items-center gap-2.5 rounded-2xl border border-white/20 bg-white/10 px-4 py-2.5 backdrop-blur-md sm:flex lg:right-8 lg:top-8">
        <span className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-teal-light text-teal-light" />
          ))}
        </span>
        <span className="text-sm font-semibold text-white">
          {place.averageRating.toFixed(1)}
          <span className="ml-1 font-normal text-sky-bg/75">
            ({tc("ratingSummary", { count: place.totalReviews })})
          </span>
        </span>
      </div>

      {/* Contenido centrado */}
      <div className="relative mx-auto w-full max-w-3xl px-5 py-24 text-center sm:px-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-success" />
          {t("openToday")} · {CONTACT_INFO.city}, TX
        </span>

        <h1 className="mt-6 font-heading text-[2.7rem] font-extrabold leading-none tracking-tight text-white drop-shadow-sm sm:text-7xl">
          <span className="block">{t("titleLead")}</span>
          <span className="relative mt-1 inline-block">
            <span className="bg-linear-to-r from-teal-light via-white to-teal-light bg-clip-text text-transparent">
              {t("titleHighlight")}
            </span>
            <svg
              aria-hidden
              viewBox="0 0 200 12"
              preserveAspectRatio="none"
              className="absolute -bottom-2 left-0 h-3 w-full text-red-accent"
            >
              <path
                d="M2 8c40-6 156-6 196 0"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="mt-4 block text-lg font-semibold text-sky-bg/90 sm:text-3xl">
            {t("titleTail")}
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-sky-bg/90 sm:text-lg">
          {t("subtitle")}
        </p>

        {/* Botones premium */}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            aria-label={`${t("ctaCall")} ${CONTACT_INFO.phoneFormatted}`}
            className="group inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-full bg-red-accent px-7 font-heading text-base font-semibold text-white shadow-xl shadow-red-accent/30 ring-1 ring-white/10 transition-all duration-200 hover:bg-red-dark hover:shadow-2xl hover:shadow-red-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto"
          >
            <Phone className="h-5 w-5 shrink-0 transition-transform group-hover:scale-110" />
            <span className="whitespace-nowrap">
              {t("callShort")} · {CONTACT_INFO.phoneDisplay}
            </span>
          </a>
          <a
            href={CONTACT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 font-heading text-base font-semibold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto"
          >
            <Navigation className="h-5 w-5 shrink-0" />
            {t("ctaDirections")}
          </a>
        </div>

        {/* Trust en línea */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm font-medium text-white/90">
          <span className="inline-flex items-center gap-1.5">
            <Check className="h-4 w-4 text-teal-light" />
            {t("trustWalkIn")}
          </span>
          <span className="h-1 w-1 rounded-full bg-white/40" />
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-teal-light" />
            {t("trustInsurance")}
          </span>
          <span className="h-1 w-1 rounded-full bg-white/40" />
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-teal-light" />
            {t("hoursLine")}
          </span>
        </div>
      </div>
    </section>
  );
}
