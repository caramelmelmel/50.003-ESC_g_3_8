import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { Container, Row, Col } from "react-bootstrap";
import * as VscIcons from "react-icons/vsc";
import { audits } from "../services/NewAudit";
import {useLocation} from "react-router-dom";


export default class SeeUpdates extends Component {
  
  
  /*
  state = {
    nonComId: this.props.nonComId,
    itemId:this.props.itemId,
  }
  state = {
    nonComId: this.props.nonComId,
  }
  here() {
    this.props.location.state.noncompliance.map(item => (
      <Link to={{
          pathname: `/see-updates/${this.props.location.state.itemId}/${item.name}`,
            }}>
      </Link>
    ));
    console.log("test");

  }*/
  
  ///need to find a way to render {this.props.location.state.noncompliance.name}
  //now sometimes is undefined, crash when click navbar
  
  /*
  constructor(props) {
    super(props);
    this.props = props;
    console.log(this.props);
  }
*/

  handleSolved = () => {
    console.log("reached");
    //console.log(this.props.location.state);
    
  };
  
  render() {

    return (
      
      <div>
        <h1 className="header-style" style={{
            position: "absolute",
            left: 20,
          top: 80,
        }}>Resolving audit</h1>

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

        <h2 style={{
            position: "absolute",
            left: 20,
            top: 250, }}>Photo here testing</h2>
          
          

        <Form>
          <Row style={{ paddingTop: 300 }}>
            <Col>
              <Form.Control
                as="textarea"
                placeholder="Additional comments"
                rows={2}
                style={{ position: "absolute", left: 20}}
              />
            </Col>
            <Col>
              <Button
                variant="dark"
                style={{ position: "absolute", right:20, }}
              >
                <IoIcons.IoIosSend size="30" />
              </Button>
            </Col>
          </Row>
        </Form>

        <Container
          style={{
            position: "absolute",
            bottom: 0,
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
          

            <Button className="sendButton" variant="primary" size="lg" onClick={this.handleSolved} >
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


//from 1 - noofnoncompliances/>
//on solved button press, remove the non compliance from audits in database backend
