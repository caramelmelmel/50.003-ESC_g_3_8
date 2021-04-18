import React, { Component } from 'react';
import * as AiIcons from "react-icons/ai";
import "../index.css";
import { Container, Row } from "react-bootstrap";
import { addComment } from '../services/noncomplianceList';
import { getAllNoncompliance } from './../services/noncomplianceList';

class FormComponent extends Component {
  constructor(props) {
    super(props);
      this.state = { 
      loading: false,
      error: "",
      selected:null,
      bgColor: " #f2f9fc",
  

      comment: {
        email: "tenant01@gmail.com",
        message: "",
        images: []
      }
   };
   //tenantaddon = [this.state.message, [this.state.selected], "tenant"]
   // bind context to methods 
   this.handleFieldChange = this.handleFieldChange.bind(this);
   this.onSubmit = this.onSubmit.bind(this);
   this.handleFileInput = this.handleFileInput.bind(this);
   this.handleFileDelete = this.handleFileDelete.bind(this);  
  }

  handleFieldChange = event => {
    console.log("COMMENT FORM STATE: ", this.state);
    const { value, name } = event.target;

    this.setState({
      ...this.state,
      comment: {
        ...this.state.comment,
        [name]: value
      }
    });
    console.log("COMMENT MESSAGE: ", this.state.comment.message);
  };
 

 
  
  onSubmit(e) {
    e.preventDefault();

    var comment = {message: this.state.comment.message, images: this.state.comment.images, email: this.state.comment.email};
    console.log("COMMENT ENTERED: ", comment);
    addComment(this.props.nc_id, comment);
    
    console.log("ALL NC: ", getAllNoncompliance());
    console.log("PROPS: ", this.props);
    this.props.updateList("YES");
    this.state.comment.message = "";
    //this.props.updateList("yes");

    /*if (!this.isFormValid()) {
      this.setState({ error: "All fields are required!"});
      return;
    }*/

    

   
    // loading status and clear error
    //this.setState({ error: "", loading: true });

    /*
    // persist the comments on server
    let { comment } = this.state;
    fetch("https://shaghao.herokuapp.com/", { method: "POST", body: JSON.stringify(comment)})
    .then(res => res.json)
    .then(res => {
      if (res.error) {
        this.setState({ loading: false, error: res.error})
      } else {
        // add time return from api and push comment to parent state
        //comment.time = res.time;
        this.props.addComment(comment);

        // clear the message box and photo
        this.setState({
          loading: false,
          comment: { ...comment, message: "" },
          selected: null,
          bgColor: " #f2f9fc",
          
        });
      }
    })
      .catch(err => {
        this.setState({
          error: "Posting...",
          loading: false
        });
    });*/



  }



  isFormValid() {
    return (this.state.selected !== null && this.state.comment.message !== "");
  }

  renderError() {
    return this.state.error ? (<div className="alert alert-success">{this.state.error}</div>) : null;
  };

  handleFileInput(e) {
    e.stopPropagation();
    e.preventDefault();
    //console.log(e.target.files);
    const file = e.target.files[0];
    this.getBase64(file).then((base64) => {
      this.setState({ selected: base64, bgColor: "#f06d1a"});
    });
    
  }

  handleFileDelete() {
    //console.log(this.state.selected);
    this.setState({ selected: null, bgColor: " #f2f9fc", error:""});
    console.log("Deleted");   
  
  }

  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  }

   
  /*
    (2) [{…}, {…}]
        0:
        key: "professionalism_01"
        value: [Array(4)]
        __proto__: Object
        1:
        key: "professionalism_02"
        value: [Array(4)]


    */
    
  updateArray() {
    

    if (this.state.comment.message !== "" && this.state.selected !== null) {
      const questions = [this.state.comment.message, [this.state.selected],"tenant"];
      console.log(this.props.item.value.push(questions));
      console.log(this.props.item.value);
      
    }
    

   
    /*
    this.setState({
        test: questions
    });*/
    
  }


  render() {
    return (
      <React.Fragment>
        {console.log(this.props.item)}
        {this.updateArray}
        
        <form style={{position:"absolute", left:15, top: 260}} method="post" onSubmit={this.onSubmit}>
          <div className="form-group">

            
            <textarea
              onChange={this.handleFieldChange}
              value={this.state.comment.message}
              className="form-control"
              placeholder="Add Additional Comments Here"
              name="message"
              rows="5"
              style={{position:"absolute", top:50, width:315 }}
              />
          

            {this.renderError()}
          
          
            <Container>
            <Row>
            <label
              style={{
                float:"left",
                width: 270,
                height: 30,
                bottom:0,
                backgroundColor: this.state.bgColor,
                
              }}
            >
              <input
                accept="image/*"
                type="file"
                onChange={this.handleFileInput}
                />
                Select File
                
            </label>

            <div>
            {this.state.selected !== null ?
              <button
                style={{
                  float: "right",
                  width:45,
                  height: 30,

                }}
                onClick={this.handleFileDelete}>
                <AiIcons.AiOutlineClose size="15" />
              </button> : null}
            </div>
            </Row>
            </Container>

            <button onClick={this.onSubmit} disabled={this.state.loading} className="btn btn-warning" style={{position:"absolute", left:0 ,width:315, top:158}}>
              Submit
            </button>

          </div>
        </form>
      </React.Fragment>
     );
  }
}
 
export default FormComponent;

/*
<input
onChange={this.handleFieldChange}
value={this.state.comment.name}
className="form-control"
placeholder="Your Name"
name="name"
type="text"
/>



*/