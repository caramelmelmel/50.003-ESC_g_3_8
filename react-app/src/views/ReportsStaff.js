import React, { Component } from 'react';
import { getActor } from './../services/actorUpdate';

class ReportsStaff extends Component {


    render() { 
        return ( <h1 className="header-style">Reports Go Here</h1>
        )

    }
}
 
export default ReportsStaff;

/*    handleActor() {
        var actor = getActor();
        var format = <h1 className="header-style">Reports for staff goes here</h1>;
        if (actor == "tenant") {
        format = <h1 className="header-style">Tenant reports goes here</h1>};
        console.log("FORMAT: ", format);
        return format;
        
    }*/