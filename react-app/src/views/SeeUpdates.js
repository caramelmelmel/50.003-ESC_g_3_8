import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class SeeUpdates extends Component {
    
    render() { 
        return (
            
            <div>
                <h1 className="header-style">Updates</h1>
                <Button variant="warning">Back</Button>
                <Button variant="primary">Solved</Button>
                <Button variant="warning">Next</Button>
                <Button variant="secondary"><NavLink to="/audits-staff">
                    Close Updates
                </NavLink>
                </Button>
            </div>
        );
    }
}
 
export default SeeUpdates;