import React from "react";
import "./CommentSection.css";

function Comments({ comment }) {
  return (
    <div className="card">
      <div className="card" style={{ width: "18rem", margin: "10px 0" }}>
        <img src={comment.image_add} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{comment.description}</p>
          <h5 className="card-title" style={{ color: "red" }}>
            {comment.name}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Comments;
