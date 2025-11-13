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
};

