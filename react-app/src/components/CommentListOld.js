import React, { Component } from 'react';
import Comment from './Comment';
import avatar from "../images/avatar.png";
import avatar2 from "../images/avatar2.png";

/*
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
*/

export default class CommentListOld extends Component {
  //const { comment, index, id } = props.comments;
  
  render() {
    //console.log("PROPS: ", this.props);
    //console.log(this.props.item)
    //console.log(this.props.item.value.length-1>0)
    


    
    return (
      <div className="commentList">
        <h5 className="text-muted mb-4">
          <span className="badge badge-success">{this.props.item.value.length-1}</span>
          Comment 
        </h5>

        {this.props.item.value.length-1>0 && !this.props.loading ? (
          <div className="alert text-center alert-info">
            Be the first to comment </div>) : null
          
        }

        <div className="media mb-3">
          <img
            className="mr-3 bg-light rounded"
            width="48"
            height="48"
            src={ this.props.comments[1]==="staff" ? avatar : avatar2}
          />

          <div className="media-body p-2 shadow-sm rounded bg-light border">
            {/*<small className="float-right text-muted">{this.props}</small>*/}
            <h6 className="mt-0 mb-1 text-muted">{this.props.item.value[0][2]}: {this.props.item.value[0][0]}</h6>
            
          </div>
        </div>
        

        
      </div>

      
    )
  } 
}
//{this.props.comments[0]}
         //   {this.props}
//{this.props.comments.map((comment, index) => (<Comment key={index} comments={comment} />))}
//props.comments.length > 0 ? "s" : ""}
//       {id == "01" ? <Comment key={index} comments={name="Staff01", comment="Example statement 01"} /> : <Comment key={index} comments={name="Staff02",comment="Example statement 02"}/>}

//{this.props.item.value.length-1>0 ? "s" : ""}