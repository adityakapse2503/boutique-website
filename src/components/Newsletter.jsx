import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="bg-beige py-20 md:py-28">
      <div className="max-w-xl mx-auto px-6 text-center">
        <span className="text-[0.72rem] tracking-widest2 uppercase text-umber">
          Join Our World
        </span>
        <h2 className="font-display text-3xl md:text-4xl mt-4">
          Be the first to discover new collections, exclusive launches and
          private edits.
        </h2>

        {submitted ? (
          <div className="mt-10 flex items-center justify-center gap-2 text-umber">
            <Check size={18} /> <span>You're on the list.</span>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-10 flex items-center border-b border-charcoal/40 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent outline-none py-3 placeholder:text-charcoal/40"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="p-2 transition-transform duration-300 hover:translate-x-1"
            >
              <ArrowRight size={20} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
