export const site = {
  name: "Cala Studio",
  tagline: "Marketing con cabeza.",
  title: "Cala Studio | Agencia de Marketing Digital",
  description:
    "Estrategia, redes sociales, publicidad, web, creatividad y automatización para marcas que quieren hacer marketing con criterio.",
  // Cambia el dominio en la variable de entorno NEXT_PUBLIC_SITE_URL al publicar.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://thecalastudio.com",
  locale: "es_ES",
  email: "hola@thecalastudio.com",
  phone: "",
  // Coordenadas decorativas (Balcón de Europa, Nerja): solo como recurso visual, no se nombra el lugar
  coordinates: { lat: "36°44′N", lng: "3°52′O" },
  location: "Málaga",
  social: {
    instagram: "https://www.instagram.com/calastudio",
    linkedin: "https://www.linkedin.com/company/calastudio",
  },
} as const;

export const mainNav = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Bodas", href: "/bodas" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
] as const;

export const legalNav = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Política de privacidad", href: "/privacidad" },
  { label: "Cookies", href: "/cookies" },
] as const;

export const cta = {
  primary: { label: "Cuéntanos tu proyecto", href: "/contacto" },
  secondary: { label: "Ver servicios", href: "/servicios" },
} as const;
