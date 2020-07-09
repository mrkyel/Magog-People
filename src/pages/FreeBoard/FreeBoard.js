import React, { useEffect } from 'react';
import './FreeBoard.scss';
import Button from 'components/atoms/Button';
import { Table, Input } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
const { Search } = Input;

const FreeBoard = () => {
  // useEffect(() => {
  //   console.log('렌더링 완료');
  //   axios
  //     .get(
  //       'http://ec2-3-34-129-2.ap-northeast-2.compute.amazonaws.com:8080/board/v1/select?',
  //     )
  //     .then((response) => {
  //       console.log(response.data);
  //     });
  // }, []);
  const columns = [
    {
      title: '번호',
      dataIndex: 'number',
      width: 150,
    },
    {
      title: '제목',
      dataIndex: 'title',
      width: 150,
    },
    {
      title: '작성자',
      dataIndex: 'writer',
    },
    {
      title: '공감',
      dataIndex: 'like',
    },
    {
      title: '조회',
      dataIndex: 'views',
    },
    {
      title: '등록일',
      dataIndex: 'regDt',
    },
  ];

  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push({
      key: i,
      number: i + 1,
      title: '게시판 연습중',
      writer: `Edward King ${i}`,
      like: 32,
      regDt: '2020-06-30',
    });
  }
  return (
    <div className="freeboard-wrapper">
      <div className="freeboard-title">자유 게시판</div>
      <div className="freeboard-body">
        <Table
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
                alert(event);
              },
            };
          }}
          columns={columns}
          dataSource={data}
          pagination={{
            pageSize: 50,
            total: 85,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total) => `Total ${total} items`,
          }}
          size="small"
        />
      </div>
      <div className="freeboard-footer">
        <Link to="/writeboard">
          <Button right>글쓰기</Button>
        </Link>
      </div>
      <div className="freeboard-searchbar">
        <Search
          placeholder="검색어를 입력하세요"
          onSearch={(value) => console.log(value)}
          enterButton
          style={{ width: '30%' }}
        />
      </div>
    </div>
  );
};

export default FreeBoard;
