import React, { useEffect, useState } from 'react';
import './FreeBoard.scss';
import Button from 'components/atoms/Button';
import { Pagination } from 'antd';
import 'antd/dist/antd.css';
import SearchBox from 'components/atoms/searchbox/SearchBox.js';
import axios from 'axios';

function createDummy () {
  const dummyData = [];
  for (let i = 1; i < 300; i++) {
    dummyData.push({
      id: i,
      title: `제목${i}`,
      writer: `작성자${i}`,
      count: 0,
      regDt: '2020-10-25'
    })
  }
  return dummyData;
}

const FreeBoard = () => {
  const [data, setData] = useState(createDummy);
  const category = ['번호','제목', '작성자', '조회', '등록일'];
  useEffect(() => {
    // console.log('렌더링 완료');
    // axios
    //   .get(
    //     'http://ec2-3-34-129-2.ap-northeast-2.compute.amazonaws.com:8080/board/v1/select?',
    //   )
    //   .then((response) => {
    //     console.log(response.data);
    //   });
    createDummy();
  }, []);
  return (
    <div className="freeboard-wrapper">
      <div className="freeboard-title">자유 게시판</div>
      <div className="freeboard-body">
        <div className="freeboard-body-head">
          {
            category.map(el=> 
              <span>{el}</span>
            )
          }
        </div>
        <div className="freeboard-body-contents">
              {
                data.map(el => 
                  <>
                  <div>
                    <ul>
                  <li>{el.id}</li>
                  <li>{el.title}</li>
                  <li>{el.writer}</li>
                  <li>{el.count}</li>
                  <li>{el.regDt}</li>
                    </ul>
                  </div>
                  </>
                )
              }
        </div>
      </div>
      <div className="freeboard-footer">
        <Button right>글쓰기</Button>
      </div>
      <div className="freeboard-paging">
        <Pagination
          total={data.length}
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
