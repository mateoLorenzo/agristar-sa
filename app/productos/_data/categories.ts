import type { Category, CategoryStructure } from "./types";

export const CATEGORIES: Category[] = [
  "Herbicidas",
  "Insecticidas",
  "Fungicidas",
  "Aditivos",
  "Bioestimulantes",
];

export const CATEGORY_HIERARCHY: CategoryStructure[] = [
  {
    name: "Agroquímicos",
    subcategories: [
      "Bioestimulantes",
      "Fumigantes de suelo",
      "Fungicidas",
      "Herbicidas",
      "Insecticidas",
      "Coadyuvantes",
    ],
  },
  {
    name: "Línea Bio",
    subcategories: ["Bioinsumos", "Feromonas"],
  },
];
