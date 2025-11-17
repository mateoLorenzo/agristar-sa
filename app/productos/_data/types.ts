// Categorías principales
export type MainCategory = "Agroquímicos" | "Línea Bio";

// Subcategorías por categoría principal
export type AgroquimicosSubcategory =
  | "Fertilizantes"
  | "Fumigantes de suelo"
  | "Fungicidas"
  | "Herbicidas"
  | "Insecticidas"
  | "Coadyuvantes, Fitoreguladores y PGR";

export type LineaBioSubcategory = "Bioinsumos" | "Feromonas";

export type Subcategory = AgroquimicosSubcategory | LineaBioSubcategory;

// Para retrocompatibilidad
export type Category =
  | "Herbicidas"
  | "Insecticidas"
  | "Fungicidas"
  | "Aditivos"
  | "Bioestimulantes";

export type Product = {
  id: string;
  name: string;
  logoUrl: string;
  category: Category;
  mainCategory?: MainCategory;
  subcategory?: Subcategory;
  description?: string;
  composition?: string;
  applications?: string[];
  characteristics?: string[];
  recommendedCrops?: string[];
  dosage?: string;
  certifications?: {
    organic?: boolean;
    pdf?: string;
  };
  safetySheet?: string;
  label?: string;
  brochure?: string;
  // Array original de categorías del JSON (slugs en minúsculas)
  categories?: string[];
};

export type CategoryStructure = {
  name: MainCategory;
  subcategories: Subcategory[];
};
