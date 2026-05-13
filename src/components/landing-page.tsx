"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CreditCard,
  Droplets,
  Gift,
  Heart,
  Instagram,
  MessageCircle,
  PackageCheck,
  Search,
  ShieldCheck,
  Shirt,
  ShoppingBag,
  Sparkles,
  Sun,
  Truck,
  Waves,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";
import { ProductCard } from "@/components/product-card";
import {
  type Category,
  categories,
  categoryInfo,
  faqs,
  products,
  store,
  testimonials,
} from "@/data/store";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const categoryIcons: Record<Category, LucideIcon> = {
  "Bikinis y trajes de baño": Waves,
  "Ropa y pijamas": Shirt,
  "Aromas y perfumería": Sparkles,
  "Cuidado corporal y belleza": Droplets,
  Accesorios: ShoppingBag,
};

function LogoMark({ inverted = false }: { inverted?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-11 w-11 place-items-center rounded-full border border-terracotta/25 bg-warmwhite text-sm font-bold uppercase tracking-[0.16em] text-terracotta shadow-sm">
        MA
      </span>
      <span
        className={`font-display text-2xl font-semibold leading-none ${
          inverted ? "text-warmwhite" : "text-ink"
        }`}
      >
        Mio Amore
      </span>
    </div>
  );
}

