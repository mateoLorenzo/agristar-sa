"use client";

import { useMemo, useState } from "react";
import { SearchBar } from "./SearchBar";
import { SidebarFilters } from "./SidebarFilters";
import { ProductsGrid } from "./ProductsGrid";
import { PRODUCTS } from "../_data/products";

export function ProductsContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(
    new Set()
  );

  // Filter products based on search and selected categories
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Filter by search query
      const matchesSearch =
        !searchQuery ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase());

      // Filter by categories
      let matchesCategory = true;
      if (selectedCategories.size > 0) {
        // Get product categories from the product object
        const productCategories = product.categories || [];
        
        // Check if product has any of the selected categories
        matchesCategory = Array.from(selectedCategories).some((selectedCat) => {
          // Convert selected category to slug format
          const selectedSlug = categoryToSlug(selectedCat);
          return productCategories.includes(selectedSlug);
        });
      }

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategories]);

  return (
    <main className="min-h-screen pt-[120px] pb-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#1a1a1a] mb-2">
            Productos
          </h1>
          <p className="text-lg text-[#6B7280]">
            Explorá nuestro catálogo completo
          </p>
        </div>

        {/* Layout: Sidebar + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 lg:gap-8">
          {/* Sidebar */}
          <aside className="lg:max-w-[280px]" aria-label="Filtros de productos">
            <SidebarFilters
              selectedCategories={selectedCategories}
              onCategoryChange={setSelectedCategories}
            />
          </aside>

          {/* Main Content */}
          <div className="min-w-0">
            {/* Search Bar */}
            <div className="mb-6">
              <SearchBar onSearch={setSearchQuery} />
            </div>

            {/* Results Count */}
            {(searchQuery || selectedCategories.size > 0) && (
              <div className="mb-4 text-sm text-[#6B7280]">
                {filteredProducts.length === 1
                  ? "1 producto encontrado"
                  : `${filteredProducts.length} productos encontrados`}
              </div>
            )}

            {/* Products Grid */}
            <ProductsGrid
              products={filteredProducts}
              searchQuery={searchQuery}
              hasActiveFilters={selectedCategories.size > 0}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

// Helper function to convert category name to slug
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
