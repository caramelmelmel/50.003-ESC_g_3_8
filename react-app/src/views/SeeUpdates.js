import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { Container, Row, Col } from "react-bootstrap";
import * as VscIcons from "react-icons/vsc";
import { audits, getAudits } from "../services/NewAudit";
import { useLocation } from "react-router-dom";
import "../index.css";

class SeeUpdates extends Component {
  state = {
    audits: getAudits(),
    resolved: false,
    };

  //what i pass
  ///audit_del: each audit id: noncomplianceid, resolved=false
  //resolved=true

  handleSolved = () => {
    
    this.setState({ resolved: true });
    //console.log(this.state.resolved);

    const auditno = this.props.location.state.itemId;
    //console.log(auditno);
    const nonCom = this.props.location.state.nonComId;
    //console.log(nonCom);


    let module = audits.find((audit) => audit.auditid === auditno);
    //change JSON file 
    //change the resolved == true
    let list = module.noncomplainces;
    let each = list.find((nc) => nc.name === nonCom);
    console.log(each.resolved);
    //set each.resolved == true in json

   
    //reduce the integer variable
    module.noofnoncompliances = module.noofnoncompliances - 1;
    console.log(module.noofnoncompliances);

    

    
  }



  //render image and comments from json file 
  render() {
    
    console.log(this.state.resolved);
    
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
            top: 140,
            left: 20,
            top: 250,
          }}
        >
          <div className="camera">
            

          </div>
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
          <Row style={{ paddingTop: 300 }}>
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
              {/* </Col>
            <Col> */}
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
