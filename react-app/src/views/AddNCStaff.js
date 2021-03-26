import React, { Component } from "react";
import '../index.css'
import { Container, Row, Col } from "react-bootstrap";
import { getAllChecklistItems, getChecklistItem } from './../services/checklistFB';
import { Link } from "react-router-dom";



class AddNCStaff extends Component {
  state = {
    checklistItem: getChecklistItem(this.props.location.state.itemId),
    itemName: this.props.itemName
  };

  // TO ROUTE BACK TO PREVIOUS PAGE IF CANCELLED IS BEING CALLED
  static contextTypes = {
    router: () => true, 
  };

  handleUploadImage() {
    console.log("Upload Image Button Clicked");
  }

  handleSave(){
    console.log("Saving...")
    
  }

  handleCancel(){
    console.log("Cancelling...")
  }

  render() {
    console.log("NC recieved itemId: ", this.props.location.state);
    console.log("Checklist Item: ", this.state.checklistItem);
    console.log("Props: ", this.props);
    const { itemsChecked } = this.props;

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
              <Link to={{pathname: `/`, state: {itemId: this.state.checklistItem.id}}} >
                <button 
                className="btn btn-lg btn-warning checklist-sideheader-style"
                style={{float: 'right'}} 
                onClick={this.context.router.history.goBack}>Submit</button> {/* Now it's same as cancel, need to change this */}
              </Link>
                <button 
                  className="btn btn-lg btn-danger checklist-sideheader-style"
                  style={{float: 'left'}} 
                  onClick={this.context.router.history.goBack}>Cancel</button>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
    );
  }
}

export default AddNCStaff;
