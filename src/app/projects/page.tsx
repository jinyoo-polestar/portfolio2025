"use client";

import Image from "next/image";
import { useEffect } from "react";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { projects } from "@/data/projects";
import dummyImg from "#/dummy.png";
import "./projects.scss";

export default function Projects() {
  useEffect(() => {
    const projectTl = gsap.timeline();

    projectTl
      .from(".projects__title", {
        xPercent: -50,
        opacity: 0,
        duration: 0.5,
      })
      .from(
        ".projects__categories",
        {
          xPercent: -50,
          opacity: 0,
          duration: 0.5,
        },
        ">"
      );

    gsap.fromTo(
      ".projects__items",
      {
        yPercent: 50,
        autoAlpha: 0,
      },
      {
        yPercent: 0,
        autoAlpha: 1,
        duration: 2,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: ".projects",
          start: "top top",
        },
      }
    );
  });

  return (
    <section className="projects">
      <h2 className="projects__title en-h3 scramble">
        <i>all </i>
        projects
      </h2>
      <ul className="projects__categories">
        <li className="projects__category">web</li>
        <li className="projects__category">shop</li>
        <li className="projects__category">admin</li>
      </ul>
      <ul className="projects__items">
        {projects.map((project, i) => {
          return (
            <li key={i} className="projects__item">
              <div className="projects__thumb">
                <Image src={dummyImg} alt="" />
              </div>
              <article className="projects__item-inner">
                <p className="projects__desc kr-b1">{project.desc}</p>
                <h2 className="projects__name en-t1">{project.name}</h2>
                <p className="projects__period kr-b1">{project.period}</p>
                <ul className="projects__skills">
                  {project.skills.map((skill, i) => {
                    return <li key={i} className="projects__skill"></li>;
                  })}
                </ul>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
