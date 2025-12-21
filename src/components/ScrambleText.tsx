"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

export default function ScrambleText() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".scramble");
      const defaultChars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      items.forEach((item) => {
        const originalText = item.innerText;

        const tween = gsap.to(item, {
          duration: 0.5,
          ease: "sine.in",
          scrambleText: {
            text: originalText,
            speed: 2,
            chars: defaultChars,
          },
          paused: true,
        });

        item.addEventListener("mouseenter", () => tween.play());
        item.addEventListener("mouseleave", () => tween.reverse());
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
