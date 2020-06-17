import React from "react";
import LoginForm from "./LoginForm";
import "./LandingPage.scss";
import Footer from "./footer/Footer";
import SearchBox from "./searchbox/SearchBox";

const LandingPage = () => {
  const names = [
    "이모저모",
    "저모이모",
    "공구게시판",
    "자유게시판",
    "구인구직게시판",
  ];
  const nameList = names.map((name, index) => (
    <li key={index} style={{ color: "#fff" }}>
      {name}
    </li>
  ));

  return (
    <>
      <div className="wrapper">
        <header>
          <div className="header-center">
            <h1 className="maple_logo">마곡피플</h1>
            <SearchBox />
          </div>
        </header>
        <div className="navWrap">
          <nav>
            <ul className="topNav">{nameList}</ul>
          </nav>
        </div>
        <div className="container">
          <div className="container-left">좌로</div>
          <div className="container-right">
            <div className="login-wrap">
              <LoginForm />
            </div>
            <article className="search-ranking"></article>
          </div>
          <div className="container-down">
            <div className="container-down-inner-1">1</div>
            <div className="container-down-inner">2</div>
            <div className="container-down-inner">3</div>
          </div>
          <div className="container-down">
            <div className="container-down-inner-1">1</div>
            <div className="container-down-inner">2</div>
            <div className="container-down-inner">3</div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
