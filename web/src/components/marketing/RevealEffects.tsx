"use client";

import { useEffect } from "react";

export default function RevealEffects() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    const observeNew = () => {
      document.querySelectorAll("[data-reveal]:not(.in)").forEach((el) => {
        io.observe(el);
      });
    };

    const t = window.setTimeout(observeNew, 200);

    const mo = new MutationObserver(observeNew);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.clearTimeout(t);
      mo.disconnect();
      io.disconnect();
    };
  }, []);

  return null;
}
