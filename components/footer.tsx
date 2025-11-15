"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="text-white py-24 pb-12 m-0"
      style={{
        background: "#101C1C",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12 mb-12">
          <div className="flex flex-col gap-6">
            <p className="text-white/70 text-[0.9375rem] leading-relaxed max-w-[400px]">
              Agri Star S.A., fundada en 2005, es una empresa especializada en
              la comercialización de agroquímicos, fertilizantes y semillas. Nos
              destacamos por ofrecer productos confiables, de alto rendimiento y
              compatibles con las buenas prácticas agrícolas.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-base font-semibold text-white">Compañía</h3>
            <ul className="list-none flex flex-col gap-3">
              <li>
                <Link
                  href="/"
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
              <li>
                <Link
                  href="/novedades"
                  className="text-white/70 text-[0.9375rem] transition-colors hover:text-white"
                >
                  Novedades
                </Link>
              </li>
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

          <div className="flex flex-col gap-6">
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
                  href="/productos?cat=Agroquímicos&sub=Fertilizantes"
                  className="text-white/70 text-[0.9375rem] transition-colors hover:text-white"
                >
                  Fertilizantes
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

          <div className="flex flex-col gap-6">
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
          <div className="flex gap-6">
            <a
              href="#"
              aria-label="Instagram"
              className="text-white/70 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 rounded"
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
              href="#"
              aria-label="Facebook"
              className="text-white/70 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 rounded"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-white/70 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 rounded"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-white/70 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 rounded"
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
