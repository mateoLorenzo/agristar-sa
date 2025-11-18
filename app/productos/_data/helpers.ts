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
  searchQuery: string
): Product[] {
  return products.filter((product) => {
    // Si no hay categorías seleccionadas, mostrar todos los productos
    if (selectedCategories.size === 0) {
      return matchesQuery(product.name, searchQuery);
    }

    // Verificar si el producto tiene alguna de las categorías seleccionadas
    // Los productos del JSON tienen un array de categorías en formato slug
    const productCategories = (product as any).categories || [];
    const hasMatchingCategory = Array.from(selectedCategories).some(
      (selectedCat) => {
        // Convertir la categoría seleccionada a slug para comparar
        const selectedSlug = categoryToSlug(selectedCat);
        return productCategories.includes(selectedSlug);
      }
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
    // Main categories
    Agroquímicos: "agroquimicos",
    "Línea Bio": "linea-bio",
    // Agroquímicos subcategories
    Fertilizantes: "fertilizantes",
    "Fumigantes de suelo": "fumigantes-de-suelo",
    Fungicidas: "fungicidas",
    Herbicidas: "herbicidas",
    Insecticidas: "insecticidas",
    "Coadyuvantes, Fitoreguladores y PGR": "coadyuvantes-fitoreguladores-pgr",
    // Línea Bio subcategories
    Bioinsumos: "bioinsumos",
    Feromonas: "feromonas",
  };

  return categoryMap[category] || category.toLowerCase();
}

/**
 * Gets a product by its ID
 */
export function getProductById(id: string): Product | undefined {
  return productsData.find((product: any) => product.id === id) as Product;
}

/**
 * Gets related products (same category, excluding current product)
 */
export function getRelatedProducts(
  currentProductId: string,
  limit: number = 4
): Product[] {
  const currentProduct = getProductById(currentProductId);
  if (!currentProduct) return [];

  // Obtener las categorías del producto actual del JSON
  const currentCategories = (currentProduct as any).categories || [];

  return PRODUCTS.filter((product) => {
    if (product.id === currentProductId) return false;

    // Verificar si el producto comparte alguna categoría con el producto actual
    const productCategories = (product as any).categories || [];
    return productCategories.some((cat: string) =>
      currentCategories.includes(cat)
    );
  }).slice(0, limit);
}
