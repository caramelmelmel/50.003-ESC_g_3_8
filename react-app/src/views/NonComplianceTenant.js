import React, { Component } from 'react';
import { Accordion, Card } from "react-bootstrap";
import ChartInstitutes from "../components/ChartInstitutes";
import Chart from "react-apexcharts";
import { getAllNoncompliance, getLength } from '../services/noncomplianceList';
import { getChecklistItem } from '../services/checklistFB';


class NonComplianceTenant extends Component {
    state = {
        noncompliance: getAllNoncompliance(),
        length: getLength()
    }

    handleSave() {
        console.log("Saving...");
    }
    render() { 
        console.log("Non-compliances: ", this.state.noncompliance);
        return (
            <React.Fragment>
                <div className="container">
                    {this.state.noncompliance="" ? <h1 className="header-style">You have no non-compliances, good job!</h1> : 
                    <div className="container">
                        <h1 className="header-style" style={{display : 'inline-block'}}> Number of unresolved non-compliances: <h1 className="header-style" style={{display : 'inline-block', color: '#F22C49'}}><span className="badge badge-danger">{this.state.length}</span></h1></h1>
                        {getAllNoncompliance().map(nc =>
                        <Accordion defaultActiveKey="0" key={nc.id}>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey={nc.id} className="header-style" style={{height: 50, padding: 15}}>
                                    <h5>{getChecklistItem(nc.nc_id).item}</h5>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={nc.id}>
                                    <Card.Body className="checklist-body-style">
                                        Hello! Find all images and comments here
                                        <button className="btn btn-warning header-style"
                                        style={{ float: "right" }}
                                        onClick={this.handleSave}>Save</button>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        )}
                    </div>
                    }
                </div>
            </React.Fragment>

        
        );
    }
}
 
export default NonComplianceTenant;
/*
margin: 70px auto;
overflow: hidden;
width: 80%;
text-align: center;

*/