"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [inputValue, setInputValue] = useState("");
  const animation = useScrollAnimation({ delay: 0.15 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    // Llamar a onSearch mientras el usuario escribe
    onSearch(value.trim());
  };

  return (
    <div
      ref={animation.ref}
      className="relative"
      style={{
        opacity: animation.isVisible ? 1 : 0,
        transform: animation.isVisible ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
      }}
    >
      <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#6B7280]"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      </div>
      <input
        type="search"
        value={inputValue}
        onChange={handleChange}
        placeholder="Buscar producto"
        className="w-full h-12 pl-11 pr-4 border border-[#E5E7EB] rounded-lg bg-white text-[#111] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#E5E7EB] focus:ring-offset-0 transition-all"
        aria-label="Buscar producto"
      />
    </div>
  );
}
