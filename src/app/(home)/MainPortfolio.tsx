"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

import "./MainPortfolio.scss";

export default function MainPortfolio() {
  useEffect(() => {
    const mainPfTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".portfolio",
        start: "top top",
        end: "bottom top",
        pin: ".portfolio__cards-wrapper",
      },
    });

    mainPfTl
      .fromTo(
        ".portfolio__title",
        { autoAlpha: 0 },
        { autoAlpha: 0.08, duration: 0.25 }
      )
      .fromTo(
        ".portfolio__cards",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 0.5,
        },
        "<"
      )
      .fromTo(
        ".portfolio__title",
        {
          xPercent: 0,
        },
        {
          xPercent: -100,
          duration: 60,
        },
        "<"
      );
  });

  return (
    <section className="portfolio">
      <h3 className="portfolio__title en-h1">
        A portfolio built at the intersection of code and design. A portfolio
        built at the intersection of code and design. A portfolio built at the
        intersection of code and design. A portfolio built at the intersection
        of code and design.
      </h3>
      <div className="portfolio__cards-wrapper">
        <ul className="portfolio__cards">
          <li className="portfolio__card">
            <a></a>
          </li>
          <li className="portfolio__card">
            <a></a>
          </li>
          <li className="portfolio__card">
            <a></a>
          </li>
          <li className="portfolio__card">
            <a></a>
          </li>
        </ul>
      </div>
    </section>
  );
}
