"use client";

import Image from "next/image";
import { useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { qna } from "@/data/about";

import "./AboutQna.scss";

gsap.registerPlugin(ScrollTrigger);

export default function AboutQna() {
  const container = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const qnaItems = gsap.utils.toArray<HTMLElement>(".qna__item");

      const qnaTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".qna",
          start: "top top",
          end: "bottom top",
          pin: true,
          scrub: true,
        },
      });

      qnaTl.from(".qna__header span", {
        scale: 0,
      });

      qnaItems.forEach((item, i) => {
        qnaTl.fromTo(
          item,
          {
            autoAlpha: 0,
            yPercent: 100,
          },
          {
            autoAlpha: 1,
            yPercent: 0,
            duration: 0.5,
            onComplete: () => {
              if (i > 0) {
                gsap.to(qnaItems[i - 1], { autoAlpha: 0 });
              }
            },
          }
        );
      });
    },
    { scope: container }
  );

  return (
    <section className="qna" ref={container}>
      <h2 className="qna__header en-h3">
        <span>q&a</span>
      </h2>
      <ul className="qna__items">
        {qna.map((item, i) => {
          return (
            <li className="qna__item" key={i}>
              <Image src={item.img} alt="" className="qna__item-thumb" />
              <div className="qna__item-inner">
                <span className="qna__item-num en-t3">0{item.id}</span>
                <p className="qna__item-question kr-t2">{item.question}</p>
                <p className="qna__item-answer kr-b1">{item.answer}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
