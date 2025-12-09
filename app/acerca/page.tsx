export default function AcercaPage() {
  return (
    <main className="min-h-screen pt-[120px] pb-16 bg-[#FAFAFA]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#1a1a1a] mb-4">
            Quiénes Somos
          </h1>
          <p className="text-lg text-[#6B7280]">
            Nuestra especialidad, es su tranquilidad
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Sobre Agri Star */}
          <div className="bg-white rounded-2xl border border-[#E5E7EB] p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1a1a1a] mb-6">
              Sobre Agri Star S.A.
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-[#374151] leading-relaxed">
                <p>
                  <strong>Agri Star S.A.</strong> es una empresa especializada
                  en la fabricación de bioestimulantes y comercialización de
                  Agroquímicos y Semillas hortícolas. Nuestros mercados son
                  principalmente los cultivos intensivos.
                </p>
                <p>
                  Nuestra misión es brindar productos de última generación, para
                  lo cual trabajamos constantemente desde hace 15 años en nuevas
                  tecnologías y desarrollos innovadores.
                </p>
                <p>
                  Contamos además con un equipo de profesionales altamente
                  capacitado para otorgarle una oportuna y adecuada respuesta a
                  cualquier inquietud o consulta.
                </p>
              </div>

              {/* Image */}
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src="/products/logos-nuevos/acerca-de.jpg"
                  alt="Campo de cultivo con tecnología de drones - Agri Star"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Historia y Desarrollo */}
          <div className="bg-white rounded-2xl border border-[#E5E7EB] p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1a1a1a] mb-6">
              Nuestra Historia
            </h2>
            <div className="space-y-4 text-[#374151] leading-relaxed">
              <p>
                Operando desde el año <strong>2005</strong>, Agri Star S.A. se
                ha consolidado como una empresa especializada en la
                comercialización de agroquímicos y semillas, principalmente en
                los mercados de cultivos intensivos.
              </p>
              <p>
                Desde hace 10 años la empresa comenzó a trabajar en la
                incorporación de especialidades de Bioinsumos. En{" "}
                <strong>2014</strong>, la firma lanzó al mercado su primer{" "}
                <strong>Insecticida Orgánico propio</strong>, marcando el
                principio de una serie de desarrollos en su paleta de productos,
                logrando importantes acuerdos con empresas nacionales y
                extranjeras.
              </p>
              <p>
                Porque día a día trabajamos para superarnos y brindarle los
                mejores productos, hoy podemos afirmar que{" "}
                <strong className="text-[#659C39]">
                  nuestra especialidad, es su tranquilidad
                </strong>
                .
              </p>
            </div>
          </div>

          {/* Características Destacadas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#659C39]/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#659C39]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                Productos de Última Generación
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                Trabajamos constantemente en nuevas tecnologías y desarrollos
                innovadores para ofrecer soluciones de vanguardia.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#659C39]/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#659C39]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                Equipo Profesional
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                Contamos con profesionales altamente capacitados para brindar
                respuestas oportunas y adecuadas.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#659C39]/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#659C39]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                Línea Bio
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                Pioneros en bioinsumos con nuestro primer insecticida orgánico
                propio lanzado en 2014.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#659C39]/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#659C39]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                Alcance Global
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                Importantes acuerdos con empresas nacionales y extranjeras para
                ampliar nuestra oferta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
