import React, { Component } from "react";
import { Button, Form, Accordion, Card, Carousel} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { Container, Row, Col } from "react-bootstrap";
import * as VscIcons from "react-icons/vsc";
import { audits, getAudits } from "../services/NewAudit";
import { useLocation } from "react-router-dom";
import '../index.css';
import { getAllNoncompliance, getLength, setAllNoncompliance } from "../services/noncomplianceList";
import { getChecklistItem } from "../services/checklistFB";
import { getNfbChecklistItem } from "../services/checklistNonFB";
import FormComponent from './../components/FormComponent';
import CommentList from './../components/CommentList';

class SeeUpdates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noncompliance: [],
      itemId: this.props.location.state.itemId,
      //audits: getAudits(),
      nonComId: this.props.location.state.nonComId,
      //resolved: this.props.location.state.Res,
      stufftochange: this.props.location.state.stufftochange,
      storedArray: [],
      length: getLength(),
      
    };
    this.handleSolved = this.handleSolved.bind(this);
    this.pushtoDatabase = this.pushtoDatabase.bind(this);
    this.updateList = this.updateList.bind(this);
  }
  

  handleSolved() {
    /*

    console.log(this.props);
    console.log(this.props.location.state.stufftochange);
    //console.log(this.state);
    for (var i = 0; i < this.props.location.state.stufftochange; i++) {
      console.log(this.props.location.state.stufftochange[i]);
      if (this.props.location.state.stufftochange[i].key == this.props.location.state.nonComId) {
        this.props.location.state.stufftochange[i].resolved = true;
        newnoncom.push(this.props.location.state.stufftochange[i]);
        
      }
      else {
        newnoncom.push(this.props.location.state.stufftochange[i]);
      }
      console.log(this.state.stufftochange[i]);
    }

    console.log(newnoncom);  */  //this.setState({ stufftochange: this.state.stufftochange });
    this.setState({ stufftochange: { ...this.state.stufftochange, resolved: true } });
    this.pushtoDatabase();

   
  
    //find this itemId as tenant_email on database, use this key and push to database
    //js.getJSONObject.tenant_email == itemId
    //.getJSONObject.noncompliances[i].key==nonComId
    //noncompliances[i].put("resolved", "true");
    
  }

  pushtoDatabase() {
    console.log(this.state.stufftochange);

    var tobepushed = []

    for (var i = 0; i < this.state.noncompliances.length; i++) {
      if (this.state.noncompliances[i].key == this.state.nonComId) {
        tobepushed.push(this.state.stufftochange);
      }
      else {
        tobepushed.push(this.state.noncompliances[i]);
      }
    }
    
    console.log(tobepushed);

    fetch("http://localhost:8080/audit/update", { // or /resolveAudits??
      method: "PUT",
      mode: "cors",
      headers: { jwt_token: localStorage.token },
      //{ store_name: localStorage.token }, tobepushed
      body: tobepushed,
    }).then(response => {
      console.log(response.status);

      if (!response.status.ok) {
        console.log("fail to send audit");

      }
      else {
        console.log("success");
        this.props.history.push("/audits-staff");
      }
    })
  }


  getfromDatabase() {
    
    fetch("http://localhost:8080/audit/seennoncomp", {
      method: "GET",
      mode: "cors",
      headers: { jwt_token: localStorage.token },
      //{ store_name: this.props.location.state.itemId }, { staff_email: localStorage.getItem("staff_email") }
    }).then(response => {
      var noncompliances = response.data;
      this.setState({ noncompliances })
      console.log(response.status)

      if (!response.status.ok) {
        console.log("fail to get audit");
      }
      else {
        console.log("success");
      }
   
    })
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

    
  updateList(comment) {
    console.log("UPDATING LIST WITH COMMENT", comment);
    console.log("NONCOMPLIANCE: ", this.state.noncompliance);
    if (comment == "YES") {
      //console.log("CURRENT NC: ", this.state.noncompliance);
      console.log("UPDATED NC: ", getAllNoncompliance());
      this.setState({noncompliance: getAllNoncompliance()});
    }
  }

  //render image and comments from json file 
  render() {
    console.log(this.state);
    
    //console.log(this.state.resolved);
    //console.log(this.state);
    //console.log(this.props); //this.props.entirething.resolved == true
    return (

      <React.Fragment>
          <div className="container">

          {
            (this.state.noncompliance = "" ? (
              <div>
              <h1 className="header-style">Tenant:{" "}             
              <h1
                className="header-style"
                style={{ display: "inline-block", color: "#f06d1a" }}
              >
                {this.props.location.state.store_name}
              </h1>
              </h1>
              <h1 className="header-style">
                You have no non-compliances, good job!
              </h1>
              </div>
            ) : (
              <div className="container">
                <h1 className="header-style">Tenant:{" "}             
                  <h1
                    className="header-style"
                    style={{ display: "inline-block", color: "#f06d1a" }}>
                      {this.props.location.state.store_name}
                  </h1>
                </h1>
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
                      <button className="btn btn-warning"
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
            ))}
          </div> 
      </React.Fragment>
    );
  }
}


export default SeeUpdates;
