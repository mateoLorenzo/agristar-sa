"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { SearchBar } from "./SearchBar";
import { SidebarFilters } from "./SidebarFilters";
import { FilterDrawer } from "./FilterDrawer";
import { ProductsGrid } from "./ProductsGrid";
import { PRODUCTS } from "../_data/products";
import { SlidersHorizontal } from "lucide-react";

export function ProductsContent() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(
    new Set()
  );
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  // Leer parámetros de URL y sincronizar con el estado
  useEffect(() => {
    const subParam = searchParams.get("sub");
    const catParam = searchParams.get("cat");
    const qParam = searchParams.get("q");

    // Sincronizar búsqueda con URL
    if (qParam) {
      setSearchQuery(qParam);
    } else {
      setSearchQuery("");
    }

    // Sincronizar categorías con URL
    if (subParam) {
      const decodedSub = decodeURIComponent(subParam);
      setSelectedCategories(new Set([decodedSub]));
    } else if (catParam) {
      // Si solo hay categoría principal, agregarla
      const decodedCat = decodeURIComponent(catParam);
      setSelectedCategories(new Set([decodedCat]));
    } else {
      // Si no hay parámetros de categoría, limpiar filtros
      setSelectedCategories(new Set());
    }
  }, [searchParams]);

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
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Page Header */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1a1a1a] mb-2">
            Productos
          </h1>
          <p className="text-base md:text-lg text-[#6B7280]">
            Explorá nuestro catálogo completo
          </p>
        </div>

        {/* Layout: Sidebar + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 lg:gap-8">
          {/* Sidebar - Hidden on mobile, visible on desktop */}
          <aside
            className="hidden lg:block lg:max-w-[280px]"
            aria-label="Filtros de productos"
          >
            <SidebarFilters
              selectedCategories={selectedCategories}
              onCategoryChange={setSelectedCategories}
            />
          </aside>

          {/* Main Content */}
          <div className="min-w-0">
            {/* Search Bar + Filter Button (Mobile) */}
            <div className="mb-6 flex gap-3">
              <div className="flex-1">
                <SearchBar onSearch={setSearchQuery} />
              </div>
              {/* Mobile Filter Button */}
              <button
                onClick={() => setIsFilterDrawerOpen(true)}
                className="lg:hidden flex items-center justify-center w-12 h-12 bg-white border-2 border-[#D1D5DB] rounded-lg hover:border-[#9CA3AF] transition-colors focus-visible:outline-2 focus-visible:outline-[#659C39] focus-visible:outline-offset-2 relative"
                aria-label="Abrir filtros"
                style={{
                  border: "1px solid #e5e5e5",
                }}
              >
                <SlidersHorizontal className="w-5 h-5 text-[#6B7280]" />
                {selectedCategories.size > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#659C39] text-white text-xs font-semibold rounded-full flex items-center justify-center">
                    {selectedCategories.size}
                  </span>
                )}
              </button>
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

      {/* Filter Drawer (Mobile) */}
      <FilterDrawer
        open={isFilterDrawerOpen}
        onOpenChange={setIsFilterDrawerOpen}
        selectedCategories={selectedCategories}
        onCategoryChange={setSelectedCategories}
      />
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
