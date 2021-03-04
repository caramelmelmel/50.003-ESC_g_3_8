import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import '../index.css'
import { Container, Row, Col } from "react-bootstrap";
import { getAllChecklistItems } from './../data/checklistFB';



class AddNCStaff extends Component {
  state = {
    checklistFB: getAllChecklistItems(),
    itemName: this.props.itemName
  };

  render() {
    return (<React.Fragment>
      <Container fluid>
        <Row>
          <Col xs={2} id="sidebar-wrapper">      
            <Sidebar />
          </Col>
          <Col xs={10}>
            <Row>
              <Col className="checklist-header-style" xs={12}>Add Non-Complinance</Col>
            </Row>
            <Row>
              <Col>{this.itemName}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
    );
  }
}

export default AddNCStaff;
