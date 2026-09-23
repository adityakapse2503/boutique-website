import React from "react";
import { Link } from "react-router-dom";
import useReveal from "../hooks/useReveal";
import Button from "./Button";

export default function BrandStory() {
  const ref = useReveal();

  return (
    <section ref={ref} className="bg-cream">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2">
        <div className="reveal-mask h-[420px] lg:h-[620px]">
          <div className="mask-bar" />
          <img
            src="https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=1200&q=80&auto=format&fit=crop"
            alt="Atelier artisan hand-finishing embroidery"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex items-center px-6 md:px-16 py-16 lg:py-0">
          <div className="reveal-up max-w-md">
            <span className="text-[0.72rem] tracking-widest2 uppercase text-clay">
              Our Philosophy
            </span>
            <h2 className="font-display text-3xl md:text-[2.6rem] leading-tight mt-5">
              Craft first. Trend, never.
            </h2>
            <p className="text-charcoal/70 mt-6 leading-relaxed">
              Noor Édition began in a single room above a Chandni Chowk
              tailor's workshop, with one conviction: that Indian
              craftsmanship deserved a quieter, more contemporary stage. Every
              piece still passes through the same artisans' hands — cut in
              small runs, finished slowly, built to outlast the season it was
              made for.
            </p>
            <div className="mt-9">
              <Link to="/contact">
                <Button variant="outline">Our Story</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
