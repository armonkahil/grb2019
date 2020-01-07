import React from "react";
import './style.css'

function Row(props) {
  return <div className={`row ${props.spacing} `}>{props.children}</div>;
}

export default Row;
