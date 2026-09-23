import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import CollectionCard from "../components/CollectionCard";
import ProductCarousel from "../components/ProductCarousel";
import Lookbook from "../components/Lookbook";
import BrandStory from "../components/BrandStory";
import InstagramGallery from "../components/InstagramGallery";
import Newsletter from "../components/Newsletter";
import Button from "../components/Button";
import useReveal from "../hooks/useReveal";
import { collections } from "../data/collections";
import { products } from "../data/products";

export default function Home() {
  const featuredRef = useReveal();
  const trendRef = useReveal();

  const featuredCollections = collections.filter((c) =>
    ["anarkalis", "gowns", "lehengas", "saris", "jumpsuits", "pallazos"].includes(c.id)
  );
  const newArrivals = products.filter((p) => p.newArrival);
  const bestsellers = products.filter((p) => p.bestseller);

  return (
    <div>
      <Hero />

      {/* Marquee ticker */}
      <div className="bg-charcoal py-3.5 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array(2)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="flex shrink-0">
                {[
                  "Handcrafted in India",
                  "Complimentary Shipping over ₹15,000",
                  "Made to Order Bridal",
                  "Small-Batch Atelier",
                ].map((t) => (
                  <span
                    key={t}
                    className="mx-8 text-ivory/70 text-[0.7rem] tracking-widest2 uppercase"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ))}
        </div>
      </div>

      {/* Featured collections */}
      <section ref={featuredRef} className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="flex items-end justify-between mb-12 reveal-up">
          <div>
            <span className="text-[0.72rem] tracking-widest2 uppercase text-clay">
              Shop by Category
            </span>
            <h2 className="font-display text-3xl md:text-5xl mt-4">Featured Collections</h2>
          </div>
          <Link to="/collections" className="hidden md:block">
            <Button variant="outline">View All</Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {featuredCollections.slice(0, 3).map((c, i) => (
            <div key={c.id} className="reveal-up" style={{ transitionDelay: `${i * 120}ms` }}>
              <CollectionCard collection={c} />
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-5 md:gap-6 mt-5 md:mt-6">
          {featuredCollections.slice(3, 6).map((c, i) => (
            <div key={c.id} className="reveal-up" style={{ transitionDelay: `${i * 120}ms` }}>
              <CollectionCard collection={c} size="short" />
            </div>
          ))}
        </div>
      </section>

      {/* New arrivals */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-[0.72rem] tracking-widest2 uppercase text-clay">
              Just In
            </span>
            <h2 className="font-display text-3xl md:text-5xl mt-4">New Arrivals</h2>
          </div>
        </div>
        <ProductCarousel products={newArrivals} />
      </section>

      <Lookbook />

      {/* Trending / bestsellers */}
      <section ref={trendRef} className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="text-center mb-12 reveal-up">
          <span className="text-[0.72rem] tracking-widest2 uppercase text-clay">
            Loved by Many
          </span>
          <h2 className="font-display text-3xl md:text-5xl mt-4">Bestsellers</h2>
        </div>
        <ProductCarousel products={bestsellers} />
      </section>

      <BrandStory />
      <InstagramGallery />
      <Newsletter />
    </div>
  );
}
