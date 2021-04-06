import React, { Component } from 'react';
import { getAllChecklistItems, getChecklistItem, getAllChecklistId } from './../services/checklistFB';
import { getClickedItems, setClickedItems, calculateScore } from './../services/clickedItems';
import ChartFinalScore from './../components/ChartFinalScore';
import { Container, Row, Col } from "react-bootstrap";




class SubmitChecklistStaff extends Component {
    state = {
        checklistFB: getAllChecklistItems(),
        clickedItems: getClickedItems(),
        nonclickedItems: this.getNonCompliances()
      };

    formatScore() {
        let color = '#F06D1A';
        const score = calculateScore(getClickedItems(), "totalScore");
        if (score < 95) {
            color = '#F22C49';
        } else {
            color = '#F06D1A';
        };
        return color;
    }

    getNonCompliances() {
        const difference = getAllChecklistId().filter(x => !getClickedItems().includes(x));
        //console.log("CLICKED ITEMS: ", getClickedItems());
        //console.log("DIFFERENCE: ", difference);
        return difference;
    }

    render() { 
        console.log("NONCLICKED ITEMS: ", this.state.nonclickedItems);
        return (
        <div className="container">
            <h1 className="header-style" style={{display : 'inline-block'}}>Total Audit Score: <h1 className="header-style" style={{display : 'inline-block', color: this.formatScore()}}>{calculateScore(getClickedItems(), "totalScore")}</h1></h1>
            <h2 className="header-style">Breakdown of Scores (%)</h2>
        <div id="chart1">
            <ChartFinalScore/>
        </div>
        <h2 className="header-style">List of Non-Compliances</h2>
        <Container fluid>
            <Row>
                <table className="table">
                    <thead>
                        <tr className="checklist-header-style">
                            <th xs={1}>#</th>
                            <th xs={4}>Category</th>
                            <th xs={7}>Item</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.nonclickedItems.map(id =>
                    <tr key={id}>
                        <td className="checklist-body-style">00</td>
                        <td className="checklist-body-style">{getChecklistItem(id).category}</td>
                        <td className="checklist-body-style">{getChecklistItem(id).item}</td>
                    </tr>)}
                    </tbody>
                </table>
            </Row>
        </Container>
    </div>);
    }

}

export default SubmitChecklistStaff;
