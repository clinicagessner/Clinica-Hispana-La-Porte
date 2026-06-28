import { Phone } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Reveal } from "@/components/animations/reveal";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { JsonLdFaqPage } from "@/components/seo/json-ld";
import { HOME_FAQS } from "@/lib/home-faqs";
import { CONTACT_INFO } from "@/lib/constants";
import { getLocalizedFaq } from "@/lib/utils";
import { ctaButton } from "@/lib/button-styles";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types";

export function Faq() {
  const t = useTranslations("Faq");
  const locale = useLocale() as Locale;
  const faqs = HOME_FAQS.map((f) => getLocalizedFaq(f, locale));

  return (
    <section
      id="faq"
      className="scroll-mt-24 bg-gradient-to-b from-sky-bg to-cloud py-20 lg:py-28"
    >
      <JsonLdFaqPage faqs={faqs} />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        {/* Encabezado sticky editorial */}
        <Reveal className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-deep">
              {t("eyebrow")}
            </p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-slate-dark sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-primary">
              {t("subtitle")}
            </p>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className={cn(ctaButton({ variant: "outline", size: "md" }), "mt-6")}
            >
              <Phone className="h-4 w-4" />
              {CONTACT_INFO.phoneDisplay}
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-8">
          <div className="rounded-2xl border border-blue-light bg-white px-6 py-2 shadow-sm">
            <FaqAccordion items={faqs} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
