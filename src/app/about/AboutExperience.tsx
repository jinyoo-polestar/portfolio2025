import Image from "next/image";

import flowerImg from "#/img_flower.png";
import { experience } from "@/data/about";

import "./AboutExperience.scss";

export default function AboutExperience() {
  return (
    <section className="experience">
      <div className="experience__img">
        <Image src={flowerImg} alt="" />
      </div>
      {/* <div className="experience__header">
        <span className="experience__header-text en-b2">my journey</span>
        <h2 className="experience__header-title en-h3">experience</h2>
      </div> */}
      <ul className="experience__items">
        {experience.map((experience, i) => {
          return (
            <li className="experience__item" key={i}>
              <span className="experience__item-num en-t2">0{i + 1}</span>
              <p className="experience__item-title kr-t1">{experience}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
