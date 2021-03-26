import React, { Component } from "react";
import '../index.css'
import { Container, Row, Col, Form } from "react-bootstrap";
import { getAllChecklistItems, getChecklistItem } from './../services/checklistFB';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';



class AddNCStaff extends Component {
  state = {
    checklistItem: getChecklistItem(this.props.location.state.itemId),
    itemName: this.props.itemName,
    clickedItems: this.props.clickedItems
  };

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

  handleChange() {
    
  }

  onTakePhoto(dataUri) {
    // Do stuff with the dataUri photo...
    console.log("takePhoto");
    this.setState({ dataUri: dataUri });
  }


  handleSave(event, result) {
    console.log("Saving...");
    //alert("Text field value is: " + this.state.va);

  handleUploadImage() {
    console.log("Upload Image Button Clicked");
  }



  handleCancel(){
    console.log("Cancelling...")
  }

  render() {
    console.log("NC recieved itemId: ", this.props.location.state);
    console.log("Checklist Item: ", this.state.checklistItem);
    console.log("Props: ", this.props);
    const { itemsChecked } = this.props;
    //console.log("CLICKED ITEMS PASSED: ", this.props.location.state.clickedItems);

    return (<React.Fragment>
      <Container fluid>
        <Row>
          <Col xs={2} id="sidebar-wrapper">      
            {/*<Sidebar />*/}
          </Col>
          <Col xs={10}>
            <Row>
              <Col className="non-compliance-header" xs={12}>Add Non-Compliance</Col>
            </Row>
            <Row className="lg">
              <Col className="checklist-header-style">{this.state.checklistItem.item}
              </Col>
            </Row>
            <Row>
              <Col xs={10} className="mt-5">
                <button className="btn btn-block btn-lg btn-outline-dark checklist-sideheader-style" 
                onClick={this.handleUploadImage}
                style={{ marginLeft: "5%", marginRight: "0%", float: "left", width: "80%"}}>Upload Image</button>
              </Col>
            </Row>
            <Row>
              <Col xs={10} className="mt-5">
              <Form.Control
                as="textarea"
                placeholder="Additional comments"
                rows={2}
                style={{ marginLeft: "5%", marginRight: "0%", float: "left", width: "80%"}}
              />
              </Col>
            </Row>
              <Link to={{pathname: `/`, state: {itemId: this.state.checklistItem.id}}} >
                <button 
                className="btn btn-lg btn-warning checklist-sideheader-style mt-5"
                style={{float: 'right'}} 
                onClick={this.context.router.history.goBack}>Submit</button> {/* Now it's same as cancel, need to change this */}
              </Link>
                <button 
                  className="btn btn-lg btn-danger checklist-sideheader-style mt-5"
                  style={{float: 'left'}} 
                  onClick={this.context.router.history.goBack}
                  >Cancel</button>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
    );
  }
}

export default AddNCStaff;
