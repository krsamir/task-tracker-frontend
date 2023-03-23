import React from "react";
import styled from "styled-components";

const AddButton = styled.span`
  display: inline-block;
  margin-top: 10px;
  padding: 15px 50px;
  background-color: rgb(25, 118, 210);
  color: #fff;
  font-weight: 900;
  font-size: 22px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 12px rgb(0, 0, 0, 0.5);
  }
`;
interface ICreateView {
  data: any;
}

function CreateView() {
  return (
    <>
      <AddButton>+ Create a View</AddButton>
    </>
  );
}

export default CreateView;
