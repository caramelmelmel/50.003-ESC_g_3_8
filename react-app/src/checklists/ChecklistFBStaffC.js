import React, { Component } from 'react';
import Sidebar from "../components/Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import AddNCButton from "../components/AddNCButton";
import { getAllChecklistItems, getChecklistItem } from './../services/checklistFB';
import Category from './Category';
import Header from './Header';
import { getClickedItems, setClickedItems } from './../services/clickedItems';



class ChecklistFBStaffC extends Component {
  state = {
    checklistFB: getAllChecklistItems(),
    //totalscore: this.props.location.state.totalscore,
    //score: getClickedItems().length,
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
       // this.state.clickedItems.includes(itemId) ? this.state.score-=1 : this.state.score+=1;
        //console.log("SCORE: ", this.state.score);
        //console.log("CLICKED ITEMS PG1: ", this.state.clickedItems);
    }

    handleSave() {
        console.log("Saving...")
    }

    /*handlePassScore() {
        console.log("TOTAL SCORE IN A, B and C: ", this.state.totalscore + (this.state.score / 37) * 0.35);

    }*/

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
                            <th className="checklist-header-style">Food Hygiene</th>
                        </tr>
                    </thead>
                <tbody>
                    <Header headerTitle="Storage and Preparation of Food"/>
                    {this.state.checklistFB.map(checklistItem => checklistItem.category == "storage_prep_food" ? 
                    <Category 
                    key={checklistItem.id}
                    id={checklistItem.id}
                    item={checklistItem.item}
                    handleCheck={() => this.handleCheck(checklistItem.id)}
                    itemsChecked={this.state.clickedItems}
                    /> : null)}

                    <Header headerTitle="Storage of Food in Refrigerator/ Warmer"/>
                    {this.state.checklistFB.map(checklistItem => checklistItem.category == "storage_refrigerator_warmer" ? 
                    <Category 
                    key={checklistItem.id}
                    id={checklistItem.id}
                    item={checklistItem.item}
                    handleCheck={() => this.handleCheck(checklistItem.id)}
                    itemsChecked={this.state.clickedItems}
                    /> : null)}
                </tbody>
            </table>
                        <Link to={{pathname: "/checklist-fb-food-and-beverages"}}>
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

export default ChecklistFBStaffC;
