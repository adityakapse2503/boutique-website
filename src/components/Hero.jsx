import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function Hero() {
  const [offset, setOffset] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setOffset(window.scrollY * 0.25);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-[88vh] min-h-[520px] md:h-[92vh] md:min-h-[560px] w-full overflow-hidden bg-charcoal">
      <div
        className="absolute inset-0 scale-[1.15]"
        style={{ transform: `translateY(${offset}px) scale(1.15)` }}
      >
        <img
          src="https://images.unsplash.com/photo-1610030181087-540f6ca2ca45?w=1800&q=80&auto=format&fit=crop"
          alt="Model in a hand-embroidered ivory Anarkali"
          className="w-full h-full object-cover object-top opacity-90"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-charcoal/40" />

      <div className="relative h-full max-w-[1440px] mx-auto px-6 md:px-10 flex flex-col justify-end pb-14 sm:pb-20 md:pb-28">
        <p
          className={`text-ivory/80 text-[0.72rem] tracking-widest2 uppercase mb-5 transition-all duration-1000 ease-silk ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Autumn / Winter Édition
        </p>
        <h1
          className={`font-display text-ivory text-[2.7rem] leading-[1.05] sm:text-[4.2rem] md:text-[5.5rem] max-w-3xl transition-all duration-1000 delay-150 ease-silk ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Silhouettes, quietly reimagined.
        </h1>
        <p
          className={`text-ivory/75 mt-6 max-w-md text-base leading-relaxed transition-all duration-1000 delay-300 ease-silk ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Hand-finished Indian couture, cut for the way modern women actually
          move, live and dress.
        </p>
        <div
          className={`mt-10 transition-all duration-1000 delay-500 ease-silk ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Link to="/collections">
            <Button variant="outlineLight">Explore Collection</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
