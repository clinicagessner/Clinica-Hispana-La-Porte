import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Estrellas que se llenan de forma proporcional al rating (0–5), con
 * soporte para fracciones (p. ej. 4.7 → 94% de relleno). Renderiza dos
 * capas: una base gris y una dorada recortada por ancho. Es un componente
 * de servidor (sin estado); el `rating` suele venir de Google Places.
 */
export function StarRating({
  rating,
  className,
  starClassName = "h-5 w-5",
}: {
  rating: number;
  className?: string;
  starClassName?: string;
}) {
  const pct = Math.max(0, Math.min(100, (rating / 5) * 100));
  const row = (filled: boolean) =>
    Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        aria-hidden="true"
        className={cn(
          "shrink-0",
          starClassName,
          filled
            ? "fill-teal text-teal"
            : "text-slate-light",
        )}
      />
    ));

  return (
    <div
      className={cn("relative inline-flex w-max", className)}
      role="img"
      aria-label={`${rating.toFixed(1)} de 5 estrellas`}
    >
      <div className="flex gap-0.5">{row(false)}</div>
      <div
        className="absolute inset-y-0 left-0 flex w-max gap-0.5 overflow-hidden"
        style={{ width: `${pct}%` }}
      >
        {row(true)}
      </div>
    </div>
  );
}
