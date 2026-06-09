import { Activity, ArrowRight, HeartPulse, Mars, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/animations/reveal";
import { ctaButton } from "@/lib/button-styles";
import { cn } from "@/lib/utils";

// Gradientes/sombra por tarjeta (clases literales para Tailwind).
const ACCENTS = [
  { grad: "from-blue-primary to-blue-dark", shadow: "shadow-blue-primary/35" },
  { grad: "from-teal to-teal-deep", shadow: "shadow-teal/35" },
  { grad: "from-red-accent to-red-dark", shadow: "shadow-red-accent/35" },
  { grad: "from-blue-medium to-blue-primary", shadow: "shadow-blue-primary/35" },
];

export function MensHealth() {
  const t = useTranslations("MensHealth");
  const conditions = [
    { icon: Mars, label: t("cond1"), desc: t("cond1d") },
    { icon: Activity, label: t("cond2"), desc: t("cond2d") },
    { icon: HeartPulse, label: t("cond3"), desc: t("cond3d") },
    { icon: ShieldCheck, label: t("cond4"), desc: t("cond4d") },
  ];

  return (
    <section className="bg-linear-to-b from-cloud to-sky-bg py-20 lg:py-28">
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
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {conditions.map((c, i) => {
              const a = ACCENTS[i % ACCENTS.length];
              return (
                <div
                  key={c.label}
                  className="group relative overflow-hidden rounded-3xl border border-white bg-linear-to-b from-white to-sky-bg/50 p-6 shadow-md shadow-blue-deep/5 ring-1 ring-blue-light/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-deep/15"
                >
                  {/* número marca de agua */}
                  <span className="pointer-events-none absolute right-4 top-3 font-heading text-4xl font-extrabold text-slate-dark/5">
                    0{i + 1}
                  </span>
                  {/* badge de icono con gradiente */}
                  <span
                    className={cn(
                      "relative grid h-14 w-14 place-items-center rounded-2xl bg-linear-to-br text-white shadow-lg transition-transform duration-300 group-hover:scale-105",
                      a.grad,
                      a.shadow,
                    )}
                  >
                    <c.icon className="h-7 w-7" />
                  </span>
                  <p className="relative mt-5 font-heading text-base font-bold leading-snug text-slate-dark">
                    {c.label}
                  </p>
                  <p className="relative mt-1.5 text-sm leading-relaxed text-slate-muted">
                    {c.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
