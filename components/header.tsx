"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function Header() {
  const pathname = usePathname()
  const [isOnWhiteBackground, setIsOnWhiteBackground] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Información", href: "/informacion" },
    { label: "Acerca", href: "/acerca" },
  ]

  // Detectar si estamos en una página con fondo blanco (no home)
  useEffect(() => {
    setIsOnWhiteBackground(pathname !== "/")
  }, [pathname])

  // Detectar scroll en home para cambiar estilos
  useEffect(() => {
    if (pathname !== "/") return

    const handleScroll = () => {
      const scrollY = window.scrollY
      // Cambiar a fondo blanco después de pasar el hero (aproximadamente 100vh)
      setIsScrolled(scrollY > window.innerHeight * 0.8)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  const shouldUseWhiteBackground = isOnWhiteBackground || isScrolled

  // Función para scroll smooth al top cuando ya estás en home
  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/" && window.scrollY > 0) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <header className={`header ${shouldUseWhiteBackground ? "header-white" : ""}`}>
      <div className="header-container">
        <Link href="/" className="logo" onClick={handleHomeClick}>
          Agri Star
        </Link>

        <nav className="nav" aria-label="Main navigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`nav-link ${pathname === item.href ? "active" : ""}`}
                  aria-current={pathname === item.href ? "page" : undefined}
                  onClick={item.href === "/" ? handleHomeClick : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/contacto" className="header-cta">
          Contactanos
        </Link>
      </div>

      <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 50;
          width: 100%;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          transition: all 0.3s ease;
        }

        /* Estilos cuando está sobre fondo blanco - traducidos de Tailwind */
        .header-white {
          background: rgba(255, 255, 255, 0.95);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        @supports (backdrop-filter: blur(10px)) {
          .header-white {
            background: rgba(255, 255, 255, 0.6);
          }
        }

        .header-white .logo,
        .header-white .nav-link {
          color: var(--color-text);
        }

        .header-white .nav-link.active::after {
          background: var(--color-text);
        }

        .header-white .header-cta {
          background: var(--color-text);
          color: var(--color-white);
        }

        .header-white .header-cta:hover {
          background: rgba(26, 26, 26, 0.9);
        }
        
        .header-container {
          max-width: var(--container-max);
          margin: 0 auto;
          padding: 1rem var(--container-padding);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }
        
        .logo {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--color-white);
          transition: opacity 0.2s;
        }
        
        .logo:hover {
          opacity: 0.8;
        }
        
        .nav-list {
          display: flex;
          align-items: center;
          gap: 2rem;
          list-style: none;
        }
        
        .nav-link {
          color: var(--color-white);
          font-size: 0.9375rem;
          font-weight: 400;
          transition: opacity 0.2s;
          position: relative;
        }
        
        .nav-link:hover {
          opacity: 0.8;
        }
        
        .nav-link.active {
          font-weight: 500;
        }
        
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -0.5rem;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--color-white);
        }
        
        .header-cta {
          padding: 0.625rem 1.5rem;
          background: var(--color-white);
          color: var(--color-text);
          border-radius: 0.5rem;
          font-size: 0.9375rem;
          font-weight: 500;
          transition: all 0.2s;
        }
        
        .header-cta:hover {
          background: rgba(255, 255, 255, 0.9);
          transform: translateY(-1px);
        }
        
        .header-cta:focus-visible {
          outline: 2px solid var(--color-white);
          outline-offset: 2px;
        }

        .header-white .header-cta:focus-visible {
          outline: 2px solid var(--color-text);
        }
        
        @media (max-width: 768px) {
          .nav {
            display: none;
          }
        }
      `}</style>
    </header>
  )
}
