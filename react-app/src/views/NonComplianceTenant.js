import React, { Component } from "react";
import { Accordion, Card } from "react-bootstrap";
import ChartInstitutes from "../components/ChartInstitutes";
import Chart from "react-apexcharts";
import { getAllNoncompliance, getLength } from "../services/noncomplianceList";
import { getChecklistItem } from "../services/checklistFB";
import FormComponent from "../components/FormComponent";
import CommentList from "./../components/CommentList";
import AddNCStaff from "../views/AddNCStaff";
import "../index.css";
import { getAllChecklistItems } from "../services/checklistFB";
//import {getAllChecklistItems} from "../services/checklistNonFB";

class NonComplianceTenant extends Component {

  state = {
    noncompliance: getAllNoncompliance(),
    length: getLength(),
    loading: false,
    storedArray: [],
    comments: [
      { name: "Staff 01", index:"01", comment:"Example statement" }
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      //noncompliance: getAllNoncompliance(),
      noncompliances: [],
      items: getAllChecklistItems(),
      length: getLength(),
      loading: false,
      //comments: [],
      /*{ name: "arissa", index: "01", comment: "Where do I start with Jodi?" },
            {
                name: "jodi",
                index: "02",
                comment: "I've know Arissa for over a year",
            },
            ],*/
    };
    this.checkSame = this.checkSame.bind(this);
  }


  //if type=="FB"
  //else type=="Non_FB"

  componentDidMount() {
    // render noncompliances list from database
    //JSON.parse(noncompliances);

    //if type=="FB"
    //else type=="Non_FB"
    this.setState({
      //[0: { key: , value:[ [], [] ] }, 2: {…}}]
      noncompliances: [
        {
          key: "professionalism_02",
          value: [
            [
              "Example statement",
              ["data:image/png;base64,", "data:image/jpeg;base64,/9j/4"],
              "staff",
            ],
            { resolved: false },
            ["helot", ["data:image/png;base64,"], "tenant"],
          ],
        },

        {
          key: "professionalism_01",
          value: [
            ["Hello", ["data: image/jpeg; base64,/9j/4"], "staff"],
            { resolved: false },
          ],
        },
      ],
      loading: true,
    });
  }

  handleSave() {
    console.log("Saving...");
  }

  //can remove this method
  toggle(b) {
    for (var i = 0; i < this.state.noncompliances.length; i++) {
      console.log(this.state.noncompliances[i]);
    }
  }
  /*
    (2) [{…}, {…}]
        0:
        key: "professionalism_01"
        value: [Array(4)]
        __proto__: Object
        1:
        key: "professionalism_02"
        value: [Array(4)]


    */

  checkSame(value) {
    //this.state.noncompliances.map((value, index) => console.log(value.key)); //this is they key
    this.state.noncompliances.map((value, index) => console.log(value.value)); //this is the value //where we append the tenant array
    //this.state.try.map((value, index) => console.log(value.value[0][0])); //this is the message
    //this.state.try.map((value, index) => console.log(value.value[0][1])); //this is the imagelist
    //this.state.try.map((value, index) => console.log(value.value[0][2])); //this is the staff
    //this.state.noncompliances.map((value, index) => console.log(value.value[1])); //this is the resolved

    //this.state.noncompliances.map((value, index) => console.log(Object.values(value)[0][0]));//whole comments array
    //this.state.noncompliances.map((value, index) => console.log(Object.values(value)[0][0][0]));//this is the text
    // this.state.noncompliances.map((value, index) => console.log(Object.values(value)[0][0][2]));//this is the staff
    // this.state.noncompliances.map((value, index) => console.log(Object.values(value)[0][0][3]));//this is the resolved
    //this.state.noncompliances.map((value, index) => console.log(Object.values(value)[0][0][1]));//this is the image

    //check staff first & non compliance not resolved
    //value.value[0][3].resolved===false
    if (value.value[0][2] === "staff" && value.value[1].resolved == false) {
      for (var i = 0; i < this.state.items.length; i++) {
        if (this.state.items[i].id === value.key) {
          //console.log(a);
          return this.state.items[i].item;
        }
      }
    }
  }
  /*  
     this.setState({ comments: [b[2], b[0]] });

    if (
        localStorage.getItem("nc" + this.state.noncompliance[i].nc_id) === null
      ) {
        console.log("no record of this non compliance");
      } else {
        var storedArray = JSON.parse(
          localStorage.getItem("nc" + this.state.noncompliance[i].nc_id)
        );
        console.log(storedArray);
        this.setState({ storedArray: storedArray });

    for ((var i = 0; i < value.value.length; i++) {
        if (value instanceof Array) {
        alert('value is Array!');
        } else {
        alert('Not an array');
        }
        const list = value.value.filter((m) => m instanceof Array === selectedType._id)

    
    }
    

    */
  /*if (storedArray.dataUri !== null) {
                    //console.log(storedArray.dataUri);
                    <img className="phototenant" src={storedArray.dataUri}/>
                }
                if (storedArray.selected !== null) {
                    console.log(storedArray.selected);
                    <img className="phototenant" src={storedArray.selected}/>
                }
                if (storedArray.val !== "") {
                    console.log(storedArray.val);
                }*/

