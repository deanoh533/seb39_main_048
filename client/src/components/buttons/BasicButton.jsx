import React from "react";
import styled from "styled-components";

const BasicButton = ({ bgcolor, text, onDelete, onUpdate }) => {
  return (
    <Button bgcolor={bgcolor} onClick={onDelete || onUpdate}>
      {text}
    </Button>
  );
};

const Button = styled.div`
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid transparent;
  border-radius: 10px;
  height: 100%;
  padding: 10px;
  background-color: ${(props) => props.bgcolor || "#ffb653"};
  color: #fff;
  cursor: pointer;
`;

export default BasicButton;
