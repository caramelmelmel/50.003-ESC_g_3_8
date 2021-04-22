//use cards to show details
import React, { Component } from 'react';
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import * as AiIcons from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Chart from "react-apexcharts";
import PerformanceScoreAcrossYearChart from "../components/PerformanceScoreAcrossYearChart"

class TenantProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Tenant_id: this.props.location.state.Tenant_id,
            Anytenants: this.props.location.state.Anytenants

        }
    }


    render() {

        const Anytenants = this.state.Anytenants;
        const indivtenant = Anytenants.find((tenant) => tenant.Tenant_id === this.state.Tenant_id);
        //console.log(indivtenant);
        //console.log(this.props);
        console.log(this.state);
        return (
            <div style={{fontFamily: "Sofia Pro"}}>
                <NavLink
                to="/tenant-staff"
                style={{
                    position: "absolute",
                    right: 20,
                    top: 20,
                }}
                >
                <AiIcons.AiOutlineClose size="30" />
                </NavLink>

                <h1 style={{ position: "absolute", left:20 }}>{indivtenant.store_name}</h1>
                <Card variant="light" style={{ width: "80%", position: "absolute", left:20, top:130}}>
                <Card.Body>
                    <Card.Title className="RepresentativeInfo" >Representative Information</Card.Title>
                    <Card.Text>
                    Name: {indivtenant.representative_name}
                    </Card.Text>
                    
                    <Card.Text>
                    Email: {indivtenant.representative_email}
                    </Card.Text>

                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated during registration</small>
                </Card.Footer>
                </Card>

                <Card variant="light" style={{ width: "80%", position: "absolute", left:20, top:300}}>
                <Card.Body>
                    <Card.Title className="StoreInfo" >Store Information</Card.Title>
                    <Card.Text>
                    Name: {indivtenant.store_name}
                    </Card.Text>
                    
                    <Card.Text>
                    Location: {indivtenant.location}
                    </Card.Text>
                    
                    <Card.Text>
                    Institution: {indivtenant.institution.name}
                    </Card.Text>
                    
                    <Card.Text>
                    Lease Expiry Date: {indivtenant.lease_end}
                    </Card.Text>

                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated during registration</small>
                </Card.Footer>
                </Card>

                <Card variant="light" style={{ width: "80%", position: "absolute", left: 20, top: 520 }}>
                <Card.Body>
                    <Card.Title className="perfscore" >Tenants Performance Score</Card.Title>
                    <Card.Text>Across all audits in the past year</Card.Text>
                    
                    <PerformanceScoreAcrossYearChart/>
                    
                </Card.Body>
                
                </Card>
                

            </div> 
        );
    }
}
 
export default TenantProfile;
//<PerformanceScoreAcrossYearChart />