import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";

export default function ProductCarousel({ products }) {
  const trackRef = useRef(null);

  const scrollBy = (dir) => {
    if (!trackRef.current) return;
    const cardWidth = trackRef.current.firstChild?.offsetWidth || 280;
    trackRef.current.scrollBy({ left: dir * (cardWidth + 24), behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex gap-5 md:gap-8 overflow-x-auto no-scrollbar scroll-smooth pb-2"
      >
        {products.map((p) => (
          <div key={p.id} className="min-w-[62%] sm:min-w-[38%] lg:min-w-[24%]">
            <ProductCard product={p} />
          </div>
        ))}
      </div>

      <button
        onClick={() => scrollBy(-1)}
        className="hidden md:flex absolute -left-5 top-[38%] -translate-y-1/2 w-11 h-11 rounded-full bg-ivory border border-charcoal/15 items-center justify-center shadow-sm hover:bg-charcoal hover:text-ivory transition-colors duration-300"
        aria-label="Previous"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={() => scrollBy(1)}
        className="hidden md:flex absolute -right-5 top-[38%] -translate-y-1/2 w-11 h-11 rounded-full bg-ivory border border-charcoal/15 items-center justify-center shadow-sm hover:bg-charcoal hover:text-ivory transition-colors duration-300"
        aria-label="Next"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
