import React from "react";
import avatar from "../images/avatar.png";
import avatar2 from "../images/avatar2.png";


export default function Comment(props) {
  const { message, images, email, key } = props;
  console.log(props.comments);

  // comment has actor's email, message (text) and image list

  return (
    <div className="media mb-3">
      <img
        className="mr-3 bg-light rounded"
        width="48"
        height="48"
        alt={email}
        src={avatar}
      />

      <div className="media-body p-2 shadow-sm rounded bg-light border">
        <h6 className="mt-0 mb-1 text-muted">{email}</h6>
        {message}
      </div>
    </div>
  );
}

//src={`https://api.adorable.io/avatars/285/10@adorable.io.png`}

