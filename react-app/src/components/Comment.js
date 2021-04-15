import React from "react";
import avatar from "../images/avatar.png";
import avatar2 from "../images/avatar2.png";


export default function Comment(props) {
  const { name, comment, time } = props.comments;
  console.log(props.comments);

  return (
    <div className="media mb-3">
      <img
        className="mr-3 bg-light rounded"
        width="48"
        height="48"
        alt={name}
        src={ name=="arissa"? avatar : avatar2}
      />

      <div className="media-body p-2 shadow-sm rounded bg-light border">
        <small className="float-right text-muted">{time}</small>
        <h6 className="mt-0 mb-1 text-muted">{name}</h6>
        {comment}
        {props.message}
      </div>
    </div>
  );
}

//src={`https://api.adorable.io/avatars/285/10@adorable.io.png`}
