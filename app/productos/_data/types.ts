export type MainCategory = "Agroquímicos" | "Línea Bio";

export type AgroquimicosSubcategory =
  | "Bioestimulantes"
  | "Fumigantes de suelo"
  | "Fungicidas"
  | "Herbicidas"
  | "Insecticidas"
  | "Coadyuvantes";

export type LineaBioSubcategory = "Bioinsumos" | "Feromonas";

export type Subcategory = AgroquimicosSubcategory | LineaBioSubcategory;

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
  categories: string[];
  description?: string;
  flyerUrl?: string | null;
  safetySheetUrl?: string | null;
  labelUrl?: string | null;
  organicCertificateUrl?: string | null;
  category?: Category;
  mainCategory?: MainCategory;
  subcategory?: Subcategory;
  composition?: string;
  applications?: string[];
  characteristics?: string[];
  recommendedCrops?: string[];
  dosage?: string;
  certifications?: {
    organic?: boolean;
    pdf?: string;
  };
  brochure?: string;
  safetySheet?: string;
  label?: string;
};

export type CategoryStructure = {
  name: MainCategory;
  subcategories: Subcategory[];
};
