import React from 'react';
import { Link } from 'react-router-dom';
import SearchBox from '../../atoms/searchbox/SearchBox';
import './NavBar.scss';

const NavBar = () => {
  return (
    <>
      <header>
        <div className="header-center">
          <h1 className="maple_logo">
            <Link to="/">마-피</Link>
          </h1>
          <SearchBox />
        </div>
      </header>
      <div className="navWrap">
        <nav>
          <ul className="topNav">
            <li>이모저모</li>
            <li>
              <Link to="/freeboard">자유게시판</Link>
            </li>
            <li>공구게시판</li>
            <li>저모이모</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
