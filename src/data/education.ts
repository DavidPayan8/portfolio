import type { LocalizedText } from "../i18n/types";

export interface EducationEntry {
  institution: string;
  program: LocalizedText;
  period: string;
}

export const education: EducationEntry = {
  institution: "CampusCámara",
  program: {
    es: "Grado Superior en Desarrollo de Aplicaciones Web",
    en: "Advanced Vocational Training in Web Application Development",
  },
  period: "2022",
};
