"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

import "./ProjectIntro.scss";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectIntro() {
  useEffect(() => {
    const introTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".intro",
        start: "top top",
        end: "bottom top",
        pin: true,
        // pinSpacing: false,
      },
      defaults: {
        duration: 0.75,
      },
    });

    introTl
      .from([".intro__title-kr", ".intro__title-en"], {
        fontSize: 0,
        stagger: 0.75,
      })
      .from(".intro__viewbtn", { autoAlpha: 0 })
      .from(".intro__img", { autoAlpha: 0 });
  });

  return (
    <section className="intro">
      <div className="intro__title-box">
        <div className="intro__title">
          <h2 className="intro__title-kr kr-t3">내용</h2>
          <p className="intro__title-en en-h2">내용</p>
        </div>
        <a className="intro__viewbtn en-b1" href="#" target="_blank">
          <i className="intro__viewbtn-icon"></i> <span> visit website</span>
        </a>
        <span className="intro__meta en-b2">jinyoo.2025</span>
      </div>
      <div className="intro__img">
        <div className="intro__img-pc"></div>
        <div className="intro__img-mo"></div>
      </div>
    </section>
  );
}
