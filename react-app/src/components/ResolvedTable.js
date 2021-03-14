import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import { getAudits } from "../services/NewAudit";


class ResolvedTables extends Component {
    state = {
        audits: [], //initialise to empty array to allow time to get from server and ensure not undefined
      };

    componentDidMount() {
        this.setState({ audits: getAudits() });
    }
    render() {
        const { length: auditscount } = this.state.audits;
        const { audits: allAudits } = this.state;
        if (auditscount == 0)
            return <p>There are no resolved audits in the database.</p>;
    
        const resolvedAudits = allAudits.filter((m) => m.noofnoncompliances == 0);
        return (
            <div className="ongoingtable">
                <div class="sentence">
                    {" "}
                    There are currently {resolvedAudits.length} resolved audits
                </div>
                <div>
                    <ReactBootStrap.Table>
                        <thead>
                        <tr>
                            <th>Tenants with Updates</th>
                            <th>Start Audit Date</th>
                            <th>Resolved Audit Date</th>
                            <th>Performance Score</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {resolvedAudits.map((audit) => (
                            <tr key={audit.auditid}>
                            <td>{audit.tenantname}</td>
                            <td>{audit.auditdate}</td>
                            <td>finishedauditdate</td>
                            <td>{audit.performancescore}</td>
                            </tr>
                        ))}
                        </tbody>
                    </ReactBootStrap.Table>
                </div>
            </div>
        );
    }
    
}
export default ResolvedTables;