import { useLocale, useTranslations } from "next-intl";
import { Reveal } from "@/components/animations/reveal";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { getLocalizedFaq } from "@/lib/utils";
import { cn } from "@/lib/utils";
import type { Locale, ServiceFaq } from "@/types";

/**
 * Bloque de FAQ reutilizable (centrado), sin JSON-LD.
 * Se usa en las páginas que no tienen un FAQ propio (services, blog, posts,
 * privacidad) con las preguntas de la home: el FAQPage solo va en la home para
 * no repetir el mismo marcado en decenas de URLs.
 */
export function FaqSection({
  items,
  className,
}: {
  items: ServiceFaq[];
  className?: string;
}) {
  const t = useTranslations("Faq");
  const locale = useLocale() as Locale;
  const faqs = items.map((f) => getLocalizedFaq(f, locale));

  if (faqs.length === 0) return null;

  return (
    <section className={cn("bg-cloud py-20 lg:py-24", className)}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-deep">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-slate-dark sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-primary">
            {t("subtitle")}
          </p>
        </Reveal>
        <Reveal delay={120} className="mt-8">
          <div className="rounded-2xl border border-blue-light bg-white px-6 py-2 shadow-sm">
            <FaqAccordion items={faqs} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
