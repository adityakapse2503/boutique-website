import React from "react";

const content = {
  "/gift-cards": {
    eyebrow: "A thoughtful gesture",
    title: "Gift Cards",
    intro: "Give them the freedom to choose a piece that feels entirely their own.",
    sections: [{ title: "The Noor Edition gift", body: "Our gift cards can be used across the collection and are delivered by email. Choose an amount from ₹5,000 to ₹50,000, add a personal note, and let them discover their own Noor moment." }, { title: "Details", body: "Gift cards are valid for 12 months from the date of purchase, are redeemable online only, and cannot be exchanged for cash. For a bespoke gifting request, please contact our studio." }],
  },
  "/shipping-returns": {
    eyebrow: "Customer care",
    title: "Shipping & Returns",
    intro: "Every order is prepared with care and sent from our Delhi atelier.",
    sections: [{ title: "Shipping", body: "Complimentary shipping across India is offered on orders over ₹15,000. Ready-to-ship pieces usually arrive within 3–7 working days. Made-to-order pieces ship in 3–4 weeks; the estimated timing is shown on the product page." }, { title: "Returns", body: "Unworn, unaltered pieces may be returned within 7 days of delivery. Items must retain their tags and original packaging. Sale, customised, and made-to-measure pieces are final sale. Contact us before sending anything back." }],
  },
  "/size-guide": {
    eyebrow: "Find your fit",
    title: "Size Guide",
    intro: "Our silhouettes are designed for ease, with tailoring available on selected pieces.",
    sections: [{ title: "How to measure", body: "Measure over light clothing. Keep the tape level and comfortably close to the body. For bust, measure around the fullest point; for waist, use the narrowest point; for hips, measure the fullest point." }, { title: "Need help?", body: "If you are between sizes, we recommend sizing up. For a personal fit recommendation, send us your bust, waist, hip, and height measurements through our contact page." }],
  },
  "/care-instructions": {
    eyebrow: "Keep it beautiful",
    title: "Care Instructions",
    intro: "Thoughtful care keeps the texture, colour, and handwork of each piece luminous.",
    sections: [{ title: "Garments", body: "Dry clean only unless the care label says otherwise. Do not wring, bleach, or tumble dry. Steam on the reverse side using a low setting and place a soft cloth between the iron and any embroidery." }, { title: "Storage", body: "Store folded in breathable muslin away from direct sunlight and humidity. Air embroidered pieces occasionally, and avoid hanging heavier garments for long periods." }],
  },
};

export default function InfoPage({ type }) {
  const page = content[type] || content["/shipping-returns"];
  return (
    <div className="pt-36 pb-24 max-w-[900px] mx-auto px-6 md:px-10">
      <p className="text-[0.72rem] tracking-widest2 uppercase text-clay">{page.eyebrow}</p>
      <h1 className="font-display text-5xl md:text-6xl mt-3 mb-8">{page.title}</h1>
      <p className="font-display text-2xl leading-relaxed max-w-2xl mb-16">{page.intro}</p>
      <div className="border-t border-charcoal/15">
        {page.sections.map((section) => <section key={section.title} className="grid md:grid-cols-[220px_1fr] gap-6 py-8 border-b border-charcoal/15"><h2 className="font-display text-2xl">{section.title}</h2><p className="text-sm text-charcoal/70 leading-relaxed max-w-xl">{section.body}</p></section>)}
      </div>
    </div>
  );
}