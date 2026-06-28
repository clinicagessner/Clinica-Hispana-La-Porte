"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ctaButton } from "@/lib/button-styles";
import { cn } from "@/lib/utils";
import {
  PromotionDialog,
  type PromotionContact,
  type PromotionDetail,
  type PromotionDialogLabels,
} from "@/components/sections/promotion-dialog";

export type PromotionGridItem = PromotionDetail;

interface Labels extends PromotionDialogLabels {
  viewDetails: string;
}

export function PromotionsGrid({
  items,
  labels,
  contact,
  formHref = "#lead-form",
}: {
  items: PromotionGridItem[];
  labels: Labels;
  contact: PromotionContact;
  formHref?: string;
}) {
  const [open, setOpen] = useState<number | null>(null);

  // Deep-link: si se llega con /promociones#<slug> abre ese dialog. El hash se
  // limpia de inmediato (síncrono) antes de abrir, para que cerrar no reabra.
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const idx = items.findIndex((it) => it.slug === hash);
    if (idx < 0) return;
    window.history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search,
    );
    // eslint-disable-next-line react-hooks/set-state-in-effect -- abrir el dialog desde el deep-link al montar
    setOpen(idx);
  }, [items]);

  return (
    <>
      {/* Grid de cards compactas (flex centrado: la última fila incompleta
          queda centrada en vez de pegada a la izquierda) */}
      <div className="flex flex-wrap justify-center gap-6">
        {items.map((item, i) => (
          <article
            key={item.slug}
            className="group flex w-full flex-col overflow-hidden rounded-2xl border border-blue-light bg-white shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-primary/10 sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"
          >
            <div className="relative aspect-4/5 w-full overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-heading text-lg font-bold leading-tight text-slate-dark">
                {item.title}
              </h3>
              {item.price && (
                <p className="mt-1 flex items-baseline gap-1.5">
                  <span className="text-xs font-medium text-slate-muted">
                    {labels.priceLabel}
                  </span>
                  <span className="font-heading text-2xl font-extrabold text-blue-primary">
                    {item.price}
                  </span>
                </p>
              )}
              <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-slate-muted">
                {item.blurb}
              </p>
              <button
                type="button"
                onClick={() => setOpen(i)}
                className={cn(
                  ctaButton({ variant: "outline", size: "sm" }),
                  "mt-4 w-full",
                )}
              >
                {labels.viewDetails}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Modal con el detalle + CTAs */}
      <PromotionDialog
        promo={open === null ? null : items[open]}
        labels={labels}
        contact={contact}
        formHref={formHref}
        onClose={() => setOpen(null)}
      />
    </>
  );
}
