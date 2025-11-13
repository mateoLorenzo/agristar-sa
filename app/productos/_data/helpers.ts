import type { Product } from "./products";

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
    const matchesCategory =
      selectedCategories.size === 0 || selectedCategories.has(product.category);
    const matchesSearch = matchesQuery(product.name, searchQuery);
    return matchesCategory && matchesSearch;
  });
}

