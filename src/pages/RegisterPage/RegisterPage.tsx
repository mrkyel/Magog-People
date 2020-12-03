import React, { useEffect } from "react";
import "./RegisterPage.scss";
import { Link } from "react-router-dom";
import { Button } from "antd";

declare global {
  interface Window {
    Kakao: any;
  }
}

const { Kakao } = window;

const RegisterPage = () => {

  const kakaoLoginClickHandler = () => {
    console.log(Kakao.Auth.login({
      success: (auth) => {
        console.log(auth)
      },
      fail: (err) => {
        console.log(err)
      }
    }))
  }

  return (
    <form>
      <div className="form-wrapper">
        <ul>
          <li className="normal-login">
            <Link to="/normal-register">일반회원으로 가입</Link>
          </li>
          <li className="sns-login">
            <Button onClick={kakaoLoginClickHandler} style={{ background: "#ffd632" }}>
              <img
                src={require("media/icons/Login_kakao.png")}
                alt="kakao-logo"
              />
              <span>카카오 계정으로 로그인</span>
            </Button>
            <a
              href="https://www.facebook.com/v2.12/dialog/oauth?client_id=179876179410019&redirect_uri=https%3A%2F%2Fwww.ppomppu.co.kr%2Fopenapi%2Fsocial%2Flogin.php&state=facebook%7C%7CDFXhU14w5EWK0Pzi0tuTshmnwo4tUYf6qcwLWvp4vuLYzpShC9yJyymY567pvgWmwMtGloOqTZNgaBBalgZHucLa1qvgjQ5B2De6YaRjcZY%253D"
              style={{ background: "#3155af" }}
            >
              <img
                src={require("media/icons/Login_facebook.png")}
                alt="facebook-logo"
              />
              <span>페이스북 계정으로 회원가입</span>
            </a>
            <a
              href="https://nid.naver.com/oauth2.0/authorize?client_id=xDGYSg2QR6mVXgzCutar&response_type=code&redirect_uri=https%3A%2F%2Fwww.ppomppu.co.kr%2Fopenapi%2Fsocial%2Flogin.php&state=naver%7C%7Czk1upFRjfUCkpP3yEsRt%252FFnVnA0rm1THYFIxvVbkmejCk6drDoK7JgjMyLHd9RY5cxzy3C2mX0IXjrqCGNSzhBGdVtQ4yxUOk5z%252FdQQujXU%253D"
              style={{ background: "#48c12f" }}
            >
              <img
                src={require("media/icons/Login_naver.png")}
                alt="naver-logo"
              />
              <span>네이버 계정으로 회원가입</span>
            </a>
          </li>
        </ul>
      </div>
    </form>
  );
};

export default RegisterPage;
