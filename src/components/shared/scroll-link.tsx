"use client";

import type { MouseEvent, ReactNode } from "react";
import { Link } from "@/i18n/navigation";

/**
 * Enlace a una sección con scroll suave SIN ensuciar la URL con /#.
 * - Si el destino (#id) existe en la página actual: hace scroll suave y NO
 *   modifica la URL.
 * - Si no existe (navegación entre páginas): deja que el Link navegue normal
 *   (luego HashCleaner limpia el hash al llegar).
 * Para hrefs sin hash funciona como un Link normal.
 */
export function ScrollLink({
  href,
  className,
  children,
  onNavigate,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
}) {
  const hashIndex = href.indexOf("#");
  const id = hashIndex >= 0 ? href.slice(hashIndex + 1) : "";

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    if (id) {
      const el =
        typeof document !== "undefined" ? document.getElementById(id) : null;
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    onNavigate?.();
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
