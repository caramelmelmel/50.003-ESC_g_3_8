import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../index.css";
import OngoingAudits from "./OngoingAudits";
import ResolvedAudits from "./ResolvedAudits";
import "react-tabs/style/react-tabs.css";

class AuditStaff extends Component {
  render() {
    return (
      //side bar
      //button to filter ongoing and resolved audits
      //button to filter last added, last checked, alphabetical order tenants name
      //Table
      //button to saved audits page
      //button to create new audit page

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
    );
  }
}

export default AuditStaff;
