import React from "react";
import { SaveBtn, ViewBtn } from "../Buttons";
import "./style.css";

function Book(props) {
  return (
    <>
      {props.description === undefined ? (
        <>
          <div className="card card-body border-light m-3">
            <div className="row align-self-center">
              <div className="col-4 align-self-center">
                <img src={props.thumbnail} className="img-fluid" alt=""></img>
              </div>
              <div className="card-title text-left">
                <h3 className="display-6">{props.title}</h3>
                {props.subtitle === undefined ? (
                  <>
                    <h4>{props.authors}</h4>
                  </>
                ) : (
                  <>
                    <h4>{props.subtitle}</h4>

                    <h4>{props.authors}</h4>
                  </>
                )}
              </div>
              <div className="">
                <SaveBtn book={props.book} onClick={props.handleSave}/>
                <ViewBtn />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="card card-body m-3">
            <div className="row container-fluid justify-content-between">
              <div className="card-title text-left">
                <h6 className="display-6">{props.title}</h6>
                {props.subtitle === undefined ? (
                  <>
                    <small>{props.authors}</small>
                  </>
                ) : (
                  <>
                    <small>{props.subtitle}</small>
                    <br></br>
                    <small>{props.authors}</small>
                  </>
                )}
              </div>
              <div className="">
                <SaveBtn />
                <ViewBtn />
              </div>
            </div>
            <div className="card border-light mb-3">
              <div className="row">
                <div className="col-2 align-self-center">
                  <img
                    src={props.thumbnail}
                    className="img-thumbnail img-fluid"
                    alt=""
                  ></img>
                </div>
                <div className="col">
                  <div className="card-body ">
                    <p className="card-text overflow-auto text-left ">
                      {props.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Book;
