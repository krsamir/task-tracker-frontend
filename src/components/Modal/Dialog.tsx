import React, { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

interface IModalContent {
  height?: string;
  width?: string;
}

const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div<IModalContent>`
  width: ${(props) => props.width || "700px"};
  height: ${(props) => props.height || "700px"};
  background-color: #fff;
  border-radius: 6px;
`;
const ModalHeader = styled.div`
  padding: 15px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ModalTitle = styled.h4`
  margin: 0;
  flex: 1;
`;
const ModalBody = styled.div`
  padding: 10px;
  border-top: 1px solid #e4e4e4;
`;

const Button = styled.button`
  margin-right: 10px;
`;

interface IDialog {
  title: string;
  onClose: any;
  show: boolean;
  children?: any;
  width?: string;
  height?: string;
}

function Dialog({
  title = "",
  show,
  onClose,
  children,
  width,
  height,
}: IDialog) {
  const closeOnEscapeKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.keyCode === 27) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);

    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, [closeOnEscapeKeyDown]);

  if (!show) {
    return null;
  }
  return (
    <>
      {createPortal(
        <Modal onClick={onClose}>
          <ModalContent
            onClick={(e) => e.stopPropagation()}
            height={height}
            width={width}
          >
            <ModalHeader>
              <ModalTitle>{title}</ModalTitle>
              <Button className="btn" onClick={onClose}>
                CLOSE
              </Button>
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
          </ModalContent>
        </Modal>,
        // @ts-ignore
        document.getElementById("root")
      )}
    </>
  );
}

export default Dialog;
