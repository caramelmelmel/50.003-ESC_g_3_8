import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import '../index.css'
import { Container, Row, Col } from "react-bootstrap";


class AuditStaff extends Component {
  render() {
    return (
      //side bar
      //button to filter ongoing and resolved audits
      //button to filter last added, last checked, alphabetical order tenants name
      //Table
      //button to saved audits page
      //button to create new audit page

      <div>
        
        <Container fluid>
            <Row>
                <Col xs={2} id="sidebar-wrapper">      
                    <Sidebar />
                </Col>
                
                <Col  xs={10} id="page-content-wrapper">
                    
                <button type="button" id="sidebarCollapse" class="btn btn-info">
                    <i class="fas fa-align-left"></i>
                    <span>Toggle Sidebar</span>
                </button>
        
                <Tabs defaultActiveKey="profile">
                    <Tab eventKey="Ongoing" title="Ongoing Audits"></Tab>
                    <Tab eventKey="Resolved" title="Resolved Audits"></Tab>
                </Tabs>
                <Table />
                        
                </Col> 
                
            </Row>

        </Container>
        
      </div>
    );
  }
}

export default AuditStaff;
