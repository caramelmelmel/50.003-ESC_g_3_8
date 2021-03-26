import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { audits, getAudits } from "../services/NewAudit";
import { Button } from "react-bootstrap";
import * as FcIcons from "react-icons/fc";
import SeeUpdates from "../views/SeeUpdates";
  
  
class SeeUpdatesButton extends Component {
  state = {
    itemId: this.props.itemId,
    audits: getAudits(),
  };

  handleSeeUpdates = (itemId) => {
    console.log("ITEM CLICKED HAS ID OF:", this.state.itemId);
  };


  render() {
    let module = audits.find((audit) => audit.auditid === this.props.itemId);
    let noncompliance = module.noncomplainces;
    //console.log(module.noncomplainces[0]);


    return (
      noncompliance.map(item => (
      
       
        <Link
          to={{
            pathname: `/see-updates/${this.state.itemId}/${item.name}`,
            state: {
              itemId: this.state.itemId,
              nonComId: item.name,
            },
    
            
          }}
          onClick={(itemId) => this.handleSeeUpdates(itemId)}
        >
          <Button variant="light">
            
            <FcIcons.FcOpenedFolder size="20" />
            
          </Button>
        </Link >
       
     
     
      ))
    );
  }
}

export default SeeUpdatesButton;

