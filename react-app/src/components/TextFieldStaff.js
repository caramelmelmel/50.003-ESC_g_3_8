import React, { Component } from 'react';
import TextField from './TextField';
import {Sidebar}  from './Sidebar';

class TextFieldStaff extends Component {
    constructor(props) {
        super(props);
        this.state= {
            checklistType: null
        }
    }
    
    handleChecklistType = (type) => {
        console.log(type);
        this.setState({checklistType: type})
    }
    
    handleCreateAudit = () => {
        if (this.state.checklistType == "F&B") {
            console.log("going to f&b checklist");
            this.props.history.push("/checklist-fb-staff");
        } else if (this.state.checklistType == "Non-F&B") {
            console.log("going to non f&b checklist");
            this.props.history.push("/checklist-non-fb-staff");
        }
    }
    sidebarStyle = {
        float: "left",
        width: "15%"
    }
    textfieldStyle = {
        float: "left",
        // width: "85%"
        width: "100%"
    }
    buttonStyle = {
        margin: 13, 
        padding: 3,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "#f06d1a",
        color: "white",
        fontWeight: "bold"
    }
    render() { 
        return <React.Fragment>
            <div style={this.sidebarStyle}>
                {/*<Sidebar></Sidebar>*/}
            </div>

            <div style={this.textfieldStyle}>
                <TextField 
                onToggle={this.handleChecklistType}>
                </TextField>
            </div>

            <button 
            type="button"
            style={this.buttonStyle}
            onClick={this.handleCreateAudit}>
                Create Audit
            </button>
        </React.Fragment>
    }
}
 
export default TextFieldStaff;