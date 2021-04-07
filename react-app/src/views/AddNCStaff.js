import React, { Component } from "react";
import "../index.css";
import { Container, Row, Col, Form } from "react-bootstrap";
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

class AddNCStaff extends Component {
  auditData;

  constructor(props) {
    super(props);
    this.state = {
      val: "",
      dataUri: null,
      checklistItem: getChecklistItem(props.location.state.itemId),
      itemName: props.itemName,
      clickedItems: props.clickedItems,
    };
    this.onTakePhoto = this.onTakePhoto.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDeleteImage = this.handleDeleteImage.bind(this);
  }
  //need to send state of val and dataUri along with list of non compliance to tenants!!

  // TO ROUTE BACK TO PREVIOUS PAGE IF CANCELLED IS BEING CALLED
  static contextTypes = {
    router: PropTypes.object,
  };

  componentDidMount() {
    this.auditData = JSON.parse(
      localStorage.getItem("nc" + this.state.checklistItem.id)
    );

    if (localStorage.getItem("nc" + this.state.checklistItem.id)) {
      this.setState({
        val: this.auditData.val,
        dataUri: this.auditData.dataUri,
      });
    } else {
      this.setState({
        val: "",
        dataUri: null,
      });
    }

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

  componentWillUpdate(nextProps, nextState) {
    //console.log(nextState);
    //ensures local storage do not store null non compliances
    //meaning if got text, but no pic, still wont pass over
    //but if no text and have pic, will pass over
    if (nextState.dataUri == null) {
      localStorage.removeItem("nc" + this.state.checklistItem.id);
    } else {
      localStorage.setItem(
        "nc" + this.state.checklistItem.id,
        JSON.stringify(nextState)
      );
    }
  }

  //for additional comments
  handleChange(e) {
    this.setState({ val: e.target.value });
    //console.log(e.target.value);
  }

  onTakePhoto(dataUri) {
    // Do stuff with the dataUri photo...
    console.log("takePhoto");
    console.log(dataUri);
    this.setState({ dataUri: dataUri });
  }

  handleDeleteImage() {
    this.setState({ dataUri: null });
    console.log("Cancelling...");
  }

  //this function should be on last page of checklist
  //send all localstorage items to database //"val"="", dataUri=null=> localStorage.removeItem("audit" + this.state.checklistItem.id);
  //clear localstorage of that audit
  handleSave() {
    console.log("this is working");
  }

  render() {
    //console.log("NC recieved itemId: ", this.props.location.state);
    //console.log("Checklist Item: ", this.state.checklistItem);
    //console.log("Props: ", this.props);
    const { itemsChecked } = this.props;
    //console.log("CLICKED ITEMS PASSED: ", this.props.location.state.clickedItems);

    //localStorage.clear();
    //console.log(localStorage);

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
                  <input
                    type="text"
                    placeholder="Additional comments"
                    style={{
                      marginLeft: "0%",
                      marginRight: "0%",
                      float: "left",
                      width: "100%",
                      height: 30,
                    }}
                    value={this.state.val}
                    onChange={this.handleChange}
                  />
                </Col>
              </Row>
              <Link
                to={{
                  pathname: `/`,
                  state: {
                    itemId: this.state.checklistItem.id,
                    val: this.state.val,
                    dataUri: this.state.dataUri,
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
                {/* Now it's same as cancel, need to change this */}
              </Link>
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

*/
