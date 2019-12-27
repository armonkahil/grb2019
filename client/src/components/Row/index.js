import React from "react";
import './style.css'

function Row(props) {
  return <div className={`row${props.fluid ? "-fluid" : ""} justify-content-center mx-auto my-3`}>{props.children}</div>;
}

export default Row;
