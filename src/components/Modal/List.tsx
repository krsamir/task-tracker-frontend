import React, { forwardRef, useRef, useState } from "react";
import styled from "styled-components";
import { useOutsideAlerter } from "./hooks";

interface IDropdownContent {
  ref: any;
  width?: string;
}

const Container = styled.div`
  position: relative;
`;
const DropDownContent = styled.div<IDropdownContent>`
  position: absolute;
  background-color: #fff;
  min-width: ${(props) => props.width || "150px"};
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 5px;
  padding: 6px;
  margin: 5px 0 0 20px;
`;
const Close = styled.div`
  display: flex;
  justify-content: end;
  cursor: pointer;
`;

const CloseIcon = styled.span`
  background-color: aliceblue;
  padding: 10px;
  margin: 4px 4px 0 0;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  text-align: center;
`;
// `
// const Child = styled.div`
//   cursor: pointer;
//   padding: 5px 10px;
//   &:hover {
//     background-color: #ddd;
//   }
// `;
interface IList {
  children: any;
  width: string;
}
const List = forwardRef<IList, any>((props, ref) => {
  const ref1 = useRef(null);
  const { children, width, component } = props;
  const [show, setShow] = useState(false);
  // const anchor = useRef(null);
  useOutsideAlerter(ref1, () => setShow(false));

  return (
    <Container>
      <div onClick={() => setShow(true)}>{component}</div>
      {show && (
        <DropDownContent ref={ref1} width={width}>
          <Close>
            <CloseIcon onClick={() => setShow(false)}>X</CloseIcon>
          </Close>
          <div>{children}</div>
        </DropDownContent>
      )}
    </Container>
  );
});

export default List;
