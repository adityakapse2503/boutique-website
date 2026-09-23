import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import Button from "../components/Button";

const infoItems = [
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: Mail, label: "Email", value: "atelier@nooredition.com" },
  { icon: MapPin, label: "Boutique", value: "14 Amrita Shergil Marg, New Delhi" },
  { icon: Clock, label: "Hours", value: "Tue – Sun, 11am – 7pm" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[380px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=1600&q=80&auto=format&fit=crop"
          alt="Noor Édition boutique interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/50 flex items-center justify-center text-center px-6">
          <div>
            <span className="text-ivory/70 text-[0.72rem] tracking-widest2 uppercase">
              We'd love to hear from you
            </span>
            <h1 className="font-display text-ivory text-5xl md:text-7xl mt-4">
              Get in Touch
            </h1>
          </div>
        </div>
      </section>

      {/* Info strip */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {infoItems.map((item) => (
          <div key={item.label} className="flex items-start gap-4">
            <span className="w-11 h-11 rounded-full bg-cream flex items-center justify-center shrink-0">
              <item.icon size={17} />
            </span>
            <div>
              <p className="text-[0.68rem] tracking-widest2 uppercase text-clay mb-1">
                {item.label}
              </p>
              <p className="text-sm">{item.value}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Form + map */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 pb-20 md:pb-28 grid lg:grid-cols-2 gap-14">
        <div>
          <h2 className="font-display text-3xl mb-8">Send a Message</h2>
          {submitted ? (
            <div className="bg-cream p-10 text-center">
              <p className="font-display text-2xl mb-2">Thank you.</p>
              <p className="text-charcoal/60 text-sm">
                Our atelier team will be in touch within one business day.
              </p>
            </div>
          ) : (
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[0.68rem] tracking-widest2 uppercase text-clay">
                    First Name
                  </label>
                  <input
                    required
                    className="w-full bg-transparent border-b border-charcoal/25 py-2.5 outline-none focus:border-charcoal transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[0.68rem] tracking-widest2 uppercase text-clay">
                    Last Name
                  </label>
                  <input
                    required
                    className="w-full bg-transparent border-b border-charcoal/25 py-2.5 outline-none focus:border-charcoal transition-colors"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[0.68rem] tracking-widest2 uppercase text-clay">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-charcoal/25 py-2.5 outline-none focus:border-charcoal transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[0.68rem] tracking-widest2 uppercase text-clay">
                    Phone
                  </label>
                  <input className="w-full bg-transparent border-b border-charcoal/25 py-2.5 outline-none focus:border-charcoal transition-colors" />
                </div>
              </div>
              <div>
                <label className="text-[0.68rem] tracking-widest2 uppercase text-clay">
                  Subject
                </label>
                <input
                  required
                  className="w-full bg-transparent border-b border-charcoal/25 py-2.5 outline-none focus:border-charcoal transition-colors"
                />
              </div>
              <div>
                <label className="text-[0.68rem] tracking-widest2 uppercase text-clay">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  className="w-full bg-transparent border-b border-charcoal/25 py-2.5 outline-none focus:border-charcoal transition-colors resize-none"
                />
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          )}
        </div>

        <div className="flex flex-col gap-8">
          <div className="bg-cream h-72 lg:h-full min-h-[280px] flex items-center justify-center">
            <div className="text-center text-charcoal/50">
              <MapPin size={28} className="mx-auto mb-3" />
              <p className="text-sm">Map placeholder — 14 Amrita Shergil Marg, New Delhi</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <a href="#" onClick={(e) => e.preventDefault()} className="flex items-center gap-2 text-sm hover:text-gold">
              <Instagram size={16} /> @noor.edition
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="flex items-center gap-2 text-sm hover:text-gold">
              <Facebook size={16} /> Noor Édition
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
