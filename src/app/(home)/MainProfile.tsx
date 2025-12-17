import Image from "next/image";

import "./MainProfile.scss";
import { skills } from "@/data/skills";
import { works } from "@/data/works";

export default function MainProfile() {
  return (
    <section className="profile">
      <div className="profile__header">
        <h2 className="en-h3">about me</h2>
        <a className="en-b1">view more</a>
      </div>
      <div className="profile__content">
        <div className="profile__box profile__box--personal">
          <p className="profile__title en-s1">
            <span className="profile__title-num">01. </span>
            <span>personal info</span>
          </p>
          <ul className="kr-b1">
            <li>
              <span className="label">name</span>
              <span className="value">신진유</span>
            </li>
            <li>
              <span className="label">birth</span>
              <span className="value">1998.08.08</span>
            </li>
            <li>
              <span className="label">E-mail</span>
              <span className="value">sju9808@naver.com</span>
            </li>
          </ul>
        </div>
        <div className="profile__box profile__box--skill">
          <p className="profile__title en-s1">
            <span className="profile__title-num">02. </span>
            <span>skill</span>
          </p>
          <div className="profile__skills">
            {skills.map((skill, i) => {
              return (
                <span key={i}>
                  <Image src={skill.icon} alt={skill.name} />
                </span>
              );
            })}
          </div>
        </div>
        <div className="profile__box profile__box--work">
          <p className="profile__title en-s1">
            <span className="profile__title-num">03. </span>
            <span>work</span>
          </p>
          <ul className="profile__works">
            {works.map((work, i) => {
              return (
                <li key={i} className="profile__work">
                  <p className="profile__work-title">
                    {work.company} ({work.period})
                  </p>
                  <ul className="profile__work-details">
                    {work.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
