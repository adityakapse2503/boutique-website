import React from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";
import { formatPrice } from "../data/products";
import { useCart } from "../components/Cartcontext";
import Button from "../components/Button";

export default function Cart() {
  const { items, updateQty, removeFromCart, clearCart, subtotal } = useCart();

  return (
    <div className="pt-36 pb-24 max-w-[1200px] mx-auto px-6 md:px-10">
      <p className="text-[0.72rem] tracking-widest2 uppercase text-clay">Your selection</p>
      <h1 className="font-display text-4xl md:text-5xl mt-3 mb-12">Shopping bag</h1>

      {items.length === 0 ? (
        <div className="border-t border-charcoal/15 py-16 text-center">
          <p className="font-display text-2xl mb-5">Your bag is waiting to be filled.</p>
          <Link to="/collections"><Button>Explore the collection</Button></Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-[1fr_360px] gap-12">
          <div className="border-t border-charcoal/15">
            {items.map((item) => (
              <div key={item.key} className="flex gap-4 md:gap-6 py-6 border-b border-charcoal/15">
                <Link to={`/product/${item.id}`} className="w-24 md:w-32 aspect-[3/4] bg-cream shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </Link>
                <div className="flex-1 min-w-0 flex flex-col">
                  <div className="flex justify-between gap-4">
                    <div>
                      <Link to={`/product/${item.id}`} className="font-display text-xl hover:text-gold">{item.name}</Link>
                      <p className="text-xs text-charcoal/55 mt-1">{item.size || "One size"}</p>
                    </div>
                    <span className="text-sm shrink-0">{formatPrice(item.price * item.qty)}</span>
                  </div>
                  <div className="mt-auto pt-5 flex items-center justify-between">
                    <div className="flex items-center border border-charcoal/20">
                      <button onClick={() => updateQty(item.key, item.qty - 1)} className="w-8 h-8 flex items-center justify-center" aria-label="Decrease quantity"><Minus size={13} /></button>
                      <span className="w-8 text-center text-sm">{item.qty}</span>
                      <button onClick={() => updateQty(item.key, item.qty + 1)} className="w-8 h-8 flex items-center justify-center" aria-label="Increase quantity"><Plus size={13} /></button>
                    </div>
                    <button onClick={() => removeFromCart(item.key)} className="text-xs uppercase tracking-widest text-charcoal/55 hover:text-charcoal flex items-center gap-2"><Trash2 size={14} /> Remove</button>
                  </div>
                </div>
              </div>
            ))}
            <button onClick={clearCart} className="mt-5 text-xs uppercase tracking-widest text-charcoal/55 hover:text-charcoal">Clear bag</button>
          </div>

          <aside className="bg-cream p-7 h-fit">
            <h2 className="font-display text-2xl mb-6">Order summary</h2>
            <div className="flex justify-between text-sm pb-4 border-b border-charcoal/15"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
            <p className="text-xs text-charcoal/55 leading-relaxed mt-5">Complimentary shipping across India on orders over ₹15,000.</p>
            <Button className="w-full justify-center mt-7" onClick={() => alert("Checkout is coming soon.")}>Proceed to checkout</Button>
          </aside>
        </div>
      )}
    </div>
  );
}