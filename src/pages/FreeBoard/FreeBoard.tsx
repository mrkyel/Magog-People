import React, { useEffect } from 'react';
import './FreeBoard.scss';
import Button from 'components/atoms/Button';
import { Pagination } from 'antd';
import 'antd/dist/antd.css';
import SearchBox from 'components/atoms/searchbox/SearchBox.js';
import axios from 'axios';

const FreeBoard = () => {
  useEffect(() => {
    console.log('렌더링 완료');
    axios
      .get(
        'http://ec2-3-34-129-2.ap-northeast-2.compute.amazonaws.com:8080/board/v1/select?',
      )
      .then((response) => {
        console.log(response.data);
      });
  }, []);
  return (
    <div className="freeboard-wrapper">
      <div className="freeboard-title">자유 게시판</div>
      <div className="freeboard-body">
        <div className="freeboard-body-head">
          <span>번호</span>
          <span>제목</span>
          <span>작성자</span>
          <span>공감</span>
          <span>조회</span>
          <span>등록일</span>
        </div>
        <div className="freeboard-body-contents">
          <div>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="freeboard-footer">
        <Button right>글쓰기</Button>
      </div>
      <div className="freeboard-paging">
        <Pagination
          total={85}
          showSizeChanger
          showQuickJumper
          showTotal={(total) => `Total ${total} items`}
        />
      </div>
      <div className="freeboard-searchbar">
        <SearchBox />
      </div>
    </div>
  );
};

export default FreeBoard;
