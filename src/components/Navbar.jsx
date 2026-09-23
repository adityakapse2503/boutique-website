import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react";
import logoDark from "/images/Logo.png";
import { useCart } from "../components/Cartcontext";
import { useWishlist } from "./Wishlistcontext";
import { products } from "../data/products";

const links = [
  { to: "/", label: "Home" },
  { to: "/collections", label: "Collections" },
  { to: "/collections/new-arrivals", label: "New Arrivals" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const { count: cartCount } = useCart();
  const { count: wishlistCount } = useWishlist();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open || searchOpen ? "hidden" : "";
  }, [open, searchOpen]);

  useEffect(() => {
    if (!searchOpen) setQuery("");
  }, [searchOpen]);

  const linkClass = ({ isActive }) =>
    `relative text-[0.72rem] tracking-widest2 uppercase transition-colors duration-300 after:absolute after:left-0 after:-bottom-1.5 after:h-px after:bg-current after:transition-all after:duration-500 after:ease-silk ${
      isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
    }`;

  const suggestions = query.trim()
    ? products
        .filter((p) =>
          `${p.name} ${p.category} ${p.color}`
            .toLowerCase()
            .includes(query.trim().toLowerCase())
        )
        .slice(0, 5)
    : [];

  const runSearch = (q) => {
    const term = q.trim();
    if (!term) return;
    setSearchOpen(false);
    navigate(`/search?q=${encodeURIComponent(term)}`);
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-silk ${
          scrolled
            ? "bg-ivory/95 backdrop-blur border-b border-charcoal/10 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between">
          <button
            className="lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} className="text-charcoal" />
          </button>

          <nav className="hidden lg:flex items-center gap-9">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={linkClass}
                end={l.to === "/" || l.to === "/collections"}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <NavLink to="/" className="absolute left-1/2 -translate-x-1/2">
            <img
              src={logoDark}
              alt="Noor Édition"
              className="h-6 sm:h-7 md:h-9 w-auto object-contain"
            />
          </NavLink>

          <div className="flex items-center gap-3 sm:gap-5 text-charcoal">
            <button aria-label="Search" onClick={() => setSearchOpen(true)}>
              <Search size={19} />
            </button>
            <Link to="/wishlist" aria-label="Wishlist" className="relative hidden sm:block">
              <Heart size={19} />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 text-[0.6rem] bg-charcoal text-ivory rounded-full w-4 h-4 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link to="/cart" aria-label="Bag" className="relative">
              <ShoppingBag size={19} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 text-[0.6rem] bg-charcoal text-ivory rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${
          open ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-charcoal/40 transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute top-0 left-0 h-full w-[86%] max-w-sm bg-ivory px-6 sm:px-8 py-6 sm:py-8 flex flex-col transition-transform duration-500 ease-silk ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-14">
            <img src={logoDark} alt="Noor Édition" className="h-7 w-auto object-contain" />
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <X size={22} />
            </button>
          </div>
          <nav className="flex flex-col gap-7">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-lg font-display tracking-wide"
              >
                {l.label}
              </NavLink>
            ))}
            <NavLink
              to="/wishlist"
              onClick={() => setOpen(false)}
              className="text-lg font-display tracking-wide flex items-center gap-2"
            >
              Wishlist {wishlistCount > 0 && <span className="text-sm text-clay">({wishlistCount})</span>}
            </NavLink>
            <NavLink
              to="/cart"
              onClick={() => setOpen(false)}
              className="text-lg font-display tracking-wide flex items-center gap-2"
            >
              Bag {cartCount > 0 && <span className="text-sm text-clay">({cartCount})</span>}
            </NavLink>
          </nav>
          <div className="mt-auto pt-10 border-t border-charcoal/10 text-[0.7rem] tracking-widest2 uppercase text-clay">
            Mumbai · New Delhi · Bengaluru
          </div>
        </div>
      </div>

      {/* Search overlay */}
      <div
        className={`fixed inset-0 z-[70] transition-all duration-400 ${
          searchOpen ? "visible bg-charcoal/40" : "invisible"
        }`}
        onClick={() => setSearchOpen(false)}
      >
        <div
          className={`bg-ivory px-6 transition-all duration-500 ease-silk ${
            searchOpen ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="max-w-2xl mx-auto pt-24">
            <form
              className="flex items-center gap-4 border-b border-charcoal/30 pb-4"
              onSubmit={(e) => {
                e.preventDefault();
                runSearch(query);
              }}
            >
              <Search size={20} />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for saris, gowns, lehengas…"
                className="flex-1 bg-transparent outline-none font-display text-2xl placeholder:text-charcoal/40"
              />
              <button type="button" onClick={() => setSearchOpen(false)} aria-label="Close search">
                <X size={20} />
              </button>
            </form>

            {suggestions.length > 0 && (
              <ul className="py-6">
                {suggestions.map((p) => (
                  <li key={p.id}>
                    <button
                      onClick={() => {
                        setSearchOpen(false);
                        navigate(`/product/${p.id}`);
                      }}
                      className="w-full flex items-center gap-4 py-2.5 text-left hover:text-gold transition-colors"
                    >
                      <img src={p.images[0]} alt="" className="w-10 h-12 object-cover" />
                      <span className="text-sm">{p.name}</span>
                      <span className="text-xs text-charcoal/40 capitalize ml-auto">
                        {p.category}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <div className="pb-10 sm:pb-16" />
          </div>
        </div>
      </div>
    </>
  );
}