"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Footer() {
  const pathname = usePathname();

  // Animaciones escalonadas para cada columna del footer
  const aboutAnimation = useScrollAnimation({ delay: 0 });
  const companyAnimation = useScrollAnimation({ delay: 0.08 });
  const agroquimicosAnimation = useScrollAnimation({ delay: 0.16 });
  const lineaBioAnimation = useScrollAnimation({ delay: 0.24 });
  const socialAnimation = useScrollAnimation({ delay: 0.28 });

  // Función para scroll smooth al top cuando ya estás en home
  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      className="text-white py-24 pb-12 m-0"
      style={{
        background: "#101C1C",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12 mb-12">
          <div
            ref={aboutAnimation.ref}
            className="flex flex-col gap-6"
            style={{
              opacity: aboutAnimation.isVisible ? 1 : 0,
              transform: aboutAnimation.isVisible
                ? "translateY(0)"
                : "translateY(20px)",
              transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
            }}
          >
            <p className="text-white/70 text-[0.9375rem] leading-relaxed max-w-[400px]">
              Agri Star S.A., fundada en 2005, es una empresa especializada en
              la comercialización de agroquímicos, bioestimulantes y semillas.
              Nos destacamos por ofrecer productos confiables, de alto
              rendimiento y compatibles con las buenas prácticas agrícolas.
            </p>
          </div>

          <div
            ref={companyAnimation.ref}
            className="flex flex-col gap-6"
            style={{
              opacity: companyAnimation.isVisible ? 1 : 0,
              transform: companyAnimation.isVisible
                ? "translateY(0)"
                : "translateY(20px)",
              transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
            }}
          >
            <h3 className="text-base font-semibold text-white">Compañía</h3>
            <ul className="list-none flex flex-col gap-3">
              <li>
                <Link
                  href="/"
                  onClick={handleHomeClick}
                  className="text-white/70 text-[0.9375rem] transition-colors hover:text-white"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/acerca"
                  className="text-white/70 text-[0.9375rem] transition-colors hover:text-white"
                >
                  Acerca de Agri Star
                </Link>
              </li>
              <li>
                <Link
                  href="/informacion"
                  className="text-white/70 text-[0.9375rem] transition-colors hover:text-white"
                >
                  Información
                </Link>
              </li>
              <li>
                <Link
                  href="/datos-tributarios"
                  className="text-white/70 text-[0.9375rem] transition-colors hover:text-white"
                >
                  Datos Tributarios
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/novedades"
                  className="text-white/70 text-[0.9375rem] transition-colors hover:text-white"
                >
                  Novedades
                </Link>
              </li> */}
              <li>
                <Link
                  href="/contacto"
                  className="text-white/70 text-[0.9375rem] transition-colors hover:text-white"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div
            ref={agroquimicosAnimation.ref}
            className="flex flex-col gap-6"
            style={{
              opacity: agroquimicosAnimation.isVisible ? 1 : 0,
              transform: agroquimicosAnimation.isVisible
                ? "translateY(0)"
                : "translateY(20px)",
              transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
            }}
          >
            <h3 className="text-base font-semibold text-white">Agroquímicos</h3>
            <ul className="list-none flex flex-col gap-3">
              <li>
                <Link
                  href="/productos?cat=Agroquímicos&sub=Fungicidas"
                  className="text-white/70 text-[0.9375rem] transition-colors hover:text-white"
                >
                  Fungicidas
                </Link>
              </li>
              <li>
                <Link
                  href="/productos?cat=Agroquímicos&sub=Insecticidas"
                  className="text-white/70 text-[0.9375rem] transition-colors hover:text-white"
                >
                  Insecticidas
                </Link>
              </li>
              <li>
                <Link
                  href="/productos?cat=Agroquímicos&sub=Herbicidas"
                  className="text-white/70 text-[0.9375rem] transition-colors hover:text-white"
                >
                  Herbicidas
                </Link>
              </li>
              <li>
                <Link
                  href="/productos?cat=Agroquímicos&sub=Bioestimulantes"
                  className="text-white/70 text-[0.9375rem] transition-colors hover:text-white"
                >
                  Bioestimulantes
                </Link>
              </li>
              <li>
                <Link
                  href="/productos?cat=Agroquímicos&sub=Coadyuvantes, Fitoreguladores y PGR"
                  className="text-white/70 text-[0.9375rem] transition-colors hover:text-white"
                >
                  Coadyuvantes / PGR
                </Link>
              </li>
              <li>
                <Link
                  href="/productos?cat=Agroquímicos&sub=Fumigantes de suelo"
                  className="text-white/70 text-[0.9375rem] transition-colors hover:text-white"
                >
                  Fumigantes de suelo
                </Link>
              </li>
            </ul>
          </div>

          <div
            ref={lineaBioAnimation.ref}
            className="flex flex-col gap-6"
            style={{
              opacity: lineaBioAnimation.isVisible ? 1 : 0,
              transform: lineaBioAnimation.isVisible
                ? "translateY(0)"
                : "translateY(20px)",
              transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
            }}
          >
            <h3 className="text-base font-semibold text-white">Línea Bio</h3>
            <ul className="list-none flex flex-col gap-3">
              <li>
                <Link
                  href="/productos?cat=Línea Bio&sub=Bioinsumos"
                  className="text-white/70 text-[0.9375rem] transition-colors hover:text-white"
                >
                  Bioinsumos
                </Link>
              </li>
              <li>
                <Link
                  href="/productos?cat=Línea Bio&sub=Feromonas"
                  className="text-white/70 text-[0.9375rem] transition-colors hover:text-white"
                >
                  Feromonas
                </Link>
              </li>
            </ul>
            <h3 className="text-base font-semibold text-white mt-4">
              Contacto
            </h3>
            <ul className="list-none flex flex-col gap-3">
              <li>
                <a
                  href="tel:+541142312052"
                  className="text-white/70 text-[0.9375rem] transition-colors hover:text-white"
                >
                  (011) 4231-2052
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@agristar.com.ar"
                  className="text-white/70 text-[0.9375rem] transition-colors hover:text-white"
                >
                  info@agristar.com.ar
                </a>
              </li>
              <li className="text-white/70 text-[0.9375rem]">
                Buenos Aires, Argentina
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10">
          <div
            ref={socialAnimation.ref}
            className="flex gap-6"
            style={{
              opacity: socialAnimation.isVisible ? 1 : 0,
              transform: socialAnimation.isVisible
                ? "translateY(0)"
                : "translateY(20px)",
              transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
            }}
          >
            <Link
              href="/contacto"
              aria-label="Contacto"
              className="text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 rounded"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </Link>
            <a
              href="https://www.instagram.com/agristar.arg/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 rounded"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            <a
              href="https://www.youtube.com/channel/UCwyjvmxeHYUdJNcb9DNXdfw"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 rounded"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/agri-star-s-a-"
              target="_blank"
              aria-label="LinkedIn"
              className="text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 rounded"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
