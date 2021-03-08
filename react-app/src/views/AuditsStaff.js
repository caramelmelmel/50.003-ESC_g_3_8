import React, { Component, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../index.css";
import OngoingAudits from "./OngoingAudits";
import ResolvedAudits from "./ResolvedAudits";
import "react-tabs/style/react-tabs.css";
import { Button } from "react-bootstrap";
import DropdownMenu from "react-overlays/DropdownMenu";
import DropdownButton from "react-bootstrap/DropdownButton";
import { View } from "react-view";
import Dropdown from "../components/Dropdown";
import { dropdownTypes, dropdownInstitutes } from "../services/Dropdownmenu";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


function AuditStaff() {
  const [value, setValue] = useState(null);

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

    <div className="auditsstaff" class="row" >
      <Tabs onSelect={(index) => console.log(index)}>
        <div class="row">
            
            <TabList>
                <Tab>Ongoing Audits</Tab>
                <Tab>ResolvedAudits</Tab>
            </TabList>
           
            
            <div
            style={{ width: 170, position: "absolute", right: 10}}
            alignright = "true"
            >
                
            <Dropdown 
                options={dropdownTypes}
                prompt="Type"
                id="id"
                label = "name"         
                value={value}
                onChange={(val) => setValue(val)}/>
            </div>
            
            <div
            style={{width: 130, position: "absolute", right: 180}}>
            
            <Dropdown
                options={dropdownInstitutes}
                prompt="Institute"
                id="id"
                label = "ins"
                value={value}
                onChange={(val) => setValue(val)}
            />
            </div>
        </div>
        

        <TabPanel>
          <OngoingAudits/>
        </TabPanel>
        <TabPanel>
          <ResolvedAudits />
        </TabPanel>
      </Tabs>
    </div>
  );

}

export default AuditStaff;
