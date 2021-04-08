import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { getAllChecklistItems, getChecklistItem } from './../services/checklistNonFB';
import Category from './Category';
import Header from './Header';
import ls from 'local-storage';
import { getClickedItems, setClickedItems } from './../services/clickedItems';



class ChecklistNonFBStaffA extends Component {
  state = {
    checklistFB: getAllChecklistItems(),
    //clickedItems: getClickedItems()
    clickedItems: []

  };

    handleNext() {
        console.log("Next button selected");
    }

    handleCheck = (itemId) => {
        console.log("CHECKLIST ITEM: ", getChecklistItem(itemId));
        const item = getChecklistItem(itemId);
        const clickedItems = this.state.clickedItems;
        this.setState({clickedItems: setClickedItems(this.state.clickedItems.includes(item.id)? clickedItems.filter(i => i != itemId) : [...getClickedItems(), itemId])});
    }

    handleSave() {
        console.log("Saving...")
    }

    /*handlePassScore() {
        console.log("TOTAL SCORE IN A: ", this.state.score / 13 * 0.1);
    }*/

    /*componentDidMount() {
        fetch(URL)
        .then(response => response.json())
        .then(json => this.setState({
          clickedItems: ls.get('clickedItems') || []
        }));
        this.startInterval()
      }*/


    render() { 
        ls.set('key', 'value');
        return <React.Fragment>
            <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
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
                    <Header headerTitle="Professionalism"/>
                    {this.state.checklistFB.map(checklistItem => checklistItem.category == "professionalism" ? 
                    <Category 
                    key={checklistItem.id}
                    id={checklistItem.id}
                    item={checklistItem.item}
                    handleCheck={() => this.handleCheck(checklistItem.id)}
                    itemsChecked={this.state.clickedItems}
                    /> : null)}
                    
                    <Header headerTitle="Staff Hygiene"/>
                    {this.state.checklistFB.map(checklistItem => checklistItem.category == "staff_hygiene" ?                
                    <Category 
                    key={checklistItem.id}
                    id={checklistItem.id}
                    item={checklistItem.item}
                    handleCheck={() => this.handleCheck(checklistItem.id)}
                    itemsChecked={this.state.clickedItems}
                    /> : null)}
                </tbody>
            </table>
                        <Link to={{pathname: "/checklist-non-fb-staff-housekeeping-and-cleanliness"}}>
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

export default ChecklistNonFBStaffA;

