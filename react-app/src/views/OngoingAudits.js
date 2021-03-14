import React, { Component } from "react";
import OngoingTable from "../components/OngoingTable";

//style={{ position: "absolute", left: 20 }}
class OngoingAudits extends Component {
  render() {
    return (
      <div className="auditsstaff" >
        <OngoingTable />
      </div>
    );
  }
}

export default OngoingAudits;