  //console.log(nc.nc_id);

  Helps(value) {
    var mappin = [];
    //var hi= value.value.filter((m) => console.log(m));
    //(value.value[0]===undefined)===false
    //console.log(value.value);
    for (var i = 0; i < value.value.length; i++) {
      //console.log(value.value[i]);
      if (i !== 1) {
        mappin.push(value.value[i]);
      }
    }
    console.log(mappin);
    return mappin;
  }

  render() {
    return (
      <React.Fragment>
        {/*console.log(this.state)*/}
        {this.toggle}
        <div className="container">
          {this.state.loading == true && this.state.noncompliances == [] ? (
            <h1 className="header-style">
              You have no non-compliances, good job!
            </h1>
          ) : (
            <div className="container">
              <h1 className="header-style" style={{ display: "inline-block" }}>
                {" "}
                Number of unresolved non-compliances:{" "}
                <h1
                  className="header-style"
                  style={{ display: "inline-block", color: "#F22C49" }}
                >
                  <span className="badge badge-danger">
                    {this.state.length}
                  </span>
                </h1>
              </h1>

              {this.state.noncompliances.map((value, index) => (
                <Accordion key={index}>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey={index}
                      className="header-style"
                      style={{ height: 50, padding: 15 }}
                    >
                      <h5>{this.checkSame(value)}</h5>
                    </Accordion.Toggle>

                    <Accordion.Collapse key={index} eventKey={index}>
                      <Card.Body
                        className="checklist-body-style"
                        style={{ padding: 15, height: 300 }}
                      >
                        Hello! Find all images and comments from staff here
                        <div className="row">
                          <div className="col-6  pt-3 border-right">
                            <img
                              className="phototenant"
                              src={value.value[0][1][0]}
                            />

                            <img
                              className="phototenant"
                              src={value.value[0][1][1]}
                            />
                          </div>

                          <div className="col-6  pt-3 bg-white">
                            {this.Helps(value).map((index) => (
                              <CommentList
                                comments={value.value[0][0]}
                                loading={this.state.loading}
                                item={value}
                              />
                            ))}
                          </div>

                          <FormComponent
                            addComment={this.addComment}
                            item={value}
                          />
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              ))}
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default NonComplianceTenant;
/*

onClick={() => this.toggle(Object.values(value)[0][0])}

margin: 70px auto;
overflow: hidden;
width: 80%;
text-align: center;


*/
/*
<img
    className="phototenant"
    src={Object.values(value)[0][1][0]}
/>
<div className="col-4  pt-3 bg-white"></div>
<img
    className="phototenant"
    src={Object.values(value)[0][1][1]}
/>

<button
className="btn btn-warning header-style"
style={{ float: "right", margin: 15 }}
onClick={this.handleSave}
>
Save
</button>

*/
