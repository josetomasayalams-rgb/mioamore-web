export const store = {
  name: "Mio Amore",
  instagramUrl: "https://www.instagram.com/mioamore.cl/",
  whatsappNumber: "56912345678",
  email: "hola@mioamore.cl",
  location: "Santiago, Chile",
  shippingNote: "Despachos a coordinar y retiros según disponibilidad.",
};

export type Product = {
  id: string;
  name: string;
  price: string;
  category: "Regalos" | "Accesorios" | "Detalles" | "Favoritos";
  description: string;
  image: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: "set-amore",
    name: "Set Amore",
    price: "$24.990",
    category: "Regalos",
    description: "Detalle listo para regalar con una selección delicada y presentación boutique.",
    image:
      "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=900&q=80",
    featured: true,
  },
  {
    id: "caja-rosa",
    name: "Caja Rosa",
    price: "$18.990",
    category: "Detalles",
    description: "Una opción cálida y femenina para cumpleaños, agradecimientos o fechas especiales.",
    image:
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=900&q=80",
    featured: true,
  },
  {
    id: "accesorio-luz",
    name: "Accesorio Luz",
    price: "$12.990",
    category: "Accesorios",
    description: "Pieza versátil para sumar un acento elegante a cualquier look diario.",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "detalle-cielo",
    name: "Detalle Cielo",
    price: "$16.990",
    category: "Favoritos",
    description: "Selección suave y cuidada para sorprender sin complicarse.",
    image:
      "https://images.unsplash.com/photo-1527633412983-d80af308e660?auto=format&fit=crop&w=900&q=80",
    featured: true,
  },
  {
    id: "mini-box",
    name: "Mini Box",
    price: "$9.990",
    category: "Regalos",
    description: "Formato pequeño con terminaciones bonitas para un gesto rápido y especial.",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "detalle-dorado",
    name: "Detalle Dorado",
    price: "$21.990",
    category: "Favoritos",
    description: "Combinación elegante para regalos más especiales, con empaque listo para entregar.",
    image:
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80",
  },
];

export const categories = ["Todos", "Regalos", "Accesorios", "Detalles", "Favoritos"] as const;

export const testimonials = [
  {
    name: "Camila R.",
    text: "Me respondieron rápido y el regalo llegó precioso, tal como se veía en las fotos.",
  },
  {
    name: "Antonia M.",
    text: "Muy buena presentación. Se nota el cuidado en cada detalle.",
  },
  {
    name: "Valentina S.",
    text: "Compré desde Instagram y todo fue simple. Volvería a pedir.",
  },
];

export const faqs = [
  {
    question: "Cómo compro en Mio Amore?",
    answer:
      "Elige el producto, toca Comprar por WhatsApp y te responderemos para confirmar disponibilidad, despacho y pago.",
  },
  {
    question: "Hacen despachos?",
    answer:
      "Sí. Los despachos se coordinan por WhatsApp según comuna, horario y disponibilidad.",
  },
  {
    question: "Puedo pedir algo personalizado?",
    answer:
      "Sí. Escríbenos por WhatsApp o Instagram con tu idea y vemos opciones disponibles.",
  },
  {
    question: "Qué medios de pago aceptan?",
    answer:
      "Aceptamos transferencia y otros medios que se confirman al momento de coordinar la compra.",
  },
];
