import { Button } from 'antd';
import React, { useEffect } from 'react';

declare global {
  interface Window {
    IMP: any;
  }
}

const { IMP } = window;

// 아임포트 연동을 위해 작성하려던 컴포넌트 : samesite 오류로 인한 보류

const Verification: React.FC = () => {
  useEffect(() => {
    IMP.init('imp56660545');
  }, []);
  const handleClick = () => {
    IMP.certification(
      {
        merchant_uid: 'ORD20180131-0000011', // 옵션 값
      },
      rsp => {
        // callback
        if (rsp.success) {
          alert('인증에 성공하였습니다');
        } else {
          alert('인증에 실패하였습니다');
        }
      },
    );
  };

  return <Button onClick={handleClick}>본인인증하기</Button>;
};

export default Verification;
