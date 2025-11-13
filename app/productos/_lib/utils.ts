import type { Category } from "../_data/types";

/**
 * Convierte un array de categorías a string CSV para URL
 */
export function categoriesToCSV(categories: Category[]): string {
  return categories.join(",");
}

/**
 * Convierte un string CSV de categorías a Set
 */
export function CSVToSet(csv: string | null): Set<Category> {
  if (!csv) return new Set();
  return new Set(csv.split(",").filter(Boolean) as Category[]);
}

/**
 * Parsea el parámetro de categorías de la URL
 */
export function parseCatParam(catParam: string | null): Set<Category> {
  return CSVToSet(catParam);
}

/**
 * Verifica si el nombre del producto coincide con la query (case-insensitive)
 */
export function matchesQuery(name: string, query: string): boolean {
  if (!query.trim()) return true;
  return name.toLowerCase().includes(query.toLowerCase().trim());
}

