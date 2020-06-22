import React from 'react';
import LoginForm from './loginform/LoginForm';
import './LandingPage.scss';

const LandingPage = () => {
  return (
    <>
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
    </>
  );
};

export default LandingPage;
