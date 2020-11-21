import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 1130px;
  margin: 0 auto;
  padding: 20px 30px;
`;
const container = ({ children }) => {
  return <Container>{children}</Container>;
};

export default container;
