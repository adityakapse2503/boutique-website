import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products, columns = 4 }) {
  const colClass =
    columns === 3
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <div className={`grid grid-cols-2 ${colClass} gap-x-5 gap-y-10 md:gap-x-8 md:gap-y-14`}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
