import React from "react";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  background: #0c348e;
  float: ${(props) => (props.left ? "left" : "right")};
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
