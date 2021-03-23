import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ChartInstitutes from "../components/ChartInstitutes";
import Chart from "react-apexcharts";


class DashboardStaff extends Component {
    render() { 
        return (
            <div className="container">
                <h1 className="header-style">Average Performance Score of each Institution</h1>
                <h3 className="header-style">Last month</h3>
                <div id="chart1">
                    <ChartInstitutes/>
                    
                </div>
           


            </div>
            

        

        
        
        );
    }
}
 
export default DashboardStaff;
/*
margin: 70px auto;
overflow: hidden;
width: 80%;
text-align: center;

*/