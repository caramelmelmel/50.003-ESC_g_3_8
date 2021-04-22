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
    
        
        //const resolvedAudits = allAudits.filter((m) => m.noncompliances.length == 0);

        
        const resolvedAudits = []
   

        for (var i = 0; i < allAudits.length; i++) {
            console.log(allAudits[i]);
       
            const tryresolved = [];

            if (allAudits[i].noncompliances.length === 0) {
                //const resolvedAudits = allAudits.filter((m) => m.noncompliances.length == 0);
                resolvedAudits.push(allAudits[i]);

            }

            else {
                for (var x = 0; x < allAudits[i].noncompliances.length; x++) {
                    tryresolved.push(allAudits[i].noncompliances[x].resolved);
                
                }
            
                console.log(tryresolved);
                if (tryresolved.every(e => e == true) === true) {
                    resolvedAudits.push(allAudits[i]);
                }
                else {
                    continue;
                }
            }
            console.log(resolvedAudits);
            //push resolvedAudits to the resolved audits table 
        }
       
      
    


        
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
                                    <td>{audit.store_name}</td>
                                    <td>{audit.date_recorded}</td>
                                    <td>finishedauditdate</td>
                                    <td>{audit.audit_score}</td>
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
//on press solved button should add finished datetime to the dataset, then call here 