import React, { Component } from "react";
import { audits, RenderAudit } from "../services/NewAudit";
import * as ReactBootStrap from "react-bootstrap";
import Dropdown, { filtereddata } from "./Dropdown";

class Tables extends Component {
  ///only show audits that have not been resolved


  render() {
    //console.log(Dropdown.Filterthis); //this is still undefined
    //console.log(audits);
    return (
      <ReactBootStrap.Table>
        <thead>
          <tr>
            <th>Tenants with Updates</th>
            <th>Audit Date</th>
            <th>See Updates from Tenants</th>
            <th>Performance Score</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{audits.map(RenderAudit)}</tbody>
      </ReactBootStrap.Table>
    );
  }
}

export default Tables;
//audits.map(RenderAudit)
