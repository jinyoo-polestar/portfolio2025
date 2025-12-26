"use client";

import Image from "next/image";

import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { qna } from "@/data/about";

gsap.registerPlugin(ScrollTrigger);

import "./AboutQna.scss";

export default function AboutQna() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".qna",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: true,
      },
    });

    tl.from(".qna__header span", {
      scale: 0,
    }).fromTo(
      ".qna__item",
      {
        autoAlpha: 0,
        yPercent: 100,
      },
      {
        autoAlpha: 1,
        yPercent: 0,
        stagger: 1,
      }
    );
  });

  return (
    <section className="qna">
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
