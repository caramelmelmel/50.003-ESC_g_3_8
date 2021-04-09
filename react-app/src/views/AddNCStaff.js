import React, { Component } from "react";
import "../index.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  getAllChecklistItems,
  getChecklistItem,
} from "./../services/checklistFB";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import * as AiIcons from "react-icons/ai";

import Webcam from "react-webcam";
import ImagePreview from "../components/ImagePreview";

import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import FormComponent from "../components/FormComponent";

class AddNCStaff extends Component {
  auditData;
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      val: "",
      selected: null,
      dataUri: null,
      bgColor: " #f2f9fc",
      checklistItem: getChecklistItem(props.location.state.itemId),
      itemName: props.itemName,
      clickedItems: props.clickedItems,
      comments: {},
      loading: false,
    };
    this.onTakePhoto = this.onTakePhoto.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDeleteImage = this.handleDeleteImage.bind(this);
    this.handleFileInput = this.handleFileInput.bind(this);
    this.handleFileDelete = this.handleFileDelete.bind(this);
    this.addComment = this.addComment.bind(this);
  }
  //need to send state of val and dataUri along with list of non compliance to tenants!!

  // TO ROUTE BACK TO PREVIOUS PAGE IF CANCELLED IS BEING CALLED
  static contextTypes = {
    router: PropTypes.object,
  };

  //componentDidMount is only called once
  componentDidMount() {
  
    this.auditData = JSON.parse(
      localStorage.getItem("nc" + this.state.checklistItem.id)
    );

    
    if (localStorage.getItem("nc" + this.state.checklistItem.id) ) {
      this.setState({
        val: this.auditData.val,
        dataUri: this.auditData.dataUri,
        selected: this.auditData.selected,
        bgColor: this.auditData.bgColor,
      });
    }else {
      this.setState({
        val: "",
        dataUri: null,
        selected: null,
        bgColor: "#f2f9fc",
      });
    }
    this._isMounted = true;
    

    /*for (var a in localStorage) {
      //localStorage.clear();
      //if (localStorage[a])
      console.log(localStorage);
      //console.log(a, ' = ', localStorage[a]);
      

    }*/
    //var key = localStorage.key(a);
    //var value = localStorage.getItem(key);
    //console.log(value);
  }
 
  componentWillUnmount() {
    this._isMounted = false;
  }


  componentWillUpdate(nextProps, nextState) {
    //console.log(nextState);
    //ensures local storage do not store null non compliances
    //meaning if got text, but no pic, still wont pass over
    //but if no text and have pic, will pass over
    //console.log(nextState);
    //console.log(localStorage);
    if (nextState.dataUri == null && nextState.selected == null) {
      localStorage.removeItem("nc" + this.state.checklistItem.id);
    } else {
      localStorage.setItem(
        "nc" + this.state.checklistItem.id,
        JSON.stringify(nextState)
      );
    }
  }

  handleChange(e) {
    this.setState({ val: e.target.value });
  }

  onTakePhoto(dataUri) {
    console.log("takePhoto");
    //console.log(dataUri);
    const b64 = dataUri.replace(/^data:image.+;base64,/, "");
    //console.log(b64); //this is a valid base 64 string
    this.setState({ dataUri: dataUri });
  }

  handleSave(e) {
    e.preventDefault();
    /*this.setState({
      val: "",
    });*/
    console.log("Saving...");
    //alert("Text field value is: " + this.state.va);
  }


  handleFileInput(e) {
    e.stopPropagation();
    e.preventDefault();
    //console.log(e.target.files);
    const file = e.target.files[0];
    this.getBase64(file).then((base64) => {
      this.setState({ selected: base64, bgColor: "#f06d1a" });
    });
  }


  handleFileDelete() {
    this.setState({ selected: null, bgColor: " #f2f9fc" });
    console.log("helps");
  }

  handleDeleteImage() {
    this.setState({ dataUri: null });
    console.log("Cancelling...");
  }

  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  }

  //this function should be on last page of checklist
  //send all localstorage items to database //"val"="", dataUri=null=> localStorage.removeItem("audit" + this.state.checklistItem.id);
  //clear localstorage of that audit
  handleSave() {
    console.log("this is working");
  }

  addComment(comment) {
    this.setState({
      loading: false,
      comments: [comment, ...this.state.comments],
    });
  }

  render() {
    //console.log("NC recieved itemId: ", this.props.location.state);
    //console.log("Checklist Item: ", this.state.checklistItem);
    //console.log("Props: ", this.props);
    const { itemsChecked } = this.props;
    

    //console.log("CLICKED ITEMS PASSED: ", this.props.location.state.clickedItems);

    //localStorage.clear();
    console.log(localStorage);

    return (
      <React.Fragment>
        <Container fluid>
          <Row>
            <Col xs={2} id="sidebar-wrapper">
              {/*<Sidebar />*/}
            </Col>
            <Col xs={10}>
              <Row>
                <Col className="non-compliance-header" xs={12}>
                  Add Non-Compliance
                </Col>
              </Row>
              <Row className="lg">
                <Col className="checklist-header-style">
                  {this.state.checklistItem.item}
                </Col>
              </Row>
              <Row>
                <Col xs={10} className="mt-5">
                  <div className="camera">
                    {this.state.dataUri ? (
                      <ImagePreview dataUri={this.state.dataUri} />
                    ) : (
                      <Camera onTakePhoto={this.onTakePhoto} />
                    )}
                  </div>

                  <button
                    style={{
                      position: "absolute",
                      right: 30,
                      top: 20,
                    }}
                    onClick={this.handleDeleteImage}
                  >
                    <AiIcons.AiOutlineClose size="30" />
                  </button>
                </Col>
              </Row>
              <Row>
                <Col xs={10} className="mt-5">
                  <label
                    style={{
                      
                      float: "left",
                      width: "90%",
                      height: 30,
                      top: 60,
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
                  {this.state.selected != null ?
                    <button
                      style={{
                      
                        float: "right",
                        width: "10%",
                        height: 30,
                        top: 60,
                      }}
                      onClick={this.handleFileDelete}
                    >
                      <AiIcons.AiOutlineClose size="20" />
                    </button> : null}
                  </div>

                  <input
                    type="text"
                    placeholder="Additional comments"
                    style={{
                      marginLeft: "0%",
                      marginRight: "0%",
                      float: "left",
                      width: "100%",
                      height: 30,
                      top: 60,
                      textAlign: "center",
                    }}
                    value={this.state.val}
                    onChange={this.handleChange}
                  />
                </Col>
              </Row>

              {/*<div className="row">
                <div className="col-4  pt-3 border-right">
                  <h6>Say something about React</h6>
                  <FormComponent addComment={this.addComment} />
                </div>
                <div className="col-8  pt-3 bg-white">
                  Comment List Component 
                </div>
              </div>*/}

              <Link
                to={{
                  pathname: `/`,
                  state: {
                    itemId: this.state.checklistItem.id,
                    val: this.state.val,
                    dataUri: this.state.dataUri,
                    selected: this.state.selected,
                  },
                }}
              >
                <button
                  className="btn btn-lg btn-danger checklist-sideheader-style mt-5"
                  style={{ float: "left" }}
                  onClick={this.context.router.history.goBack}
                >
                  Back
                </button>{" "}
              </Link>

              {/* Now it's same as cancel, need to change this */}
              <button
                  className="btn btn-lg btn-danger checklist-sideheader-style mt-5"
                  style={{ float: "right", marginRight: "18%" }}
                  onClick={this.handleSave}
                >
                  Save
              </button>
              
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default AddNCStaff;
/*
<Col xs={10} className="mt-5">
                <button className="btn btn-block btn-lg btn-outline-dark checklist-sideheader-style" 
                onClick={this.handleUploadImage}
                style={{ marginLeft: "5%", marginRight: "0%", float: "left", width: "80%"}}>Upload Image</button>
              </Col>

              
<button 
    className="btn btn-lg btn-danger checklist-sideheader-style mt-5"
    style={{float: 'right', marginRight: "18%",}} 
    onClick={this.handleSave}
>Save
</button>


 style={{ backgroundColour: "#f06d1a" }}
*/
