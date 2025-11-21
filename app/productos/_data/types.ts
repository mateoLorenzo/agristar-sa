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
  categories: string[]; // Array de slugs de categorías (e.g., ["bioinsumos", "linea-bio"])
  description?: string;
  // Campos de documentación (nombres coinciden con el JSON)
  flyerUrl?: string | null;
  safetySheetUrl?: string | null;
  labelUrl?: string | null;
  organicCertificateUrl?: string | null;
  // Campos calculados/agregados dinámicamente (no en JSON original)
  category?: Category;
  mainCategory?: MainCategory;
  subcategory?: Subcategory;
  // Campos opcionales adicionales (por si se agregan en el futuro)
  composition?: string;
  applications?: string[];
  characteristics?: string[];
  recommendedCrops?: string[];
  dosage?: string;
  certifications?: {
    organic?: boolean;
    pdf?: string;
  };
  // Aliases para retrocompatibilidad (mapeados desde los campos originales)
  brochure?: string; // Alias de flyerUrl
  safetySheet?: string; // Alias de safetySheetUrl
  label?: string; // Alias de labelUrl
};

export type CategoryStructure = {
  name: MainCategory;
  subcategories: Subcategory[];
};
