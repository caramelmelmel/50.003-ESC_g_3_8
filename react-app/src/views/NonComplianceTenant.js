import React, { Component } from "react";
import { Accordion, Card, Image } from "react-bootstrap";
import ChartInstitutes from "../components/ChartInstitutes";
import Chart from "react-apexcharts";
import { getAllNoncompliance, getLength, setAllNoncompliance } from "../services/noncomplianceList";
import { getChecklistItem } from "../services/checklistFB";
import { getNfbChecklistItem } from "../services/checklistNonFB";
import FormComponent from "../components/FormComponent";
import CommentList from "./../components/CommentList";
import AddNCStaff from "../views/AddNCStaff";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import Image1 from "../images/slider1.png";
import Image2 from "../images/slider2.jpg";
import Image3 from "../images/slider3.jpg";
import "../index.css";

class NonComplianceTenant extends Component {
  state = {
    noncompliance: [],
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
    this.putNonCompliances = this.putNonCompliances.bind(this);
    this.fakeDataPush = this.fakeDataPush.bind(this);
    this.sendNonCompliance = this.sendNonCompliance.bind(this);
    this.handleSave = this.handleSave.bind(this);
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
    this.sendNonCompliance(this.state.noncompliance);

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

  checkImages() {
    //console.log("Image: ", getAllNoncompliance().map((nc) => nc.comments.images.map((img))));
    console.log("CHECKING IMAGE");
    var image = getAllNoncompliance().map((nc) => nc.comments.map((comment) => comment.image));
    console.log("IMAGE: ", image);
  }

  putNonCompliances() {
    fetch("http://local:8080/tenant/getnoncomp", {
      method: "GET",
      mode: "cors",
      headers: { "jwt_token": localStorage.token, 'Content-Type': 'application/json' },
    }).then(response => {
      if (!response.state.ok) {
        console.log("Using hardcoded data")
      } else {
        console.log("Got the non-compliances!")
        //setAllNoncompliance(response.data); // might be response.body
        //this.setState({noncompliance: getAllNoncompliance()});
      }
    }).catch((error) => {console.log(error)});

  }

  prepareData() {
    var jsonObj ;
    //hello
  }

  sendNonCompliance(data) {
    fetch("http://local:8080/tenant/getnoncomp", {
      method: "PUT",
      mode: "cors",
      headers: { "jwt_token": localStorage.token, 'Content-Type': 'application/json' },
      body: data,
    }).then(response => {
      if (!response.state.ok) {
        console.log("Couldn't get any data");
      } else {
        console.log("Got the non-compliances!")
      }
    })
  }

  componentDidMount() {
    //this.putNonCompliances();
    var nc = getAllNoncompliance();
    this.setState({noncompliance: nc});
    console.log("NC FROM CDM: " ,this.state.noncompliance);
  }

  fakeDataPush() {
    var fakeData = [
      {
       id: "04",
       tenant_id: "Kopitiam",
       nc_id: "fire_01",
       resolved: false,
       comments: [{message: "FIREEEE 01 ", image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Large_bonfire.jpg", email: "staff1@singhealth.com.sg"} ]
      }];

    //setAllNoncompliance(response.data); // might be response.body
    console.log("NONCOMPLIANCE IN STATE PRE FAKE DATA: ", this.state.noncompliance);
    setAllNoncompliance(fakeData);
    console.log("GETALLNC: ", getAllNoncompliance());
    console.log("NONCOMPLIANCE IN STATE: ", this.state.noncompliance);
    this.setState({noncompliance: getAllNoncompliance()});
    this.setState({length: getLength()});
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
                          style={{  height: 530, padding: 15 }}
                        >
                          Find all images and comments here
                          <div className="row">
                            <div className="col-4 pt-3 border-right">
                              <FormComponent key={nc.id} nc_id={nc.nc_id} updateList={this.updateList}/>
                            </div>

                            <img
                              className="phototenant"
                              src={this.state.storedArray.dataUri}
                            />

                            <div className="col-4 pt-3 bg-white">
                              <Carousel style={{ height: 150}}>
                                {nc.comments.map((comment) => ( 
                                  comment.image != null ? 
                                    (<Carousel.Item style={{ height: 150}}>
                                      <img width={"100%"} src={comment.image} style={{ height: 150}} />
                                      </Carousel.Item>) : null
                                  ))}
                              </Carousel>
                            </div>

                            <div className="col-7 pt-3">
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

                                /*{nc.comments.images.map((Image1) => (
                                  <Carousel.Item style={{ height: 150}}>
                                    <img width={"100%"} src={Image1} style={{ height: 150}} />
                                    </Carousel.Item>
                                ))}*/