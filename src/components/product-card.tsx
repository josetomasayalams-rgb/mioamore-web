"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import type { Product } from "@/data/store";
import { buildWhatsAppUrl, productMessage } from "@/lib/whatsapp";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.article
      className="group overflow-hidden rounded-lg border border-rosewood/10 bg-white shadow-soft"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-champagne">
        <Image
          src={product.image}
          alt={`Producto ${product.name} de Mio Amore`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-rosewood">
          {product.category}
        </span>
      </div>
      <div className="space-y-4 p-4 sm:p-5">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold text-ink">{product.name}</h3>
            <p className="shrink-0 text-base font-bold text-rosewood">{product.price}</p>
          </div>
          <p className="min-h-12 text-sm leading-6 text-ink/70">{product.description}</p>
        </div>
        <a
          href={buildWhatsAppUrl(productMessage(product.name))}
          target="_blank"
          rel="noreferrer"
          className="focus-ring inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-ink px-4 py-3 text-sm font-semibold text-white transition hover:bg-rosewood"
        >
          <MessageCircle size={18} aria-hidden="true" />
          Comprar por WhatsApp
        </a>
      </div>
    </motion.article>
  );
}
