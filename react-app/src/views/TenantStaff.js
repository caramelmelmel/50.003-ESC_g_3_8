import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CGHTenant from "../tenants/CGHTenant";
import KKHTenant from "../tenants/KKHTenant";
import SGHTenant from "../tenants/SGHTenant";
import SKHTenant from "../tenants/SKHTenant";
import NCCSTenant from "../tenants/NCCSTenant";
import NHCSTenant from "../tenants/NHCSTenant";
import BVHTenant from "../tenants/BVHTenant";
import OCHTenant from "../tenants/OCHTenant";
import AcademiaTenant from "../tenants/AcademiaTenant";



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
        style={{ position: "absolute", left: 10 }}
      >
        <Tabs >
          <TabList id="controlled-tab-example">
            <Tab onClick={() =>this.handleSelect("CGH")} style={{ minWidth: "5%" }}>CGH</Tab>
            <Tab onClick={() =>this.handleSelect("KKH")} style={{ minWidth: "5%" }}>KKH</Tab>
            <Tab onClick={() =>this.handleSelect("SGH")} style={{ minWidth: "5%" }}>SGH</Tab>
            <Tab onClick={() =>this.handleSelect("SKH")} style={{ minWidth: "5%" }}>SKH</Tab>
            <Tab onClick={() =>this.handleSelect("NCCS")} style={{ minWidth: "5%" }}>NCCS</Tab>
            <Tab onClick={() =>this.handleSelect("NHCS")} style={{ minWidth: "5%" }}>NHCS</Tab>
            <Tab onClick={() =>this.handleSelect("BVH")} style={{ minWidth: "5%" }}>BVH</Tab>
            <Tab onClick={() =>this.handleSelect("OCH")} style={{ minWidth: "5%" }}>OCH</Tab>
            <Tab onClick={() =>this.handleSelect("Academia")} style={{ minWidth: "5%" }}>Academia</Tab>
          </TabList>

          <TabPanel>
            <CGHTenant key={this.state} institutechosen={this.state}/>
          </TabPanel>
          <TabPanel>
            <KKHTenant key={this.state} institutechosen={this.state}/>
          </TabPanel>
          <TabPanel>
            <SGHTenant key={this.state} institutechosen={this.state}/>
          </TabPanel>
          <TabPanel>
            <SKHTenant key={this.state} institutechosen={this.state}/>
          </TabPanel>
          <TabPanel>
            <NCCSTenant key={this.state} institutechosen={this.state}/>
          </TabPanel>
          <TabPanel>
            <NHCSTenant key={this.state} institutechosen={this.state}/>
          </TabPanel>
          <TabPanel>
            <BVHTenant key={this.state} institutechosen={this.state}/>
          </TabPanel>
          <TabPanel>
            <OCHTenant key={this.state} institutechosen={this.state}/>
          </TabPanel>
          <TabPanel>
            <AcademiaTenant key={this.state} institutechosen={this.state}/>
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