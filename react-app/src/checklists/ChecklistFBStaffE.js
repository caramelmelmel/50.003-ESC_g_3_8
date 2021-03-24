import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import AddNCButton from "../components/AddNCButton";
import { getAllChecklistItems, getChecklistItem } from './../services/checklistFB';
import Category from './Category';
import Header from './Header';
import { getClickedItems, setClickedItems, calculateScore } from './../services/clickedItems';



class ChecklistFBStaffE extends Component {
  state = {
    checklistFB: getAllChecklistItems(),
    //totalscore: this.props.location.state.totalscore,
    //score: 0,
    clickedItems: getClickedItems()
  };

    handleNext() {
        console.log("Next button selected");
    }


    handleCheck = (itemId) => {
        console.log("CHECKLIST ITEM: ", getChecklistItem(itemId));
        const item = getChecklistItem(itemId);
        const clickedItems = this.state.clickedItems;
        //this.setState({clickedItems: clickedItems.includes(item.id) ? clickedItems.filter(i => i != itemId) : [...clickedItems, itemId]})
        this.setState({clickedItems: setClickedItems(this.state.clickedItems.includes(item.id)? clickedItems.filter(i => i != itemId) : [...getClickedItems(), itemId])});
        //this.state.clickedItems.includes(itemId) ? this.state.score-=1 : this.state.score+=1;
        //console.log("SCORE: ", this.state.score);
        //console.log("CLICKED ITEMS PG1: ", this.state.clickedItems);
    }

    handleSave() {
        console.log("Saving...")
    }

    handlePassScore() {
        calculateScore(getClickedItems());
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
                    <Header headerTitle="General Safety"/>
                    {this.state.checklistFB.map(checklistItem => checklistItem.category == "general_safety" ? 
                    <Category 
                    key={checklistItem.id}
                    id={checklistItem.id}
                    item={checklistItem.item}
                    handleCheck={() => this.handleCheck(checklistItem.id)}
                    itemsChecked={this.state.clickedItems}
                    /> : null)}

                    <Header headerTitle="Fire and Emergency Safety"/>
                    {this.state.checklistFB.map(checklistItem => checklistItem.category == "fire" ? 
                    <Category 
                    key={checklistItem.id}
                    id={checklistItem.id}
                    item={checklistItem.item}
                    handleCheck={() => this.handleCheck(checklistItem.id)}
                    itemsChecked={this.state.clickedItems}
                    /> : null)}

                    <Header headerTitle="Electrical Safety"/>
                    {this.state.checklistFB.map(checklistItem => checklistItem.category == "electrical" ? 
                    <Category 
                    key={checklistItem.id}
                    id={checklistItem.id}
                    item={checklistItem.item}
                    handleCheck={() => this.handleCheck(checklistItem.id)}
                    itemsChecked={this.state.clickedItems}
                    /> : null)}
                </tbody>
            </table>
                        <Link to={{pathname: "/"}} onClick={this.handlePassScore}>
                            <button 
                            type="button" 
                            className="btn btn-primary btn-lg checklist-header-style" 
                            style={{float: 'right'}} 
                            onClick={this.handleNext}>Next</button>
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
