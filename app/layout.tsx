import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://distritq-alameda.vercel.app"),
  title: "ALAMEDA no DISTRITQ | Casas e Townhouses em Alphaville",
  description: "Conheça o ALAMEDA, no novo bairro planejado DISTRITQ em Alphaville. Casas e townhouses de 113 a 355 m². Atendimento com Ariane Laurindo.",
  alternates: { canonical: "/" },
  keywords: ["ALAMEDA DISTRITQ", "casas em Alphaville", "townhouses Alphaville", "lançamento imobiliário Alphaville", "Ariane Laurindo"],
  openGraph: {
    title: "ALAMEDA no DISTRITQ | Alphaville",
    description: "Casas e townhouses de 113 a 355 m² em um projeto com arquitetura autoral, natureza e clube completo.",
    type: "website",
    locale: "pt_BR",
    url: "/",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
