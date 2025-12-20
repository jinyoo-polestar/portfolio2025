import "./AboutVisual.scss";

export default function AboutVisual() {
  return (
    <section className="aboutvisual">
      <div className="aboutvisual__headline aboutvisual__headline--first">
        <div className="aboutvisual__title aboutvisual__title--first">
          <span className="en-h2-italic">all - </span>
          <span className="en-h2">about</span>
          <span className="en-b2">
            jinyoo
            <br />
            2025 portfolio
          </span>
        </div>
        <p className="aboutvisual__title aboutvisual__title--second">
          I solve problems with code,
          <br />
          structure, and curiosity.
        </p>
      </div>
      <div className="aboutvisual__headline aboutvisual__headline--second">
        <span className="headline__icon headline__icon--code"></span>
        <span className="headline__icon headline__icon--img"></span>
        <span className="headline__text headline__text-box en-h4">
          who i am
        </span>
        <span className="headline__text headline__text-roundbox kr-t1">
          디테일한 부분들을 잘 챙기는 <b>꼼꼼함</b>
        </span>
        <span className="headline__text headline__text-roundbox kr-t1">
          <b>목표</b>가 세워지면 어떻게든 <b>무조건 해냄</b>
        </span>
        <span className="headline__text headline__text-roundbox kr-t1">
          <b>열</b>정 <b>빼</b>면 <b>시</b>체
        </span>
        <span className="headline__img"></span>
        <span className="headline__text headline__text-roundbox kr-t1">
          <b>빠른 적응력</b>과 부드러운 <b>커뮤니케이션</b> 능력
        </span>
      </div>
    </section>
  );
}
