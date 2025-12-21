"use client";

import { gsap } from "gsap";
import { useEffect } from "react";

import "./ProjectBuilt.scss";

export default function ProjectBuilt() {
  useEffect(() => {
    const builtItems = gsap.utils.toArray<HTMLElement>(".built__content");

    gsap.fromTo(
      ".built__title",
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 0.75,
        scrollTrigger: {
          trigger: ".built",
          start: "top center",
        },
      }
    );

    builtItems.forEach((builtItem) => {
      gsap.fromTo(
        builtItem,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 1,
          scrollTrigger: {
            trigger: builtItem,
            start: "top center",
          },
        }
      );
    });
  });

  return (
    <section className="built">
      <h3 className="built__title en-t1">how i build it</h3>
      <ul className="built__contents">
        <li className="built__content">
          <div className="built__content-thumb"></div>
          <h4 className="built__content-title kr-s1">
            <i className="built__content-icon"></i>
            내용
          </h4>
          <p className="built__content-desc kr-b1">내용</p>
        </li>
        <li className="built__content">
          <div className="built__content-thumb"></div>
          <h4 className="built__content-title kr-s1">
            <i className="built__content-icon"></i>
            내용
          </h4>
          <p className="built__content-desc kr-b1">내용</p>
        </li>
        <li className="built__content">
          <div className="built__content-thumb"></div>
          <h4 className="built__content-title kr-s1">
            <i className="built__content-icon"></i>
            내용
          </h4>
          <p className="built__content-desc kr-b1">내용</p>
        </li>
        <li className="built__content">
          <div className="built__content-thumb"></div>
          <h4 className="built__content-title kr-s1">
            <i className="built__content-icon"></i>
            내용
          </h4>
          <p className="built__content-desc kr-b1">내용</p>
        </li>
      </ul>
    </section>
  );
}
