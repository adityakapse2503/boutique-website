import React from "react";
import { Instagram } from "lucide-react";

const shots = [
  "https://images.unsplash.com/photo-1610030181087-540f6ca2ca45?w=500&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=500&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1610189844777-8fb42d02cf27?w=500&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=500&q=80&auto=format&fit=crop",
];

export default function InstagramGallery() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 text-center mb-10">
        <span className="text-[0.72rem] tracking-widest2 uppercase text-clay">
          Follow Along
        </span>
        <h2 className="font-display text-3xl md:text-4xl mt-4">@noor.edition</h2>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6">
        {shots.map((src, i) => (
          <a
            key={i}
            href="#"
            onClick={(e) => e.preventDefault()}
            className="group relative aspect-square overflow-hidden"
          >
            <img
              src={src}
              alt="Instagram post"
              className="w-full h-full object-cover transition-transform duration-700 ease-silk group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/50 transition-colors duration-400 flex items-center justify-center">
              <Instagram
                size={20}
                className="text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-400"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
