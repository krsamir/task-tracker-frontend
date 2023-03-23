import React from "react";
import { STATUS } from "./constants";
import CreateView from "./CreateView";
import { useGetTemplate } from "./hooks/apiHooks";
import View from "./View";

function Main() {
  const { data } = useGetTemplate();
  const value = data.status === STATUS.SUCCESS_1 ? data.data : [];

  if (value.length === 0) {
    return <CreateView />;
  } else {
    return <View />;
  }
}

export default Main;