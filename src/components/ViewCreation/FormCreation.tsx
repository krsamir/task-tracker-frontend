import React, { useState } from "react";
import { FIELD, ISchema } from "./CreateView";
import styled from "styled-components";
import { CHECKBOX, FORM_TYPES, MULTISELECT, SELECT, TEXT } from "./constants";
import List from "../Modal/List";

const RemoveButton = styled.span`
  display: inline-block;
  font-size: 22px;
  background-color: aliceblue;
  padding: 0px 20px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 5px rgb(0, 0, 0, 0.5);
  }
`;
const Input = styled.input`
  background-color: aliceblue;
  border: none;
  outline: none;
  padding: 6px 10px;
  border-radius: 5px;
  box-shadow: 0 0 7px rgb(0, 0, 0, 0.5);
  font-weight: 700;
  margin: 10px;
`;

const Select = styled.select`
  background-color: aliceblue;
  border: none;
  outline: none;
  padding: 6px 10px;
  border-radius: 5px;
  box-shadow: 0 0 7px rgb(0, 0, 0, 0.5);
  font-weight: 700;
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Toast = styled.span`
  display: flex;
  flex-direction: row;
  padding: 5px 10px;
  background-color: aliceblue;
  margin: 5px;
  border-radius: 5px;
  box-shadow: 0 0 6px rgb(0, 0, 0, 0.5);
`;

const Cancel = styled.span`
  background-color: rgb(235, 235, 235);
  padding: 2px;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ToastText = styled.div`
  margin-right: 5px;
`;

interface IFormCreation {
  schema: ISchema[];
  setSchema: any;
}

function FormCreation({ schema, setSchema }: IFormCreation) {
  const handleDelete = (index: number) => {
    const val = [...schema];
    val.splice(index, 1);
    setSchema(val);
  };
  const handleChange = (e: any, index: number) => {
    const target = e.target;
    const val = [...schema];
    if (target.name === FIELD.SHOW) {
      // @ts-ignore
      val[index][target.name] = target.checked;
    } else {
      // @ts-ignore
      val[index][target.name] = target.value;
    }
    setSchema(val);
  };

  const [selectionInput, setSelectionInput] = useState<string>("");

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Enter" && selectionInput.length) {
      handleToastAdd(index);
    }
  };
  const handleToastAdd = (index: number) => {
    const val = [...schema];
    val[index].options = [...val[index].options, selectionInput];
    setSchema(val);
    setSelectionInput("");
  };
  const handleToastRemove = (index: number, toastIndex: number) => {
    const val = [...schema];
    val[index].options.splice(toastIndex, 1);
    setSchema(val);
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>value</th>
            <th>Show</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {schema.map((value, index) => (
            <tr key={index}>
              <td>
                <Input
                  type={TEXT}
                  name={FIELD.NAME}
                  value={value.name}
                  onChange={(e) => handleChange(e, index)}
                />
              </td>
              <td>
                <Select
                  name={FIELD.TYPE}
                  id="type"
                  onChange={(e) => handleChange(e, index)}
                  value={value.type}
                >
                  {FORM_TYPES.map(({ id, value }) => (
                    <option key={id} value={value}>
                      {value.toUpperCase()}
                    </option>
                  ))}
                </Select>
              </td>
              <td>
                {(value.type === SELECT || value.type === MULTISELECT) && (
                  <List
                    width={"220px"}
                    component={<button className="btn">Add</button>}
                  >
                    <Input
                      type="text"
                      name="fieldOptions"
                      id="fieldOptions"
                      value={selectionInput}
                      onChange={(e) => setSelectionInput(e.target.value)}
                      onKeyDown={(e) => handleKeyPress(e, index)}
                    />
                    <OptionContainer>
                      {value.options.map((value, toastIndex) => (
                        <Toast
                          key={toastIndex}
                          onClick={() => handleToastRemove(index, toastIndex)}
                        >
                          <ToastText>{value}</ToastText>
                          <Cancel title={`Remove ${value}`}>x</Cancel>
                        </Toast>
                      ))}
                    </OptionContainer>
                  </List>
                )}
              </td>
              <td>
                <input
                  type={CHECKBOX}
                  name={FIELD.SHOW}
                  id="show"
                  checked={value.show}
                  onChange={(e) => handleChange(e, index)}
                />
              </td>
              <td>
                <RemoveButton onClick={() => handleDelete(index)}>
                  -
                </RemoveButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default FormCreation;
