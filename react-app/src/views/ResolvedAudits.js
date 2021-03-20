import React, { Component } from "react";
import ResolvedTable from "../components/ResolvedTable";

class ResolvedAudits extends Component {

  //function that sees scores and if totalscore == 100 then add to table of resolved
  ///deleted from table of ongoing audits
  render() {
    return (
      <div className="auditsstaff" >
        <ResolvedTable />
      </div>
    );
  }
}

export default ResolvedAudits;
