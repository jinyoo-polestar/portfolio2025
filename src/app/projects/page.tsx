"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { projects } from "@/data/projects";

import "./projects.scss";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function Projects() {
  const container = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const projectTl = gsap.timeline();

      projectTl.from(".projects__title", {
        opacity: 0,
        scale: 0,
        duration: 0.5,
      });

      gsap.fromTo(
        ".projects__items",
        {
          yPercent: 20,
          autoAlpha: 0,
        },
        {
          yPercent: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "bounce",
          scrollTrigger: {
            trigger: ".projects",
            start: "top top",
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <section className="projects" ref={container}>
      <h2 className="projects__title en-h3 scramble">
        <i>all </i>
        projects
      </h2>
      <div className="projects__items">
        {projects.map((project, i) => {
          return (
            <Link
              href={`/projects/${project.id}`}
              className="projects__item"
              key={i}
              scroll={true}
            >
              <div className="projects__thumb">
                <Image src={project.thumbnail} alt="" />
              </div>
              <article className="projects__item-inner">
                <p className="projects__desc kr-b1">{project.name}</p>
                <h2 className="projects__name en-t1">{project.enName}</h2>
                <p className="projects__period kr-b1">{project.period}</p>
                <ul className="projects__skills">
                  {project.skills.map((skill, i) => {
                    return <li key={i} className="projects__skill"></li>;
                  })}
                </ul>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
