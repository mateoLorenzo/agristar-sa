"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isOnWhiteBackground, setIsOnWhiteBackground] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Información", href: "/informacion" },
    { label: "Acerca", href: "/acerca" },
  ];

  // Detectar si estamos en una página con fondo blanco (no home)
  useEffect(() => {
    setIsOnWhiteBackground(pathname !== "/");
  }, [pathname]);

  // Detectar scroll en home para cambiar estilos
  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Cambiar a fondo blanco después de pasar el hero (aproximadamente 100vh)
      setIsScrolled(scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const shouldUseWhiteBackground = isOnWhiteBackground || isScrolled;

  // Función para scroll smooth al top cuando ya estás en home
  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/" && window.scrollY > 0) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 backdrop-blur-xl ${
        shouldUseWhiteBackground
          ? "bg-white/60 border-b border-black/10 supports-[backdrop-filter]:bg-white/60"
          : "bg-white/5 border-b border-white/10"
      }`}
      data-theme={shouldUseWhiteBackground ? "dark" : "light"}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between gap-8">
        <Link
          href="/"
          className="transition-all duration-300 hover:opacity-80 flex items-center"
          onClick={handleHomeClick}
        >
          <Image
            src="/logo.png"
            alt="Agri Star"
            width={160}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex items-center gap-8 list-none">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative text-[0.9375rem] transition-all duration-300 hover:opacity-80 ${
                    pathname === item.href
                      ? "font-medium after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:right-0 after:h-0.5 after:transition-colors after:duration-300"
                      : "font-normal"
                  }`}
                  aria-current={pathname === item.href ? "page" : undefined}
                  onClick={item.href === "/" ? handleHomeClick : undefined}
                  style={{
                    color: shouldUseWhiteBackground ? "#1a1a1a" : "#ffffff",
                  }}
                >
                  {item.label}
                  {pathname === item.href && (
                    <span
                      className="absolute bottom-[-0.5rem] left-0 right-0 h-0.5 transition-colors duration-300"
                      style={{
                        background: shouldUseWhiteBackground
                          ? "#1a1a1a"
                          : "#ffffff",
                      }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/contacto"
          className="px-6 py-2.5 rounded-lg text-[0.9375rem] font-medium transition-all duration-300 hover:opacity-90 hover:-translate-y-px"
          style={{
            color: shouldUseWhiteBackground ? "#1a1a1a" : "#ffffff",
          }}
        >
          Contactanos
        </Link>
      </div>
    </header>
  );
}
