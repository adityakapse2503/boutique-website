import React from "react";
import { Link } from "react-router-dom";
import useReveal from "../hooks/useReveal";
import Button from "./Button";

export default function Lookbook() {
  const ref = useReveal();

  return (
    <section ref={ref} className="bg-charcoal py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-8 items-end">
        <div className="lg:col-span-5 reveal-up">
          <span className="text-[0.72rem] tracking-widest2 uppercase text-champagne">
            The Édition Journal
          </span>
          <h2 className="font-display text-ivory text-4xl md:text-5xl leading-[1.1] mt-6">
            The art of modern Indian dressing.
          </h2>
          <p className="text-ivory/60 mt-6 max-w-sm leading-relaxed">
            Discover timeless silhouettes reimagined for the modern woman —
            a study in restraint, proportion and hand-craft.
          </p>
          <div className="mt-10">
            <Link to="/collections">
              <Button variant="outlineLight">Read the Edit</Button>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-6">
          <div className="reveal-up overflow-hidden" style={{ transitionDelay: "150ms" }}>
            <img
              src="https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=900&q=80&auto=format&fit=crop"
              alt="Editorial — lehenga detail"
              className="w-full h-[300px] md:h-[440px] object-cover"
            />
          </div>
          <div
            className="reveal-up overflow-hidden mt-10 md:mt-16"
            style={{ transitionDelay: "300ms" }}
          >
            <img
              src="https://images.unsplash.com/photo-1610189844777-8fb42d02cf27?w=900&q=80&auto=format&fit=crop"
              alt="Editorial — sari drape"
              className="w-full h-[300px] md:h-[440px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
