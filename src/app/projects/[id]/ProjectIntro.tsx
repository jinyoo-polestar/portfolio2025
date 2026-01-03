"use client";

import Image from "next/image";
import { useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { ProjectProps } from "@/data/projects";

import "./ProjectIntro.scss";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function ProjectIntro({ data }: ProjectProps) {
  const container = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        pin: true,
      });

      const tl = gsap.timeline();

      tl.fromTo(
        [".intro__title-kr", ".intro__title-en"],
        {
          scale: 0,
        },
        {
          scale: 1,
          stagger: 0.25,
        }
      )
        .fromTo(".intro__viewbtn", { autoAlpha: 0 }, { autoAlpha: 1 }, "+=0.05")
        .fromTo(".intro__img", { autoAlpha: 0 }, { autoAlpha: 1 }, "+=0.05");
    },
    { scope: container }
  );

  return (
    <section className="intro" ref={container}>
      <div className="intro__title-box">
        <div className="intro__title">
          <h2 className="intro__title-kr kr-t3">{data.name}</h2>
          <p className="intro__title-en en-h3">{data.enName}</p>
        </div>
        <a className="intro__viewbtn en-b1" href={data.url} target="_blank">
          <i className="intro__viewbtn-icon"></i> <span> visit website</span>
        </a>
      </div>
      <div className="intro__img">
        <Image src={data.mockup} alt={data.name} priority />
      </div>
      <p className="intro__text en-b2">
        <span>jinyoo</span>
        <span>2025</span>
      </p>
    </section>
  );
}
