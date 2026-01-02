"use client";

import { gsap } from "gsap";
import { useEffect, useState } from "react";

import { ProjectProps } from "@/data/projects";

import "./ProjectInsight.scss";

export default function ProjectInsight({ data }: ProjectProps) {
  const [toggleState, setToggleState] = useState(0);

  useEffect(() => {
    const insightTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".insight",
        start: "top top",
        end: "bottom top",
        pin: true,
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
          yPercent: 50,
        },
        {
          autoAlpha: 1,
          yPercent: 0,
          ease: "power3.out",
        }
      );

    return () => {
      insightTl.kill();
    };
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".insight__content:not(.insight__content-active)", {
      yPercent: -50,
      autoAlpha: 0,
      duration: 0.5,
    }).fromTo(
      ".insight__content-active",
      {
        autoAlpha: 0,
        yPercent: 50,
        duration: 2,
      },
      {
        autoAlpha: 1,
        yPercent: 0,
        duration: 0.5,
      }
    );
  }, [toggleState]);

  return (
    <section className="insight">
      <h3 className="insight__title en-t1">
        <span>project </span>
        <span>insights</span>
      </h3>
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
          } insight__content--left`}
        >
          <div className="insight__content-title insight__content-title--left kr-t1">
            결과
          </div>
          <p className="insight__content-desc kr-b1">{data.result}</p>
        </li>
        <li
          className={`insight__content ${
            toggleState === 1 ? "insight__content-active" : ""
          } insight__content--right`}
        >
          <div className="insight__content-title kr-t1">회고</div>
          <p className="insight__content-desc kr-b1">{data.learning}</p>
        </li>
      </ul>
    </section>
  );
}
