import Image from "next/image";

import FooterImg from "../../public/img_footer.png";
import ArrowIcon from "../../public/ic_arrow.svg";

import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title en-h1">
        <span>c</span>
        <span className="footer__title-img">
          <Image src={FooterImg} fill alt="o" style={{ objectFit: "cover" }} />
        </span>
        <span>de</span>
      </p>
      <div className="footer__info-box en-b2">
        <p className="footer__desc">
          <span className="footer__desc--highlight">작은 디테일까지 </span>
          놓치지 않고,
          <br />
          <span className="footer__desc--highlight">디자인의 결 </span>을 살리는
          <span className="footer__desc--highlight"> 개발자</span>
        </p>
        <div className="footer__email">
          <span className="en-b2">sju9808@naver.com</span>
          <a href="mailto:sju9808@naver.com">
            <Image src={ArrowIcon} alt="contact" width={24} height={24} />
          </a>
        </div>
        <small className="footer__copyright">jinyoo.2025</small>
      </div>
    </footer>
  );
}
