import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  return (
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
  );
};

export default NavBar;
