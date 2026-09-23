import React from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, X } from "lucide-react";
import { formatPrice, products } from "../data/products";
import { useCart } from "../components/Cartcontext";
import { useWishlist } from "../components/Wishlistcontext";

export default function Wishlist() {
  const { ids, removeWish } = useWishlist();
  const { addToCart } = useCart();
  const savedProducts = products.filter((product) => ids.includes(product.id));

  return (
    <div className="pt-36 pb-24 max-w-[1200px] mx-auto px-6 md:px-10">
      <p className="text-[0.72rem] tracking-widest2 uppercase text-clay">Saved pieces</p>
      <h1 className="font-display text-4xl md:text-5xl mt-3 mb-12">Wishlist</h1>
      {savedProducts.length === 0 ? (
        <div className="border-t border-charcoal/15 py-16 text-center">
          <Heart size={26} className="mx-auto mb-5 text-charcoal/50" />
          <p className="font-display text-2xl mb-5">Your wishlist is empty.</p>
          <Link to="/collections" className="text-sm uppercase tracking-widest underline underline-offset-4">Discover pieces</Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
          {savedProducts.map((product) => (
            <article key={product.id}>
              <div className="relative aspect-[3/4] bg-cream overflow-hidden">
                <Link to={`/product/${product.id}`}><img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" /></Link>
                <button onClick={() => removeWish(product.id)} className="absolute top-3 right-3 w-8 h-8 rounded-full bg-ivory/90 flex items-center justify-center" aria-label={`Remove ${product.name} from wishlist`}><X size={14} /></button>
              </div>
              <Link to={`/product/${product.id}`} className="block mt-4"><h2 className="font-display text-lg">{product.name}</h2><p className="text-sm mt-1">{formatPrice(product.price)}</p></Link>
              <button onClick={() => addToCart(product)} className="mt-3 text-xs uppercase tracking-widest flex items-center gap-2 hover:text-gold"><ShoppingBag size={14} /> Add to bag</button>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}