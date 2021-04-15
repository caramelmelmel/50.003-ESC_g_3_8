import React, { Component } from 'react';
import { getAllChecklistItems, getChecklistItem, getAllChecklistId } from './../services/checklistFB';
import { getClickedItems, setClickedItems, calculateScore } from './../services/clickedItems';
import ChartFinalScore from './../components/ChartFinalScore';
import { Container, Row, Col } from "react-bootstrap";
import ReactToPrint from "react-to-print";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ReactDOMServer from "react-dom/server";
import Datepicker from "./../components/Datepicker";



class SubmitChecklistStaff extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
    
        this.state = {
            checklistFB: getAllChecklistItems(),
            clickedItems: getClickedItems(),
            nonclickedItems: this.getNonCompliances(),
            noncom:[],
        
        };
        this.printPDF = this.printPDF.bind(this);
        this.submit = this.submit.bind(this);
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

                const imagefile = JSON.parse(localStorage.getItem(localStorage.key(i))).selected;
                const imagecam = JSON.parse(localStorage.getItem(localStorage.key(i))).dataUri;
                
                /*if (imagefile != null) {
                    const newimagefile = imagefile.replace(/^data:image.+;base64,/, "");
                    imagelist.push(newimagefile);
                }
              
                if (imagecam != null) {
                    const newimagecam = imagecam.replace(/^data:image.+;base64,/, "");
                    console.log(newimagecam); //this is a valid base 64 string
                    imagelist.push(newimagecam);
                }*/
                imagelist.push(imagefile, imagecam);
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
        //localStorage.clear();
       
        if (this.state.noncom != []) {
            console.log(JSON.stringify({ "noncompliances": this.state.noncom }));
            //console.log(JSON.parse(JSON.stringify({ "noncompliances": this.state.noncom }))); //rendering on tenants side
        }
        
    }


    showImageComments(a) {
       
        if (this.state.noncom != null) {
            
            /*
            //this.state.noncom.map((x, i) => {
            for (var i = 0; i < this.state.noncom.length; i++) {
                if (a === this.state.noncom[i].key) {
                    if (this.state.noncom[i].value[0][1] !== []) {   
                        return (
                            <tr key={i}>
                                <td>{this.state.noncom[i].value[0][1]}</td>
                                <img alt="" top={10} height={110} src={JSON.parse(localStorage.getItem(localStorage.key(i))).dataUri}/>
                            </tr>);
                        
                    }
                   
                }
            
                
            }*/

            for (var i = 0; i < localStorage.length; i++) {
                if (a === localStorage.key(i)) {
                    return (
                        <tr key={i}>
                            <td className="checklist-body-style">{JSON.parse(localStorage.getItem(localStorage.key(i))).val}</td>
                            <img className="checklist-body-style" alt="" height={130} src={JSON.parse(localStorage.getItem(localStorage.key(i))).dataUri}/>
                        </tr>);
                }
            }
            
                  
        }
    

    //23 may 2021 
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
                
                <div className="btndatpicker" style={{ height: 50 }}>
                    <Datepicker />
                </div>

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
                                    <th xs={4}>Item</th>
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
