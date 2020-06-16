import React from "react";
import { Input } from "antd";
import LoginForm from "./LoginForm";
import "./LandingPage.scss";

const { Search } = Input;

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
            <Search
              placeholder="input search text"
              onSearch={(value) => console.log(value)}
              style={{ position: "absolute", left: "272px", top: "71px" }}
            />
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
        </div>
        <div className="footer"></div>
      </div>
    </>
  );
};

export default LandingPage;
