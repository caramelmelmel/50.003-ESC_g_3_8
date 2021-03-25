import React, { Component } from "react";
import "../index.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  getAllChecklistItems,
  getChecklistItem,
} from "./../services/checklistFB";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Webcam from "react-webcam";
import ImagePreview from "../components/ImagePreview";

import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

class AddNCStaff extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      val: "",
      dataUri: null,
      checklistItem: getChecklistItem(props.location.state.itemId),
      itemName: props.itemName,
      clickedItems: props.clickedItems,
    };
    this.onTakePhoto = this.onTakePhoto.bind(this);

    this.handleSave = this.handleSave.bind(this);

    //this.textInput = React.createRef();
  }

  /*
  state = {
    checklistItem: getChecklistItem(this.props.location.state.itemId),
    itemName: this.props.itemName,
    clickedItems: this.props.clickedItems,
    
    

  };*/

  // TO ROUTE BACK TO PREVIOUS PAGE IF CANCELLED IS BEING CALLED
  static contextTypes = {
    router: PropTypes.object,
  };

  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state, callback) => {
      return;
    };
  }

  onTakePhoto(dataUri) {
    // Do stuff with the dataUri photo...
    console.log("takePhoto");
    this.setState({ dataUri });
  }

  handleChange() {}

  handleSave(event, result) {
    console.log("Saving...");
    //alert("Text field value is: " + this.state.va);
  }

  handleCancel() {
    console.log("Cancelling...");
  }

  render() {
    //console.log("NC recieved itemId: ", this.props.location.state);
    //console.log("Checklist Item: ", this.state.checklistItem);
    //console.log("Props: ", this.props);
    //console.log(this.state.dataUri); //check output of image format

    const { itemsChecked } = this.props;
    //console.log("CLICKED ITEMS PASSED: ", this.props.location.state.clickedItems);

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
                </Col>
              </Row>
              <Row>
                <Col xs={10} className="mt-5">
                  <Form.Control
                    as="textarea"
                    placeholder="Additional comments"
                    rows={2}
                    style={{
                      marginLeft: "0%",
                      marginRight: "0%",
                      marginTop: "5%",
                      float: "left",
                      width: "80%",
                    }}
                    val={this.state.val}
                    ref={this.textInput}
                    type="text"
                    onChange={(val) => this.setState({ val })}
                  />
                </Col>
              </Row>
              <Link
                to={{
                  pathname: `/`,
                  state: {
                    itemId: this.state.checklistItem.id,
                    val: this.state.val,
                  },
                }}
              >
                <button
                  className="btn btn-lg btn-warning checklist-sideheader-style mt-5"
                  style={{ float: "right" }}
                  onClick={this.handleSave}
                >
                  Submit
                </button>{" "}
                {/* Now it's same as cancel, need to change this */}
              </Link>
              <button
                className="btn btn-lg btn-danger checklist-sideheader-style mt-5"
                style={{ float: "left" }}
                onClick={this.context.router.history.goBack}
              >
                Cancel
              </button>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default AddNCStaff;
//<WebcamCapture /> <Button onClick={this.handleUploadImage} style={{width: 300}}>
//Upload Image
//<Button onClick={this.handleUploadImage} style={{width: 300, marginTop:"0%"}}>Capture photo</Button>
//</Button>

/*
<WebcamCapture/>
                  <img src={WebcamCapture.imgSrc}/>   

onChange={e => this.setState({ val: e.target.value })}
onClick={this.context.router.history.goBack, 
*/
