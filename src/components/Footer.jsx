import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";
import logo from "/images/Logo.png";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "New Arrivals", to: "/collections/new-arrivals" },
      { label: "Bestsellers", to: "/collections" },
      { label: "Gift Cards", to: "/gift-cards" },
    ],
  },
  {
    title: "Collections",
    links: [
      { label: "Lehengas", to: "/collections/lehengas" },
      { label: "Saris", to: "/collections/saris" },
      { label: "Gowns", to: "/collections/gowns" },
      { label: "Anarkalis", to: "/collections/anarkalis" },
    ],
  },
  {
    title: "Customer Care",
    links: [
      { label: "Contact Us", to: "/contact" },
      { label: "Shipping & Returns", to: "/shipping-returns" },
      { label: "Size Guide", to: "/size-guide" },
      { label: "Care Instructions", to: "/care-instructions" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 pt-20 pb-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16">
          <div className="col-span-2">
  <img src={logo} alt="Boutique Logo" className="h-16 w-auto object-contain" />            <p className="mt-5 text-sm text-ivory/60 max-w-xs leading-relaxed">
              A boutique house for reimagined Indian silhouettes — designed
              in small runs, finished by hand.
            </p>
            <div className="flex items-center gap-4 mt-6 text-ivory/70">
              <Instagram size={17} className="hover:text-gold transition-colors" />
              <Facebook size={17} className="hover:text-gold transition-colors" />
              <Youtube size={17} className="hover:text-gold transition-colors" />
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[0.72rem] tracking-widest2 uppercase text-ivory/50 mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-ivory/80 hover:text-gold transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-[0.72rem] tracking-widest2 uppercase text-ivory/50 mb-5">
              Newsletter
            </h4>
            <p className="text-sm text-ivory/70 mb-4">
              Private edits, once a month.
            </p>
            <form className="flex border-b border-ivory/30 pb-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent outline-none text-sm placeholder:text-ivory/40 flex-1"
              />
              <button className="text-[0.68rem] tracking-widest2 uppercase text-gold">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-ivory/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.7rem] tracking-wide text-ivory/50">
          <span>© {new Date().getFullYear()} Noor Édition. All rights reserved.</span>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-ivory">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-ivory">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
