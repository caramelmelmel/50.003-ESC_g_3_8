import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CGHTenant from "../components/CGHTenant";

class TenantStaff extends Component {
    constructor(props) {
        super(props);
        this.state = {
          activeTab : 'CGH'
        };
        this.handleSelect = this.handleSelect.bind(this);
      }
      
    handleSelect(institutechosen){
    this.setState({
        activeTab: institutechosen
    });
    console.log(institutechosen)
    }


    
    render() {
      //console.log(this.state);
      return(
    
      <div
        className="tenantstaff"
        style={{ position: "absolute", left: 20, right: 20 }}
      >
        <Tabs >
          <TabList id="controlled-tab-example">
            <Tab onClick={() =>this.handleSelect("CGH")} style={{ minWidth: "20%" }}>CGH</Tab>
            <Tab onClick={() =>this.handleSelect("SGH")} style={{ minWidth: "16%" }}>SGH</Tab>
            <Tab onClick={() =>this.handleSelect("KKH")} style={{ minWidth: "16%" }}>KKH</Tab>
            <Tab onClick={() =>this.handleSelect("SKH")} style={{ minWidth: "16%" }}>SKH</Tab>
            <Tab onClick={() =>this.handleSelect("NCCS")} style={{ minWidth: "16%" }}>NCCS</Tab>
            <Tab onClick={() =>this.handleSelect("OCH")} style={{ minWidth: "16%" }}>OCH</Tab>
          </TabList>

          <TabPanel>
            <CGHTenant institutechosen={this.state}/>
          </TabPanel>


        </Tabs>
      </div>
    );
  }
}

export default TenantStaff;
//onClick={this.setState({ key: 'KKH' })} 
/*
export const institutes = [
  { _id:"1", name: "CGH" },

  { _id:"2", name: "SGH" },

  { _id:"3", name: "KKH" },

  { _id:"4", name: "SKH" },

  { _id:"5", name: "NCCS" },

  { _id:"6", name: "OCH" },

];

*/