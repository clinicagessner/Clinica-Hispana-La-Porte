import { ArrowRight, Check, Flower2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/animations/reveal";
import { ctaButton } from "@/lib/button-styles";
import { cn } from "@/lib/utils";

export function Gynecology() {
  const t = useTranslations("Gynecology");
  const points = [t("point1"), t("point2"), t("point3")];

  return (
    <section className="bg-gradient-to-b from-sky-bg to-cloud py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Tarjeta oscura flotante: sin línea ni degradado, fondo claro continuo */}
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-deep via-blue-dark to-blue-deep px-6 py-12 text-sky-bg shadow-2xl shadow-blue-deep/20 sm:px-10 lg:px-14 lg:py-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-primary/30 blur-3xl"
            />
            <Flower2
              aria-hidden
              className="pointer-events-none absolute -bottom-8 -left-6 h-44 w-44 text-white/[0.05]"
            />

            <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-light">
                  {t("eyebrow")}
                </p>
                <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                  {t("title")}
                </h2>
                <p className="mt-5 max-w-lg text-lg leading-relaxed text-sky-bg/80">
                  {t("body")}
                </p>
                <Link
                  href="/services/ginecologia"
                  className={cn(
                    ctaButton({ variant: "gold", size: "lg" }),
                    "mt-8",
                  )}
                >
                  {t("cta")}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-accent text-white">
                  <Flower2 className="h-8 w-8" />
                </div>
                <ul className="mt-6 space-y-4">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-soft text-blue-deep">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-base text-sky-bg/90">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
