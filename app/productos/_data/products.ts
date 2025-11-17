import type { Product, Category, MainCategory, Subcategory } from "./types";
import productsData from "@/lib/products.json";

// Mapeo de categorías del JSON a nuestro sistema tipado
const categoryMapping: Record<
  string,
  { mainCategory: MainCategory; subcategory: Subcategory; category: Category }
> = {
  bioinsumos: {
    mainCategory: "Línea Bio",
    subcategory: "Bioinsumos",
    category: "Bioestimulantes",
  },
  "linea-bio": {
    mainCategory: "Línea Bio",
    subcategory: "Bioinsumos",
    category: "Bioestimulantes",
  },
  feromonas: {
    mainCategory: "Línea Bio",
    subcategory: "Feromonas",
    category: "Bioestimulantes",
  },
  herbicidas: {
    mainCategory: "Agroquímicos",
    subcategory: "Herbicidas",
    category: "Herbicidas",
  },
  insecticidas: {
    mainCategory: "Agroquímicos",
    subcategory: "Insecticidas",
    category: "Insecticidas",
  },
  fungicidas: {
    mainCategory: "Agroquímicos",
    subcategory: "Fungicidas",
    category: "Fungicidas",
  },
  fertilizantes: {
    mainCategory: "Agroquímicos",
    subcategory: "Fertilizantes",
    category: "Aditivos",
  },
  "coadyuvantes-fitoreguladores-pgr": {
    mainCategory: "Agroquímicos",
    subcategory: "Coadyuvantes, Fitoreguladores y PGR",
    category: "Aditivos",
  },
  "fumigantes-de-suelo": {
    mainCategory: "Agroquímicos",
    subcategory: "Fumigantes de suelo",
    category: "Aditivos",
  },
  agroquimicos: {
    mainCategory: "Agroquímicos",
    subcategory: "Fertilizantes",
    category: "Aditivos",
  },
};

// Mapeo de nombres de productos a nombres de archivo de logos
// Solo incluir los que SÍ existen en /public/products/logos-nuevos
const logoFileMap: Record<string, string> = {
  STARECO: "STARECO.png",
  "STARXIFOP R LPU": "Starxifop R LPU.jpg",
  "CYD – X LC": "Cyd – X LC.png",
  "STARLIN 33": "Starlin 33.jpg",
  ECOTECH: "Ecotech.png",
  DIPI: "DIPI.png",
  STARBUZIN: "STARBUZIN.jpg",
  PID: "PID.png",
  STARFEN: "STARFEN.jpg",
  "TRAMPA PLATO": "TRAMPA DE FEROMONA.png",
  "TMP (Turbo Mata Picudo)": "tmp.jpg",
  AMARILLO: "Amarillo.png",
  EXOCET: "EXOCET.jpg",
  "STARTINA LPU": "STARTINA LPU.png",
  "ISHIMETRIN ACTIVE": "ISHIMETRIN ACTIVE.png",
  STARPRID: "STARPRID.png",
  TEPPEKI: "TEPPEKI.png",
  METOXISTAR: "METOXISTAR.png",
  IMISTAR: "IMISTAR.png",
  "RONFOS +": "RONFOS+.png",
  "AMITRAZ ESTRELLA": "AMITRAZ ESTRELLA.png",
  MANCONYL: "Manconyl.png",
  MYCLOSTAR: "Myclostar.png",
  TIMBAL: "Timbal.png",
  "CANDIL 80": "Candil 80.png",
  "THIRAM Granuflo ®": "thiram-granuflo.jpg",
  "ZIRAM Granuflo ®": "ziram.jpg",
  "EMERALD 23 ME": "Emerald 23 Me.png",
  NEORAM: "Neoram 37.5 WG.png",
  STARFERT: "Starfert.png",
  "STARFERT CU": "Starfert Cu.png",
  STARQUAT: "Starquat.jpg",
  STARTION: "Startion.png",
  STARZOATO: "Starzoato.png",
  "STRESS STOP": "Stress StoP.png",
  "CROP +": "CROP +.png",
  FRUFIX: "Frufix k.png",
  "BAC HM36": "Bac HM 36.png",
  VAPAM: "Vapam.png",
  "STARFERT CAB": "Starfert Cab.png",
  "STARFERT ZN": "Starfert Zn.png",
  MANCOSTAR: "Mancostar.png",
  MEPISTAR: "Mepistar.png",
  "FITOCEL 75": "Fitocel 75.png",
  "CARBENDAZIM INSUAGRO": "Carbendazim Insuagro.png",
  PHOTON: "PHOTON.png",
  STARON: "STARON.jpg",
  STARZONE: "Starzone.jpg",
  "STARZONE 36 CS": "logo STARZONE 36 CS.png",
  STARCHER: "Starcher.jpg",
  STARTOP: "Startop.png",
  // ✅ Nuevas imágenes agregadas
  "SUPER ONECIDE": "super-onecide.jpg",
  "COMMAND 36": "command-2.jpg",
  "PROMETRINA 50": "PROMETRINA.jpg",
  MSMAX: "msmax.jpg",
  TALSTAR: "Talstar.jpg",
  "SEED + EXTRA": "seed-copia-2.jpg",
};

// Helper para obtener la ruta del logo local o fallback a URL externa
function getLocalLogoPath(productName: string, externalUrl: string): string {
  // Buscar directamente por el nombre del producto (sin conversión)
  const fileName = logoFileMap[productName];

  if (fileName) {
    return `/products/logos-nuevos/${fileName}`;
  }

  // Fallback a la URL externa si no encontramos el archivo local
  return externalUrl;
}

// Transformar los productos del JSON a nuestro formato
export const PRODUCTS: Product[] = productsData.map((product: any) => {
  // Tomar la primera categoría del producto para determinar su clasificación
  const firstCategory = product.categories[0] || "bioinsumos";
  const mapping =
    categoryMapping[firstCategory] || categoryMapping["bioinsumos"];

  return {
    id: product.id,
    name: product.name,
    logoUrl: getLocalLogoPath(product.name, product.logoUrl),
    category: mapping.category,
    mainCategory: mapping.mainCategory,
    subcategory: mapping.subcategory,
    description: product.description || undefined,
    // ✅ IMPORTANTE: Preservar el array original de categorías del JSON
    categories: product.categories,
  };
});

// Exportar también el número total de productos
export const TOTAL_PRODUCTS = PRODUCTS.length;
