import React, { useMemo } from "react";
import { STATUS } from "./constants";
import CreateView from "./ViewCreation/CreateView";
import { useGetTemplate } from "./hooks/apiHooks";
import View from "./View";

function Main() {
  const { isLoading, data } = useGetTemplate();
  const value = useMemo(
    () => (data.status === STATUS.SUCCESS_1 ? data.data : []),
    [data, STATUS]
  );
  console.log(value);
  if (value.length === 0) {
    return <CreateView isLoading={isLoading} />;
  } else {
    return <View data={value} />;
  }
}

export default Main;
