import "./ProjectBuilt.scss";

export default function ProjectBuilt() {
  return (
    <section className="built">
      <h3 className="built__title en-t1">how i build it</h3>
      <ul className="built__contents">
        <li className="built__content">
          <div className="built__content-thumb"></div>
          <h4 className="built__content-title kr-s1">
            <i className="built__content-icon"></i>
            내용
          </h4>
          <p className="built__content-desc kr-b1">내용</p>
        </li>
      </ul>
    </section>
  );
}
