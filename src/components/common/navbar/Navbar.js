import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import { Input } from 'antd';
const { Search } = Input;

const NavBar = () => {
  return (
    <>
      <header>
        <div className="header-center">
          <h1 className="maple_logo">
            <Link to="/">마-피</Link>
          </h1>
          <Search
            placeholder="검색어를 입력하세요"
            onSearch={(value) => console.log(value)}
            enterButton
            style={{ width: '30%' }}
          />
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
