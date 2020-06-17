import React from "react";
import "./Footer.scss";

const Footer = () => {
  const names = [
    "회사소개",
    "이용약관",
    "개인정보처리방침",
    "광고 및 제휴",
    "상담문의",
  ];
  const nameList = names.map((name, index) => (
    <li key={index} style={{ color: "#fff" }}>
      {name}
    </li>
  ));
  return (
    <div className="footer">
      <div className="footer-nav">
        <nav>
          <ul>{nameList}</ul>
        </nav>
      </div>
      <div className="footer-contents">
        <div className="footer-contents-inner">
          <span className="copyright">
            (주)마곡피플ent&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;연락처:010-8770-3506
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
