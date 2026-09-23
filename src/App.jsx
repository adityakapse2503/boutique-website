import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import InfoPage from "./pages/InfoPage";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/:collectionId" element={<Collections />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/gift-cards" element={<InfoPage type="/gift-cards" />} />
          <Route path="/shipping-returns" element={<InfoPage type="/shipping-returns" />} />
          <Route path="/size-guide" element={<InfoPage type="/size-guide" />} />
          <Route path="/care-instructions" element={<InfoPage type="/care-instructions" />} />
          <Route
            path="*"
            element={
              <div className="pt-48 pb-24 text-center">
                <h1 className="font-display text-4xl">Page not found</h1>
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
