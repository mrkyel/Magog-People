import React, { useEffect, useState } from 'react';
import Button from 'components/atoms/Button';
import { Modal, Input, Pagination, Table } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './FreeBoard.scss';

const { Search } = Input;

interface Dummy {
  id: string;
  title: string;
  writer: string;
  views: number;
  count: number;
  regDt: string;
}

function createDummy() {
  const dummyData: Dummy[] = [];
  for (let i = 1; i < 300; i++) {
    dummyData.push({
      id: `${i}`,
      title: `제목${i}`,
      writer: `작성자${i}`,
      views: 0,
      count: 0,
      regDt: '2020-10-25',
    });
  }
  return dummyData;
}

const columns = [
  {
    title: '번호',
    dataIndex: 'id',
    width: 100,
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
    title: '조회',
    dataIndex: 'views',
  },
  {
    title: '등록일',
    dataIndex: 'regDt',
  },
];

const FreeBoard: React.FC = () => {
  const [data, setData] = useState([] as Dummy[]);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    // console.log('렌더링 완료');
    // axios
    //   .get(
    //     'http://ec2-3-34-129-2.ap-northeast-2.compute.amazonaws.com:8080/board/v1/select?',
    //   )
    //   .then((response) => {
    //     console.log(response.data);
    //   });
    setData(createDummy());
  }, []);
  const showModal = () => {
    setVisible(true);
  };
  return (
    <div className="freeboard-wrapper">
      <div className="freeboard-title">자유 게시판</div>
      <div className="freeboard-body">
        <Table
          onRow={(record, rowIndex) => {
            return {
              onClick: () => {
                showModal();
              },
            };
          }}
          columns={columns}
          dataSource={data}
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: total => `Total ${total} items`,
          }}
          size="small"
        />
        <Modal
          title="Basic Modal"
          visible={visible}
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
        >
          <p>모달 테스트</p>
        </Modal>
      </div>
      <div className="freeboard-footer">
        <Link to="/writeboard">
          <Button right>글쓰기</Button>
        </Link>
      </div>
      <div className="freeboard-searchbar">
        <Search
          placeholder="검색어를 입력하세요"
          onSearch={value => console.log(value)}
          enterButton
          style={{ width: '30%' }}
        />
      </div>
    </div>
  );
};

export default FreeBoard;
