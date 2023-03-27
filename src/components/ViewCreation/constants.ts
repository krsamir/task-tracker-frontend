export const TEXT = "text";
export const CHECKBOX = "checkbox";
export const DATETIMELOCAL = "datetime-local";
export const DATE = "date";
export const TIME = "time";
export const URL = "url";
export const SELECT = "select";
export const MULTISELECT = "multiselect";
export const TEXT_AREA = "textarea";

export const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1).replace("-local", "");
export const FORM_TYPES = [
  {
    id: 0,
    value: TEXT,
  },
  {
    id: 1,
    value: CHECKBOX,
  },
  {
    id: 2,
    value: DATETIMELOCAL,
  },
  {
    id: 3,
    value: DATE,
  },
  {
    id: 4,
    value: TIME,
  },
  {
    id: 5,
    value: URL,
  },
  {
    id: 6,
    value: SELECT,
  },
  {
    id: 7,
    value: MULTISELECT,
  },
  {
    id: 8,
    value: TEXT_AREA,
  },
];
