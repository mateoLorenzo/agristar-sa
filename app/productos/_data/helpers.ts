import type { Product } from "./types";
import { PRODUCTS } from "./products";
import productsData from "@/lib/products.json";

/**
 * Parses a comma-separated category parameter from URL
 */
export function parseCategoriesFromParam(param: string | null): Set<string> {
  if (!param) return new Set();
  return new Set(param.split(",").filter(Boolean));
}

/**
 * Converts a Set of categories to CSV string for URL
 */
export function categoriesToCSV(categories: Set<string>): string {
  return Array.from(categories).join(",");
}

/**
 * Checks if a product name matches the search query (case-insensitive)
 */
export function matchesQuery(name: string, query: string): boolean {
  if (!query) return true;
  return name.toLowerCase().includes(query.toLowerCase());
}

/**
 * Filters products based on selected categories and search query
 */
export function filterProducts(
  products: Product[],
  selectedCategories: Set<string>,
  searchQuery: string,
): Product[] {
  return products.filter((product) => {
    if (selectedCategories.size === 0) {
      return matchesQuery(product.name, searchQuery);
    }

    const productCategories = (product as any).categories || [];
    const hasMatchingCategory = Array.from(selectedCategories).some(
      (selectedCat) => {
        const selectedSlug = categoryToSlug(selectedCat);
        return productCategories.includes(selectedSlug);
      },
    );

    const matchesSearch = matchesQuery(product.name, searchQuery);
    return hasMatchingCategory && matchesSearch;
  });
}

/**
 * Converts a category name to its slug format
 */
function categoryToSlug(category: string): string {
  const categoryMap: Record<string, string> = {
    Agroquímicos: "agroquimicos",
    "Línea Bio": "linea-bio",

    Bioestimulantes: "bioestimulantes",
    "Fumigantes de suelo": "fumigantes-de-suelo",
    Fungicidas: "fungicidas",
    Herbicidas: "herbicidas",
    Insecticidas: "insecticidas",
    Coadyuvantes: "coadyuvantes-fitoreguladores-pgr",
    Bioinsumos: "bioinsumos",
    Feromonas: "feromonas",
  };

  return categoryMap[category] || category.toLowerCase();
}

/**
 * Gets a product by its ID
 */
export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((product) => product.id === id);
}

/**
 * Gets related products (same category, excluding current product)
 */
export function getRelatedProducts(
  currentProductId: string,
  limit: number = 12,
): Product[] {
  const currentProduct = getProductById(currentProductId);
  if (!currentProduct) return [];

  const currentCategories = (currentProduct as any).categories || [];

  return PRODUCTS.filter((product) => {
    if (product.id === currentProductId) return false;

    const productCategories = (product as any).categories || [];
    return productCategories.some((cat: string) =>
      currentCategories.includes(cat),
    );
  }).slice(0, limit);
}
