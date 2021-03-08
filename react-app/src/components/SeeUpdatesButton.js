import React, { Component } from "react";
import { Link } from "react-router-dom";
import { audits, RenderAudit } from "../services/NewAudit";
import { Button } from "react-bootstrap";

class SeeUpdatesButton extends Component {
  state = {
    itemId: this.props.itemId,
  };

  handleSeeUpdates = (itemId) => {
    // Need to pass the checklistItem id to a non-compliance page
    console.log("ITEM CLICKED HAS ID OF:", this.state.itemId);
    //console.log(itemId);
  };

  render() {
    return (
      
        <Link
          to={{
            pathname: `/see-updates/${this.state.itemId}`,
            state: { itemId: this.state.itemId },
          }}
          onClick={(itemId) => this.handleSeeUpdates(itemId)}
        >
            <Button variant="primary">See Updates</Button>
        </Link>
      
    );
  }
}

export default SeeUpdatesButton;
