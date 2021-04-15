import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { getAllNfbChecklistItems, getNfbChecklistItem } from './../services/checklistNonFB';
import Category from './Category';
import Header from './Header';
import { getClickedNfbItems, setClickedNfbItems, calculateScoreNonfb } from './../services/clickedItems';



class ChecklistNonFBStaffC extends Component {
  state = {
    checklistFB: getAllNfbChecklistItems(),
    //totalscore: this.props.location.state.totalscore,
    //score: getClickedItems().length,
    //clickedItems: getClickedItems()
    clickedItems: [],
  };

    handleNext() {
        console.log("Next button selected");
    }

    handleCheck = (itemId) => {
        console.log("CHECKLIST ITEM: ", getNfbChecklistItem(itemId));
        const item = getNfbChecklistItem(itemId);
        const clickedItems = this.state.clickedItems;
        this.setState({clickedItems: setClickedNfbItems(this.state.clickedItems.includes(item.id)? clickedItems.filter(i => i != itemId) : [...getClickedNfbItems(), itemId])});
    }

    handleSave() {
        console.log("Saving...")
    }

    handlePassScore() {
        calculateScoreNonfb(getClickedNfbItems(), "totalScore");
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
                        <Link to={{pathname: "/submit-checklist-staff",  state: {category: "nonfb"}}} onClick={this.handlePassScore}>
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

export default ChecklistNonFBStaffC;
