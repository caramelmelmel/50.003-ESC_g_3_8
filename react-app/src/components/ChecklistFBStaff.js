import React, { Component } from 'react';
import { getAllChecklistItems } from './../data/checklistFB';
import Sidebar from "../components/Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import AddNCButton from "../components/AddNCButton";



class ChecklistFBStaff extends Component {
  state = {
    checklistFB: getAllChecklistItems(),
  };

    handleNext() {
        console.log("Next button selected");
    }

    render() { 
        return <React.Fragment>
            <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                        {/*<Sidebar />*/}
                    </Col>
                    <Col>
                <table className="table" xs={10}>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th className="checklist-header-style">Professionalism and Staff Hygiene</th>
                        </tr>
                    </thead>
                <tbody>
                    <tr>
                        <th className="checklist-sideheader-style">Professionalism</th>
                        <th/>
                        <th/>
                    </tr>
                    {this.state.checklistFB.map(checklistItem => checklistItem.category == "professionalism" ?                
                    <tr>
                        <td className="checklist-body-style">{checklistItem.item}</td>
                        <td><input type="checkbox" aria-label="Checkbox for following text input"/></td>
                        <td>
                            <AddNCButton key={checklistItem.id} itemId={checklistItem.id}/>
                        </td>
                    </tr> : null)}
                    <tr>
                        <th className="checklist-sideheader-style">Staff Hygiene</th>
                        <th/>
                        <th/>
                    </tr>
                    {this.state.checklistFB.map(checklistItem => checklistItem.category == "staff_hygiene" ?                
                    <tr>
                        <td className="checklist-body-style">{checklistItem.item}</td>
                        <td><input type="checkbox" aria-label="Checkbox for following text input"/></td>
                        <td>
                            <AddNCButton key={checklistItem.id} itemId={checklistItem.id}/>
                        </td>
                    </tr> : null)}

                </tbody>
            </table>
                        <Link to="/add-nc-staff">
                            <button type="button" className="btn btn-primary btn-lg checklist-header-style" style={{float: 'right'}} onClick={this.handleNext}>Next</button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>;
    }

}

export default ChecklistFBStaff;
