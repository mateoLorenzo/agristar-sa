import { Suspense } from "react";
import { ProductsContent } from "./_components/ProductsContent";

export default function ProductosPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen pt-[120px] pb-16">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="mb-8">
              <div className="h-12 bg-[#E5E7EB] rounded mb-2 animate-pulse w-64" />
              <div className="h-6 bg-[#E5E7EB] rounded animate-pulse w-96" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 lg:gap-8">
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl border border-[#E5E7EB] p-6">
                  <div className="h-6 bg-[#E5E7EB] rounded mb-6 animate-pulse" />
                  <div className="space-y-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="h-10 bg-[#E5E7EB] rounded animate-pulse"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="h-12 bg-[#E5E7EB] rounded-lg mb-6 animate-pulse" />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl border border-[#E5E7EB] p-4 animate-pulse"
                    >
                      <div className="bg-[#F8F9FB] rounded-lg h-16 mb-4" />
                      <div className="h-5 bg-[#E5E7EB] rounded mb-3 w-3/4" />
                      <div className="flex items-center justify-between">
                        <div className="h-4 bg-[#E5E7EB] rounded w-24" />
                        <div className="w-9 h-9 bg-[#E5E7EB] rounded-full" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
