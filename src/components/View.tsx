import React from "react";

interface IView {
  data: any;
}

function View({ data }: IView) {
  console.log(data);
  return <div></div>;
}

export default View;
