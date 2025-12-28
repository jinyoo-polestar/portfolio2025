"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useEffect } from "react";

import "./MainPointVisual.scss";

export default function MainPointVisual() {
  useEffect(() => {
    gsap.set(".point-visual__item-intro", { xPercent: -150 });

    const pvTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".point-visual",
        start: "top center",
        end: "top top",
        scrub: true,
      },
    });
    pvTl
      .fromTo(
        [".point-visual__item--intro", ".point-visual__item--code"],
        {
          xPercent: -300,
          autoAlpha: 0,
        },
        {
          xPercent: 0,
          autoAlpha: 1,
        }
      )
      .fromTo(
        [".point-visual__item--img", ".point-visual__item--desc"],
        {
          xPercent: 300,
          autoAlpha: 0,
        },
        {
          xPercent: 0,
          autoAlpha: 1,
        },
        "<"
      );

    ScrollTrigger.create({
      trigger: ".point-visual",
      start: "top top",
      end: "bottom top",
      pin: true,
    });
  });

  return (
    <section className="point-visual">
      <div className="point-visual__inner">
        <div className="point-visual__item point-visual__item--intro">
          <h3 className="point-visual__title en-b1">headline 2</h3>
          <p className="point-visual__text kr-t3">
            디자인을 <b>생동감 있는 UI로 구현하는 것</b>을 <b>즐기는 개발자</b>
            입니다.
            <b>디자인을 이해</b>하고, <b>사용자의 흐름과 경험까지 고려</b>하며
            코드를 작성합니다.
          </p>
        </div>

        <div className="point-visual__item point-visual__item--img">
          <h3 className="point-visual__title en-b1">img</h3>
          <span className="point-visual__icon point-visual__icon--img" />
        </div>

        <div className="point-visual__item point-visual__item--code">
          <h3 className="point-visual__title en-b1">code</h3>
          <span className="point-visual__icon point-visual__icon--code" />
        </div>

        <div className="point-visual__item point-visual__item--desc">
          <h3 className="point-visual__title en-b1">body 1</h3>
          <p className="point-visual__text kr-b1">
            프로젝트의 전반적인 흐름을 이해하며 <b>책임감 있게 작업</b>합니다.
            <b>협업과 커뮤니케이션을 중시</b>하고, 기획·디자인·개발 단계
            전반에서 최적의 경험을 만들어갑니다.
          </p>
        </div>
      </div>
    </section>
  );
}
