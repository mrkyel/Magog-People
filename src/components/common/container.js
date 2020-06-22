import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  width: fit-content;
  margin: 20px auto 0;
`;
const container = ({ children }) => {
  return <Container>{children}</Container>;
};

export default container;
