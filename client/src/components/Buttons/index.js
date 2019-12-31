import React from "react";

export function SearchBtn(props) {
  return (
    <>
      <div className="row container d-flex align-self-end">
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-primary"
            onClick={props.handleSubmit}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export function SaveBtn() {
  return (
    <>
      <button type="button" className="btn btn-primary">
        View
      </button>
    </>
  );
}

export function ViewBtn() {
  return (
    <>
      <button type="button" className="btn btn-primary">
        View
      </button>
    </>
  );
}

