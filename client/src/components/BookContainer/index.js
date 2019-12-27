import React from "react";
import { SaveBtn, ViewBtn } from '../Buttons'
function Book() {
  return (
    <div className="card card-body">
      <div className="row container-fluid justify-content-between">
        <div className="card-title">
          <h1>Book Search</h1>
        </div>
        <div className="">
          <SaveBtn />
          <ViewBtn />
        </div>
      </div>
      <div className="card mb-3">
        <div className="row">
          <div className="col-2">
            <img
              src="https://via.placeholder.com/150"
              class="card-img img-fluid"
              alt=""
            ></img>
          </div>
          <div className="col">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
