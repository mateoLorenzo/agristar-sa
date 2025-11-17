import { ProductCard } from "./ProductCard";
import { EmptyState } from "./EmptyState";
import type { Product } from "../_data/types";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return <EmptyState />;
  }

  return (
    <>
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </>
  );
}
