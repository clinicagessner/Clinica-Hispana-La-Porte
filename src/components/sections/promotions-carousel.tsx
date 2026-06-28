"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import {
  PromotionDialog,
  type PromotionContact,
  type PromotionDetail,
  type PromotionDialogLabels,
} from "@/components/sections/promotion-dialog";

export interface PromotionItem extends PromotionDetail {
  openLabel: string;
}

export function PromotionsCarousel({
  items,
  labels,
  dialogLabels,
  contact,
  formHref = "#contacto",
}: {
  items: PromotionItem[];
  labels: {
    viewDetail: string;
    prev: string;
    next: string;
  };
  dialogLabels: PromotionDialogLabels;
  contact: PromotionContact;
  formHref?: string;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ]);
  const [open, setOpen] = useState<number | null>(null);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y py-2">
          {items.map((item, i) => (
            <div
              key={item.slug}
              className="min-w-0 shrink-0 grow-0 basis-[78%] px-2.5 sm:basis-1/2 lg:basis-1/3"
            >
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-label={item.openLabel}
                className="group relative block aspect-4/5 w-full overflow-hidden rounded-2xl border border-blue-light bg-white shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-primary focus-visible:ring-offset-2"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 78vw"
                  className="object-cover"
                />
                {/* Overlay + etiqueta "Ver promoción" al pasar el cursor */}
                <span className="absolute inset-0 flex items-end justify-center bg-linear-to-t from-blue-deep/70 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-blue-dark shadow-sm">
                    {labels.viewDetail}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Flechas de navegación (ocultas en móvil; ahí se desliza) */}
      <button
        type="button"
        onClick={scrollPrev}
        aria-label={labels.prev}
        className="absolute left-0 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blue-light bg-white p-3 text-blue-dark shadow-md transition-colors hover:bg-sky-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-primary md:flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        aria-label={labels.next}
        className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-blue-light bg-white p-3 text-blue-dark shadow-md transition-colors hover:bg-sky-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-primary md:flex"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Modal con el detalle (se abre sobre la home, sin navegar) */}
      <PromotionDialog
        promo={open === null ? null : items[open]}
        labels={dialogLabels}
        contact={contact}
        formHref={formHref}
        onClose={() => setOpen(null)}
      />
    </div>
  );
}
