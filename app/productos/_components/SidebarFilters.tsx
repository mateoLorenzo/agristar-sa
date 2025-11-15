"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { CATEGORY_HIERARCHY } from "../_data/categories";
import type { MainCategory, Subcategory } from "../_data/types";

type FilterSelection = {
  mainCategories: Set<MainCategory>;
  subcategories: Set<Subcategory>;
};

export function SidebarFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<FilterSelection>(
    () => {
      const cat = searchParams.get("cat");
      const sub = searchParams.get("sub");
      return {
        mainCategories: cat
          ? new Set(cat.split(",") as MainCategory[])
          : new Set(),
        subcategories: sub
          ? new Set(sub.split(",") as Subcategory[])
          : new Set(),
      };
    }
  );

  // Sincronizar con URL cuando cambia
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (selectedFilters.mainCategories.size > 0) {
      params.set("cat", Array.from(selectedFilters.mainCategories).join(","));
    } else {
      params.delete("cat");
    }

    if (selectedFilters.subcategories.size > 0) {
      params.set("sub", Array.from(selectedFilters.subcategories).join(","));
    } else {
      params.delete("sub");
    }

    router.replace(`/productos?${params.toString()}`, { scroll: false });
  }, [selectedFilters, router, searchParams]);

  const handleMainCategoryToggle = (category: MainCategory) => {
    setSelectedFilters((prev) => {
      const next = { ...prev };
      if (next.mainCategories.has(category)) {
        next.mainCategories.delete(category);
        // Desmarcar también sus subcategorías
        const categoryData = CATEGORY_HIERARCHY.find(
          (c) => c.name === category
        );
        if (categoryData) {
          categoryData.subcategories.forEach((sub) => {
            next.subcategories.delete(sub);
          });
        }
      } else {
        next.mainCategories.add(category);
      }
      return {
        mainCategories: new Set(next.mainCategories),
        subcategories: new Set(next.subcategories),
      };
    });
  };

  const handleSubcategoryToggle = (
    mainCategory: MainCategory,
    subcategory: Subcategory
  ) => {
    setSelectedFilters((prev) => {
      const next = { ...prev };
      if (next.subcategories.has(subcategory)) {
        next.subcategories.delete(subcategory);
      } else {
        next.subcategories.add(subcategory);
        // Si agregamos una subcategoría, marcar también la categoría principal
        next.mainCategories.add(mainCategory);
      }
      return {
        mainCategories: new Set(next.mainCategories),
        subcategories: new Set(next.subcategories),
      };
    });
  };

  const handleReset = () => {
    setSelectedFilters({
      mainCategories: new Set(),
      subcategories: new Set(),
    });
  };

  const hasActiveFilters =
    selectedFilters.mainCategories.size > 0 ||
    selectedFilters.subcategories.size > 0;

  return (
    <aside className="w-full lg:w-[280px] lg:sticky lg:top-24 lg:self-start">
      <div className="bg-white rounded-xl border border-[#E5E7EB] p-6">
        {/* Mobile: Botón colapsable */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden w-full flex items-center justify-between mb-6 text-left"
          aria-expanded={isOpen}
          aria-controls="filters-content"
        >
          <h2 className="text-lg font-semibold text-[#111]">Filtros</h2>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`text-[#6B7280] transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>

        {/* Desktop: Título fijo */}
        <div className="hidden lg:flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-[#111]">Categorías</h2>
          {hasActiveFilters && (
            <button
              onClick={handleReset}
              className="text-sm text-[#6B7280] hover:text-[#111] transition-colors focus-visible:outline-2 focus-visible:outline-[#E5E7EB] focus-visible:outline-offset-2 rounded"
              aria-label="Restablecer filtros"
            >
              Restablecer
            </button>
          )}
        </div>

        {/* Contenido colapsable en mobile */}
        <div
          id="filters-content"
          className={`${isOpen ? "block" : "hidden"} lg:block`}
        >
          {/* Mobile: Botón restablecer */}
          {hasActiveFilters && (
            <div className="lg:hidden mb-4">
              <button
                onClick={handleReset}
                className="text-sm text-[#6B7280] hover:text-[#111] transition-colors focus-visible:outline-2 focus-visible:outline-[#E5E7EB] focus-visible:outline-offset-2 rounded"
                aria-label="Restablecer filtros"
              >
                Restablecer
              </button>
            </div>
          )}

          <nav aria-label="Filtros de categoría">
            <div className="space-y-4">
              {CATEGORY_HIERARCHY.map((categoryGroup) => {
                const isMainCategoryChecked =
                  selectedFilters.mainCategories.has(categoryGroup.name);

                return (
                  <div key={categoryGroup.name}>
                    {/* Categoría principal */}
                    <label className="flex items-center gap-3 cursor-pointer group py-1.5 px-2 -mx-2 rounded-lg hover:bg-[#F8F9FB] transition-colors">
                      <input
                        type="checkbox"
                        checked={isMainCategoryChecked}
                        onChange={() =>
                          handleMainCategoryToggle(categoryGroup.name)
                        }
                        className="w-4 h-4 rounded border-[#E5E7EB] text-[#111] focus:ring-2 focus:ring-[#E5E7EB] focus:ring-offset-0 cursor-pointer"
                        aria-label={`Filtrar por ${categoryGroup.name}`}
                      />
                      <span className="text-sm font-semibold text-[#111] group-hover:text-[#111] uppercase tracking-wide">
                        {categoryGroup.name}
                      </span>
                    </label>

                    {/* Subcategorías */}
                    <ul className="ml-7 mt-1 space-y-1">
                      {categoryGroup.subcategories.map((subcategory) => {
                        const isSubcategoryChecked =
                          selectedFilters.subcategories.has(subcategory);

                        return (
                          <li key={subcategory}>
                            <label className="flex items-center gap-3 cursor-pointer group py-1 px-2 -mx-2 rounded-lg hover:bg-[#F8F9FB] transition-colors">
                              <input
                                type="checkbox"
                                checked={isSubcategoryChecked}
                                onChange={() =>
                                  handleSubcategoryToggle(
                                    categoryGroup.name,
                                    subcategory
                                  )
                                }
                                className="w-3.5 h-3.5 rounded border-[#E5E7EB] text-[#111] focus:ring-2 focus:ring-[#E5E7EB] focus:ring-offset-0 cursor-pointer"
                                aria-label={`Filtrar por ${subcategory}`}
                              />
                              <span className="text-sm text-[#6B7280] group-hover:text-[#111]">
                                {subcategory}
                              </span>
                            </label>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </aside>
  );
}
