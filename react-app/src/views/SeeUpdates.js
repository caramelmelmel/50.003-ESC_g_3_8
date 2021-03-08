import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import { Container, Row } from "react-bootstrap";

class SeeUpdates extends Component {
  render() {
    return (
      <div>
        <h1 className="header-style">Updates</h1>

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
            <Button variant="warning">Back</Button>
            <Button variant="primary">Solved</Button>
            <Button variant="warning">Next</Button>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SeeUpdates;
