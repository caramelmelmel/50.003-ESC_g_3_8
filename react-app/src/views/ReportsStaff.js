import React, { Component } from 'react';
import { getActor } from './../services/actorUpdate';
import { reports, getReports } from "../services/InfoReports";
import { Card, Button } from 'react-bootstrap';
import { Image, Container, Row, Col} from "react-bootstrap";


class ReportsStaff extends Component {

    state= {
        reports:[],
    };

    componentDidMount() {
    this.setState({ reports: getReports() });
    }

    render() {
        const { reports: allReports} = this.state;
        return (
            <Container style={{
                position: "absolute",
                left: "10%",
                top: 120,
        
              }} className="grid" >
        
            <Row className="grid">
                
                
                {allReports.map((fes) => (
                    <Col>
                    <Card key={fes.id} style={{ width: '12rem' }}>
                        <Card.Body>
                        <Card.Title>{fes.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Origin: {fes.origin}</Card.Subtitle>
                        <Card.Text>{fes.description}</Card.Text>
                        <Card.Link href="#">download report</Card.Link>
                        </Card.Body>
                    </Card>
                    </Col>
                  
                ))}
              
            </Row>
            </Container>
        )

    }
}

export default ReportsStaff;