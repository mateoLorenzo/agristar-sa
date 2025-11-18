import { FileText, Download } from "lucide-react";

export default function DatosTributariosPage() {
  const documents = [
    {
      id: 1,
      title: "Comprobante DDJJ anual Ingresos Brutos (Formulario CM 05)",
      url: "https://agristar.com.ar/wp-content/uploads/2020/10/DDJJ_ANUAL-CM-2019-1.pdf",
    },
    {
      id: 2,
      title: "Padrón Web",
      url: "https://agristar.com.ar/wp-content/uploads/2020/10/Constancia-Inscripccion-CM-1.pdf",
    },
    {
      id: 3,
      title: "Certificado MyPYME",
      url: "https://agristar.com.ar/wp-content/uploads/2020/11/Certificado_30709343307-2021.pdf",
    },
    {
      id: 4,
      title:
        "Certificado de Exclusión de los Regímenes de Retención, Percepción y/o Pagos a Cuenta",
      url: "https://agristar.com.ar/wp-content/uploads/2020/10/Certificado-Exclusion-IVA-1.pdf",
    },
    {
      id: 5,
      title: "Constancia de inscripción de Agente de Recaudación (ARBA)",
      url: "https://agristar.com.ar/wp-content/uploads/2020/10/Agente-ARBA-1.pdf",
    },
    {
      id: 6,
      title: "Constancia de Inscripción en AFIP",
      url: "https://agristar.com.ar/wp-content/uploads/2020/10/Constancia-Inscripcion-AFIP-1.pdf",
    },
  ];

  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-12 md:pb-16 bg-[#FAFAFA]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Page Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1a1a1a] mb-2 md:mb-4">
            Datos Tributarios
          </h1>
          <p className="text-base md:text-lg text-[#6B7280]">
            Información fiscal y certificaciones de Agri Star S.A.
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {documents.map((doc) => (
            <a
              key={doc.id}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl border border-[#E5E7EB] p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-[#659C39] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#659C39]/10 rounded-lg flex items-center justify-center group-hover:bg-[#659C39]/20 transition-colors">
                  <FileText className="w-6 h-6 text-[#659C39]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-medium text-[#1a1a1a] mb-2 group-hover:text-[#659C39] transition-colors leading-snug">
                    {doc.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-[#6B7280] group-hover:text-[#659C39] transition-colors">
                    <Download className="w-4 h-4" />
                    <span>Descargar documento</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-8 md:mt-12 bg-white rounded-xl border border-[#E5E7EB] p-6 sm:p-8 shadow-sm">
          <h2 className="text-lg sm:text-xl font-semibold text-[#1a1a1a] mb-3 md:mb-4">
            Información Empresarial
          </h2>
          <div className="prose prose-sm sm:prose-base max-w-none">
            <p className="text-sm sm:text-base text-[#374151] leading-relaxed mb-4">
              <strong>Agri Star S.A.</strong>, operando desde el año 2005, es
              una empresa especializada en la comercialización de agroquímicos y
              semillas, principalmente en los mercados de cultivos intensivos.
            </p>
            <div className="space-y-2 text-sm sm:text-base text-[#374151]">
              <p>
                <strong>Razón Social:</strong> Agri Star S.A.
              </p>
              <p>
                <strong>Dirección:</strong> Garibaldi 2619, B1834BCD Llavallol,
                Provincia de Buenos Aires, Argentina
              </p>
              <p>
                <strong>Teléfono:</strong>{" "}
                <a
                  href="tel:+541142312052"
                  className="text-[#659C39] hover:underline"
                >
                  (011) 4231-2052
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
