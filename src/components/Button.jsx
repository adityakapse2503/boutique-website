import React from "react";
import { ArrowRight } from "lucide-react";

export default function Button({
  children,
  variant = "dark",
  icon = true,
  className = "",
  ...rest
}) {
  const base =
    "group inline-flex items-center gap-3 px-5 sm:px-8 py-3.5 text-[0.68rem] sm:text-[0.72rem] tracking-widest2 uppercase font-medium transition-all duration-500 ease-silk";

  const variants = {
    dark: "bg-charcoal text-ivory hover:bg-umber",
    light: "bg-ivory text-charcoal hover:bg-cream",
    outline:
      "border border-charcoal/60 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-ivory",
    outlineLight:
      "border border-ivory/70 text-ivory hover:bg-ivory hover:text-charcoal",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      <span>{children}</span>
      {icon && (
        <ArrowRight
          size={15}
          className="transition-transform duration-500 ease-silk group-hover:translate-x-1.5"
        />
      )}
    </button>
  );
}
