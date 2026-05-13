import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://mioamoreboutique.cl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mio Amore | Boutique online",
  description:
    "Mio Amore es una boutique online con productos delicados, regalos y detalles seleccionados para comprar fácil por WhatsApp o Instagram.",
  keywords: ["Mio Amore", "boutique online", "tienda Instagram", "regalos", "WhatsApp"],
  openGraph: {
    title: "Mio Amore | Boutique online",
    description:
      "Catálogo boutique con productos seleccionados y compra rápida por WhatsApp.",
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
