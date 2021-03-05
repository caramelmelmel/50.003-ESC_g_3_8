import React, { Component } from "react";
import '../index.css'
import { Container, Row, Col } from "react-bootstrap";
import { getAllChecklistItems } from './../data/checklistFB';
import { Link } from 'react-router-dom';
import { getChecklistItem } from "../data/checklistFB";



class AddNCStaff extends Component {
  state = {
    checklistItem: getChecklistItem(this.props.location.state.itemId),
    itemName: this.props.itemName
  };

  handleUploadImage() {
    console.log("Upload Image Button Clicked");
  }

  render() {
    console.log("NC recieved itemId: ", this.props.location.state);
    console.log("Checklist Item: ", this.state.checklistItem);

    return (<React.Fragment>
      <Container fluid>
        <Row>
          <Col xs={2} id="sidebar-wrapper">      
            {/*<Sidebar />*/}
          </Col>
          <Col xs={10}>
            <Row>
              <Col className="non-compliance-header" xs={12}>Add Non-Complinance</Col>
            </Row>
            <Row className="lg">
              <Col className="checklist-header-style">{this.state.checklistItem.item}
              </Col>
            </Row>
            <Row>
              <Col xs = {4}>
                <button className="btn btn-block btn-lg btn-outline-dark checklist-sideheader-style" onClick={this.handleUploadImage}>Upload Image</button>
              </Col>
              <Col xs = {8}>Text field for description goes here</Col>
            </Row>
            {/*<Row>
              <button className="btn btn-lg btn-outline-dark"> Submit</button>
            </Row>*/}
          </Col>
        </Row>
      </Container>
    </React.Fragment>
    );
  }
}

export default AddNCStaff;
