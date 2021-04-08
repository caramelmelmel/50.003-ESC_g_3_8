import React from "react";
import avatar from "../images/avatar.png";

export default function Comment(props) {
  const { name, comment, time } = props.comments;

  return (
    <div className="media mb-3">
      <img
        className="mr-3 bg-light rounded"
        width="48"
        height="48"
        alt={name}
        src={avatar}
      />

      <div className="media-body p-2 shadow-sm rounded bg-light border">
        <small className="float-right text-muted">{time}</small>
        <h6 className="mt-0 mb-1 text-muted">{name}</h6>
        {comment}
      </div>
    </div>
  );
}

//src={`https://api.adorable.io/avatars/285/10@adorable.io.png`}
