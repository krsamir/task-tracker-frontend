import React, { useState } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
import Dialog from "../Modal/Dialog";
import { TEXT } from "./constants";
import FormCreation from "./FormCreation";

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

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Button = styled.button`
  margin: 0 0 10px 0;
`;
const Flex = styled.div`
  flex: 1;
`;
interface ICreateView {
  data: any;
}

export interface ISchema {
  name: string;
  type: string;
  value: string;
  show: boolean;
  options: string[];
}

export const FIELD = Object.freeze({
  NAME: "name",
  TYPE: "type",
  SHOW: "show",
  OPTIONS: "options",
  VALUE: "value",
});

function CreateView() {
  const [show, setShow] = useState(false);

  const [schema, setSchema] = useState<ISchema[]>([
    {
      [FIELD.NAME]: "",
      [FIELD.TYPE]: TEXT,
      [FIELD.VALUE]: "",
      [FIELD.SHOW]: true,
      [FIELD.OPTIONS]: [],
    },
  ]);
  const handleClose = () => {
    setSchema([
      {
        [FIELD.NAME]: "",
        [FIELD.TYPE]: TEXT,
        [FIELD.VALUE]: "",
        [FIELD.SHOW]: true,
        [FIELD.OPTIONS]: [],
      },
    ]);
    setShow(false);
  };

  const addItem = () => {
    const val = [...schema];
    setSchema([
      ...val,
      {
        [FIELD.NAME]: "",
        [FIELD.TYPE]: TEXT,
        [FIELD.VALUE]: "",
        [FIELD.SHOW]: true,
        [FIELD.OPTIONS]: [],
      },
    ]);
  };

  const saveSchema = () => {
    if (schema.map((value) => value.name).includes("")) {
      toast.error(`NAME CANNOT BE EMPTY.`);
    } else {
      console.log(schema);
    }
  };

  return (
    <>
      <AddButton title="Create a view" onClick={() => setShow(true)}>
        +
      </AddButton>
      <Dialog
        show={show}
        onClose={handleClose}
        title={`Create a view`}
        width="100%"
        height="100%"
      >
        <ButtonContainer>
          <Button className="btn" onClick={saveSchema}>
            Save Schema
          </Button>
          <Flex></Flex>
          <Button className="btn" onClick={addItem}>
            + Add item
          </Button>
        </ButtonContainer>
        <FormCreation schema={schema} setSchema={setSchema} />
      </Dialog>
    </>
  );
}

export default CreateView;
