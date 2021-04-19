import React, { Component } from "react";
import { Accordion, Card } from "react-bootstrap";
import ChartInstitutes from "../components/ChartInstitutes";
import Chart from "react-apexcharts";
import { getAllNoncompliance, getLength } from "../services/noncomplianceList";
import { getChecklistItem } from "../services/checklistFB";
import { getNfbChecklistItem } from "../services/checklistNonFB";
import FormComponent from "../components/FormComponent";
import CommentList from "./../components/CommentList";
import AddNCStaff from "../views/AddNCStaff";
import "../index.css";

class NonComplianceTenant extends Component {
  state = {
    noncompliance: getAllNoncompliance(),
    length: getLength(),
    loading: false,
    storedArray: []
    /*comments: [
      { name: "Staff 01", index:"01", comment:"Example statement" }
    ],*/
  };

  constructor(props) {
    super(props);
    this.updateList = this.updateList.bind(this);
  } 

  /*
      componentDidMount() {
    const noncom = this.props.noncom;
    this.setState({ noncom: noncom });
    //console.log(noncom);
  }
  */
  handleSave() {
    console.log("Saving...");
  }

  getItem(id) {
    console.log("ITEM ID:", id);
    console.log(getChecklistItem(id).item);
      if (getChecklistItem(id).item != null) {
          return getChecklistItem(id).item;
      } else if (getNfbChecklistItem(id).item != null) {
          return getNfbChecklistItem(id).item;
      }
    }

  RenderfromLS() {
    //console.log(storedArray.checklistItem.id); // if == nc.nc_id => show image and comments from here
    console.log(localStorage);
    for (var i = 0; i < this.state.noncompliance.length; i++) {
      console.log(this.state.noncompliance[i].nc_id);
      if (
        localStorage.getItem("nc" + this.state.noncompliance[i].nc_id) === null
      ) {
        console.log("no record of this non compliance");
      } else {
        var storedArray = JSON.parse(
          localStorage.getItem("nc" + this.state.noncompliance[i].nc_id)
        );
        console.log(storedArray);
        //this.setState({ storedArray: storedArray });

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
      }
    }
  }

  /*componentDidUpdate() {
    console.log("COMPONENT DID UPDATE IS RUNNING");
    if (this.state.noncompliance != getAllNoncompliance()) {
      this.setState({noncompliance: getAllNoncompliance()});
    }
  }*/

  updateList(comment) {
    console.log("UPDATING LIST WITH COMMENT", comment);
    console.log("NONCOMPLIANCE: ", this.state.noncompliance);
    if (comment == "YES") {
      //console.log("CURRENT NC: ", this.state.noncompliance);
      console.log("UPDATED NC: ", getAllNoncompliance());
      this.setState({noncompliance: getAllNoncompliance()});
    }
  }

  render() {
    console.log("Non-compliances: ", this.state.noncompliance);
    return (
      <React.Fragment>
        {this.RenderfromLS()}
        <div className="container">
          {
            (this.state.noncompliance = "" ? (
              <h1 className="header-style">
                You have no non-compliances, good job!
              </h1>
            ) : (
              <div className="container">
                <h1
                  className="header-style"
                  style={{ display: "inline-block" }}
                >
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

                {getAllNoncompliance().map((nc) => (
                  <Accordion defaultActiveKey="0" key={nc.id}>
                    <Card>
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey={nc.id}
                        className="header-style"
                        style={{ height: 50, padding: 15 }}

                      >
                        <h5>{this.getItem(nc.nc_id)}</h5>
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey={nc.id}>
                        <Card.Body
                          className="checklist-body-style"
                          style={{ height: 500, padding: 15 }}
                        >
                          Hello! Find all images and comments here
                          <div className="row">
                            <div className="col-4  pt-3 border-right">
                              <FormComponent addComment={this.addComment} key={nc.id} nc_id={nc.nc_id} updateList={this.updateList}/>
                            </div>

                            <img
                              className="phototenant"
                              src={this.state.storedArray.dataUri}s
                            />

                            <div className="col-4  pt-3 bg-white"></div>

                            <div className="col-8  pt-3 bg-white">
                              <CommentList
                                comments = {nc.comments}
                                loading={this.state.loading}
                              />
                            </div>
                          </div>
                          <button
                            className="btn btn-warning header-style"
                            style={{ float: "right", margin: 15 }}
                            onClick={this.handleSave}
                          >
                            Save
                          </button>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                ))}
              </div>
            ))
          }
        </div>
      </React.Fragment>
    );
  }
}

export default NonComplianceTenant;
/*
margin: 70px auto;
overflow: hidden;
width: 80%;
text-align: center;
*/