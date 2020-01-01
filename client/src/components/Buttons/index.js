import React from "react";

export function SearchBtn(props) {
  return (
    <>
      <div className="row container d-flex align-self-end">
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-primary mx-2"
            onClick={props.handleSubmit}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export function SaveBtn(props) {
  return (
    <>
      <button type="button" className="btn btn-primary mx-2" id={props.id} onClick={props.handleSave} >
        Save
      </button>
    </>
  );
}

export function ViewBtn() {
  return (
    <>
      <button type="button" className="btn btn-sm-success">
        View
      </button>
    </>
  );
}

export function DeleteBtn(props) {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

