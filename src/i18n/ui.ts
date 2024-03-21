import SpainFlag from "@/components/flags/Spain.astro";
import UnitedStatesFlag from "@/components/flags/UnitedStates.astro";
import BrasilFlag from "@/components/flags/Brasil.astro";

export const LANGUAGES: Record<
  string,
  { code: string; name: string; flag: typeof SpainFlag }
> = {
  es: {
    code: "es",
    name: "Español",
    flag: SpainFlag,
  },
  en: {
    code: "en",
    name: "English",
    flag: UnitedStatesFlag,
  },
  pt: {
    code: "pt-br",
    name: "Portugues",
    flag: BrasilFlag,
  },
};

export const defaultLang = "es";

export const ui = {
  es: {
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",
  },
  en: {
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",
  },
  pt: {
    "nav.experience": "Experiência",
    "nav.projects": "Projetos",
    "nav.about": "Sobre mim",
    "nav.contact": "Contato",
  },
} as const;

export const showDefaultLang = false;
