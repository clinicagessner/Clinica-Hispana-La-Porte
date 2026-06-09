import Image from "next/image";
import { Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Reveal } from "@/components/animations/reveal";
import { CONTACT_INFO } from "@/lib/constants";
import { ctaButton } from "@/lib/button-styles";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types";

export function Location() {
  const t = useTranslations("Location");
  const locale = useLocale() as Locale;
  const en = locale === "en";

  return (
    <section className="bg-linear-to-b from-cloud to-sky-bg py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-deep">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-slate-dark sm:text-4xl">
            {t("title")}
          </h2>
          <div className="mt-4 h-0.5 w-20 rounded-full bg-linear-to-r from-blue-primary to-teal" />
        </Reveal>

        {/* Foto del exterior de la clínica */}
        <Reveal delay={80}>
          <div className="mt-8 overflow-hidden rounded-3xl border-4 border-white shadow-xl shadow-blue-deep/15">
            <Image
              src="/images/clinica-exterior.webp"
              alt={`Fachada de Clínica Hispana Nueva Salud La Porte en ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state}`}
              width={1360}
              height={1020}
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="h-56 w-full object-cover sm:h-72 lg:h-80"
            />
          </div>
        </Reveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          {/* Info */}
          <Reveal className="lg:col-span-5">
            <div className="flex h-full flex-col gap-6 rounded-2xl border border-blue-light bg-white p-7 shadow-sm">
              <InfoRow icon={<MapPin className="h-5 w-5" />} label={t("addressLabel")}>
                {CONTACT_INFO.address}
                <br />
                {CONTACT_INFO.city}, {CONTACT_INFO.state} {CONTACT_INFO.zip}
              </InfoRow>

              <InfoRow icon={<Clock className="h-5 w-5" />} label={t("hoursLabel")}>
                {en
                  ? CONTACT_INFO.hoursWeekday.replace("Lunes a Viernes", "Mon–Fri")
                  : CONTACT_INFO.hoursWeekday}
                <br />
                {en
                  ? CONTACT_INFO.hoursWeekend.replace(
                      "Sábado y Domingo",
                      "Sat–Sun",
                    )
                  : CONTACT_INFO.hoursWeekend}
              </InfoRow>

              <InfoRow icon={<Phone className="h-5 w-5" />} label={t("phoneLabel")}>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="hover:text-blue-dark"
                >
                  {CONTACT_INFO.phoneFormatted}
                </a>
              </InfoRow>

              <InfoRow icon={<Mail className="h-5 w-5" />} label={t("emailLabel")}>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="break-all hover:text-blue-dark"
                >
                  {CONTACT_INFO.email}
                </a>
              </InfoRow>

              <div className="mt-auto flex flex-col gap-3 pt-2 sm:flex-row">
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className={cn(ctaButton({ size: "md" }), "flex-1")}
                >
                  <Phone className="h-4 w-4" />
                  {t("callCta")}
                </a>
                <a
                  href={CONTACT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    ctaButton({ variant: "outline", size: "md" }),
                    "flex-1",
                  )}
                >
                  <Navigation className="h-4 w-4" />
                  {t("directionsCta")}
                </a>
              </div>
            </div>
          </Reveal>

          {/* Mapa (iframe gratis, sin API key) */}
          <Reveal delay={120} className="lg:col-span-7">
            <div className="h-full overflow-hidden rounded-2xl border border-blue-light bg-white shadow-sm">
              <iframe
                src={CONTACT_INFO.googleMapsEmbed}
                title={t("mapTitle")}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-80 w-full"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-bg text-blue-primary">
        {icon}
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-muted">
          {label}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-slate-primary">
          {children}
        </p>
      </div>
    </div>
  );
}
