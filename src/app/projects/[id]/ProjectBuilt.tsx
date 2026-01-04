"use client";

import Image from "next/image";
import { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ProjectProps } from "@/data/projects";

import "./ProjectBuilt.scss";

gsap.registerPlugin(useGSAP);

export default function ProjectBuilt({ data }: ProjectProps) {
  const container = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
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
    },
    { scope: container }
  );

  return (
    <section className="built" ref={container}>
      <h3 className="built__title en-t1">how i build it</h3>
      <ul className="built__contents">
        {data.built.map((item, i) => {
          return (
            <li className="built__content" key={i}>
              <div className="built__content-thumb">
                <i className="built__content-thumbicon">
                  <Image src={item.icon} alt={item.title} />
                </i>
              </div>
              <h4 className="built__content-title kr-s1">
                <i className="built__content-icon"></i>
                {item.title}
              </h4>
              <p className="built__content-desc kr-b1"> {item.desc}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
