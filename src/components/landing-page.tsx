"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CreditCard,
  Gift,
  Heart,
  Instagram,
  MessageCircle,
  PackageCheck,
  Search,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";
import { ProductCard } from "@/components/product-card";
import { categories, faqs, products, store, testimonials } from "@/data/store";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

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
    "Hola Mio Amore, vengo desde la web y quiero consultar por el catálogo."
  );

  return (
    <main className="overflow-hidden">
      <header className="sticky top-0 z-50 border-b border-rosewood/10 bg-petal/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#" className="font-display text-2xl font-semibold text-ink">
            Mio Amore
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-ink/70 md:flex">
            <a className="transition hover:text-rosewood" href="#catalogo">
              Catálogo
            </a>
            <a className="transition hover:text-rosewood" href="#comprar">
              Cómo comprar
            </a>
            <a className="transition hover:text-rosewood" href="#faq">
              FAQ
            </a>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Comprar por WhatsApp"
            className="focus-ring inline-flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-md bg-rosewood p-0 text-sm font-semibold text-white transition hover:bg-ink sm:w-auto sm:px-4 sm:py-2"
          >
            <MessageCircle size={17} aria-hidden="true" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </nav>
      </header>

      <section className="relative">
        <div className="mx-auto grid min-h-[calc(100vh-68px)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:px-8 lg:py-16">
          <motion.div
            className="max-w-2xl space-y-7"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-rosewood/20 bg-white/70 px-3 py-2 text-sm font-semibold text-rosewood shadow-sm">
              <Sparkles size={16} aria-hidden="true" />
              Boutique online desde Instagram
            </div>
            <div className="space-y-5">
              <h1 className="font-display text-5xl font-semibold leading-[1.04] text-ink sm:text-6xl lg:text-7xl">
                Mio Amore
              </h1>
              <p className="max-w-xl text-lg leading-8 text-ink/70 sm:text-xl">
                Detalles, regalos y accesorios seleccionados con una estética delicada,
                compra simple y atención cercana por WhatsApp.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-ink px-6 py-3 text-base font-semibold text-white transition hover:bg-rosewood"
              >
                <MessageCircle size={20} aria-hidden="true" />
                Comprar por WhatsApp
              </a>
              <a
                href={store.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-rosewood/30 bg-white/70 px-6 py-3 text-base font-semibold text-ink transition hover:border-rosewood hover:text-rosewood"
              >
                <Instagram size={20} aria-hidden="true" />
                Ver Instagram
              </a>
            </div>
            <dl className="grid grid-cols-3 gap-3 pt-3">
              {[
                ["24h", "Respuesta"],
                ["CL", "Despachos"],
                ["IG", "Compra simple"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-lg border border-rosewood/10 bg-white/60 p-3">
                  <dt className="text-xl font-bold text-rosewood">{value}</dt>
                  <dd className="mt-1 text-xs font-medium text-ink/60">{label}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            className="relative min-h-[520px] lg:min-h-[620px]"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.62, delay: 0.12, ease: "easeOut" }}
          >
            <div className="absolute inset-x-8 top-0 h-72 rounded-full bg-blush/50 blur-3xl" />
            <div className="relative grid h-full grid-cols-[0.9fr_1fr] gap-4">
              <div className="flex flex-col gap-4 pt-16">
                <div className="relative h-60 overflow-hidden rounded-lg shadow-soft">
                  <Image
                    src="https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=900&q=80"
                    alt="Empaque boutique con detalles delicados"
                    fill
                    priority
                    sizes="(min-width: 1024px) 28vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="rounded-lg bg-sage p-5 text-ink shadow-soft">
                  <Heart className="mb-5 text-rosewood" size={24} aria-hidden="true" />
                  <p className="font-display text-2xl font-semibold leading-tight">
                    Regalos cuidados para momentos especiales.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="relative h-[390px] overflow-hidden rounded-lg shadow-soft">
                  <Image
                    src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80"
                    alt="Accesorios delicados seleccionados"
                    fill
                    priority
                    sizes="(min-width: 1024px) 34vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 overflow-hidden rounded-lg shadow-soft">
                  <Image
                    src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=900&q=80"
                    alt="Caja de regalo elegante"
                    fill
                    sizes="(min-width: 1024px) 34vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            {
              icon: Gift,
              title: "Listo para regalar",
              text: "Presentación cuidada y estética boutique.",
            },
            {
              icon: MessageCircle,
              title: "Compra guiada",
              text: "Resolvemos disponibilidad y despacho por WhatsApp.",
            },
            {
              icon: Truck,
              title: "Envíos coordinados",
              text: "Despacho o retiro según ubicación y horario.",
            },
            {
              icon: ShieldCheck,
              title: "Atención confiable",
              text: "Comunicación directa desde Instagram o WhatsApp.",
            },
          ].map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-lg border border-rosewood/10 bg-white/70 p-5 shadow-sm"
            >
              <benefit.icon className="mb-5 text-rosewood" size={24} aria-hidden="true" />
              <h2 className="text-base font-semibold text-ink">{benefit.title}</h2>
              <p className="mt-2 text-sm leading-6 text-ink/70">{benefit.text}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-rosewood">
              Favoritos
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-ink">
              Productos destacados
            </h2>
          </div>
          <a
            href="#catalogo"
            className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-rosewood/30 px-4 py-2 text-sm font-semibold text-ink transition hover:border-rosewood hover:text-rosewood"
          >
            Ver catálogo
            <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-rosewood">
              Catálogo
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-ink">
              Elige por categoría
            </h2>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1 lg:justify-end">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`focus-ring min-h-10 shrink-0 rounded-md px-4 py-2 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "bg-ink text-white"
                    : "border border-rosewood/20 bg-white/70 text-ink hover:border-rosewood"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection
        id="comprar"
        className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8"
      >
        <div className="rounded-lg bg-ink p-6 text-white shadow-soft sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blush">
            Cómo comprar
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold">
            De Instagram a tu compra en pocos pasos
          </h2>
          <p className="mt-5 leading-7 text-white/70">
            La web funciona como catálogo rápido. Tú eliges, nos escribes y coordinamos
            disponibilidad, pago y entrega de forma directa.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-base font-semibold text-ink transition hover:bg-blush"
          >
            <MessageCircle size={20} aria-hidden="true" />
            Consultar catálogo
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              icon: Search,
              title: "1. Explora",
              text: "Revisa favoritos o filtra por categoría.",
            },
            {
              icon: MessageCircle,
              title: "2. Escríbenos",
              text: "Cada producto abre WhatsApp con mensaje listo.",
            },
            {
              icon: CreditCard,
              title: "3. Confirma pago",
              text: "Coordinamos medio de pago y disponibilidad.",
            },
            {
              icon: PackageCheck,
              title: "4. Recibe",
              text: "Despacho o retiro según lo acordado.",
            },
          ].map((step) => (
            <div
              key={step.title}
              className="rounded-lg border border-rosewood/10 bg-white/75 p-6 shadow-sm"
            >
              <step.icon className="mb-6 text-rosewood" size={26} aria-hidden="true" />
              <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/70">{step.text}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-rosewood">
              Confianza
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-ink">
              Información clara antes de comprar
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {[
              {
                icon: Truck,
                title: "Envíos y retiros",
                text: store.shippingNote,
              },
              {
                icon: CreditCard,
                title: "Medios de pago",
                text: "Transferencia y opciones coordinadas al confirmar la compra.",
              },
              {
                icon: BadgeCheck,
                title: "Disponibilidad",
                text: "Confirmación directa por WhatsApp antes de cerrar el pedido.",
              },
              {
                icon: Instagram,
                title: "Actualizaciones",
                text: "Novedades, historias y reposiciones disponibles en Instagram.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-lg bg-champagne/75 p-6">
                <item.icon className="mb-5 text-rosewood" size={24} aria-hidden="true" />
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-rosewood">
            Testimonios
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-ink">
            Compras simples, detalles cuidados
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="rounded-lg bg-white p-6 shadow-soft">
              <div className="mb-5 flex gap-1 text-rosewood" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Sparkles key={index} size={16} />
                ))}
              </div>
              <blockquote className="text-base leading-7 text-ink/70">
                “{testimonial.text}”
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-ink">
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
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-rosewood">FAQ</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-ink">
            Preguntas frecuentes
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-lg border border-rosewood/10 bg-white/80 p-5 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-ink">
                {faq.question}
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blush text-rosewood transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-6 text-ink/70">{faq.answer}</p>
            </details>
          ))}
        </div>
      </AnimatedSection>

      <footer className="mt-12 border-t border-rosewood/10 bg-ink px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="font-display text-3xl font-semibold">{store.name}</p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/70">
              Boutique online para comprar detalles, regalos y accesorios por WhatsApp o
              Instagram. {store.location}.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:bg-blush"
            >
              <MessageCircle size={18} aria-hidden="true" />
              WhatsApp
            </a>
            <a
              href={store.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-blush hover:text-blush"
            >
              <Instagram size={18} aria-hidden="true" />
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
