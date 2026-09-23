# Noor Édition — Boutique Fashion E-Commerce

A premium, animated, editorial fashion e-commerce front-end built with
React, React Router and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev      # local dev server, usually http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Structure

```
src/
├── components/   Navbar, Footer, Hero, ProductCard, CollectionCard,
│                 ProductGrid, ProductCarousel, Newsletter,
│                 InstagramGallery, BrandStory, Lookbook, Button, ScrollToTop
├── pages/        Home, Collections (grid + per-collection filter),
│                 Product (detail), Contact
├── data/         products.js, collections.js — mock catalogue data
├── hooks/        useReveal.js — IntersectionObserver scroll-reveal
└── index.css     Tailwind layers + reveal/marquee animation utilities
```

## Notes

- Routing: `/`, `/collections`, `/collections/:collectionId`,
  `/product/:productId`, `/contact`.
- Product images are hot-linked from Unsplash as placeholders — swap the
  URLs in `src/data/products.js` and `src/data/collections.js` for real
  product photography before launch.
- Cart/wishlist counters are local UI state only (no persistence or
  backend) — wire up a cart context or API once you have one.
- Palette and type scale live in `tailwind.config.js` (ivory / champagne /
  charcoal / gold, Cormorant Garamond + Jost).
