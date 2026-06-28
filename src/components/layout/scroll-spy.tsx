"use client";

import { useEffect } from "react";

/**
 * Scroll-spy: actualiza el hash de la URL (#sección) según la sección visible
 * al hacer scroll, usando IntersectionObserver. Usa replaceState para no
 * ensuciar el historial ni provocar saltos de scroll. El primer id se trata
 * como "inicio": al estar arriba del todo, limpia el hash.
 */
export function ScrollSpy({ ids }: { ids: string[] }) {
  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const topId = ids[0];
    let activeId = "";

    const setHash = (id: string) => {
      if (id === activeId) return;
      activeId = id;
      const base = window.location.pathname + window.location.search;
      window.history.replaceState(null, "", id === topId ? base : `${base}#${id}`);
    };

    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        // La sección activa es la visible que esté más arriba en el documento.
        const current = ids.find((id) => visible.has(id));
        if (current) setHash(current);
      },
      // Banda activa = franja central (~10%) del viewport.
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [ids]);

  return null;
}
