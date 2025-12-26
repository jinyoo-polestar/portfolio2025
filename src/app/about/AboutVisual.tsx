"use client";

import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

import "./AboutVisual.scss";

export default function AboutVisual() {
  useEffect(() => {
    const aboutSection = document.querySelector<HTMLElement>(".aboutvisual");
    const aboutInner = document.querySelector<HTMLElement>(
      ".aboutvisual__inner"
    );

    if (!aboutSection || !aboutInner) return;

    const scrollTween = gsap.to(aboutInner, {
      xPercent: -300,
      ease: "none",
      scrollTrigger: {
        pin: aboutSection,
        trigger: aboutSection,
        start: "top top",
        scrub: 2,
      },
    });

    const firstHeadline = gsap.timeline({
      scrollTrigger: {
        trigger: ".aboutvisual__headline--first",
        start: "left center",
        end: "right 50%",
        containerAnimation: scrollTween,
      },
    });

    firstHeadline.fromTo(
      ".aboutvisual__headline--first",
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
      }
    );

    const split = SplitText.create(".aboutvisual__keyword", {
      type: "words,chars",
      autoSplit: true,
    });

    const loopTl = gsap.timeline({
      repeat: -1,
      repeatDelay: 0,
    });

    split.words.forEach((word, i) => {
      const chars = split.chars.filter((char) => char.parentNode === word);

      loopTl
        .from(chars, {
          yPercent: 100,
          autoAlpha: 0,
          stagger: 0.05,
        })
        .to({}, { duration: 3 })
        .to(chars, {
          yPercent: -100,
          autoAlpha: 0,
        });
    });

    const secondHeadline = gsap.timeline({
      scrollTrigger: {
        trigger: ".aboutvisual__headline--second",
        start: "left center",
        containerAnimation: scrollTween,
      },
    });

    secondHeadline.fromTo(
      ".aboutvisual__headline--second span",
      {
        autoAlpha: 0,
        y: () => gsap.utils.random([-200, 200]),
      },
      {
        autoAlpha: 1,
        y: 0,
        stagger: 0.5,
        ease: "bounce",
      }
    );
  });

  return (
    <section className="aboutvisual">
      <div className="aboutvisual__inner">
        <div className="aboutvisual__headline aboutvisual__headline--empty"></div>
        <div className="aboutvisual__headline aboutvisual__headline--first">
          <div className="aboutvisual__title aboutvisual__title--first">
            <div className="en-h2-italic aboutvisual__keyword-box">
              <div className="aboutvisual__keyword-inner">
                <div className="hidden">core</div>
                <div className="aboutvisual__keyword">all</div>
                <div className="aboutvisual__keyword">base</div>
                <div className="aboutvisual__keyword">real</div>
              </div>
            </div>
            <span className="en-h2">- about</span>
            <span className="en-b2">
              jinyoo
              <br />
              2025 portfolio
            </span>
          </div>
          <p className="aboutvisual__title aboutvisual__title--second">
            I solve problems with code,
            <br />
            structure, and curiosity.
          </p>
        </div>
        <div className="aboutvisual__headline aboutvisual__headline--second">
          <span className="headline__icon headline__icon--code"></span>
          <span className="headline__icon headline__icon--img"></span>
          <span className="headline__text headline__text-box en-h4">
            who i am
          </span>
          <span className="headline__text headline__text-roundbox kr-t1">
            디테일한 부분들을 잘 챙기는 <b>꼼꼼함</b>
          </span>
          <span className="headline__text headline__text-roundbox kr-t1">
            <b>목표</b>가 세워지면 어떻게든 <b>무조건 해냄</b>
          </span>
          <span className="headline__text headline__text-roundbox kr-t1">
            <b>열</b>정 <b>빼</b>면 <b>시</b>체
          </span>
          <span className="headline__img"></span>
          <span className="headline__text headline__text-roundbox kr-t1">
            <b>빠른 적응력</b>과 부드러운 <b>커뮤니케이션</b> 능력
          </span>
        </div>
      </div>
    </section>
  );
}
