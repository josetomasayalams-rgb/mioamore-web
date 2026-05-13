"use client";

import { motion } from "framer-motion";
import { Heart, MessageCircle, Sparkles } from "lucide-react";
import Image from "next/image";
import type { Product } from "@/data/store";
import { buildWhatsAppUrl, productMessage } from "@/lib/whatsapp";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.article
      className="group overflow-hidden rounded-lg border border-terracotta/15 bg-warmwhite shadow-soft transition-shadow hover:shadow-lift"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-shell">
        <Image
          src={product.image}
          alt={`Producto ${product.name} de Mio Amore`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cocoa/30 via-transparent to-transparent opacity-80" />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-warmwhite/90 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-terracotta shadow-sm">
            {product.badge}
          </span>
          <span className="hidden rounded-full bg-cocoa/70 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-warmwhite backdrop-blur sm:inline-flex">
            {product.category}
          </span>
        </div>
        <div className="absolute bottom-3 right-3 grid h-10 w-10 place-items-center rounded-full bg-warmwhite/90 text-terracotta shadow-sm transition group-hover:rotate-6 group-hover:scale-105">
          {product.badge === "Favorito" ? (
            <Heart size={18} fill="currentColor" aria-hidden="true" />
          ) : (
            <Sparkles size={18} aria-hidden="true" />
          )}
        </div>
      </div>
      <div className="space-y-4 p-4 sm:p-5">
        <div className="space-y-2">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-terracotta">
            {product.category}
          </p>
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold leading-tight text-ink">{product.name}</h3>
            <p className="shrink-0 rounded-full bg-cream px-3 py-1 text-sm font-bold text-cocoa">
              {product.price}
            </p>
          </div>
          <p className="min-h-12 text-sm leading-6 text-ink/70">{product.description}</p>
        </div>
        <a
          href={buildWhatsAppUrl(productMessage(product.name))}
          target="_blank"
          rel="noreferrer"
          className="focus-ring inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-cocoa px-4 py-3 text-sm font-semibold text-warmwhite transition duration-300 hover:bg-terracotta"
        >
          <MessageCircle size={18} aria-hidden="true" />
          Comprar por WhatsApp
        </a>
      </div>
    </motion.article>
  );
}
