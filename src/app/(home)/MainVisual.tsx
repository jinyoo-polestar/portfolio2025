import "./MainVisual.scss";
import Image from "next/image";

import PcModel from "../fiber/page";

import MainVisualImg from "../../../public/img_mainvisual.png";

export default function MainVisual() {
  return (
    <section className="main-visual">
      {/* <PcModel /> */}
      <div className="main-visual__top en-h2">
        <p>
          <span className="scramble">design</span>
          <span>
            <i className="main-visual__star-icon"></i>
            <span className="scramble"> driven</span>
          </span>
        </p>
        <p className="scramble">Developer</p>
      </div>
      <div className="main-visual__bottom">
        <h1 className="kr-t1">
          디자인의 결을 <br />
          이해하는 개발자
        </h1>
        <p className="kr-b1">
          디자인 단순 재현을 넘어, 디자이너의 의도와 화면 흐름까지 구현합니다.
        </p>
      </div>
      {/* <div className="main-visual__img">
        <Image src={MainVisualImg} fill alt="" />
      </div> */}
    </section>
  );
}
