import React, { Component, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../index.css";
import OngoingAudits from "./OngoingAudits";
import ResolvedAudits from "./ResolvedAudits";
import "react-tabs/style/react-tabs.css";
import { Button } from "react-bootstrap";
import * as AiIcons from "react-icons/ai";
import * as VscIcons from "react-icons/vsc";
import { Link } from "react-router-dom";



function AuditStaff() {
  //const [value, setValue] = useState(null);

  return (
    //side bar
    //button to filter ongoing and resolved audits
    //button to filter last added, last checked, alphabetical order tenants name
    //Table
    //button to saved audits page
    //button to create new audit page
    //auto arrange in date
    //button shld lead to diff see updates in diff audit id

    //can only filter by type OR institude currently

    <div
      className="auditsstaff"
      class="row"
      style={{ position: "absolute", left: 30 }}
    >
      
      <Tabs onSelect={(index) => console.log(index)}>
        
          <TabList>
            <Tab>Ongoing Audits</Tab>
            <Tab>ResolvedAudits</Tab>
            <Link to="/textfield-staff">
              <Button variant="outline-dark" style={{ position: "absolute", width:325, left: 230 }}>
                <AiIcons.AiOutlineFolderAdd size="17" style={{ marginRight: "5" }} />Create New Audit
              </Button>
            </Link>
          {/*<Button variant="outline-dark" style={{ position: "absolute", left: 230 }}>
              <VscIcons.VscDebugContinue size="17" style={{ marginRight: "5" }}/>Continue Existing Audit</Button>*/}
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

export default AuditStaff;
