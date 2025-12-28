"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Image from "next/image";

import { ProjectProps } from "@/data/projects";

import "./ProjectIntro.scss";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectIntro({ data }: ProjectProps) {
  useEffect(() => {
    const introTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".intro",
        start: "top top",
        end: "bottom top",
        pin: true,
      },
      defaults: {
        duration: 0.75,
      },
    });

    introTl
      .from([".intro__title-kr", ".intro__title-en"], {
        scale: 0,
        stagger: 0.75,
      })
      .from(".intro__viewbtn", { autoAlpha: 0 })
      .from(".intro__img", { autoAlpha: 0 });
  }, []);

  return (
    <section className="intro">
      <div className="intro__title-box">
        <div className="intro__title">
          <h2 className="intro__title-kr kr-t3">{data.name}</h2>
          <p className="intro__title-en en-h3">{data.enName}</p>
        </div>
        <a className="intro__viewbtn en-b1" href="#" target="_blank">
          <i className="intro__viewbtn-icon"></i> <span> visit website</span>
        </a>
      </div>
      <div className="intro__img">
        <Image src={data.mockup} alt={data.name} />
      </div>
      <p className="intro__text en-b2">
        <span>jinyoo</span>
        <span>2025</span>
      </p>
    </section>
  );
}
