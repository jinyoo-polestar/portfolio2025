"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { projects } from "@/data/projects";

import "./MainPortfolio.scss";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function MainPortfolio() {
  const container = useRef<HTMLElement | null>(null);
  const projectNames = ["ooos", "younglim", "widmice", "apfel"];
  const mainProjects = projects.filter((project) =>
    projectNames.some((key) => project.enName.toLowerCase().includes(key))
  );

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width:1025px)", () => {
        const mainPfTl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing: true,
          },
        });

        mainPfTl
          .fromTo(
            ".portfolio__title--pc",
            { autoAlpha: 0 },
            { autoAlpha: 0.08, duration: 0.25 }
          )
          .fromTo(
            ".portfolio__cards-wrapper",
            {
              autoAlpha: 0,
            },
            {
              autoAlpha: 1,
              duration: 0.5,
            },
            "+=0.25"
          )
          .fromTo(
            ".portfolio__title--pc",
            {
              xPercent: 0,
            },
            {
              xPercent: -100,
              duration: 100,
            },
            "+=0.25"
          );
      });

      mm.add("(max-width:1024px)", () => {
        const mainPfTl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing: true,
          },
        });

        mainPfTl
          .fromTo(
            ".portfolio__title--mo",
            { autoAlpha: 0 },
            { autoAlpha: 0.08, duration: 0.25 }
          )
          .fromTo(
            ".portfolio__cards-wrapper",
            {
              autoAlpha: 0,
            },
            {
              autoAlpha: 1,
              duration: 0.5,
            },
            "+=0.25"
          );
      });

      return () => mm.revert();
    },
    { scope: container }
  );

  return (
    <section className="portfolio" ref={container}>
      <h3 className="portfolio__title portfolio__title--pc en-h3">
        A portfolio built at the intersection of code and design.
      </h3>
      <h3 className="portfolio__title portfolio__title--mo en-h3">portfolio</h3>
      <div className="portfolio__cards-wrapper">
        <div className="portfolio__cards">
          {mainProjects.map((project, i) => {
            return (
              <Link
                href={`/projects/${project.id}`}
                scroll={true}
                className="portfolio__card"
                key={i}
              >
                <div className="portfolio__card-thumb">
                  <Image src={project.thumbnail} alt={project.name} fill />
                </div>
                <span className="portfolio__card-title en-t2">
                  {project.enName}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
