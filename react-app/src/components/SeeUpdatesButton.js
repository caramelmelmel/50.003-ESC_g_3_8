import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { audits, getAudits } from "../services/NewAudit";
import { Button } from "react-bootstrap";
import * as FcIcons from "react-icons/fc";
import SeeUpdates from "../views/SeeUpdates";
  
  
class SeeUpdatesButton extends Component {
  state = {
    itemId: this.props.itemId,
    audits:getAudits(),
  };

  handleSeeUpdates = (itemId) => {
    //itemId is tenant email
    console.log("ITEM CLICKED HAS ID OF:", this.state.itemId);
  };
  


  render() {
    //console.log(this.props.itemId);
  
    
    //audits that show have resolved == false
    const module = this.state.audits.find((audit) => audit.store_name === this.props.itemId );
    console.log(module);

    const noncompliance = [];


    for (var i = 0; i < module.noncompliances.length; i++) {
      //console.log(module.noncomplainces[i].resolved);
      
      if (module.noncompliances[i].resolved == false) {
        noncompliance.push(module.noncompliances[i]);
      }
    }
    //console.log(noncompliance)

    
          

  
  
    return (
      
      noncompliance.map(item => (
      
        
        <Link
          to={{
            pathname: `/see-updates/${this.state.itemId}/${item.key}`,
            state: {
              itemId: this.state.itemId,
              nonComId: item.key,
              stufftochange: item,

            },
            
    
          }}
          onClick={(itemId) => this.handleSeeUpdates(itemId)}
        >
          <Route path='/see-updates/itemId/:id' component={SeeUpdates} />
          <Button variant="light">
            
            <FcIcons.FcOpenedFolder size="20" />
            
          </Button>
        </Link >
       
     
     
      ))
    );
  }
}

export default SeeUpdatesButton;

