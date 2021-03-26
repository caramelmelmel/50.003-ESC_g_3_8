import React, { Component } from 'react';
import Sidebar from "../components/Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import AddNCButton from "../components/AddNCButton";
import { getAllChecklistItems, getChecklistItem } from './../services/checklistFB';
import Category from './Category';
import Header from './Header';



class ChecklistFBStaffD extends Component {
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
        console.log("TOTAL SCORE IN A, B, C and D: ", this.state.totalscore + this.state.score / 12 * 0.15);

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
                            <th className="checklist-header-style">Food and Beverages</th>
                        </tr>
                    </thead>
                <tbody>
                    <Header headerTitle="Food"/>
                    {this.state.checklistFB.map(checklistItem => checklistItem.category == "food" ? 
                    <Category 
                    key={checklistItem.id}
                    id={checklistItem.id}
                    item={checklistItem.item}
                    handleCheck={() => this.handleCheck(checklistItem.id)}
                    /> : null)}

                    <Header headerTitle="Beverage"/>
                    {this.state.checklistFB.map(checklistItem => checklistItem.category == "beverage" ? 
                    <Category 
                    key={checklistItem.id}
                    id={checklistItem.id}
                    item={checklistItem.item}
                    handleCheck={() => this.handleCheck(checklistItem.id)}
                    /> : null)}                    
                </tbody>
            </table>
                        <Link to={{pathname: "/checklist-fb-safety-and-health", state: {totalscore: this.state.totalscore + this.state.score / 12 * 0.15}}} onClick={() => this.handlePassScore()}>
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

export default ChecklistFBStaffD;
