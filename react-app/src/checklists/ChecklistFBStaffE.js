import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import AddNCButton from "../components/AddNCButton";
import { getAllChecklistItems, getChecklistItem } from './../services/checklistFB';



class ChecklistFBStaffE extends Component {
  state = {
    checklistFB: getAllChecklistItems(),
    totalscore: this.props.location.state.totalscore,
    score: 0,
    clickedItems: []
  };

    handleNext() {
        console.log("Next button selected");
    }

    handleCheck = (itemId) => {
        console.log("TOTAL SCORE: ", this.state.totalscore);
        console.log("CHECKLIST ITEM: ", getChecklistItem(itemId));
        const item = getChecklistItem(itemId);
        const clickedItems = this.state.clickedItems;
        this.setState({clickedItems: clickedItems.includes(item.id) ? clickedItems.filter(i => i != itemId) : [...clickedItems, itemId]})
        this.state.clickedItems.includes(itemId) ? this.state.score-=1 : this.state.score+=1;
        console.log("SCORE: ", this.state.score);
    }

    handleSave() {
        console.log("Saving...")
    }

    handlePassScore() {
        console.log("TOTAL SCORE: ", this.state.totalscore + this.state.score / 18 * 0.2);

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
                            <th className="checklist-header-style">Workplace Safety and Health</th>
                        </tr>
                    </thead>
                <tbody>
                    <tr>
                        <th className="checklist-sideheader-style">General Safety</th>
                        <th/>
                        <th/>
                    </tr>
                    {this.state.checklistFB.map(checklistItem => checklistItem.category == "general_safety" ?                
                    <tr key={checklistItem.id}>
                        <td className="checklist-body-style">{checklistItem.item}</td>
                        <td><input type="checkbox" aria-label="Checkbox for following text input" onClick={() => this.handleCheck(checklistItem.id)}/></td>
                        <td>
                            <AddNCButton key={checklistItem.id} itemId={checklistItem.id}/>
                        </td>
                    </tr> : null)}
                    <tr>
                        <th className="checklist-sideheader-style">Fire and Emergency Safety</th>
                        <th/>
                        <th/>
                    </tr>
                    {this.state.checklistFB.map(checklistItem => checklistItem.category == "fire" ?                
                    <tr key={checklistItem.id}>
                        <td className="checklist-body-style">{checklistItem.item}</td>
                        <td><input type="checkbox" aria-label="Checkbox for following text input" onClick={() => this.handleCheck(checklistItem.id)}/></td>
                        <td>
                            <AddNCButton key={checklistItem.id} itemId={checklistItem.id}/>
                        </td>
                    </tr> : null)}
                    <tr>
                        <th className="checklist-sideheader-style">Electrical Safety</th>
                        <th/>
                        <th/>
                    </tr>
                    {this.state.checklistFB.map(checklistItem => checklistItem.category == "electrical" ?                
                    <tr key={checklistItem.id}>
                        <td className="checklist-body-style">{checklistItem.item}</td>
                        <td><input type="checkbox" aria-label="Checkbox for following text input" onClick={() => this.handleCheck(checklistItem.id)}/></td>
                        <td>
                            <AddNCButton key={checklistItem.id} itemId={checklistItem.id}/>
                        </td>
                    </tr> : null)}

                </tbody>
            </table>
                        <Link to={{pathname: "/", state: {totalscore: this.state.totalscore + this.state.score / 18 * 0.2}}} onClick={() => this.handlePassScore()}>
                            <button 
                            type="button" 
                            className="btn btn-primary btn-lg checklist-header-style" 
                            style={{float: 'right'}} 
                            onClick={this.handleNext}
                            score={this.state.score}>Next</button>
                        </Link>
                        <button 
                            type="button" 
                            className="btn btn-success btn-lg checklist-header-style" 
                            style={{float: 'left'}} 
                            onClick={this.handleSave}>Save</button>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>;
    }

}

export default ChecklistFBStaffE;
