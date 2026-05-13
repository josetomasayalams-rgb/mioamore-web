import { store } from "@/data/store";

export function buildWhatsAppUrl(message: string) {
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${store.whatsappNumber}?text=${encodedMessage}`;
}

export function productMessage(productName: string) {
  return `Hola Mio Amore, quiero consultar por ${productName}. Me puedes confirmar disponibilidad y despacho?`;
}
