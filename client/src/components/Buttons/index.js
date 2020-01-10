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
      <button type="button" className={`btn btn-primary mx-2 ${props["data-value"]}`} {...props} >
        Save
      </button>
    </>
  );
}

export function ViewBtn(props) {
  return (
    <>
      <a
        className='btn btn-success active'
        href={props.link}
        target={'_blank'}
        onClick={props.onClick}
        {...props}
      >
        View
      </a>
    </>
  )
}

export function DeleteBtn(props) {
  return (
    <span className="btn btn-info mx-2 delete-btn float-right" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

