"use client";

import { CATEGORY_HIERARCHY } from "../_data/categories";
import type { MainCategory, Subcategory } from "../_data/types";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { X } from "lucide-react";

interface FilterDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedCategories: Set<string>;
  onCategoryChange: (categories: Set<string>) => void;
}

export function FilterDrawer({
  open,
  onOpenChange,
  selectedCategories,
  onCategoryChange,
}: FilterDrawerProps) {
  const handleCategoryToggle = (category: string) => {
    const newCategories = new Set(selectedCategories);
    if (newCategories.has(category)) {
      newCategories.delete(category);

      // Si es una categoría principal, también quitar sus subcategorías
      const categoryData = CATEGORY_HIERARCHY.find((c) => c.name === category);
      if (categoryData) {
        categoryData.subcategories.forEach((sub) => {
          newCategories.delete(sub);
        });
      }
    } else {
      newCategories.add(category);
    }
    onCategoryChange(newCategories);
  };

  const handleSubcategoryToggle = (
    mainCategory: MainCategory,
    subcategory: Subcategory
  ) => {
    const newCategories = new Set(selectedCategories);
    if (newCategories.has(subcategory)) {
      newCategories.delete(subcategory);
    } else {
      newCategories.add(subcategory);
    }
    onCategoryChange(newCategories);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-[75%] sm:w-[75%] md:w-[60%] p-0 flex flex-col"
      >
        <SheetHeader className="border-b border-[#E5E7EB] px-6 py-5">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-xl font-semibold text-[#1a1a1a]">
              Filtros
            </SheetTitle>
            <SheetClose className="rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#E5E7EB] focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
              <X className="h-5 w-5" />
              <span className="sr-only">Cerrar</span>
            </SheetClose>
          </div>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {/* Categorías */}
          <div className="space-y-6">
            {CATEGORY_HIERARCHY.map((categoryGroup) => {
              const isMainCategoryChecked = selectedCategories.has(
                categoryGroup.name
              );

              return (
                <div key={categoryGroup.name}>
                  {/* Categoría principal */}
                  <label className="flex items-start gap-3 cursor-pointer group py-2">
                    <input
                      type="checkbox"
                      checked={isMainCategoryChecked}
                      onChange={() => handleCategoryToggle(categoryGroup.name)}
                      className="mt-0.5 w-5 h-5 rounded border-[#D1D5DB] text-[#111] focus:ring-2 focus:ring-[#659C39] focus:ring-offset-0 cursor-pointer"
                    />
                    <span className="text-base font-semibold text-[#1a1a1a] uppercase tracking-wide">
                      {categoryGroup.name}
                    </span>
                  </label>

                  {/* Subcategorías */}
                  <ul className="ml-8 mt-3 space-y-3">
                    {categoryGroup.subcategories.map((subcategory) => {
                      const isSubcategoryChecked =
                        selectedCategories.has(subcategory);

                      return (
                        <li key={subcategory}>
                          <label className="flex items-start gap-3 cursor-pointer group py-1">
                            <input
                              type="checkbox"
                              checked={isSubcategoryChecked}
                              onChange={() =>
                                handleSubcategoryToggle(
                                  categoryGroup.name,
                                  subcategory
                                )
                              }
                              className="mt-0.5 w-4 h-4 rounded border-[#D1D5DB] text-[#111] focus:ring-2 focus:ring-[#659C39] focus:ring-offset-0 cursor-pointer"
                            />
                            <span className="text-sm text-[#374151] leading-relaxed">
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
        </div>

        {/* Botón de aplicar */}
        <div className="border-t border-[#E5E7EB] px-6 py-4">
          <button
            onClick={() => onOpenChange(false)}
            className="w-full bg-[#111] hover:bg-[#1a1a1a] text-white py-3 px-6 rounded-lg font-medium transition-colors"
          >
            Aplicar Filtros
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
