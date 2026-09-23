import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart, Minus, Plus, ChevronDown, Truck } from "lucide-react";
import { getProductById, getRelatedProducts, formatPrice } from "../data/products";
import ProductCarousel from "../components/ProductCarousel";
import Button from "../components/Button";
import { useCart } from "../components/Cartcontext";
import { useWishlist } from "../components/Wishlistcontext";

const accordionItems = [
  {
    title: "Description",
    body: (p) => p.description,
  },
  {
    title: "Fabric & Details",
    body: (p) => `${p.fabric}. Colour: ${p.color}. Finished entirely by hand in our Delhi atelier.`,
  },
  {
    title: "Size & Fit",
    body: () =>
      "True to size, tailored fit. For an in-between size, we recommend sizing up. See full size chart for detailed measurements.",
  },
  {
    title: "Shipping & Returns",
    body: () =>
      "Complimentary shipping across India on orders over ₹15,000. Made-to-order pieces ship in 3–4 weeks. Easy 7-day returns on unworn, unaltered pieces.",
  },
  {
    title: "Care Instructions",
    body: () => "Dry clean only. Store folded in muslin, away from direct sunlight.",
  },
];

function Accordion({ product }) {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="border-t border-charcoal/15 mt-8">
      {accordionItems.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.title} className="border-b border-charcoal/15">
            <button
              className="w-full flex items-center justify-between py-4 text-left"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
            >
              <span className="text-sm tracking-wide">{item.title}</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-400 ease-silk ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`grid transition-all duration-400 ease-silk ${
                isOpen ? "grid-rows-[1fr] opacity-100 pb-4" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden text-sm text-charcoal/65 leading-relaxed">
                {item.body(product)}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Product() {
  const { productId } = useParams();
  const product = getProductById(productId);
  const [activeImage, setActiveImage] = useState(0);
  const [size, setSize] = useState(null);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();
  const { isWished, toggleWish } = useWishlist();

  if (!product) {
    return (
      <div className="pt-48 pb-24 text-center max-w-md mx-auto px-6">
        <h1 className="font-display text-3xl mb-4">Product not found</h1>
        <Link to="/collections" className="text-gold underline">
          Browse collections
        </Link>
      </div>
    );
  }

  const related = getRelatedProducts(product, 4);

  return (
    <div className="pt-28 md:pt-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Gallery */}
        <div>
          <div className="overflow-hidden bg-cream aspect-[3/4]">
            <img
              src={product.images[activeImage]}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-silk hover:scale-105"
            />
          </div>
          <div className="flex gap-3 mt-4">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`w-20 h-24 overflow-hidden border transition-colors duration-300 ${
                  activeImage === i ? "border-charcoal" : "border-transparent opacity-70"
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="max-w-md">
          <p className="text-[0.72rem] tracking-widest2 uppercase text-clay">
            {product.category}
          </p>
          <h1 className="font-display text-3xl md:text-4xl mt-3">{product.name}</h1>
          <div className="flex items-center gap-3 mt-4">
            <span className="text-lg">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-charcoal/40 line-through text-sm">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <p className="text-charcoal/65 mt-6 leading-relaxed">{product.description}</p>

          {/* Sizes */}
          <div className="mt-8">
            <p className="text-[0.72rem] tracking-widest2 uppercase mb-3">Size</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-4 py-2 text-sm border transition-colors duration-300 ${
                    size === s
                      ? "bg-charcoal text-ivory border-charcoal"
                      : "border-charcoal/25 hover:border-charcoal"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + actions */}
          <div className="flex items-center gap-4 mt-8">
            <div className="flex items-center border border-charcoal/25">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-10 h-11 flex items-center justify-center"
                aria-label="Decrease quantity"
              >
                <Minus size={14} />
              </button>
              <span className="w-8 text-center text-sm">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="w-10 h-11 flex items-center justify-center"
                aria-label="Increase quantity"
              >
                <Plus size={14} />
              </button>
            </div>

            <button
              onClick={() => toggleWish(product.id)}
              className="w-11 h-11 border border-charcoal/25 flex items-center justify-center shrink-0"
              aria-label={isWished(product.id) ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart
                size={16}
                className={isWished(product.id) ? "fill-charcoal text-charcoal" : ""}
              />
            </button>
          </div>

          <div className="mt-4">
            <Button
              className="w-full justify-center"
              onClick={() => {
                addToCart(product, size, qty);
                setAdded(true);
              }}
            >
              {added ? "Added to Bag" : "Add to Bag"}
            </Button>
          </div>

          <div className="flex items-center gap-2 text-xs text-charcoal/50 mt-5">
            <Truck size={14} /> Complimentary shipping on orders over ₹15,000
          </div>

          <Accordion product={product} />
        </div>
      </div>

      <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <h2 className="font-display text-2xl md:text-3xl mb-10">You May Also Like</h2>
        <ProductCarousel products={related} />
      </section>
    </div>
  );
}
