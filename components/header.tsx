"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()

  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Información", href: "/informacion" },
    { label: "Acerca", href: "/acerca" },
    { label: "Datos Tributarios", href: "/datos-tributarios" },
    { label: "Contacto", href: "/contacto" },
  ]

  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="logo">
          Greenco
        </Link>

        <nav className="nav" aria-label="Main navigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`nav-link ${pathname === item.href ? "active" : ""}`}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/contacto" className="header-cta">
          Get Started
        </Link>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
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
        
        @media (max-width: 768px) {
          .nav {
            display: none;
          }
        }
      `}</style>
    </header>
  )
}
