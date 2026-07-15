"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Navigation, Phone } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";
import { CONTACT_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function FloatingButtons() {
  const t = useTranslations("Floating");
  const tc = useTranslations("Common");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Aparecen cuando el scroll deja atrás el hero (#inicio) y entra la
      // siguiente sección; fallback fijo en páginas sin hero (blog, etc.).
      const hero = document.getElementById("inicio");
      const threshold = hero ? hero.offsetHeight - 80 : 480;
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Aparecen/desaparecen juntos al salir del hero. `invisible` bloquea clics;
  // los hijos son pointer-events-auto.
  const visibility = scrolled
    ? "translate-y-0 opacity-100"
    : "invisible translate-y-3 opacity-0";

  return (
    <>
      {/* Volver arriba — esquina opuesta al grupo de acciones */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label={t("backToTop")}
        className={cn(
          "fixed bottom-5 left-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-blue-light bg-white text-blue-dark shadow-md transition-all duration-300 hover:bg-sky-bg sm:bottom-6 sm:left-6",
          visibility,
        )}
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {/* Grupo de acciones (Maps, Llamar, WhatsApp) — abajo a la derecha */}
      <div
        className={cn(
          "pointer-events-none fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3 transition-all duration-300 sm:bottom-6 sm:right-6",
          visibility,
        )}
      >
        {/* Cómo llegar — círculo en móvil, pastilla con texto en escritorio */}
        <a
          href={CONTACT_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("directions")}
          className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-dark font-heading text-sm font-semibold text-white shadow-lg shadow-blue-primary/25 transition-transform hover:scale-[1.03] sm:h-12 sm:w-auto sm:gap-2 sm:px-5"
        >
          <Navigation className="h-5 w-5 shrink-0" />
          <span className="hidden sm:inline">{t("directions")}</span>
        </a>

        {/* Llamar — círculo en móvil, pastilla con teléfono en escritorio */}
        <a
          href={`tel:${CONTACT_INFO.phone}`}
          aria-label={t("call")}
          className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-accent font-heading text-sm font-semibold text-white shadow-lg shadow-red-accent/30 transition-transform hover:scale-[1.03] sm:h-12 sm:w-auto sm:gap-2 sm:px-5"
        >
          <Phone className="h-5 w-5 shrink-0" />
          <span className="hidden sm:inline">{CONTACT_INFO.phoneDisplay}</span>
        </a>

        {/* WhatsApp — número dedicado solo para chat; sin número visible para
          que CallRail (swap.js) no lo toque y nadie intente llamarlo */}
        <a
          href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(tc("whatsappMessage"))}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={tc("whatsapp")}
          className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp font-heading text-sm font-semibold text-white shadow-lg shadow-whatsapp/30 transition-all hover:scale-[1.03] hover:bg-whatsapp-dark sm:h-12 sm:w-auto sm:gap-2 sm:px-5"
        >
          <WhatsappLogoIcon className="h-5 w-5 shrink-0" weight="fill" />
          <span className="hidden sm:inline">{t("whatsapp")}</span>
        </a>
      </div>
    </>
  );
}
