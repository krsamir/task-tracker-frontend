import React from "react";
import styled from "styled-components";
import "./Loader.css";

interface ILoader {
  show: boolean;
}

function Loader({ show = false }: ILoader) {
  return <>{show && <span className="loader"></span>}</>;
}

export default Loader;
