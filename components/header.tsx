"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isOnWhiteBackground, setIsOnWhiteBackground] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Información", href: "/informacion" },
    { label: "Acerca", href: "/acerca" },
    { label: "Datos Tributarios", href: "/datos-tributarios" },
  ];

  // Animación inicial del header (drawer effect)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHeaderVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

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

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href === "/" && pathname === "/" && window.scrollY > 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 backdrop-blur-xl ${
          shouldUseWhiteBackground
            ? "bg-white/60 border-b border-black/10 supports-[backdrop-filter]:bg-white/60"
            : "bg-white/5 border-b border-white/10"
        }`}
        data-theme={shouldUseWhiteBackground ? "dark" : "light"}
        style={{
          transform: isHeaderVisible ? "translateY(0)" : "translateY(-100%)",
          opacity: isHeaderVisible ? 1 : 0,
          transition:
            "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease-out, background-color 0.3s, border-color 0.3s",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 py-4 flex items-center justify-between gap-8">
          <Link
            href="/"
            className="transition-all duration-300 hover:opacity-80 flex items-center"
            onClick={handleHomeClick}
          >
            <Image
              src="/new-logo.png"
              alt="Agri Star"
              width={160}
              height={60}
              className="h-10 sm:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
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

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="http://45.227.68.124/PEP/login"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-lg text-[0.9375rem] font-medium transition-all duration-300 hover:opacity-90 hover:-translate-y-px"
              style={{
                color: shouldUseWhiteBackground ? "#1a1a1a" : "#ffffff",
              }}
            >
              Login
            </a>
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

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 transition-all duration-300 hover:opacity-80"
            aria-label="Abrir menú"
          >
            <Menu
              className="w-6 h-6"
              style={{
                color: shouldUseWhiteBackground ? "#1a1a1a" : "#ffffff",
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent
          side="right"
          className="w-[85%] sm:w-[70%] p-0 flex flex-col"
        >
          <SheetHeader className="border-b border-[#E5E7EB] px-6 py-5">
            <div className="flex items-center justify-between">
              <SheetTitle className="text-xl font-semibold text-[#1a1a1a]">
                Menú
              </SheetTitle>
              <SheetClose className="rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#E5E7EB] focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
                <X className="h-5 w-5" />
                <span className="sr-only">Cerrar</span>
              </SheetClose>
            </div>
          </SheetHeader>

          <nav className="flex-1 overflow-y-auto px-6 py-6">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                      pathname === item.href
                        ? "bg-[#659C39]/10 text-[#659C39]"
                        : "text-[#1a1a1a] hover:bg-[#F3F4F6]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-[#E5E7EB] px-6 py-4 space-y-3">
            <a
              href="http://45.227.68.124/PEP/login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full bg-white hover:bg-[#F3F4F6] text-[#1a1a1a] border border-[#E5E7EB] py-3 px-6 rounded-lg font-medium text-center transition-colors"
            >
              Login
            </a>
            <Link
              href="/contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full bg-[#111] hover:bg-[#1a1a1a] text-white py-3 px-6 rounded-lg font-medium text-center transition-colors"
            >
              Contactanos
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
