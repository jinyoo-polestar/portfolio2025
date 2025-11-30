import Image from "next/image";

import FooterImg from "../../public/img_footer.png";
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
          Code Code Code Code Code Code{" "}
          <span className="footer__desc--highlight">
            {" "}
            Code Code Code Code Code Code,
          </span>
          Code Code Code Code Code Code{" "}
          <span className="footer__desc--highlight">
            {" "}
            Code Code Code Code Code Code,
          </span>
        </p>
        <div className="footer__email">
          <span className="en-b2">sju9808@naver.com</span>
          <a href="mailto:sju9808@naver.com"></a>
        </div>
        <small className="footer__copyright">jinyoo.2025</small>
      </div>
    </footer>
  );
}
