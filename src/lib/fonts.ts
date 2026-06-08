import { Sora, Inter } from "next/font/google";

// Sora → titulares (variable --font-sora)
export const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
  weight: ["400", "500", "600", "700", "800"],
});

// Inter → cuerpo (variable --font-inter)
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

// Clase combinada para aplicar en <html>
export const fontVariables = `${sora.variable} ${inter.variable}`;
