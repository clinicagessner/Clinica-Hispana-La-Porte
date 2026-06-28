import Script from "next/script";

/**
 * CallRail swap.js — intercambia dinámicamente el número de teléfono mostrado
 * por un número de seguimiento para atribución de llamadas. El número oficial
 * de la clínica vive en CONTACT_INFO (NAP en el HTML); CallRail lo reemplaza
 * en el cliente. No-op si falta NEXT_PUBLIC_CALLRAIL_SWAP_URL.
 */
export function CallRail() {
  const swapUrl = process.env.NEXT_PUBLIC_CALLRAIL_SWAP_URL;
  if (!swapUrl) return null;

  return (
    <Script id="callrail-swap" strategy="afterInteractive" src={swapUrl} />
  );
}
