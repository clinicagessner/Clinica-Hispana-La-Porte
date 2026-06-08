import { Activity, ArrowRight, HeartPulse, Mars, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/animations/reveal";
import { ctaButton } from "@/lib/button-styles";
import { cn } from "@/lib/utils";

export function MensHealth() {
  const t = useTranslations("MensHealth");
  const conditions = [
    { icon: Mars, label: t("cond1") },
    { icon: Activity, label: t("cond2") },
    { icon: HeartPulse, label: t("cond3") },
    { icon: ShieldCheck, label: t("cond4") },
  ];

  return (
    <section className="bg-gradient-to-b from-cloud to-sky-bg py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-accent">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 max-w-xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-slate-dark sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-primary">
            {t("body")}
          </p>
          <Link
            href="/services/salud-hombre"
            className={cn(ctaButton({ size: "lg" }), "mt-8")}
          >
            {t("cta")}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </Reveal>

        <Reveal delay={150}>
          <div className="grid grid-cols-2 gap-4">
            {conditions.map((c) => (
              <div
                key={c.label}
                className="rounded-2xl border border-blue-light bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-bg text-blue-primary">
                  <c.icon className="h-6 w-6" />
                </span>
                <p className="mt-3 font-heading text-base font-bold text-slate-dark">
                  {c.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
