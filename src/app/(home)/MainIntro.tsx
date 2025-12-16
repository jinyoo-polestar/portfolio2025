import "./MainIntro.scss";
import Image from "next/image";

export default function MainIntro() {
  return (
    <section className="main-intro">
      <div className="main-intro__inner en-h4">
        <p className="main-intro__text">
          i&apos;m a <b>developer</b>
        </p>
        <p className="main-intro__text">
          <i className="ic-star"></i>who speaks
        </p>
        <p className="main-intro__text">
          the <b>language</b>
        </p>
        <p className="main-intro__text">
          <b>of design.</b>
        </p>
      </div>
    </section>
  );
}
