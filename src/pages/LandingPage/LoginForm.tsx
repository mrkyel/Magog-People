import React from "react";

const LoginForm = () => {
  return (
    <>
      <div
        className="login-inner"
        style={{ padding: "14px 0", margin: "10px" }}
      >
        <form style={{ padding: "0 14px" }}>
          <input type="text" placeholder="아이디" />
          <input type="password" placeholder="비밀번호" />
          <button>로그인</button>
          <button>로그아웃</button>
          <a href="/register">회원가입</a>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
