"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { BadgeCheck, Quote, Star } from "lucide-react";

export interface CarouselTestimonial {
  author: string;
  rating: number;
  text: string;
  relativeTime?: string;
  photoUrl?: string;
}

function initials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0] ?? "")
    .join("")
    .toUpperCase();
}

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  );
}

export function TestimonialsCarousel({
  items,
  verifiedLabel,
}: {
  items: CarouselTestimonial[];
  verifiedLabel: string;
}) {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex touch-pan-y py-2">
        {items.map((item, i) => (
          <div
            key={`${item.author}-${i}`}
            className="min-w-0 shrink-0 grow-0 basis-full px-2.5 sm:basis-1/2 lg:basis-1/3"
          >
            <figure className="group flex h-full flex-col rounded-2xl border border-blue-light bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-primary/30 hover:shadow-xl hover:shadow-blue-primary/5">
              {/* Cabecera: avatar (foto real de Google o iniciales) + nombre */}
              <div className="flex items-center gap-3">
                {item.photoUrl ? (
                  <Image
                    src={item.photoUrl}
                    alt={`Foto de ${item.author}`}
                    width={44}
                    height={44}
                    unoptimized
                    className="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-blue-light"
                  />
                ) : (
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-primary to-blue-dark font-heading text-sm font-bold text-white">
                    {initials(item.author)}
                  </span>
                )}
                <div className="min-w-0 flex-1">
                  <p className="truncate font-heading font-bold text-slate-dark">
                    {item.author}
                  </p>
                  {item.relativeTime && (
                    <p className="text-xs text-slate-muted">
                      {item.relativeTime}
                    </p>
                  )}
                </div>
                <GoogleG className="h-5 w-5 shrink-0" />
              </div>

              {/* Estrellas */}
              <div className="mt-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className={
                      s < item.rating
                        ? "h-4 w-4 fill-teal text-teal"
                        : "h-4 w-4 text-slate-light"
                    }
                  />
                ))}
              </div>

              {/* Texto (recortado a altura uniforme) */}
              <div className="relative mt-3 flex-1">
                <Quote className="absolute -left-1 -top-1 h-6 w-6 text-teal/20" />
                <blockquote className="relative line-clamp-6 pl-5 text-sm leading-relaxed text-slate-primary">
                  {item.text}
                </blockquote>
              </div>

              {/* Verificado */}
              <figcaption className="mt-5 flex items-center gap-1.5 border-t border-blue-light pt-4 text-xs font-medium text-blue-dark">
                <BadgeCheck className="h-4 w-4 text-blue-primary" />
                {verifiedLabel}
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
}
