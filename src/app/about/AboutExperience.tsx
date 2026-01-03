"use client";

import Image from "next/image";
import { useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { experience } from "@/data/about";

import flowerImg from "#/img_flower.png";

import "./AboutExperience.scss";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function AboutExperience() {
  const container = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const experienceItems = gsap.utils.toArray<HTMLElement>(
        ".experience__item-inner"
      );

      const initialRotationOffset = -36.25;
      const shapes = gsap.utils.toArray(".experience__header-char");
      const wrapRotation = gsap.utils.wrap(-90, 90);
      const radius = 400;

      const mm = gsap.matchMedia();

      mm.add("(min-width:1025px)", () => {
        const letterPos = [-36, -24, -12, 0, 12, 24, 36, 48, 60, 72];

        gsap.set(shapes, {
          transformOrigin: `50% 50% ${-radius}px`,
          rotationY: (i) => letterPos[i],
        });

        gsap.fromTo(
          shapes,
          {
            rotationY: (i) => letterPos[i] + initialRotationOffset,
          },
          {
            rotationY: `-=${360}`,
            modifiers: {
              rotationY: (value) => wrapRotation(parseFloat(value)) + "deg",
            },
            duration: 10,
            ease: "none",
            repeat: -1,
          }
        );
      });

      mm.add("(max-width:1024px)", () => {
        const letterPos = [-18, -12, -6, 0, 6, 11, 16, 22, 29, 35];

        gsap.set(shapes, {
          transformOrigin: `50% 50% ${-radius}px`,
          rotationY: (i) => letterPos[i],
        });

        gsap.fromTo(
          shapes,
          {
            rotationY: (i) => letterPos[i] + initialRotationOffset,
          },
          {
            rotationY: `-=${360}`,
            modifiers: {
              rotationY: (value) => wrapRotation(parseFloat(value)) + "deg",
            },
            duration: 10,
            ease: "none",
            repeat: -1,
          }
        );
      });

      ScrollTrigger.create({
        trigger: ".experience__header",
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
      });

      ScrollTrigger.create({
        trigger: ".experience__header",
        start: "top top",
        endTrigger: ".experience",
        end: "bottom top",
        pin: ".experience__img",
        pinSpacing: false,
      });

      gsap.fromTo(
        ".experience__img",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 0.7,
          ease: "none",
          scrollTrigger: {
            trigger: ".experience__header",
            start: "top top",
            endTrigger: ".experience",
            end: "bottom top",
          },
        }
      );

      gsap.fromTo(
        [".experience__header-text", ".experience__header-inner"],
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".experience__header",
            start: "top top",
            end: "bottom top",
          },
        }
      );

      gsap.to(".experience__img", {
        scale: 1.8,
        xPercent: -100,
        rotate: 90,
        scrollTrigger: {
          trigger: ".experience__list",
          start: "top center",
          end: "top top",
          scrub: true,
        },
      });
      gsap.to(".experience__header", {
        autoAlpha: 0,
        scrollTrigger: {
          trigger: ".experience__list",
          start: "top center",
          end: "top top",
          scrub: true,
        },
      });

      const experienceListTl = gsap.to(".experience__items", {
        xPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: ".experience__list",
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: true,
          scrub: 5,
        },
      });

      experienceItems.forEach((item) => {
        gsap.fromTo(
          item,
          { rotationY: -60, z: 100 },
          {
            rotationY: 60,
            scrollTrigger: {
              trigger: item.closest(".experience__item"),
              containerAnimation: experienceListTl,
              start: "left center",
              end: "right center",
              scrub: 2,
            },
          }
        );
      });
    },
    { scope: container }
  );

  return (
    <section className="experience" ref={container}>
      <div className="experience__img" data-speed="0">
        <Image src={flowerImg} alt="" fill priority />
      </div>
      <div className="experience__header">
        <span className="experience__header-text en-b2">my journey</span>
        <div className="experience__header-inner">
          <div className="experience__header-title en-h3">
            <span className="experience__header-char" data-letter="e">
              e
            </span>
            <span className="experience__header-char" data-letter="x">
              x
            </span>
            <span className="experience__header-char" data-letter="p">
              p
            </span>
            <span className="experience__header-char" data-letter="e">
              e
            </span>
            <span className="experience__header-char" data-letter="r">
              r
            </span>
            <span className="experience__header-char" data-letter="i">
              i
            </span>
            <span className="experience__header-char" data-letter="e">
              e
            </span>
            <span className="experience__header-char" data-letter="n">
              n
            </span>
            <span className="experience__header-char" data-letter="c">
              c
            </span>
            <span className="experience__header-char" data-letter="e">
              e
            </span>
          </div>
        </div>
      </div>
      <div className="experience__list">
        <ul className="experience__items">
          <li className="experience__item dummy_item"></li>
          {experience.map((experience, i) => {
            return (
              <li className="experience__item" key={i}>
                <div className="experience__item-inner">
                  <span className="experience__item-num en-t2">0{i + 1}</span>
                  <p className="experience__item-title kr-t1">{experience}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
