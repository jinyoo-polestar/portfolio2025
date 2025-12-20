import Image from "next/image";

import { projects } from "@/data/projects";
import dummyImg from "#/dummy.png";
import "./projects.scss";

export default function Projects() {
  return (
    <section className="projects">
      <h2 className="projects__title en-h3">
        <i>all </i>projects
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
