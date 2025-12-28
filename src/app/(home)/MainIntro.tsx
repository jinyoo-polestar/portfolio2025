"use client";

import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import "./MainIntro.scss";

export default function MainIntro() {
  useEffect(() => {
    const mainIntroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-intro",
        start: "top top",
        pin: true,
      },
    });

    mainIntroTl.from(".main-intro__text", {
      autoAlpha: 0,
      fontSize: 0,
      duration: 0.75,
    });
  });

  return (
    <section className="main-intro">
      <div className="main-intro__inner en-h4">
        <p className="main-intro__text">
          i&apos;m a <b>developer</b>
        </p>
        <p className="main-intro__text">
          <i className="ic-star"></i>who speaks
        </p>
        <p className="main-intro__text">
          the <b>language</b>
        </p>
        <p className="main-intro__text">
          <b>of design.</b>
        </p>
      </div>
    </section>
  );
}
