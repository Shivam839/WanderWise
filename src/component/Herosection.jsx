import React from "react";
import "./Herosection.css";

function Herosection() {
  return (
    <div id="herosec">
      <div className="textSection">
        <h1>Email us your enquiry</h1>
        <p>
          We are here to assist you. Please fill out the form below and we will
          get back to you as soon as possible.
        </p>
      </div>
      <div className="emailSection">
        <div classname="mb-3">
          <label for="exampleFormControlInput1" classname="form-label">
            Email address
          </label>
          <input
            type="email"
            classname="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div classname="mb-3">
          <label for="exampleFormControlTextarea1" classname="form-label">
            Write your queries
          </label>
          <textarea
            classname="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>

        <button className="btn btn-danger m-3"> Submit</button>
      </div>
    </div>
  );
}

export default Herosection;
