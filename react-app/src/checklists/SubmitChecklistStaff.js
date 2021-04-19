import React, { Component } from 'react';
import { getAllChecklistItems, getChecklistItem, getAllChecklistId } from './../services/checklistFB';
import { getClickedItems, setClickedItems, calculateScore, getClickedNfbItems, calculateScoreNonfb } from './../services/clickedItems';
import ChartFinalScore from './../components/ChartFinalScore';
import { Container, Row, Col } from "react-bootstrap";
import ReactToPrint from "react-to-print";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ReactDOMServer from "react-dom/server";

import Datepicker from "./../components/Datepicker";
import { getAllNfbChecklistItems, getNfbAllChecklistId, getNfbChecklistItem } from './../services/checklistNonFB';
import { emailjs, init } from "emailjs-com";
import axios from "axios";


class SubmitChecklistStaff extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
    
        this.state = {
            checklistFB: getAllChecklistItems(),
            clickedItems: getClickedItems(),
            nonclickedItems: this.getNonCompliances(),
            noncom: [],
            tenant_email:"",
        
        };
        this.printPDF = this.printPDF.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        this._isMounted = true;

        //console.log(localStorage);
        var noncompliances = [];
        var comments = {};
        
        for (var i = 0; i < localStorage.length; i++) {
            var eachentry = {};
            var imagelist = [];
           
            if (localStorage.key(i) === "key" || localStorage.getItem(localStorage.key(i)) === "value") {
                comments.message = null;
                comments.image = null;
                comments.actor = null;
                continue;
            }
            if (localStorage.key(i) == "staff_email") { //from LoginStaff.js
                //const staff_email = localStorage.getItem("staff_email");
                continue;
            }
            if (localStorage.key(i) == "tenant_name") {
                //localStorage.getItem("tenant_name")
                continue;
            }
            if (localStorage.key(i) == "institution_name") {
               // localStorage.getItem("institution_name")
               continue;
            }
            if (localStorage.key(i) == "category") {
                //localStorage.getItem("category")
                continue;
            }
            if (localStorage.key(i) == "date_recorded") {
                //localStorage.getItem("date_recorded")
                continue;
            }
            if (localStorage.key(i) == "audit_score") {
                //console.log(localStorage.getItem("audit_score"));
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
                eachentry.resolved=false;
                //convert json to array
                //comments:[ {"message": text, "image":imagelist, "email":staff/tenant"} ]
                comments.message = text
                comments.image = imagelist
                comments.email = "staff"
                eachentry.value = comments;
                noncompliances.push(eachentry)
                
            }  
            
        }
        console.log(noncompliances);
        this.setState({noncom: noncompliances})

        /*getData = () => {
            axios.get(
               "/get-data",
               {
                   params: {searchTerm: localStorage.getItem("tenant_name")}
               }
           ).then(function(response){
                this.setState({
                    result: response.data
                })
            });
        }; */

        //change the endpoint
        //localStorage.key(i) == "tenant_name" 
        //localStorage.getItem("tenant_name") => use as props
        axios.get('https://domain')
        .then(result => {
            if (this._isMounted) {
    
                const tenant_email = result.data;
                this.setState({ tenant_email: tenant_email });
            }})

    }

        
    MakedeJson() {
        var jsonobj = {};
        jsonobj.staff_email = localStorage.getItem("staff_email");
        jsonobj.institution_name = localStorage.getItem("institution_name");
        jsonobj.category = localStorage.getItem("category");
        jsonobj.date_recorded=localStorage.getItem("date_recorded")
        jsonobj.audit_score = localStorage.getItem("audit_score");
        jsonobj.tenant_email = this.state.tenant_email;
        jsonobj.noncompliance = this.state.noncom;
        //console.log(localStorage);
        console.log(jsonobj);
        return jsonobj
        
    }

   
        
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
        let category = this.props.location.state.category;
        let difference = [""];
        if (category == "fb") {
            difference = getAllChecklistId().filter(x => !getClickedItems().includes(x));
        } else if (category == "nonfb") {
            difference = getNfbAllChecklistId().filter(x => !getClickedNfbItems().includes(x));
        }
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

        //this.MakedeJson();

        //implement email functionality
        if (this.state.noncom != [] && this.state.tenant_email!="") {
            const jsonobj = this.MakedeJson();
            console.log(jsonobj);

            axios.post(`https://`, { jsonobj })
            .then(res => {
              console.log(res);
              console.log(res.data);
            })
        }

        //localStorage.clear();
       
        /*if (this.state.noncom != []) {
            console.log(JSON.stringify({ "noncompliances": this.state.noncom }));
            //console.log(JSON.parse(JSON.stringify({ "noncompliances": this.state.noncom }))); //rendering on tenants side
        }*/




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
                            <img className="checklist-body-style" alt="" height={130} src={JSON.parse(localStorage.getItem(localStorage.key(i))).dataUri} />
                            <img className="checklist-body-style" alt="" height={130} src={JSON.parse(localStorage.getItem(localStorage.key(i))).selected}/>
                        </tr>);
                }
            }
            
                  
        }
    

    //23 may 2021 
    }
    //add noncompliances to json to pass over
    //localStorage.clear();

    getCategory(id) {
        let category = this.props.location.state.category;
        if (category == "fb") {
            return getChecklistItem(id).category;
        } else if (category == "nonfb") {
            return getNfbChecklistItem(id).category;
        }
    }

    getItem(id) {
        let category = this.props.location.state.category;
        if (category == "fb") {
            return getChecklistItem(id).item;
        } else if (category == "nonfb") {
            return getNfbChecklistItem(id).item;
        }
    }


/*
    sendFeedback () {
        var templateParams = {
            tenant_email: 'arissa140100@yahoo.com.sg',
            tenant_name: 'Bob',
            sender_email: 'arissa140100@gmail.com',
            message: 'TESINTDFSFAJ '
        };

        var service_id = "service_13zd6ah";
        var template_id = "template_1j21nnd"

        window.emailjs.send(
          service_id, template_id, templateParams
          ).then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
         }, function(error) {
            console.log('FAILED...', error);
         });
    }
        
*/


    render() {
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
                    <h1 className="header-style" >Audit: <h1 className="header-style" style={{display : 'inline-block', color: "#f06d1a"}}>{this.props.location.state.tenant}</h1></h1>
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
                                    <th xs={4}>Item</th>
                                    <th xs={4}>Image and Comments</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.nonclickedItems.map(id =>
                            <tr key={id}>

                              
                                {/*this.showImageComments(getChecklistItem(id).id)*/}
                                

                                <td className="checklist-body-style">{this.getCategory(id)}</td>
                                <td className="checklist-body-style">{this.getItem(id)}</td>
                                <td className="checklist-body-style">{this.showImageComments(id)}</td>


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
