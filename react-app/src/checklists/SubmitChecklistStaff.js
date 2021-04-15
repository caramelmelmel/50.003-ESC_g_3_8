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
    _isMounted = false;
    constructor(props) {
        super(props);
    
        this.state = {
            checklistFB: getAllChecklistItems(),
            clickedItems: getClickedItems(),
            nonclickedItems: this.getNonCompliances(),
            noncom:null,
        
        };
    }

    componentDidMount() {
        this._isMounted = true;

        //console.log(localStorage);
        var noncompliances = [];
        var comments = [];
        
        for (var i = 0; i < localStorage.length; i++) {
            var eachentry = {};
            var imagelist = [];
            var resolvedvariable = {};
            //console.log(localStorage.key(i));
        
            if (localStorage.key(i) === "key" || localStorage.getItem(localStorage.key(i)) === "value") {
                //bug in localStorage
                //console.log("bad");
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
            //console.log(eachentry);
            //noncompliances[i]=eachentry; if noncompliance={}
            noncompliances.push(eachentry)
        }
        //console.log(comments);
        //console.log(eachentry);
        console.log(noncompliances);
        this.setState({noncom: noncompliances})

        
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
        //implement email functionality
        localStorage.clear();
    }


     //if getChecklistItem(id).id == i.key, show i.value[0][0], i.value[0][1][0] if not null
    
    

    showImageComments(a) {

       
        /*

        console.log(noncompliances.map((i) => console.log(i.key)));
        console.log(noncompliances.map((i) => console.log(i.value[0][0])));//comments
        console.log(noncompliances.map((i) => console.log(i.value[0][1])));//imagelist

        this.sendNonComplianceArray(

        const stores = storename
        .map(item => {
            return (
                <tr key={item.Tenant_id }>
                   
                        <td>{item.store_name}</td>
                    </Link>
                </tr>
            )
        });
        
        */
       
        if (this.state.noncom != null) {
            //this.state.noncom.map((x, i) => {
            for (var i = 0; i < this.state.noncom.length; i++) {
                if (a == this.state.noncom[i].key) {
                    //console.log(x.value[0][0]);
                // x.value[0][1][0], x.value[0][1][1]);
                    return (
                    <tr key={i}>
                        <td>{this.state.noncom[i].value[0][0]}</td>
                    </tr>);
                }
                
            }
            
                  
        }
    

    }
    //add noncompliances to json to pass over
    //localStorage.clear();

    render() {
       
        console.log(this.state.noncom);
        //console.log("NONCLICKED ITEMS: ", this.state.nonclickedItems);
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
                                    <th xs={4}>Image and Comments</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.nonclickedItems.map(id =>
                            <tr key={id}>
                                <td className="checklist-body-style">{getChecklistItem(id).category}</td>
                                <td className="checklist-body-style">{getChecklistItem(id).item}</td>
                                {this.showImageComments(getChecklistItem(id).id)}
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
