import { cn } from "@/lib/utils";

/**
 * Marca de Clínica Hispana Nueva Salud La Porte.
 * Placeholder: insignia SVG (corazón azul + cruz roja, derivado del logo real)
 * + wordmark. El cliente entregará el logo definitivo más adelante.
 * variant="light" para fondos oscuros (navy).
 */
export function Logo({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "light";
}) {
  const isLight = variant === "light";
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden
        className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-primary shadow-sm"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
          {/* corazón (azul claro sobre la insignia) */}
          <path
            d="M12 20.5C12 20.5 3.5 15.5 3.5 9.4 3.5 6.6 5.7 4.5 8.4 4.5c1.6 0 3 .8 3.6 2 .6-1.2 2-2 3.6-2 2.7 0 4.9 2.1 4.9 4.9 0 6.1-8.5 11.1-8.5 11.1Z"
            fill="#ffffff"
            opacity="0.95"
          />
          {/* cruz médica roja */}
          <path
            d="M11 7.6h2v2.4h2.4v2H13v2.4h-2V12H8.6v-2H11V7.6Z"
            fill="var(--red-accent)"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-[0.6rem] font-semibold uppercase tracking-[0.24em]",
            isLight ? "text-sky-alt" : "text-red-accent",
          )}
        >
          Clínica Hispana
        </span>
        <span
          className={cn(
            "font-heading text-lg font-extrabold tracking-tight",
            isLight ? "text-white" : "text-blue-dark",
          )}
        >
          Nueva Salud
        </span>
        <span
          className={cn(
            "font-heading text-[0.6rem] font-medium uppercase tracking-[0.2em]",
            isLight ? "text-sky-alt/80" : "text-teal-deep",
          )}
        >
          La Porte
        </span>
      </span>
    </span>
  );
}
