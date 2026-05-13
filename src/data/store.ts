export const store = {
  name: "Mio Amore",
  instagramUrl: "https://www.instagram.com/mioamore.cl/",
  whatsappNumber: "56912345678",
  email: "hola@mioamore.cl",
  location: "Chile",
  shippingNote: "Despachos y entregas coordinadas por WhatsApp según comuna y disponibilidad.",
};

export const categories = [
  "Todos",
  "Bikinis y trajes de baño",
  "Ropa y pijamas",
  "Aromas y perfumería",
  "Cuidado corporal y belleza",
  "Accesorios",
] as const;

export type Category = Exclude<(typeof categories)[number], "Todos">;

export type CategoryInfo = {
  title: Category;
  description: string;
  image: string;
};

export const categoryInfo: CategoryInfo[] = [
  {
    title: "Bikinis y trajes de baño",
    description: "Diseños para disfrutar el verano con comodidad, color y estilo.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Ropa y pijamas",
    description: "Prendas suaves, cómodas y femeninas para todos los días.",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Aromas y perfumería",
    description: "Fragancias y detalles aromáticos para regalar o regalonearte.",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Cuidado corporal y belleza",
    description:
      "Autobronceantes, bronceadores, jabones, serum y productos para tu rutina personal.",
    image:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Accesorios",
    description: "Bolsos playeros, aros, pañuelos, cinturones y detalles que completan tu look.",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
  },
];

export type Product = {
  id: string;
  name: string;
  price: string;
  category: Category;
  description: string;
  image: string;
  badge: "Nuevo" | "Favorito" | "Verano" | "Regalo ideal" | "Glow";
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: "bikini-amore-sunset",
    name: "Bikini Amore Sunset",
    price: "$29.990",
    category: "Bikinis y trajes de baño",
    description: "Bikini de tonos cálidos para días de playa, piscina y escapadas de verano.",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80",
    badge: "Verano",
    featured: true,
  },
  {
    id: "pijama-soft-rose",
    name: "Pijama Soft Rose",
    price: "$34.990",
    category: "Ropa y pijamas",
    description: "Pijama suave y femenino para descansar cómoda sin perder estilo.",
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=80",
    badge: "Favorito",
    featured: true,
  },
  {
    id: "perfume-roll-on-dulce-amore",
    name: "Perfume Roll On Dulce Amore",
    price: "$9.990",
    category: "Aromas y perfumería",
    description: "Fragancia práctica para llevar en el bolso y reaplicar durante el día.",
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80",
    badge: "Regalo ideal",
    featured: true,
  },
  {
    id: "autobronceante-glow",
    name: "Autobronceante Glow",
    price: "$18.990",
    category: "Cuidado corporal y belleza",
    description: "Glow gradual para un tono luminoso y cuidado antes o después del verano.",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=80",
    badge: "Glow",
    featured: true,
  },
  {
    id: "jabon-artesanal-vainilla",
    name: "Jabón Artesanal Vainilla",
    price: "$6.990",
    category: "Cuidado corporal y belleza",
    description: "Jabón aromático de vainilla para una rutina simple, cálida y delicada.",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=80",
    badge: "Nuevo",
  },
  {
    id: "serum-pestanas",
    name: "Serum de pestañas",
    price: "$14.990",
    category: "Cuidado corporal y belleza",
    description: "Producto de belleza para sumar a tu rutina diaria de cuidado personal.",
    image:
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=900&q=80",
    badge: "Favorito",
  },
  {
    id: "bolso-playero-arena",
    name: "Bolso Playero Arena",
    price: "$22.990",
    category: "Accesorios",
    description: "Bolso amplio, liviano y combinable para acompañar días de playa o ciudad.",
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80",
    badge: "Verano",
    featured: true,
  },
  {
    id: "aros-golden-summer",
    name: "Aros Golden Summer",
    price: "$8.990",
    category: "Accesorios",
    description: "Aros dorados con brillo sutil para elevar looks simples y playeros.",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80",
    badge: "Favorito",
  },
  {
    id: "panuelo-rosa-nude",
    name: "Pañuelo Rosa Nude",
    price: "$7.990",
    category: "Accesorios",
    description: "Pañuelo liviano para usar en el pelo, cuello, cartera o como detalle de color.",
    image:
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=900&q=80",
    badge: "Nuevo",
  },
  {
    id: "cinturon-trenzado",
    name: "Cinturón Trenzado",
    price: "$12.990",
    category: "Accesorios",
    description: "Cinturón de textura natural para cerrar vestidos, jeans o looks de verano.",
    image:
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=900&q=80",
    badge: "Regalo ideal",
  },
];

export const testimonials = [
  {
    name: "Camila R.",
    text: "Compré por Instagram y la atención fue rápida, cercana y muy clara.",
  },
  {
    name: "Antonia M.",
    text: "Los productos llegaron preciosos. Se nota la selección y el cuidado de la tienda.",
  },
  {
    name: "Valentina S.",
    text: "Me encantó que pude consultar por WhatsApp y coordinar todo sin complicarme.",
  },
];

export const faqs = [
  {
    question: "Cómo compro en Mio Amore?",
    answer:
      "Elige tus productos favoritos, toca Comprar por WhatsApp y coordinamos disponibilidad, pago y despacho.",
  },
  {
    question: "Tienen productos reales disponibles?",
    answer:
      "La disponibilidad puede cambiar por temporada. Escríbenos por WhatsApp o Instagram para confirmar stock.",
  },
  {
    question: "Hacen despachos?",
    answer:
      "Sí. Los despachos se coordinan por WhatsApp según comuna, horario y disponibilidad.",
  },
  {
    question: "Puedo pedir recomendación?",
    answer:
      "Sí. Cuéntanos qué buscas y te orientamos con productos, aromas, accesorios o regalos.",
  },
];
