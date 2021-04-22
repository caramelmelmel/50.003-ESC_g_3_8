import React, { Component } from "react";
import {
  getAllChecklistItems,
  getChecklistItem,
  getAllChecklistId,
} from "./../services/checklistFB";
import {
  getClickedItems,
  setClickedItems,
  calculateScore,
  getClickedNfbItems,
  calculateScoreNonfb,
} from "./../services/clickedItems";
import ChartFinalScore from "./../components/ChartFinalScore";
import { Container, Row, Col } from "react-bootstrap";
import ReactToPrint from "react-to-print";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ReactDOMServer from "react-dom/server";
import {
  getAllNfbChecklistItems,
  getNfbAllChecklistId,
  getNfbChecklistItem,
} from "./../services/checklistNonFB";
import { emailjs, init } from "emailjs-com";
import axios from "axios";
import Datepicker from "./../components/Datepicker";

class SubmitChecklistStaff extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);

    this.state = {
      checklistFB: getAllChecklistItems(),
      clickedItems: getClickedItems(),
      nonclickedItems: this.getNonCompliances(),
      tenant_email: "",
      noncom: null,
    };
    this.MakedeJson = this.MakedeJson.bind(this);
    this.submit = this.submit.bind(this);
    this.showImageComments = this.showImageComments.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;


    var noncompliances = [];
 
    for (var i = 0; i < localStorage.length; i++) {
      var comments = {};
      var eachentry = {};
      var comment = [];
         
      if (
        localStorage.key(i) === "key" ||
        localStorage.getItem(localStorage.key(i)) === "value"
      ) {
       
        continue;
      }
      if (localStorage.key(i) == "staff_email") { 
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

      //key
      //resolved
      //comments = [{message:text image:image actor:"staff"}, {}]
      else {
        eachentry.key = localStorage.key(i);
        //console.log(localStorage.getItem(localStorage.key(i)));

        const text = JSON.parse(localStorage.getItem(localStorage.key(i))).val;
        comments.message = text
        console.log(text);


        const imagefile = JSON.parse(localStorage.getItem(localStorage.key(i))).selected;
        const imagecam = JSON.parse(localStorage.getItem(localStorage.key(i))).dataUri;

        if (imagefile != null) {
            //const newimagefile = imagefile.replace(/^data:image.+;base64,/, "");
          const image = imagefile;
          comments.image = image
        }
      
        if (imagecam != null) {
           // const newimagecam = imagecam.replace(/^data:image.+;base64,/, "");
          const image = imagecam
          comments.image = image
        }
        comment.push(comments);

        //convert json to array
        //comments:[ {"message": text, "image":imagelist, "actor":staff/tenant"} ]
        comments.actor = "staff"
        console.log(comments);
        
        eachentry.resolved = false;
        eachentry.comments = comment;
      
        noncompliances.push(eachentry)
  
       
      }

    }
   
    this.setState({ noncom: noncompliances }, () => {
      console.log(this.state.noncom);
    })
  }

  MakedeJson() {
    var jsonobj = {};
    jsonobj.staff_email = localStorage.getItem("staff_email");
    jsonobj.category = localStorage.getItem("category");
    jsonobj.date = localStorage.getItem("date_recorded");
    jsonobj.performancescore= localStorage.getItem("audit_score");
    jsonobj.store_name = localStorage.getItem("tenant_name") + " " + localStorage.getItem("institution_name")
    jsonobj.non_compliances = this.state.noncom;
    //console.log(localStorage);
    console.log(jsonobj);
    return jsonobj;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  formatScore() {
    let color = "#F06D1A";
    let category = this.props.location.state.category;
    var score = 0;
    if (category == "fb") {
      score = calculateScore(getClickedItems(), "totalScore");
    } else if ((category = "nonfb")) {
      score = calculateScoreNonfb(getClickedNfbItems, "totalScore");
    }

    if (score < 95) {
      color = "#F22C49";
    } else {
      color = "#F06D1A";
    }
    return color;
  }

  getNonCompliances() {
    let category = localStorage.getItem("category");
    let difference = [""];
    if (category == "F&B") {
      difference = getAllChecklistId().filter(
        (x) => !getClickedItems().includes(x)
      );
    } else if ((category = "Non-F&B")) {
      difference = getNfbAllChecklistId().filter(
        (x) => !getClickedNfbItems().includes(x)
      );
    }
    return difference;
  }

  printPDF() {
    const audit = document.getElementById("audit");
    html2canvas(audit).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(canvas);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("audit.pdf");
    });
  }

  submit() {
    console.log("Submit");

    if (this.state.noncom != []) {
      const jsonobj = this.MakedeJson();
      this.sendData(jsonobj);

      console.log(jsonobj);

    }
  }
    
  async sendData(jsonobj){
    fetch("http://localhost:8080/audit/createaudit", {
      method: "POST",
      mode: "cors",
      headers: { jwt_token: localStorage.token },
      body: jsonobj,
    }).then(response => {
      console.log(response.status)

      if (!response.status.ok) {
        console.log("fail to send audit");

      }
      else {
        console.log("success");
        this.props.history.push("/dashboard");
      }
    })
  }
  


  showImageComments(a) {
    if (this.state.noncom != null) {
      for (var i = 0; i < this.state.noncom.length; i++) {
        
        if (a == this.state.noncom[i].key) {
          //console.log(a);
          console.log(this.state.noncom[i].comments[0].message)
          ////console.log(localStorage.getItem(localStorage.key(a)));
          ///{JSON.parse(localStorage.getItem(localStorage.key(i))).val}
          // JSON.parse(localStorage.getItem(localStorage.key(i))).selected
          return (
            <tr key={i}>
              <td className="checklist-body-style">
                {this.state.noncom[i].comments[0].message}
              </td>
              <img
                className="checklist-body-style"
                alt=""
                height={130}
                src={
                  this.state.noncom[i].comments[0].image
                }
              />            
            </tr>
          );
        }
      }
    }
  }
 

  getCategory(id) {
    let category =  localStorage.getItem("category");
    if (category == "F&B") {
      return getChecklistItem(id).category;
    } else if (category == "Non-F&B") {
      return getNfbChecklistItem(id).category;
    }
  }

  getItem(id) {
    let category =localStorage.getItem("category");
    if (category == "F&B") {
      return getChecklistItem(id).item;
    } else if (category == "Non-F&B") {
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
    console.log(this.props);
    return (
      <div className="container">
        <button
          className="btn btn-lg btn-warning header-style"
          style={{ float: "right" }}
          onClick={this.submit}
        >
          Submit
        </button>

        <button
          className="btn btn-lg btn-outline-warning header-style mx-3"
          style={{ float: "right" }}
          onClick={this.printPDF}
        >
          Download PDF
        </button>
        <div className="btndatpicker" style={{ height: 50 }}>
            <Datepicker />
        </div>
        <div className="container" id="audit">
          <h1 className="header-style">
            Audit:{" "}
            <h1
              className="header-style"
              style={{ display: "inline-block", color: "#f06d1a" }}
            >
              {localStorage.getItem("tenant_name")}
            </h1>
          </h1>
          <h1 className="header-style" style={{ display: "inline-block" }}>
            Total Audit Score:{" "}
            <h1
              className="header-style"
              style={{ display: "inline-block", color: this.formatScore() }}
            >
              {localStorage.getItem("category") == "F&B"
                ? calculateScore(getClickedItems(), "totalScore")
                : calculateScoreNonfb(getClickedNfbItems(), "totalScore")}
            </h1>
          </h1>
          <h2 className="header-style">Breakdown of Scores (%)</h2>
          <div id="chart1">
            <ChartFinalScore category={localStorage.getItem("category")} />
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
                  {this.state.nonclickedItems.map((id) => (
                    <tr key={id}>
                      <td className="checklist-body-style">
                        {this.getCategory(id)}
                      </td>
                      <td className="checklist-body-style">
                        {this.getItem(id)}
                      </td>
                      <td className="checklist-body-style">
                      {this.showImageComments(id)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default SubmitChecklistStaff;
