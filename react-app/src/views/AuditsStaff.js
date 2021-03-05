import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../index.css";
import OngoingAudits from "./OngoingAudits";
import ResolvedAudits from "./ResolvedAudits";
import "react-tabs/style/react-tabs.css";
import { Link } from 'react-router-dom';

class AuditStaff extends Component {
  render() {
    return (
      //side bar
      //button to filter ongoing and resolved audits
      //button to filter last added, last checked, alphabetical order tenants name
      //Table
      //button to saved audits page
      //button to create new audit page
      <React.Fragment>
        <Link to="/textfield-staff">
          <button className="btn btn-warning btn-lg align-right checklist-header-style ">Create New Audit</button>
        </Link>
      <div className="auditsstaff">
        <Tabs onSelect={(index) => console.log(index)}>
          <TabList>
            <Tab>Ongoing Audits</Tab>
            <Tab>ResolvedAudits</Tab>
          </TabList>
          <TabPanel>
            <OngoingAudits />
          </TabPanel>
          <TabPanel>
            <ResolvedAudits />
          </TabPanel>
        </Tabs>
      </div>
      </React.Fragment>
    );
  }
}

export default AuditStaff;
