import React, { Component } from 'react';
import TextField from './TextField';
import Sidebar from './Sidebar';

class TextFieldStaff extends Component {
    sidebarStyle = {
        float: "left",
        width: "15%"
    }
    textfieldStyle = {
        float: "left",
        width: "85%"
    }
    render() { 
        return <React.Fragment>
            <div style={this.sidebarStyle}>
                <Sidebar></Sidebar>
            </div>

            <div style={this.textfieldStyle}>
                <TextField></TextField>
            </div>
        </React.Fragment>
    }
}
 
export default TextFieldStaff;