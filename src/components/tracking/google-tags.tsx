import Script from "next/script";

/**
 * GA4 + Google Ads con un solo gtag.js, cargado con lazyOnload para no
 * competir con el LCP. Antes GA4 venía de @next/third-parties (preload de
 * gtag.js con prioridad alta) y Ads cargaba un segundo gtag.js.
 * No-op si faltan NEXT_PUBLIC_GA_ID y NEXT_PUBLIC_GOOGLE_ADS_ID.
 */
export function GoogleTags() {
  const ids = [
    process.env.NEXT_PUBLIC_GA_ID,
    process.env.NEXT_PUBLIC_GOOGLE_ADS_ID,
  ].filter((id): id is string => Boolean(id));
  if (ids.length === 0) return null;

  return (
    <>
      <Script id="gtag-init" strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
${ids.map((id) => `gtag('config', '${id}');`).join("\n")}`}
      </Script>
      <Script
        id="gtag-src"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${ids[0]}`}
      />
    </>
  );
}
