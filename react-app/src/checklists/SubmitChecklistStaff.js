import React, { Component } from 'react';
import { getAllChecklistItems, getChecklistItem, getAllChecklistId } from './../services/checklistFB';
import { getClickedItems, setClickedItems, calculateScore } from './../services/clickedItems';
import ChartFinalScore from './../components/ChartFinalScore';
import { Container, Row, Col } from "react-bootstrap";
import ReactToPrint from "react-to-print";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ReactDOMServer from "react-dom/server";




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

    printPDF() {
        const audit = document.getElementById("audit");
        html2canvas(audit).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            const imgProps= pdf.getImageProperties(canvas);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
            pdf.save("audit.pdf");
        }); 
    }

    submit() {
        console.log("Submit");
    }


    render() { 
        console.log("NONCLICKED ITEMS: ", this.state.nonclickedItems);
        return (
            <div className="container">

                <button 
                    className="btn btn-lg btn-warning header-style" 
                    style={{ float: "right" }}
                    onClick={this.submit}>Submit</button>    

                <button 
                    className="btn btn-lg btn-outline-warning header-style mx-3" 
                    style={{ float: "right" }}
                    onClick={this.printPDF}>Download PDF</button>
                <div className="container" id="audit">
                    <h1 className="header-style" >Audit: <h1 className="header-style" style={{display : 'inline-block', color: "#f06d1a"}}>Tenant Name, Date</h1></h1>
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
                                    <th xs={4}>Category</th>
                                    <th xs={7}>Item</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.nonclickedItems.map(id =>
                            <tr key={id}>
                                <td className="checklist-body-style">{getChecklistItem(id).category}</td>
                                <td className="checklist-body-style">{getChecklistItem(id).item}</td>
                            </tr>)}
                            </tbody>
                        </table>
                    </Row>
                </Container>
            </div>
        </div>);
    }

}

export default SubmitChecklistStaff;
