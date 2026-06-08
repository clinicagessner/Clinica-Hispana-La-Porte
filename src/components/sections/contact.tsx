import { Mail, MapPin, Phone } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Reveal } from "@/components/animations/reveal";
import { ContactForm } from "@/components/forms/contact-form";
import { CONTACT_INFO } from "@/lib/constants";
import { getAllServices } from "@/lib/services";
import { getLocalizedService } from "@/lib/utils";
import type { Locale } from "@/types";

export function Contact() {
  const t = useTranslations("Contact");
  const locale = useLocale() as Locale;
  const services = getAllServices().map((s) => {
    const l = getLocalizedService(s, locale);
    return { value: l.slug, label: l.title };
  });

  return (
    <section
      id="contacto"
      className="bg-gradient-to-b from-sky-bg to-blue-deep py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Tarjeta oscura flotante: el fondo de sección funde de mint (arriba)
            a verde profundo (abajo) para enlazar con Ubicación y el footer. */}
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-deep via-blue-dark to-blue-deep px-6 py-12 text-sky-bg shadow-2xl shadow-blue-deep/30 sm:px-10 lg:px-14 lg:py-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-teal/10 blur-3xl"
            />
            <div className="relative grid gap-12 lg:grid-cols-12 lg:items-center">
              {/* Info */}
              <div className="lg:col-span-5">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-light">
                  {t("eyebrow")}
                </p>
                <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                  {t("title")}
                </h2>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-sky-bg/80">
                  {t("subtitle")}
                </p>

                <ul className="mt-8 space-y-4">
                  <li>
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="group flex items-center gap-4"
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-teal-light transition-colors group-hover:bg-white/20">
                        <Phone className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-xs uppercase tracking-widest text-sky-bg/60">
                          {t("orCall")}
                        </span>
                        <span className="font-heading text-lg font-bold text-white">
                          {CONTACT_INFO.phoneFormatted}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-teal-light">
                      <Mail className="h-5 w-5" />
                    </span>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="break-all text-sky-bg/90 hover:text-white"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-teal-light">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <span className="text-sky-bg/90">
                      {CONTACT_INFO.address}, {CONTACT_INFO.city},{" "}
                      {CONTACT_INFO.state} {CONTACT_INFO.zip}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Formulario */}
              <div className="lg:col-span-7">
                <ContactForm services={services} />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
