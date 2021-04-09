import React, { Component } from 'react';
import Comment from './Comment';

export default function CommentList(props) {
  const { comment, index, id } = props.comments;
  console.log("PROPS: ", props);
  return (
    <div className="commentList">
      <h5 className="text-muted mb-4">
        <span className="badge badge-success">{props.comments.length}</span>{" "}
        Comment{props.comments.length > 0 ? "s" : ""}
      </h5>

      {props.comments.length === 0 && !this.props.loading ? (
        <div className="alert text-center alert-info">
          Be the first to comment </div>) : null
      }

      {props.comments.map((comment, index) => (<Comment key={index} comments={comment} />))}
    </div>

    
  )
}

//
//       {id == "01" ? <Comment key={index} comments={name="Staff01", comment="Example statement 01"} /> : <Comment key={index} comments={name="Staff02",comment="Example statement 02"}/>}
