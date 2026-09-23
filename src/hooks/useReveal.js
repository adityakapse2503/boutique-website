import { useEffect, useRef } from "react";

/** Adds .is-visible to the element (and its .reveal-up/.reveal-mask children)
 * once it scrolls into view. Used for editorial scroll-reveal moments. */
export default function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const targets = node.classList.contains("reveal-up") || node.classList.contains("reveal-mask")
      ? [node]
      : Array.from(node.querySelectorAll(".reveal-up, .reveal-mask"));

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return ref;
}
