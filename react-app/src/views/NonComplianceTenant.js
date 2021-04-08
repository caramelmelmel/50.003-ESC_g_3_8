import React, { Component } from 'react';
import { Accordion, Card } from "react-bootstrap";
import ChartInstitutes from "../components/ChartInstitutes";
import Chart from "react-apexcharts";
import { getAllNoncompliance, getLength } from '../services/noncomplianceList';
import { getChecklistItem } from '../services/checklistFB';
import FormComponent from "../components/FormComponent";
import CommentList from './../components/CommentList';


class NonComplianceTenant extends Component {
    state = {
        noncompliance: getAllNoncompliance(),
        length: getLength(),
        loading: false,
        comments: [{name:"arissa", index:"01", comment:"Where do I start with Jodi?"}, {name:"jodi", index:"02", comment:"I've know Arissa for over a year"}]
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
                                    <Card.Body className="checklist-body-style" style={{padding: 15}}>
                                        Hello! Find all images and comments here
                                            <div className="row">
                                                <div className="col-4  pt-3 border-right">
                                                    <FormComponent addComment={this.addComment}/>
                                                </div>
                                            <div className="col-8  pt-3 bg-white">
                                            <CommentList 
                                            comments={this.state.comments}
                                            loading={this.state.loading}/>
                                            </div>
                                        </div>
                                        <button className="btn btn-warning header-style"
                                        style={{ float: "right", margin: 15 }}
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