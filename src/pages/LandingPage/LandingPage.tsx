import React from 'react';
import LoginForm from './loginform/LoginForm';
import './LandingPage.scss';
import Footer from './footer/Footer';
import SearchBox from './searchbox/SearchBox';
import NavBar from './navbar/Navbar.js';

const LandingPage = () => {
  return (
    <>
      <div className="wrapper">
        <header>
          <div className="header-center">
            <h1 className="maple_logo">마-피</h1>
            <SearchBox />
          </div>
        </header>
        <NavBar />
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
