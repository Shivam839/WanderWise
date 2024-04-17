import React from "react";

function Cards({ name, description, image_add }) {
  return (
    <div>
      <div className="card" style={{ width: "18rem", margin: "10px 0" }}>
        <img src={image_add} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-danger">
            Select
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
