import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function CollectionCard({ collection, size = "normal" }) {
  const heightClass =
    size === "tall" ? "h-[560px]" : size === "short" ? "h-[340px]" : "h-[440px]";

  return (
    <Link
      to={`/collections/${collection.id}`}
      className={`group relative block w-full overflow-hidden ${heightClass}`}
    >
      <img
        src={collection.image}
        alt={collection.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-silk group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/0 to-charcoal/0 transition-colors duration-500 group-hover:from-charcoal/85" />

      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <div className="flex items-end justify-between">
          <div className="transition-transform duration-500 ease-silk group-hover:-translate-y-1">
            <h3 className="font-display text-ivory text-2xl md:text-3xl">
              {collection.name}
            </h3>
            <p className="text-ivory/70 text-sm mt-1 max-w-[220px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {collection.tagline}
            </p>
          </div>
          <span className="w-10 h-10 rounded-full border border-ivory/50 flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-ivory group-hover:border-ivory">
            <ArrowUpRight
              size={16}
              className="text-ivory transition-colors duration-500 group-hover:text-charcoal"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
