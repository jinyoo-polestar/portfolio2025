"use client";

import Image from "next/image";
import { useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import MainVisualImg from "#/img_mainvisual.png";

import "./MainVisual.scss";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function MainVisual() {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".main-visual",
      start: "top top",
      endTrigger: ".point-visual",
      end: "bottom top",
      pin: ".main-visual__img",
    });

    gsap.to(".main-visual__img", {
      scale: 0.8,
      rotate: "40deg",
      scrollTrigger: {
        trigger: ".main-visual",
        start: "top top",
        endTrigger: ".main-intro",
        end: "top top",
        scrub: true,
      },
    });

    gsap.to(".main-visual__img", {
      xPercent: 100,
      scale: 1,
      rotate: "-40deg",
      scrollTrigger: {
        trigger: ".main-intro",
        start: "bottom center",
        endTrigger: ".profile",
        end: "top top",
        scrub: true,
      },
    });
  });

  return (
    <section className="main-visual">
      <div className="main-visual__top en-h3">
        <p>
          <span className="scramble">design</span>
          <span>
            <i className="main-visual__star-icon"></i>
            <span className="scramble"> driven</span>
          </span>
        </p>
        <p className="scramble">Developer</p>
      </div>
      <div className="main-visual__bottom">
        <h1 className="kr-t1">
          디자인의 결을 <br />
          이해하는 개발자
        </h1>
        <p className="kr-b1">
          디자인 단순 재현을 넘어, 디자이너의 의도와 화면 흐름까지 구현합니다.
        </p>
      </div>
      <div className="main-visual__img">
        <Image src={MainVisualImg} fill alt="" />
      </div>
    </section>
  );
}
