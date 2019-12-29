import React from "react";

function Jumbotron(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container text-center">
        <h1 className="display-3">{props.title}</h1>
        <h1 className="display-5">
          {props.lead}
        </h1>
      </div>
    </div>
  );
}

export default Jumbotron;
