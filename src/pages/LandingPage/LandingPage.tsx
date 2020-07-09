import React from 'react';
import LoginForm from './loginform/LoginForm';
import './LandingPage.scss';

const LandingPage = () => {
  return (
    <>
      <div className="container-left">
        <div className="container-down"></div>
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
        <div className="container-down">
          <div className="container-down-inner-1">1</div>
          <div className="container-down-inner">2</div>
          <div className="container-down-inner">3</div>
        </div>
      </div>

      <div className="container-right">
        <div className="login-wrap">
          <LoginForm />
        </div>
        <article className="search-ranking"></article>
      </div>
    </>
  );
};

export default LandingPage;
