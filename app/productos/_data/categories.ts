import type { Category, CategoryStructure } from "./types";

// Para retrocompatibilidad
export const CATEGORIES: Category[] = [
  "Herbicidas",
  "Insecticidas",
  "Fungicidas",
  "Aditivos",
  "Bioestimulantes",
];

// Nueva estructura jerárquica
export const CATEGORY_HIERARCHY: CategoryStructure[] = [
  {
    name: "Agroquímicos",
    subcategories: [
      "Fertilizantes",
      "Fumigantes de suelo",
      "Fungicidas",
      "Herbicidas",
      "Insecticidas",
      "Coadyuvantes, Fitoreguladores y PGR",
    ],
  },
  {
    name: "Línea Bio",
    subcategories: ["Bioinsumos", "Feromonas"],
  },
];