export function LandingPage() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("Todos");

  const featuredProducts = products.filter((product) => product.featured);
  const visibleProducts = useMemo(() => {
    if (activeCategory === "Todos") {
      return products;
    }

    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  const whatsappUrl = buildWhatsAppUrl(
    "Hola Mio Amore, vi su página web y me gustaría consultar por un producto."
  );

  return (
    <main className="overflow-hidden bg-warmwhite text-ink">
      <header className="sticky top-0 z-50 border-b border-terracotta/10 bg-warmwhite/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <a href="#" className="focus-ring rounded-md">
            <LogoMark />
          </a>
          <div className="hidden items-center gap-7 text-sm font-semibold text-ink/70 md:flex">
            <a className="transition hover:text-terracotta" href="#categorias">
              Categorías
            </a>
            <a className="transition hover:text-terracotta" href="#catalogo">
              Catálogo
            </a>
            <a className="transition hover:text-terracotta" href="#comprar">
              Cómo comprar
            </a>
            <a className="transition hover:text-terracotta" href="#faq">
              FAQ
            </a>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-cocoa px-4 py-2 text-sm font-semibold text-warmwhite transition duration-300 hover:bg-terracotta"
          >
            <MessageCircle size={17} aria-hidden="true" />
            WhatsApp
          </a>
        </nav>
      </header>

      <section className="shoreline relative">
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-warmwhite to-transparent" />
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-8 sm:px-6 sm:py-10 lg:min-h-[720px] lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-14">
          <motion.div
            className="relative z-10 max-w-2xl space-y-7"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-terracotta/20 bg-warmwhite/75 px-3 py-2 text-sm font-bold text-terracotta shadow-sm backdrop-blur">
              <Sun size={16} aria-hidden="true" />
              Boutique chilena de moda, playa y cuidado personal
            </div>
            <div className="space-y-5">
              <h1 className="font-display text-5xl font-semibold leading-[1.02] text-cocoa sm:text-6xl lg:text-7xl">
                Mio Amore
              </h1>
              <p className="text-xl font-semibold leading-8 text-ink sm:text-2xl">
                Boutique de moda, playa, aromas y cuidado personal
              </p>
              <p className="max-w-xl text-base leading-8 text-ink/70 sm:text-lg">
                Bikinis, ropa, accesorios, aromas y productos seleccionados para verte y
                sentirte bien en cada temporada.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-cocoa px-6 py-3 text-base font-semibold text-warmwhite shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-terracotta"
              >
                <MessageCircle size={20} aria-hidden="true" />
                Comprar por WhatsApp
              </a>
              <a
                href={store.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-terracotta/30 bg-warmwhite/70 px-6 py-3 text-base font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:border-terracotta hover:text-terracotta"
              >
                <Instagram size={20} aria-hidden="true" />
                Ver Instagram
              </a>
            </div>
            <dl className="grid grid-cols-3 gap-3 pt-2">
              {[
                ["5", "Categorías"],
                ["10", "Productos demo"],
                ["WA", "Compra simple"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="texture-linen rounded-lg border border-terracotta/10 bg-warmwhite/70 p-3 shadow-sm"
                >
                  <dt className="text-xl font-bold text-terracotta">{value}</dt>
                  <dd className="mt-1 text-xs font-semibold text-ink/60">{label}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            className="relative z-10 min-h-[430px] sm:min-h-[520px] lg:min-h-[640px]"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.72, delay: 0.12, ease: "easeOut" }}
          >
            <div className="absolute left-2 top-5 h-36 w-36 rounded-[42%_58%_54%_46%] border border-terracotta/25" />
            <div className="absolute right-4 top-12 h-24 w-24 rounded-full border border-sand" />
            <div className="relative grid h-full grid-cols-[0.82fr_1fr] gap-4">
              <div className="flex flex-col gap-4 pt-16">
                <div className="relative h-52 overflow-hidden rounded-lg shadow-soft sm:h-60">
                  <Image
                    src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80"
                    alt="Playa cálida como inspiración de bikinis y trajes de baño Mio Amore"
                    fill
                    priority
                    sizes="(min-width: 1024px) 28vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="texture-linen rounded-lg bg-seafoam p-5 text-ink shadow-soft">
                  <Heart className="mb-5 text-terracotta" size={24} aria-hidden="true" />
                  <p className="font-display text-2xl font-semibold leading-tight">
                    Selección delicada para verano, regalos y rutina personal.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="relative h-[320px] overflow-hidden rounded-lg shadow-lift sm:h-[390px]">
                  <Image
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80"
                    alt="Moda femenina y prendas seleccionadas para Mio Amore"
                    fill
                    priority
                    sizes="(min-width: 1024px) 34vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-[1fr_0.72fr] gap-4">
                  <div className="relative h-36 overflow-hidden rounded-lg shadow-soft sm:h-44">
                    <Image
                      src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=700&q=80"
                      alt="Perfumes y aromas boutique de Mio Amore"
                      fill
                      sizes="(min-width: 1024px) 22vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="rounded-lg bg-terracotta p-4 text-warmwhite shadow-soft">
                    <Sparkles className="mb-5" size={22} aria-hidden="true" />
                    <p className="text-sm font-semibold leading-6">
                      Compra directa por WhatsApp, rápida y cercana.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {[
            {
              icon: MessageCircle,
              title: "Compra fácil",
              text: "Consulta directa por WhatsApp.",
            },
            {
              icon: Sparkles,
              title: "Seleccionados",
              text: "Productos elegidos para la temporada.",
            },
            {
              icon: Heart,
              title: "Atención cercana",
              text: "Respuestas claras antes de comprar.",
            },
            {
              icon: Truck,
              title: "Envíos coordinados",
              text: "Entrega según zona y disponibilidad.",
            },
            {
              icon: Gift,
              title: "Regalos",
              text: "Detalles lindos para sorprender.",
            },
            {
              icon: ShieldCheck,
              title: "Estilo boutique",
              text: "Una experiencia simple y cuidada.",
            },
          ].map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-lg border border-terracotta/10 bg-cream/70 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-warmwhite hover:shadow-soft lg:col-span-1"
            >
              <benefit.icon className="mb-5 text-terracotta" size={24} aria-hidden="true" />
              <h2 className="text-base font-semibold text-cocoa">{benefit.title}</h2>
              <p className="mt-2 text-sm leading-6 text-ink/70">{benefit.text}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection
        id="categorias"
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
      >
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-terracotta">
              Categorías
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-cocoa">
              Todo el universo Mio Amore
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-ink/70">
            Moda de playa, prendas suaves, aromas, belleza y accesorios para armar looks
            completos con una estética cálida y femenina.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {categoryInfo.map((category) => {
            const Icon = categoryIcons[category.title];

            return (
              <button
                key={category.title}
                type="button"
                onClick={() => setActiveCategory(category.title)}
                className="focus-ring group overflow-hidden rounded-lg border border-terracotta/10 bg-warmwhite text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-terracotta/35 hover:shadow-lift"
              >
                <div className="relative h-36 overflow-hidden bg-shell">
                  <Image
                    src={category.image}
                    alt={`Categoría ${category.title} de Mio Amore`}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cocoa/50 via-cocoa/10 to-transparent" />
                  <span className="absolute bottom-3 left-3 grid h-10 w-10 place-items-center rounded-full bg-warmwhite/90 text-terracotta shadow-sm">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                </div>
                <div className="space-y-3 p-4">
                  <h3 className="text-base font-semibold leading-tight text-cocoa">
                    {category.title}
                  </h3>
                  <p className="text-sm leading-6 text-ink/70">{category.description}</p>
                </div>
              </button>
            );
          })}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-terracotta">
              Favoritos
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-cocoa">
              Selección destacada
            </h2>
          </div>
          <a
            href="#catalogo"
            className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-terracotta/30 bg-warmwhite px-4 py-2 text-sm font-semibold text-ink transition duration-300 hover:border-terracotta hover:text-terracotta"
          >
            Ver catálogo
            <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection
        id="catalogo"
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
      >
        <div className="mb-8 grid gap-6 lg:grid-cols-[0.75fr_1fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-terracotta">
              Catálogo
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-cocoa">
              Compra por categoría
            </h2>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1 lg:justify-end">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`focus-ring min-h-10 shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition duration-300 ${
                  activeCategory === category
                    ? "bg-cocoa text-warmwhite shadow-soft"
                    : "border border-terracotta/20 bg-cream/70 text-ink hover:border-terracotta hover:bg-warmwhite"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection
        id="comprar"
        className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8"
      >
        <div className="texture-linen rounded-lg bg-cocoa p-6 text-warmwhite shadow-lift sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-nude">
            Cómo comprar
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold">
            Tu compra, simple y acompañada
          </h2>
          <p className="mt-5 leading-7 text-warmwhite/70">
            El catálogo te ayuda a elegir con calma. Luego coordinamos disponibilidad,
            pago y despacho de manera directa por WhatsApp o Instagram.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-warmwhite px-5 py-3 text-base font-semibold text-cocoa transition duration-300 hover:-translate-y-0.5 hover:bg-nude"
          >
            <MessageCircle size={20} aria-hidden="true" />
            Consultar por WhatsApp
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              icon: Search,
              title: "1. Elige tus favoritos",
              text: "Revisa productos, categorías y detalles antes de escribirnos.",
            },
            {
              icon: MessageCircle,
              title: "2. Escríbenos",
              text: "Consulta por WhatsApp o Instagram con el producto que te gustó.",
            },
            {
              icon: CreditCard,
              title: "3. Coordinamos",
              text: "Confirmamos stock, medio de pago, despacho o entrega.",
            },
            {
              icon: PackageCheck,
              title: "4. Disfruta Mio Amore",
              text: "Recibe tu pedido y úsalo en tu rutina, look o regalo.",
            },
          ].map((step) => (
            <div
              key={step.title}
              className="rounded-lg border border-terracotta/10 bg-cream/80 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-warmwhite hover:shadow-soft"
            >
              <step.icon className="mb-6 text-terracotta" size={26} aria-hidden="true" />
              <h3 className="text-lg font-semibold text-cocoa">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/70">{step.text}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-terracotta">
              Confianza
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-cocoa">
              Claridad antes de comprar
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {[
              {
                icon: Truck,
                title: "Envíos coordinados",
                text: store.shippingNote,
              },
              {
                icon: CreditCard,
                title: "Medios de pago",
                text: "Transferencia y opciones confirmadas al cerrar la compra.",
              },
              {
                icon: BadgeCheck,
                title: "Stock confirmado",
                text: "Validamos disponibilidad antes de que pagues.",
              },
              {
                icon: Instagram,
                title: "Novedades en Instagram",
                text: "Historias, reposiciones y lanzamientos disponibles en @mioamore.cl.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-lg bg-shell/80 p-6">
                <item.icon className="mb-5 text-terracotta" size={24} aria-hidden="true" />
                <h3 className="text-lg font-semibold text-cocoa">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-terracotta">
            Testimonios
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-cocoa">
            Atención cercana, experiencia simple
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="rounded-lg border border-terracotta/10 bg-warmwhite p-6 shadow-soft"
            >
              <div className="mb-5 flex gap-1 text-terracotta" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Sparkles key={index} size={16} />
                ))}
              </div>
              <blockquote className="text-base leading-7 text-ink/70">
                “{testimonial.text}”
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-cocoa">
                {testimonial.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection
        id="faq"
        className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8"
      >
        <div className="mb-8 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-terracotta">FAQ</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-cocoa">
            Preguntas frecuentes
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-lg border border-terracotta/10 bg-cream/70 p-5 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-cocoa">
                {faq.question}
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-nude text-cocoa transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-6 text-ink/70">{faq.answer}</p>
            </details>
          ))}
        </div>
      </AnimatedSection>

      <footer className="mt-12 border-t border-terracotta/10 bg-cocoa px-4 py-10 text-warmwhite sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.8fr_0.8fr]">
          <div>
            <LogoMark inverted />
            <p className="mt-4 max-w-xl text-sm leading-6 text-warmwhite/70">
              Boutique chilena de moda, playa, aromas, accesorios y cuidado corporal.
              Compra por WhatsApp o Instagram con atención cercana.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-nude">
              {store.location} · Todos los derechos reservados
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-nude">
              Categorías
            </h3>
            <div className="mt-4 grid gap-2 text-sm text-warmwhite/70">
              {categoryInfo.map((category) => (
                <a
                  key={category.title}
                  href="#catalogo"
                  onClick={() => setActiveCategory(category.title)}
                  className="transition hover:text-nude"
                >
                  {category.title}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-nude">
              Contacto
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-warmwhite px-4 py-2 text-sm font-semibold text-cocoa transition hover:bg-nude"
              >
                <MessageCircle size={18} aria-hidden="true" />
                WhatsApp
              </a>
              <a
                href={store.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-warmwhite/20 px-4 py-2 text-sm font-semibold text-warmwhite transition hover:border-nude hover:text-nude"
              >
                <Instagram size={18} aria-hidden="true" />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Consultar por WhatsApp"
        className="focus-ring floating-whatsapp fixed bottom-5 right-4 z-50 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-terracotta px-5 py-3 text-sm font-bold text-warmwhite shadow-lift transition hover:bg-cocoa sm:bottom-6 sm:right-6"
      >
        <MessageCircle size={22} aria-hidden="true" />
        <span className="hidden sm:inline">Consultar</span>
      </a>
    </main>
  );
}
