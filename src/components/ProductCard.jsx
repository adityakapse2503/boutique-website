import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Eye, ShoppingBag } from "lucide-react";
import { formatPrice } from "../data/products";
import { useCart } from "./Cartcontext";
import { useWishlist } from "./Wishlistcontext";

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addToCart } = useCart();
  const { isWished, toggleWish } = useWishlist();
  const secondImage = product.images[1] || product.images[0];

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="relative block overflow-hidden bg-cream aspect-[3/4]">
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-silk ${
            hovered ? "opacity-0" : "opacity-100"
          }`}
        />
        <img
          src={secondImage}
          alt={`${product.name} alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-silk ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {(product.newArrival || product.originalPrice) && (
          <span className="absolute top-3 left-3 bg-ivory/95 text-charcoal text-[0.62rem] tracking-widest2 uppercase px-3 py-1.5">
            {product.newArrival ? "New" : "Sale"}
          </span>
        )}

        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWish(product.id);
          }}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-ivory/90 flex items-center justify-center transition-transform duration-300 hover:scale-105"
          aria-label={isWished(product.id) ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            size={15}
            className={isWished(product.id) ? "fill-charcoal text-charcoal" : "text-charcoal"}
          />
        </button>

        <div
          className={`absolute inset-x-3 bottom-3 flex gap-2 transition-all duration-500 ease-silk ${
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="flex-1 bg-ivory/95 text-charcoal text-[0.65rem] tracking-widest2 uppercase py-2.5 flex items-center justify-center gap-2 hover:bg-ivory"
          >
            <ShoppingBag size={13} /> Add to Bag
          </button>
          <button
            onClick={(e) => e.preventDefault()}
            className="w-10 bg-charcoal/90 text-ivory flex items-center justify-center hover:bg-charcoal"
            aria-label="Quick view"
          >
            <Eye size={14} />
          </button>
        </div>
      </Link>

      <Link to={`/product/${product.id}`} className="block mt-4">
        <h3 className="font-display text-lg text-charcoal">{product.name}</h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm text-charcoal/80">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-xs text-charcoal/40 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
}
