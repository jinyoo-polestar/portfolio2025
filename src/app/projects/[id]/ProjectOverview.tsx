"use client";

import Image from "next/image";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

import { ProjectProps } from "@/data/projects";

import "./ProjectOverview.scss";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectOverview({ data }: ProjectProps) {
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
        <p className="overview__desc kr-b1">{data.overview}</p>
      </div>
      <ul className="overview__contents">
        <li className="overview__content">
          <span className="overview__content-num en-b1">01</span>
          <span className="overview__content-title kr-s1">기간</span>
          <span className="overview__content-text kr-b1">{data.period}</span>
        </li>
        <li className="overview__content">
          <span className="overview__content-num en-b1">02</span>
          <span className="overview__content-title kr-s1">역할(기여도)</span>
          <ul className="overview__content-text kr-b1">
            {data.role.map((role, i) => {
              return <li key={i}>{role}</li>;
            })}
          </ul>
        </li>
        <li className="overview__content">
          <span className="overview__content-num en-b1">03</span>
          <span className="overview__content-title kr-s1">스킬</span>
          <ul className="overview__content-icons">
            {data.skills.map((skill, i) => {
              return (
                <li className="overview__content-icon" key={i}>
                  <Image src={skill.icon} alt={skill.name} />
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </section>
  );
}
