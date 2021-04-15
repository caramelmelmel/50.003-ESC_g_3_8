import React, { Component } from 'react';
import { getAllChecklistItems, getChecklistItem, getAllChecklistId } from './../services/checklistFB';
import { getClickedItems, setClickedItems, calculateScore, getClickedNfbItems, calculateScoreNonfb } from './../services/clickedItems';
import ChartFinalScore from './../components/ChartFinalScore';
import { Container, Row, Col } from "react-bootstrap";
import ReactToPrint from "react-to-print";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ReactDOMServer from "react-dom/server";
import { getAllNfbChecklistItems, getNfbAllChecklistId, getNfbChecklistItem } from './../services/checklistNonFB';




class SubmitChecklistStaff extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
    
        this.state = {
            checklistFB: getAllChecklistItems(),
            clickedItems: getClickedItems(),
            nonclickedItems: this.getNonCompliances(),
        
        };
    }

    componentDidMount() {
        this._isMounted = true;
    }

        /*
        ajaxVar
      .get('https://domain')
      .then(result => {
        if (this._isMounted) {
          this.setState({
            news: result.data.hits,
          });
        }
      });


        */
        
    componentWillUnmount() {
        this._isMounted = false;
    }
    

    formatScore() {
        let color = '#F06D1A';
        let category = this.props.location.state.category;
        var score = 0;
        if (category == "fb") {
            score = calculateScore(getClickedItems(), "totalScore");
        } else if (category = 'nonfb') {
            score = calculateScoreNonfb(getClickedNfbItems, "totalScore");
        }

        if (score < 95) {
            color = '#F22C49';
        } else {
            color = '#F06D1A';
        };
        return color;
    }

    getNonCompliances() {
        console.log("CATEGORY: ", this.props.location.state.category);
        let category = this.props.location.state.category;
        let difference = [""];
        if (category == "fb") {
            difference = getAllChecklistId().filter(x => !getClickedItems().includes(x));
        } else if (category == "nonfb") {
            difference = getNfbAllChecklistId().filter(x => !getClickedNfbItems().includes(x));
        }
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
        //implement email functionality
        localStorage.clear();
    }

    sendNonComplianceArray() {
        console.log(localStorage);
        var noncompliances = [];
        var comments = [];
        
        for (var i = 0; i < localStorage.length; i++) {
            var eachentry = {};
            var imagelist = [];
            var resolvedvariable = {};
            //console.log(localStorage.key(i));
           
            if (localStorage.key(i) === "key" || localStorage.getItem(localStorage.key(i)) === "value") {
                //bug in localStorage
                console.log("bad");
                comments.push([null]);
                continue;

            }
            else {
                eachentry.key = localStorage.key(i);
                const text = JSON.parse(localStorage.getItem(localStorage.key(i))).val;
                imagelist.push(JSON.parse(localStorage.getItem(localStorage.key(i))).selected, JSON.parse(localStorage.getItem(localStorage.key(i))).dataUri);
                //console.log(imagelist);
                resolvedvariable.key = "resolved";
                resolvedvariable.value = false;
                //convert json to array
                //comments:[ [text, imagelist, staff/tenant, resolved ],  ]
                comments.push([text, imagelist, "staff", resolvedvariable]);
            }
            
            eachentry.value = [comments[i]];
            console.log(eachentry);
            //noncompliances[i]=eachentry; if noncompliance={}
            noncompliances.push(eachentry)
        }
        //console.log(comments);
        //console.log(eachentry);
        console.log(noncompliances);
        //console.log(Object.values(noncompliances));  // Array ['hello', 25, Array ['apple', 'mango']]
        //console.log(Object.keys(noncompliances));
        //noncompliances.key = "noncompliance";
        //noncompliances.value = eachentry;
        //{ncprofessionalism_02:  comments: [[Example, data:image/jpeg;base64,/9j/4, staff], resolved: false ],
    //     ncprofessionalism_01: }

    }
    //add noncompliances to json to pass over
    //localStorage.clear();

    getCategory(id) {
        console.log("CATEGORY: ", this.props.location.state.category);
        let category = this.props.location.state.category;
        if (category == "fb") {
            return getChecklistItem(id).category;
        } else if (category == "nonfb") {
            return getNfbChecklistItem(id).category;
        }
    }

    getItem(id) {
        console.log("CATEGORY: ", this.props.location.state.category);
        let category = this.props.location.state.category;
        if (category == "fb") {
            return getChecklistItem(id).item;
        } else if (category == "nonfb") {
            return getNfbChecklistItem(id).item;
        }
    }


    render() {
        { this.sendNonComplianceArray() }
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
                    <h1 className="header-style" style={{display : 'inline-block'}}>Total Audit Score: <h1 className="header-style" style={{display : 'inline-block', color: this.formatScore()}}>{this.props.location.state.category == "fb" ? calculateScore(getClickedItems(), "totalScore") : calculateScoreNonfb(getClickedNfbItems(), "totalScore")}</h1></h1>
                    <h2 className="header-style">Breakdown of Scores (%)</h2>
                <div id="chart1">
                    <ChartFinalScore category={this.props.location.state.category}/>
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
                                <td className="checklist-body-style">{this.getCategory(id)}</td>
                                <td className="checklist-body-style">{this.getItem(id)}</td>
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
