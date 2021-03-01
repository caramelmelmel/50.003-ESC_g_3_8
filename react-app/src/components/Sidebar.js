import React, { Component } from "react";
//import { Link } from "react-router-dom";
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import '../index.css'
//import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";


const Side = props => {
    return (
      <div class="wrapper">
        
        
        <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
          <div class="sidebar-header">
            <h3>Welcome</h3>
          </div>
          <ul class="list-unstyled components">
              
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
                <Nav.Link href="/dashboard-staff" >Dashboard</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link href="/reports-staff">Reports</Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
                <Nav.Link href="/audits-staff">Audits</Nav.Link>
            </Nav.Item>
               
            <Nav.Item>
                <Nav.Link href="/tenant-staff">Tenants</Nav.Link>
            </Nav.Item>
                    
            <Nav.Item>
                <Nav.Link>Logout</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link href="/checklist-fb-staff">Checklist FB</Nav.Link>
            </Nav.Item>
    
          </ul>
        </Nav>
      </div>
    );

}
const Sidebar = withRouter(Side);
export default Sidebar
