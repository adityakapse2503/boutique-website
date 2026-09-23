import React from "react";
import { useParams, Link } from "react-router-dom";
import CollectionCard from "../components/CollectionCard";
import ProductGrid from "../components/ProductGrid";
import useReveal from "../hooks/useReveal";
import { collections, getCollectionById } from "../data/collections";
import { products } from "../data/products";

function CollectionOverview() {
  const ref = useReveal();
  const sizes = ["tall", "normal", "short", "normal", "tall", "short", "normal", "tall", "normal"];

  return (
    <div>
      <section className="pt-40 pb-16 md:pt-48 md:pb-20 max-w-[1440px] mx-auto px-6 md:px-10 text-center">
        <span className="text-[0.72rem] tracking-widest2 uppercase text-clay">
          The Full Wardrobe
        </span>
        <h1 className="font-display text-4xl md:text-6xl mt-5">Collections</h1>
        <p className="text-charcoal/60 max-w-lg mx-auto mt-6 leading-relaxed">
          Nine categories, one point of view — hand-finished silhouettes
          organised the way our atelier thinks about a wardrobe, not a
          catalogue.
        </p>
      </section>

      <section
        ref={ref}
        className="max-w-[1440px] mx-auto px-6 md:px-10 pb-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
      >
        {collections.map((c, i) => (
          <div
            key={c.id}
            className={`reveal-up ${i % 5 === 0 ? "lg:col-span-2" : ""}`}
            style={{ transitionDelay: `${(i % 6) * 90}ms` }}
          >
            <CollectionCard collection={c} size={sizes[i % sizes.length]} />
            <p className="text-sm text-charcoal/60 mt-3 max-w-sm">{c.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

function SingleCollection({ id }) {
  const collection = getCollectionById(id);
  const list =
    id === "new-arrivals"
      ? products.filter((p) => p.newArrival)
      : products.filter((p) => p.category === id);

  if (!collection) {
    return (
      <div className="pt-48 pb-24 text-center max-w-md mx-auto px-6">
        <h1 className="font-display text-3xl mb-4">Collection not found</h1>
        <Link to="/collections" className="text-gold underline">
          Back to all collections
        </Link>
      </div>
    );
  }

  return (
    <div>
      <section className="relative h-[46vh] min-h-[320px] overflow-hidden">
        <img
          src={collection.image}
          alt={collection.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/45 flex items-end">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 pb-10 w-full">
            <span className="text-ivory/70 text-[0.72rem] tracking-widest2 uppercase">
              Collection
            </span>
            <h1 className="font-display text-ivory text-4xl md:text-6xl mt-3">
              {collection.name}
            </h1>
            <p className="text-ivory/75 mt-3 max-w-md">{collection.description}</p>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 md:py-20">
        {list.length > 0 ? (
          <ProductGrid products={list} />
        ) : (
          <p className="text-center text-charcoal/50 py-20">
            New pieces from this collection are on their way.
          </p>
        )}
      </section>
    </div>
  );
}

export default function Collections() {
  const { collectionId } = useParams();
  return collectionId ? <SingleCollection id={collectionId} /> : <CollectionOverview />;
}
