"use client";

import { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FooterImg from "../../public/img_footer.png";
import ArrowIcon from "../../public/ic_arrow.svg";

gsap.registerPlugin(ScrollTrigger);

import "./Footer.scss";

export default function Footer() {
  useEffect(() => {
    gsap.fromTo(
      ".footer__title",
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 0.75,
        scrollTrigger: {
          trigger: ".footer",
          start: "top 5%",
        },
      }
    );

    const target = document.querySelector(".footer__title-img");
    if (!target) return;

    const rotate = gsap.quickTo(target, "rotation", {
      duration: 0.3,
      ease: "power3.out",
    });

    const mouseMove = (e: MouseEvent) => {
      rotate(e.clientX * 0.5);
    };

    document.addEventListener("mousemove", mouseMove);

    return () => {
      document.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <footer className="footer">
      <p className="footer__title en-h1">
        <span>c</span>
        <span className="footer__title-img">
          <Image src={FooterImg} fill alt="o" />
        </span>
        <span>de</span>
      </p>

      <div className="footer__info-box en-b2">
        <p className="footer__desc">
          <span className="footer__desc--highlight">작은 디테일까지 </span>
          놓치지 않고,
          <br />
          <span className="footer__desc--highlight">디자인의 결 </span>을 살리는
          <span className="footer__desc--highlight"> 개발자</span>
        </p>

        <div className="footer__email">
          <span className="en-b2">sju9808@naver.com</span>
          <a href="mailto:sju9808@naver.com">
            <Image src={ArrowIcon} alt="contact" width={24} height={24} />
          </a>
        </div>

        <small className="footer__copyright">jinyoo.2025</small>
      </div>
    </footer>
  );
}
