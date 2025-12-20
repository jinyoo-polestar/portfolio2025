import "./ProjectIntro.scss";

export default function ProjectIntro() {
  return (
    <section className="intro">
      <div className="intro__title-box">
        <div className="intro__title">
          <h2 className="intro__title-kr kr-t3">영림 웹사이트 리뉴얼 작업</h2>
          <p className="intro__title-en en-h2">younglim</p>
        </div>
        <a className="intro__viewbtn en-b1" href="#" target="_blank">
          <i className="intro__viewbtn-icon"></i> visit website
        </a>
        <span className="intro__meta en-b2">jinyoo.2025</span>
      </div>
      <div className="intro__img">
        <div className="intro__img-pc"></div>
        <div className="intro__img-mo"></div>
      </div>
    </section>
  );
}
