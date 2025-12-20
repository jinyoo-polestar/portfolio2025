import "./ProjectInsight.scss";

export default function ProjectInsight() {
  return (
    <section className="insight">
      <h3 className="insight__title en-t1">project insights</h3>
      <div className="insight__toggle-box en-b1">
        <span className="insight__toggle insight__toggle-active">results</span>
        <span className="insight__toggle">learnings</span>
      </div>
      <ul className="insight__contents">
        <li className="insight__content">
          <div className="insight__content-title kr-t1">결과</div>
          <p className="insight__content-desc kr-b1">내용내용</p>
        </li>
        <li className="insight__content">
          <div className="insight__content-title kr-t1">회고</div>
          <p className="insight__content-desc kr-b1">내용내용</p>
        </li>
      </ul>
    </section>
  );
}
