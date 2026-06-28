"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Check, Navigation, PenLine, Phone, X } from "lucide-react";
import { ctaButton } from "@/lib/button-styles";
import { cn } from "@/lib/utils";

export interface PromotionDetail {
  slug: string;
  src: string;
  alt: string;
  title: string;
  price: string | null;
  blurb: string;
  includes: string[];
}

export interface PromotionDialogLabels {
  limitedTime: string;
  priceLabel: string;
  includesLabel: string;
  ctaCall: string;
  ctaDirections: string;
  ctaForm: string;
  close: string;
}

export interface PromotionContact {
  phone: string;
  phoneDisplay: string;
  mapsUrl: string;
}

/**
 * Modal con el detalle de una promoción (imagen, descripción, qué incluye y
 * CTAs). Reutilizado por el carrusel de la home y el grid de /promociones.
 * No navega: cerrar solo invoca onClose. `promo === null` => no renderiza.
 */
export function PromotionDialog({
  promo,
  labels,
  contact,
  formHref,
  onClose,
}: {
  promo: PromotionDetail | null;
  labels: PromotionDialogLabels;
  contact: PromotionContact;
  formHref: string;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!promo) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [promo, onClose]);

  if (!promo) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-dialog-title"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-blue-deep/90 p-4 backdrop-blur-sm sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[90vh] w-full max-w-md flex-col overflow-y-auto rounded-3xl bg-white shadow-2xl"
      >
        <button
          ref={closeRef}
          type="button"
          aria-label={labels.close}
          onClick={onClose}
          className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-dark shadow-md transition-colors hover:bg-sky-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-primary"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Imagen (flyer completo, sin recorte: la imagen ya es 4:5) */}
        <div className="relative aspect-4/5 w-full shrink-0">
          <Image
            src={promo.src}
            alt={promo.alt}
            fill
            sizes="28rem"
            className="object-cover"
          />
        </div>

        {/* Contenido */}
        <div className="flex flex-col p-6 sm:p-7">
          <h2
            id="promo-dialog-title"
            className="font-heading text-2xl font-extrabold leading-tight tracking-tight text-slate-dark"
          >
            {promo.title}
          </h2>
          {promo.price && (
            <p className="mt-2 flex items-baseline gap-2">
              <span className="text-sm font-medium text-slate-muted">
                {labels.priceLabel}
              </span>
              <span className="font-heading text-4xl font-extrabold text-blue-primary">
                {promo.price}
              </span>
            </p>
          )}
          <p className="mt-3 text-sm leading-relaxed text-slate-primary">
            {promo.blurb}
          </p>

          <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-teal-deep">
            {labels.includesLabel}
          </p>
          <ul className="mt-3 space-y-2">
            {promo.includes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm font-medium text-slate-primary"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-light text-blue-dark">
                  <Check className="h-3 w-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* CTAs contextuales a esta promoción */}
          <div className="mt-6 flex flex-col gap-2.5">
            <a
              href={`tel:${contact.phone}`}
              aria-label={`${labels.ctaCall} ${contact.phoneDisplay} — ${promo.title}`}
              className={cn(ctaButton({ variant: "gold", size: "md" }))}
            >
              <Phone className="h-5 w-5" />
              {labels.ctaCall} · {contact.phoneDisplay}
            </a>
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(ctaButton({ variant: "outline", size: "md" }))}
              >
                <Navigation className="h-5 w-5" />
                {labels.ctaDirections}
              </a>
              <a
                href={formHref}
                onClick={onClose}
                className={cn(
                  ctaButton({ variant: "ghost", size: "md" }),
                  "border border-blue-primary/70",
                )}
              >
                <PenLine className="h-5 w-5" />
                {labels.ctaForm}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
