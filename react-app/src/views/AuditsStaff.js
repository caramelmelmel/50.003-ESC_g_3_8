import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

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
        <Tabs defaultActiveKey="profile">
          <Tab eventKey="Ongoing" title="Ongoing Audits"></Tab>
          <Tab eventKey="Resolved" title="Resolved Audits"></Tab>
        </Tabs>

        <Sidebar />
        <Table />
      </div>
    );
  }
}

export default AuditStaff;
