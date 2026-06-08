import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ServiceIcon } from "@/components/shared/service-icon";
import { cn } from "@/lib/utils";
import type { ServiceCardData } from "@/types";

export function ServiceCard({
  service,
  className,
}: {
  service: ServiceCardData;
  className?: string;
}) {
  const t = useTranslations("Common");

  // Variante con foto de fondo + degradado verde + texto abajo.
  if (service.image) {
    return (
      <Link
        href={`/services/${service.slug}`}
        className={cn(
          "group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl border border-blue-light shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-primary/10",
          className,
        )}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-blue-deep via-blue-deep/75 to-blue-deep/10"
        />

        <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur">
          <ServiceIcon name={service.icon} />
        </span>

        <div className="relative p-6 text-white">
          <span className="text-xs font-semibold uppercase tracking-widest text-teal-light">
            {service.categoryLabel}
          </span>
          <h3 className="mt-1.5 font-heading text-lg font-bold leading-snug">
            {service.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-sky-bg/85">
            {service.shortDescription}
          </p>
          <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-light">
            {t("learnMore")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    );
  }

  // Variante con icono (fallback mientras no haya foto).
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-blue-light bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue-primary/40 hover:shadow-lg hover:shadow-blue-primary/5",
        className,
      )}
    >
      <span className="absolute right-0 top-0 h-12 w-12 rounded-bl-3xl bg-gradient-to-br from-teal/20 to-transparent transition-colors group-hover:from-teal/40" />

      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-bg text-blue-primary transition-colors group-hover:bg-blue-primary group-hover:text-white">
        <ServiceIcon name={service.icon} />
      </span>

      <span className="mt-4 text-xs font-semibold uppercase tracking-widest text-teal-deep">
        {service.categoryLabel}
      </span>
      <h3 className="mt-1.5 font-heading text-lg font-bold leading-snug text-slate-dark">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-muted">
        {service.shortDescription}
      </p>

      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-primary">
        {t("learnMore")}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
