"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { CATEGORIES } from "../_data/categories";
import { parseCatParam, categoriesToCSV } from "../_lib/utils";
import type { Category } from "../_data/types";

export function SidebarFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState<Set<Category>>(
    () => parseCatParam(searchParams.get("cat"))
  );
  const [isOpen, setIsOpen] = useState(false);

  // Sincronizar con URL cuando cambia
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (selectedCategories.size > 0) {
      params.set("cat", categoriesToCSV(Array.from(selectedCategories)));
    } else {
      params.delete("cat");
    }
    router.replace(`/productos?${params.toString()}`, { scroll: false });
  }, [selectedCategories, router, searchParams]);

  const handleCategoryToggle = (category: Category) => {
    setSelectedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  const handleReset = () => {
    setSelectedCategories(new Set());
  };

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
          {selectedCategories.size > 0 && (
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
          {selectedCategories.size > 0 && (
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
            <ul className="space-y-3">
              {CATEGORIES.map((category) => {
                const isChecked = selectedCategories.has(category);
                return (
                  <li key={category}>
                    <label
                      className="flex items-center gap-3 cursor-pointer group py-2 px-2 -mx-2 rounded-lg hover:bg-[#F8F9FB] transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleCategoryToggle(category)}
                        className="w-4 h-4 rounded border-[#E5E7EB] text-[#111] focus:ring-2 focus:ring-[#E5E7EB] focus:ring-offset-0 cursor-pointer"
                        aria-label={`Filtrar por ${category}`}
                      />
                      <span className="text-sm text-[#111] group-hover:text-[#111]">
                        {category}
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
}

