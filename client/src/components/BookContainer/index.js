import React from "react";
import { SaveBtn, ViewBtn } from "../Buttons";
import "./style.css";

function Book({ title, description, thumbnail, subtitle, authors, book, handleSave }) {
  return (
    <>
      {description === undefined ? (
        <>
          <div className="card card-body border-light m-3">
            <div className="row align-self-center">
              <div className="col-4 align-self-center">
                <img src={thumbnail} className="img-fluid" alt=""></img>
              </div>
              <div className="card-title text-left">
                <h3 className="display-6">{title}</h3>
                {subtitle === undefined ? (
                  <>
                    <h4>Written By {authors}</h4>
                  </>
                ) : (
                  <>
                    <h4>{subtitle}</h4>

                    <h4>Written By {authors}</h4>
                  </>
                )}
              </div>
              <div className="">
                <SaveBtn book={book} onClick={handleSave} />
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
                <h6 className="display-6">{title}</h6>
                {subtitle === undefined ? (
                  <>
                    <small>Written By {authors}</small>
                  </>
                ) : (
                  <>
                    <small>{subtitle}</small>
                    <br></br>
                    <small>written By {authors}</small>
                  </>
                )}
              </div>
              <div className="">
                <SaveBtn book={book} onClick={handleSave} />
                <ViewBtn />
              </div>
            </div>
            <div className="card border-light mb-3">
              <div className="row">
                <div className="col-2 align-self-center">
                  <img
                    src={thumbnail}
                    className="img-thumbnail img-fluid"
                    alt=""
                  ></img>
                </div>
                <div className="col">
                  <div className="card-body ">
                    <p className="card-text overflow-auto text-left ">
                      {description}
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
