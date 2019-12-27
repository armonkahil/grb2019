import React from "react";
import { SearchBtn } from '../Buttons'
function SearchThis() {
  return (
    <div className="card card-body">
      <row className="">
        <div className="card-title text-left">
          <h1>Book Search</h1>
        </div>
      </row>
      <row>
        <div className="card-body text-center">
          <input
            className="form-control"
            type="text"
            placeholder="Default input"
          ></input>
        </div>
      </row>
    <SearchBtn />
    </div>
  );
}

export default SearchThis;
