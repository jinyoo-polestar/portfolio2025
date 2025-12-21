"use client";

import { gsap } from "gsap";
import { useEffect, useState } from "react";

import "./ProjectInsight.scss";

export default function ProjectInsight() {
  const [toggleState, setToggleState] = useState(0);

  useEffect(() => {
    const insightTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".insight",
        start: "top top",
      },
    });

    insightTl
      .fromTo(
        [".insight__title"],
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        }
      )
      .fromTo(
        [".insight__toggle-box", ".insight__contents"],
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        }
      );

    return () => {
      insightTl.kill();
    };
  }, []);

  useEffect(() => {
    gsap.to(".insight__content", {
      autoAlpha: 0,
    });

    gsap.fromTo(
      ".insight__content-active",
      {
        autoAlpha: 0,
        yPercent: 50,
      },
      {
        autoAlpha: 1,
        yPercent: 0,
      }
    );
  }, [toggleState]);

  return (
    <section className="insight">
      <h3 className="insight__title en-t1">project insights</h3>
      <div className="insight__toggle-box en-b1">
        <span
          className={`insight__toggle ${
            toggleState === 0 ? "insight__toggle-active" : ""
          }`}
          onClick={() => setToggleState(0)}
        >
          results
        </span>
        <span
          className={`insight__toggle ${
            toggleState === 1 ? "insight__toggle-active" : ""
          }`}
          onClick={() => setToggleState(1)}
        >
          learnings
        </span>
      </div>
      <ul className="insight__contents">
        <li
          className={`insight__content ${
            toggleState === 0 ? "insight__content-active" : ""
          }`}
        >
          <div className="insight__content-title kr-t1">결과</div>
          <p className="insight__content-desc kr-b1">내용내용</p>
        </li>
        <li
          className={`insight__content ${
            toggleState === 1 ? "insight__content-active" : ""
          }`}
        >
          <div className="insight__content-title kr-t1">회고</div>
          <p className="insight__content-desc kr-b1">내용내용</p>
        </li>
      </ul>
    </section>
  );
}
