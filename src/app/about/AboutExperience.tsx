"use client";

import Image from "next/image";

import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import flowerImg from "#/img_flower.png";
import { experience } from "@/data/about";

gsap.registerPlugin(ScrollTrigger);

import "./AboutExperience.scss";

export default function AboutExperience() {
  useEffect(() => {
    const experienceItems = gsap.utils.toArray<HTMLElement>(
      ".experience__item-inner"
    );

    const initialRotationOffset = -36.25;
    const shapes = gsap.utils.toArray(".experience__header-char");
    const wrapRotation = gsap.utils.wrap(-90, 90);
    const radius = 400;
    const letterPos = [-36, -24, -12, 0, 12, 24, 36, 48, 60, 72];

    const experienceTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".experience__header",
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.set(shapes, {
      transformOrigin: `50% 50% ${-radius}px`,
      rotationY: (i) => letterPos[i],
    });

    experienceTl
      .fromTo(
        ".experience__img",
        {
          display: "none",
          autoAlpha: 0,
        },
        {
          display: "block",
          autoAlpha: 0.7,
        }
      )
      .fromTo(
        [".experience__header-text", ".experience__header-inner"],
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          stagger: 0.25,
        }
      );

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

    gsap.to(".experience__img", {
      scale: 2,
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
        scrub: 2,
      },
    });

    experienceItems.forEach((item) => {
      gsap.fromTo(
        item,
        { rotationY: -60, z: 100 },
        {
          rotationY: 60,
          x: -1000,
          scrollTrigger: {
            trigger: item.closest(".experience__item"),
            containerAnimation: experienceListTl,
            start: "left center",
            end: "right center",
            scrub: true,
          },
        }
      );
    });

    gsap.fromTo(
      ".experience__img",
      {
        autoAlpha: 0.7,
      },
      {
        autoAlpha: 0,
        scrollTrigger: {
          trigger: ".experience__item:last-child",
          containerAnimation: experienceListTl,
          start: "left left",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="experience">
      <div className="experience__img">
        <Image src={flowerImg} alt="" />
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
