import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://mioamoreboutique.cl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mio Amore | Bikinis, ropa, aromas y accesorios",
  description:
    "Boutique de moda, playa, aromas, accesorios y cuidado corporal. Compra bikinis, ropa, pijamas, perfumes, autobronceantes y más por WhatsApp.",
  keywords: [
    "Mio Amore",
    "bikinis",
    "trajes de baño",
    "ropa",
    "pijamas",
    "perfumes",
    "aromas",
    "autobronceantes",
    "accesorios",
    "boutique Chile",
  ],
  openGraph: {
    title: "Mio Amore | Bikinis, ropa, aromas y accesorios",
    description:
      "Boutique de moda, playa, aromas, accesorios y cuidado corporal con compra rápida por WhatsApp.",
    url: siteUrl,
    siteName: "Mio Amore",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
