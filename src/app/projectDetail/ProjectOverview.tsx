"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

import "./ProjectOverview.scss";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectOverview() {
  useEffect(() => {
    const overviewTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".overview",
        start: "top top",
        end: "bottom top",
      },
    });

    overviewTl.fromTo(
      [".overview__title-box", ".overview__contents"],
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.75, stagger: 0.75 }
    );
  });

  return (
    <section className="overview">
      <div className="overview__title-box">
        <h3 className="overview__title en-t1">overview</h3>
        <p className="overview__desc kr-b1">내용</p>
      </div>
      <ul className="overview__contents">
        <li className="overview__content">
          <span className="overview__content-num en-b1">01</span>
          <span className="overview__content-title kr-s1">기간</span>
          <span className="overview__content-text kr-b1">내용</span>
        </li>
        <li className="overview__content">
          <span className="overview__content-num en-b1">02</span>
          <span className="overview__content-title kr-s1">역할(기여도)</span>
          <span className="overview__content-text kr-b1">내용</span>
        </li>
        <li className="overview__content">
          <span className="overview__content-num en-b1">03</span>
          <span className="overview__content-title kr-s1">스킬</span>
          <ul className="overview__content-icons">내용</ul>
        </li>
      </ul>
    </section>
  );
}
