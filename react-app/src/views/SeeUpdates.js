import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { Container, Row, Col } from "react-bootstrap";
import * as VscIcons from "react-icons/vsc";
import { audits, getAudits } from "../services/NewAudit";
import { useLocation } from "react-router-dom";
import '../index.css';

class SeeUpdates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noncompliances:[],
      itemId: this.props.location.state.itemId,
      //audits: getAudits(),
      nonComId: this.props.location.state.nonComId,
      //resolved: this.props.location.state.Res,
      stufftochange: this.props.location.state.stufftochange,
      
    };
    this.handleSolved = this.handleSolved.bind(this);
    this.pushtoDatabase = this.pushtoDatabase.bind(this);
  }
  

  handleSolved() {
    this.setState({ stufftochange: { ...this.state.stufftochange, resolved: true } }, function () {
      this.pushtoDatabase();
  }); 
   
    
    

    
  }
  ///seennoncomp => var noncompliances = response.data

  pushtoDatabase = () => {
    console.log(this.state.stufftochange);

    //fetch pass header name of non comliance
    //put to update 

    var tobepushed = []

    /*for (var i =0; i< this.state.noncompliances.length; i++){
        if (this.state.noncompliances[i].key == this.state.nonComId){
          tobepushed.push(this.state.stufftochange);
        }
        else {
          tobepushed.push(this.state.noncompliances[i]);
        
        }
    
    }*/
   

    /* or /resolveAudits??
    
    fetch("http://localhost:8080/audit/update", {
      method: "PUT",
      mode: "cors",
      headers: { jwt_token: localStorage.token }, { store_name: localStorage.token }, 
      body: tobepushed,
    }).then(response => {
      console.log(response.status)

      if (!response.status.ok) {
        console.log("fail to send audit");

      }
      else {
        console.log("success");
        this.props.history.push("/audits-staff");
      }
    })
  }

    */
  }

  getfromDatabase() {
      /*
    fetch("http://localhost:8080/audit/seennoncomp", {
      method: "GET",
      mode: "cors",
      headers: { jwt_token: localStorage.token }, { store_name: this.props.location.state.itemId}, {staff_email: localStorage.getItem("staff_email") }
    }).then(response => {
      var noncompliances = response.data;
      this.setState({ noncompliances })
      console.log(response.status)

      if (!response.status.ok) {
        console.log("fail to send audit");

      }
      else {
        console.log("success");
        this.props.history.push("/audits-staff");
      }
    })
  }

    */
  }


  //render image and comments from json file 
  render() {
    //console.log(this.state);
   

    return (
      <div>
        <h1
          className="header-style"
          style={{
            position: "absolute",
            left: 20,
            top: 80,
          }}
        >
          Resolving audit
        </h1>

        <NavLink
          to="/audits-staff"
          style={{
            position: "absolute",
            right: 20,
            top: 20,
          }}
        >
          <AiIcons.AiOutlineClose size="30" />
        </NavLink>

        <div
          style={{
            position: "absolute",
            marginLeft: "5%",
            top: 130
            
          }}
          
        >
          
          {/*<input
            type="file"
            name="myImage"
            accept="image/x-png,image/gif,image/jpeg"
            capture="camera"
          ></input>

          {JSON[key].image}
          {JSON[key].comments}
          <img src={JSON[key].portfolioImage} key={key} />*/}
          
        </div>

        <Form>
          <Row style={{ paddingTop: 400 }}>
            <Col>
              <Form.Control
                as="textarea"
                placeholder="Additional comments to send to tenants"
                rows={2}
                style={{
                  marginLeft: "5%",
                  marginRight: "0%",
                  float: "left",
                  width: "80%",
                }}
              />
              
              <Button
                variant="dark"
                style={{
                  marginLeft: "0%",
                  marginRight: "5%",
                  float: "right",
                  width: "10%",
                  height: 40,
                }}
              >
                <IoIcons.IoIosSend />
              </Button>
            </Col>
          </Row>
        </Form>

        <Container
          style={{
            position: "absolute",
            marginTop:"5%",
          }}
        >
          <Row
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/*
            <Button variant="light" >
              <VscIcons.VscDebugReverseContinue
                size="20"
                style={{ marginRight: "5" }}
              />
            </Button>
            */}

            <Button
              className="sendButton"
              variant="primary"
              size="lg"
              onClick={this.handleSolved}
            >
           
              Solved
            </Button>
            

            {/*
            <Button variant="light">
              <VscIcons.VscDebugContinue
                size="20"
                style={{ marginRight: "5" }}
              />
            </Button>
            */}
          </Row>
        </Container>
      </div>
    );
  }
}

export default SeeUpdates;
