import Image from "next/image";
import Link from "next/link";
import { getProductById, getRelatedProducts } from "../_data/helpers";
import { PRODUCTS } from "../_data/products";
import { ProductCard } from "../_components/ProductCard";
import type { Metadata } from "next";

type Props = {
  params: { slug: string };
};

// Generate static paths for all products
export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: "STARECO - AGRI STAR S.A.",
    description:
      "Insecticida-acaricida orgánico de contacto para control biológico de plagas",
  };
}

export default function ProductDetailPage({ params }: Props) {
  // Por ahora usando datos hardcodeados para mostrar el layout
  const productFromDB = getProductById(params.slug);

  // Datos hardcodeados de ejemplo basados en STARECO
  const product = {
    id: params.slug,
    name: productFromDB?.name || "STARECO",
    logoUrl: productFromDB?.logoUrl || "/products/logos/STARECO.png",
    category: "Bioestimulantes" as const,
    mainCategory: "Línea Bio" as const,
    subcategory: "Bioinsumos" as const,
    composition: "Mezcla de ésteres vegetales 86% SL",
    description:
      "STARECO es un moderno insecticida-acaricida orgánico de contacto que se deposita sobre la cutícula de los artrópodos de cuerpo blando, y comienza a disolverla, evitando el intercambio gaseoso por lo que provoca la muerte del insecto. Stareco es un producto total y fácilmente biodegradable, y no produce ningún daño ambiental.",
    characteristics: [
      "Producto total y fácilmente biodegradable",
      "No produce ningún daño ambiental",
      "Especialmente indicado para el Control biológico de plagas",
      "Posee propiedades insecticidas y además particularidades de coadyuvante – adherente agrícola",
      "Puede aplicarse hasta antes de cosecha. No posee carencia",
      "Recomendado para el manejo integral de plagas (M.I.P)",
    ],
    applications: [
      "Control de ácaros",
      "Control de trips",
      "Control de mosca blanca",
      "Control de áfidos",
    ],
    recommendedCrops: [
      "Frutales de carozo",
      "Frutales de pepita",
      "Citrus",
      "Hortalizas",
      "Ornamentales",
    ],
    dosage:
      "Aplicar en intervalos de 3-10 días según sea necesario. Consultar con un ingeniero agrónomo para dosificación específica según cultivo y plaga.",
    certifications: {
      organic: true,
      pdf: "/docs/certificado-organico-stareco.pdf",
    },
    safetySheet: "/docs/hoja-seguridad-stareco.pdf",
    label: "/docs/etiqueta-stareco.pdf",
  };

  const relatedProducts = getRelatedProducts(product.id);

  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-4">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm"
          >
            <Link
              href="/"
              className="text-[#6B7280] hover:text-[#111] transition-colors"
            >
              Inicio
            </Link>
            <span className="text-[#D1D5DB]">/</span>
            <Link
              href="/productos"
              className="text-[#6B7280] hover:text-[#111] transition-colors"
            >
              Productos
            </Link>
            <span className="text-[#D1D5DB]">/</span>
            <span className="text-[#111] font-medium line-clamp-1">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 mb-16">
          {/* Left Column - Product Image & Category */}
          <div className="space-y-6">
            {/* Product Logo */}
            <div className="bg-white rounded-2xl border border-[#E5E7EB] p-8 md:p-12 shadow-sm">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <Image
                  src={product.logoUrl}
                  alt={`Logo de ${product.name}`}
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Category Badge */}
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#659C39]" />
                <div>
                  <p className="text-xs text-[#6B7280] uppercase tracking-wide font-medium mb-1">
                    Categoría
                  </p>
                  <p className="text-sm font-semibold text-[#111]">
                    {product.mainCategory} • {product.subcategory}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <Link
              href="/contacto"
              className="block w-full bg-[#659C39] hover:bg-[#5a8b32] text-white text-center py-4 px-6 rounded-xl font-medium transition-all hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-[#659C39] focus-visible:outline-offset-2"
            >
              Consultar sobre este producto
            </Link>
          </div>

          {/* Right Column - Product Details */}
          <div className="space-y-8">
            {/* Product Title */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#111] mb-4 leading-tight">
                {product.name}
              </h1>
              {product.composition && (
                <p className="text-lg text-[#6B7280] font-medium">
                  {product.composition}
                </p>
              )}
            </div>

            {/* Description */}
            {product.description && (
              <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 shadow-sm">
                <h2 className="text-sm font-semibold text-[#111] uppercase tracking-wide mb-3">
                  Descripción
                </h2>
                <p className="text-[#374151] leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}

            {/* Characteristics */}
            {product.characteristics && product.characteristics.length > 0 && (
              <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 shadow-sm">
                <h2 className="text-sm font-semibold text-[#111] uppercase tracking-wide mb-4">
                  Características
                </h2>
                <ul className="space-y-3">
                  {product.characteristics.map((char, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[#659C39] flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-[#374151]">{char}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Applications */}
            {product.applications && product.applications.length > 0 && (
              <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 shadow-sm">
                <h2 className="text-sm font-semibold text-[#111] uppercase tracking-wide mb-4">
                  Aplicaciones
                </h2>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#F8F9FB] text-sm text-[#374151] border border-[#E5E7EB]"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Recommended Crops */}
            {product.recommendedCrops &&
              product.recommendedCrops.length > 0 && (
                <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 shadow-sm">
                  <h2 className="text-sm font-semibold text-[#111] uppercase tracking-wide mb-4">
                    Cultivos Recomendados
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {product.recommendedCrops.map((crop, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#F0F7EC] text-sm text-[#659C39] font-medium"
                      >
                        {crop}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            {/* Dosage */}
            {product.dosage && (
              <div className="bg-[#FEF3C7] border border-[#FDE68A] rounded-xl p-6">
                <div className="flex gap-3">
                  <svg
                    className="w-6 h-6 text-[#D97706] flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h3 className="text-sm font-semibold text-[#92400E] mb-2">
                      Dosificación
                    </h3>
                    <p className="text-[#92400E]">{product.dosage}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Documents Section */}
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 shadow-sm">
              <h2 className="text-sm font-semibold text-[#111] uppercase tracking-wide mb-4">
                Documentación
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.safetySheet && (
                  <a
                    href={product.safetySheet}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg border border-[#E5E7EB] hover:border-[#659C39] hover:bg-[#F8F9FB] transition-all group"
                  >
                    <svg
                      className="w-5 h-5 text-[#6B7280] group-hover:text-[#659C39]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span className="text-sm text-[#374151] group-hover:text-[#659C39] font-medium">
                      Hoja de Seguridad
                    </span>
                  </a>
                )}
                {product.label && (
                  <a
                    href={product.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg border border-[#E5E7EB] hover:border-[#659C39] hover:bg-[#F8F9FB] transition-all group"
                  >
                    <svg
                      className="w-5 h-5 text-[#6B7280] group-hover:text-[#659C39]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-sm text-[#374151] group-hover:text-[#659C39] font-medium">
                      Etiqueta
                    </span>
                  </a>
                )}
                {product.certifications?.pdf && (
                  <a
                    href={product.certifications.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg border border-[#E5E7EB] hover:border-[#659C39] hover:bg-[#F8F9FB] transition-all group"
                  >
                    <svg
                      className="w-5 h-5 text-[#6B7280] group-hover:text-[#659C39]"
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
                    <span className="text-sm text-[#374151] group-hover:text-[#659C39] font-medium">
                      Certificado Orgánico
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#111] mb-2">
                Productos Relacionados
              </h2>
              <p className="text-[#6B7280]">
                Otros productos de la misma categoría
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
