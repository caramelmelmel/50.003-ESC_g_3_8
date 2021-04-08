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

class AddNCStaff extends Component {
  auditData;
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      val: "",
      selected: [],
      dataUri: null,
      bgColor: "",
      checklistItem: getChecklistItem(props.location.state.itemId),
      itemName: props.itemName,
      clickedItems: props.clickedItems,
    };
    this.onTakePhoto = this.onTakePhoto.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDeleteImage = this.handleDeleteImage.bind(this);
    this.handleFileInput = this.handleFileInput.bind(this);
    this.boxClick = this.boxClick.bind(this);
  }
  //need to send state of val and dataUri along with list of non compliance to tenants!!

  // TO ROUTE BACK TO PREVIOUS PAGE IF CANCELLED IS BEING CALLED
  static contextTypes = {
    router: PropTypes.object,
  };

  componentDidMount() {
    this._isMounted = true;
    this.auditData = JSON.parse(
      localStorage.getItem("nc" + this.state.checklistItem.id)
    );

    if (this._isMounted) {
      if (localStorage.getItem("nc" + this.state.checklistItem.id)) {
        this.setState({
          val: this.auditData.val,
          dataUri: this.auditData.dataUri,
          selected: this.auditData.selected,
          bgColor: this.auditData.bgColor,
        });
      } else {
        this.setState({
          val: "",
          dataUri: null,
          selected: [],
          bgColor: "",
        });
      }
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
  componentWillUnmount() {
    this._isMounted = false;
  }

  componentWillUpdate(nextProps, nextState) {
    //console.log(nextState);
    //ensures local storage do not store null non compliances
    //meaning if got text, but no pic, still wont pass over
    //but if no text and have pic, will pass over
    console.log(nextState);
    if (nextState.dataUri == null && nextState.selected == []) {
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
  };

  handleSave(e) {
    e.preventDefault();
    this.setState({
      val: '',
    })
    console.log("Saving...");
    //alert("Text field value is: " + this.state.va);
  }

<<<<<<< Updated upstream
  handleUploadImage() {
    console.log("Upload Image Button Clicked");
  };



  handleCancel(){}
=======
  /*this.toDataUrl(dataUri, function (myBase64) {
      console.log((myBase64)); // myBase64 is the base64 string
    });
     
      console.log(dataUri.responseType);
    this.toDataURL(dataUri, function(dataUrl) {
      console.log('RESULT:', dataUrl)
    })
     
     console.log("takePhoto");
    
    let dataUriBase64 = "";
    this.getBase64(dataUri, (result) => {
      dataUriBase64 = result;
    });
    //console.log(dataUri);
    console.log(dataUriBase64);
    this.setState({ dataUri: dataUriBase64 });
  }  */

  handleFileInput(e) {
    e.stopPropagation();
    e.preventDefault();
    //console.log(e.target.files);
    const file = e.target.files[0];
    this.getBase64(file).then((base64) => {
      this.setState({ selected: base64 });
      //{ selected: this.state.selected.concat(base64) })
      //this.setState({ selected: base64 });
      //console.log(this.state.selected);
      //console.log("file stored",base64);
    });

    /*
    var form = new FormData();
    form.append('file', this.state.file);
    YourAjaxLib.doUpload('/yourEndpoint/',form).then(result=> console.log(result));
    */
  }

  boxClick() {
    this.setState({
      bgColor: "#f06d1a",
    });
  }
>>>>>>> Stashed changes

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
                  <label
                    style={{
                      marginLeft: "0%",
                      marginRight: "0%",
                      float: "left",
                      width: "100%",
                      height: 30,
                      top: 60,
                      backgroundColor: this.state.bgColor,
                    }}
                    onClick={this.boxClick}
                  >
                    <input
                      accept="image/*"
                      type="file"
                      onChange={this.handleFileInput}
                    />
                    Select File
                  </label>

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
                {/* Now it's same as cancel, need to change this */}
                <button
                  className="btn btn-lg btn-danger checklist-sideheader-style mt-5"
                  style={{ float: "right", marginRight: "18%" }}
                  onClick={this.handleSave}
                >
                  Save
                </button>
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


 style={{ backgroundColour: "#f06d1a" }}
*/
