"use client";

import { useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

import "./MainIntro.scss";

gsap.registerPlugin(useGSAP);

export default function MainIntro() {
  const container = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const mainIntroTl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          pin: true,
        },
      });

      mainIntroTl.from(".main-intro__text", {
        autoAlpha: 0,
        fontSize: 0,
        duration: 0.75,
      });
    },
    { scope: container }
  );

  return (
    <section className="main-intro" ref={container}>
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
