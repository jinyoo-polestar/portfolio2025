import Image from "next/image";

import { qna } from "@/data/about";

import "./AboutQna.scss";

export default function AboutQna() {
  return (
    <section className="qna">
      <h2 className="qna__header en-h3">q&a</h2>
      <ul className="qna__items">
        {qna.map((item, i) => {
          return (
            <li className="qna__item" key={i}>
              <Image src={item.img} alt="" className="qna__item-thumb" />
              <div className="qna__item-inner">
                <span className="qna__item-num en-t3">0{item.id}</span>
                <p className="qna__item-question kr-t2">{item.question}</p>
                <p className="qna__item-answer kr-b1">{item.answer}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
