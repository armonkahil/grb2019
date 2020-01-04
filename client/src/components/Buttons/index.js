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
      <button type="button" className="btn btn-primary mx-2" {...props} >
        Save
      </button>
    </>
  );
}

export function ViewBtn({ link, onClick, children }) {
  return (
    <>
      <a
        className="btn btn-success"
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        href={link}
      >
        View
        {children}
      </a>
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

