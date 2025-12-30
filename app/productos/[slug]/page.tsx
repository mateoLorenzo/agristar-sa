import Image from "next/image";
import Link from "next/link";
import { getProductById, getRelatedProducts } from "../_data/helpers";
import { PRODUCTS } from "../_data/products";
import { RelatedProductsCarousel } from "../_components/RelatedProductsCarousel";
import { ProductImage } from "../_components/ProductImage";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate static paths for all products
export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductById(slug);

  if (!product) {
    return {
      title: "Producto no encontrado - AGRI STAR S.A.",
      description: "El producto que buscas no existe.",
    };
  }

  return {
    title: `${product.name} - AGRI STAR S.A.`,
    description: product.description || `${product.name}`,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  // 1. Await params y extraer el ID del producto desde la URL
  const { slug } = await params;
  const productId = slug;

  // 2. Buscar el producto por ID directamente desde el JSON
  const rawProduct = getProductById(productId);

  // 3. Si el producto no existe, mostrar mensaje de error
  if (!rawProduct) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#111] mb-4">
            Producto no encontrado
          </h1>
          <p className="text-[#6B7280] mb-8">
            El producto que buscas no existe.
          </p>
          <Link
            href="/productos"
            className="inline-block bg-[#223534] hover:bg-[#182424] text-white py-3 px-6 rounded-xl font-medium transition-all"
          >
            Volver a productos
          </Link>
        </div>
      </div>
    );
  }

  // 4. Mapear las categorías para obtener mainCategory y subcategory
  const categoryMapping: Record<string, any> = {
    bioinsumos: { mainCategory: "Línea Bio", subcategory: "Bioinsumos" },
    "linea-bio": { mainCategory: "Línea Bio", subcategory: "Bioinsumos" },
    feromonas: { mainCategory: "Línea Bio", subcategory: "Feromonas" },
    herbicidas: { mainCategory: "Agroquímicos", subcategory: "Herbicidas" },
    insecticidas: { mainCategory: "Agroquímicos", subcategory: "Insecticidas" },
    fungicidas: { mainCategory: "Agroquímicos", subcategory: "Fungicidas" },
    bioestimulantes: {
      mainCategory: "Agroquímicos",
      subcategory: "Bioestimulantes",
    },
    "coadyuvantes-fitoreguladores-pgr": {
      mainCategory: "Agroquímicos",
      subcategory: "Coadyuvantes, Fitoreguladores y PGR",
    },
    "fumigantes-de-suelo": {
      mainCategory: "Agroquímicos",
      subcategory: "Fumigantes de suelo",
    },
    agroquimicos: {
      mainCategory: "Agroquímicos",
      subcategory: "Bioestimulantes",
    },
  };

  const firstCategory = rawProduct.categories?.[0] || "bioinsumos";
  const mapping =
    categoryMapping[firstCategory] || categoryMapping["bioinsumos"];

  // 5. Construir el objeto producto con toda la data necesaria
  const product = {
    ...rawProduct,
    mainCategory: mapping.mainCategory,
    subcategory: mapping.subcategory,
  };

  // 6. Obtener productos relacionados
  const relatedProducts = getRelatedProducts(product.id);

  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-20 md:pt-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 py-3 md:py-4">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs md:text-sm overflow-x-auto scrollbar-hide"
          >
            <Link
              href="/"
              className="text-[#6B7280] hover:text-[#111] transition-colors whitespace-nowrap flex-shrink-0"
            >
              Inicio
            </Link>
            <span className="text-[#D1D5DB] flex-shrink-0">/</span>
            <Link
              href="/productos"
              className="text-[#6B7280] hover:text-[#111] transition-colors whitespace-nowrap flex-shrink-0"
            >
              Productos
            </Link>
            <span className="text-[#D1D5DB] flex-shrink-0">/</span>
            <span className="text-[#111] font-medium whitespace-nowrap">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 py-8 md:py-12">
        {/* Product Title - Moverlo arriba para mejor jerarquía visual */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#111] mb-2 md:mb-3 leading-tight">
            {product.name}
          </h1>
          {/* Category Badge inline */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#659C39]" />
            <p className="text-xs sm:text-sm text-[#6B7280] font-medium">
              {product.mainCategory} • {product.subcategory}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-4 lg:gap-4 mb-12 md:mb-16">
          {/* Left Column - Product Image y Documentación */}
          <div className="order-1 lg:order-1 flex flex-col space-y-4">
            {/* Product Logo - proporción 2:4 en mobile, altura controlada en desktop */}
            <div className="bg-white rounded-xl md:rounded-2xl border border-[#E5E7EB] p-6 sm:p-8 md:p-12 shadow-sm">
              <ProductImage logoUrl={product.logoUrl} name={product.name} />
            </div>

            {/* Documents Section - Debajo de la imagen */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {/* Hoja de Seguridad */}
              {product.safetySheet && (
                <a
                  href={product.safetySheet}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-[#E5E7EB] rounded-lg hover:border-[#659C39] hover:bg-[#F9FAFB] transition-all cursor-pointer p-4 md:p-5 flex items-center gap-3 md:gap-4"
                >
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-[#6B7280] flex-shrink-0"
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
                  <span className="text-sm md:text-base text-[#374151] font-medium">
                    Hoja de Seguridad
                  </span>
                </a>
              )}

              {/* Folleto */}
              {product.brochure && (
                <a
                  href={product.brochure}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-[#E5E7EB] rounded-lg hover:border-[#659C39] hover:bg-[#F9FAFB] transition-all cursor-pointer p-4 md:p-5 flex items-center gap-3 md:gap-4"
                >
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-[#6B7280] flex-shrink-0"
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
                  <span className="text-sm md:text-base text-[#374151] font-medium">
                    Folleto
                  </span>
                </a>
              )}

              {/* Etiqueta */}
              {product.label && (
                <a
                  href={product.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-[#E5E7EB] rounded-lg hover:border-[#659C39] hover:bg-[#F9FAFB] transition-all cursor-pointer p-4 md:p-5 flex items-center gap-3 md:gap-4"
                >
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-[#6B7280] flex-shrink-0"
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
                  <span className="text-sm md:text-base text-[#374151] font-medium">
                    Etiqueta
                  </span>
                </a>
              )}

              {/* Certificado Orgánico */}
              {product.certifications?.pdf && (
                <a
                  href={product.certifications.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-[#E5E7EB] rounded-lg hover:border-[#659C39] hover:bg-[#F9FAFB] transition-all cursor-pointer p-4 md:p-5 flex items-center gap-3 md:gap-4"
                >
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-[#6B7280] flex-shrink-0"
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
                  <span className="text-sm md:text-base text-[#374151] font-medium">
                    Certificado Orgánico
                  </span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column - Product Details (Descripción y CTA) */}
          <div className="order-2 lg:order-2 flex flex-col space-y-4">
            {/* Description - flex-1 para crecer y ocupar espacio disponible */}
            {product.description && (
              <div className="bg-white rounded-xl border border-[#E5E7EB] p-5 sm:p-6 md:p-8 shadow-sm flex-1 flex flex-col min-h-0">
                <h2 className="text-sm md:text-base font-semibold text-[#111] uppercase tracking-wide mb-3 md:mb-4 flex items-center gap-2 flex-shrink-0">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 text-[#659C39]"
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
                  Descripción
                </h2>
                <div className="overflow-y-auto flex-1 pr-2 custom-scrollbar min-h-0">
                  <p className="text-sm md:text-base text-[#374151] leading-relaxed whitespace-pre-line">
                    {product.description}
                  </p>
                </div>
              </div>
            )}

            {/* Contact CTA - flex-shrink-0 para mantener tamaño fijo */}
            <div className="bg-gradient-to-br from-[#000] to-[#000] rounded-xl p-5 sm:p-6 md:p-8 shadow-lg flex-shrink-0">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4">
                <div className="text-center sm:text-left">
                  <h3 className="text-base md:text-lg font-semibold text-white mb-1">
                    ¿Interesado en este producto?
                  </h3>
                  <p className="text-xs md:text-sm text-gray-300">
                    Contactanos para más información
                  </p>
                </div>
                <Link
                  href="/contacto"
                  className="w-full sm:w-auto bg-white hover:bg-gray-50 text-[#223534] px-5 md:px-6 py-2.5 md:py-3 rounded-lg text-sm md:text-base font-semibold transition-all hover:-translate-y-0.5 hover:shadow-md flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Consultar ahora
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <RelatedProductsCarousel products={relatedProducts} />
      </div>
    </div>
  );
}
