import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { getAllTenantInfo } from './../data/tenantInfo';

class TextFieldStaff extends Component {
    state = {
        info: getAllTenantInfo(),
        selectedInstitution: "Select Institution",
        selectedTenant: "Select Tenant",
        selectedCategory: "Select Category",
        checkInstitution: false,
        checkTenant: false,
        checkCategory: false,
        checkAll: false,
        error: "Fill in all fields!",
        click: false,
    };

    handleInstitutionChange(value) {
        console.log(value.option);
        if (this.state.checkTenant === true && this.state.checkCategory === true) {
            this.setState({checkAll: true});
        } else {
            this.setState({checkAll: false});
        }
        this.setState({selectedInstitution: value.option});
        this.setState({checkInstitution: true});
    }

    handleTenantChange(value) {
        console.log(value.option);
        if (this.state.checkCategory === true && this.state.checkInstitution === true) {
            this.setState({checkAll: true});
        } else {
            this.setState({checkAll: false});
        }
        this.setState({selectedTenant: value.option});
        this.setState({checkTenant: true});
    }

    handleCategoryChange(value) {
        console.log(value.option);
        if (this.state.checkTenant === true && this.state.checkInstitution === true) {
            this.setState({checkAll: true});
        } else {
            this.setState({checkAll: false});
        }
        this.setState({selectedCategory: value.option});
        this.setState({checkCategory: true});
    }

    handleCreateAudit = () => {
        this.setState({clicked: true});
        if (this.state.selectedCategory === "F&B" && this.state.checkAll === true) {
            console.log("going to f&b checklist");

            this.props.history.push("/checklist-fb-staff");
        } 
      else if (this.state.selectedCategory === "Non-F&B" && this.state.checkAll === true){
            
          this.props.history.push("/checklist-fb-staff-professionalism-and-staff-hygiene");
        } 
        
     /* else if (this.state.checklistType == "Non-F&B") {

            console.log("going to non f&b checklist");
            this.props.history.push("/checklist-non-fb-staff");
        }*/
        
        else if (this.state.selectedCategory === "Non-F&B" && this.state.checkAll === true){
            console.log("going to non f & b checklist");
            this.props.history.push("/checklist-non-fb-staff");
    }

    render() { 
        // const marginHorSpace = 15;
        const marginVertSpace = 5;
        const titleStyle = {
            marginTop: marginVertSpace,
            marginBottom: marginVertSpace,
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: 12,
            fontWeight: "bold",
            width: "90%",
        }
        const buttonStyle = {
            margin: "auto",
            marginTop: marginVertSpace,
            textAlign: "left",
            borderRadius: 3,
            border: "0.1px solid black",
            width: "90%",
        }
        const toggleStyle = {
            margin: "auto",
            textAlign: "left",
            textColor: "black",
            borderRadius: 3,
            border: "0.1px solid black",
            width: "100%",
            color: "black",
        }
        const submitStyle = {
            float: "right",
            marginTop: marginVertSpace + 10,
            marginRight: "5%", 
            width: "30%",
            padding: 4,
            borderRadius: 3,
            backgroundColor: "#f06d1a",
            color: "white",
            fontSize: 12,
            fontWeight: "bold"
        }
        const errorStyle = {
            float: "left",
            marginTop: marginVertSpace + 10,
            marginLeft: "5%",
            width: "30%",
            padding: 4,
            borderRadius: 3,
            backgroundColor: "#d21f3c",
            color: "white",
            textAlign: "center",
            fontSize: 12,
            fontWeight: "bold"
        }
        return <React.Fragment>
            <div style={titleStyle}>1. Tenant Information</div>
            <hr marginRight="auto" marginLeft="auto" width="90%" color="#f06d1a"></hr>

            {/* INSTITUTION TEXTFIELD */}
            <div style={titleStyle}>Institution</div>

            <Dropdown
            style={buttonStyle}>

                <Dropdown.Toggle 
                variant=""
                style={toggleStyle}>
                    {this.state.selectedInstitution}
                </Dropdown.Toggle>

                <Dropdown.Menu
                style={{width: "100%", margin: "auto"}}>
                    {this.state.info.institutions.map(option => 
                        (<Dropdown.Item
                        onSelect={() => this.handleInstitutionChange({option})}>
                            { option }
                        </Dropdown.Item>))}
                </Dropdown.Menu>
            </Dropdown>

            {/* TENANT TEXTFIELD */}
            <div style={titleStyle}>Tenant</div>

            <Dropdown
            style={buttonStyle}>

                <Dropdown.Toggle 
                variant=""
                style={toggleStyle}>
                    {this.state.selectedTenant}
                </Dropdown.Toggle>

                <Dropdown.Menu
                style={{width: "100%", margin: "auto"}}>
                    {this.state.info.tenants.map(option => 
                        (<Dropdown.Item
                        onSelect={() => this.handleTenantChange({option})}>
                            { option }
                        </Dropdown.Item>))}
                </Dropdown.Menu>
            </Dropdown>

            {/* CATEGORY TEXTFIELD */}
            <div style={titleStyle}>Category</div>

            <Dropdown
            style={buttonStyle}>

                <Dropdown.Toggle 
                variant=""
                style={toggleStyle}>
                    {this.state.selectedCategory}
                </Dropdown.Toggle>

                <Dropdown.Menu
                style={{width: "100%", margin: "auto"}}>
                    {this.state.info.categories.map(option => 
                        (<Dropdown.Item
                        onSelect={() => this.handleCategoryChange({option})}>
                            { option }
                        </Dropdown.Item>))}
                </Dropdown.Menu>
            </Dropdown>

            {/* ERROR MESSAGE */}
            {this.state.checkAll === false && this.state.clicked === true ? 
                <div
                style={errorStyle}>
                    {this.state.error}
                </div> : <div></div>
                }


            {/* CREATE AUDIT BUTTON  */}
            <div>
            <button 
                type="button"
                style={submitStyle}
                onClick={this.handleCreateAudit}>
                    Create Audit
            </button>
            </div>
                
            

        </React.Fragment>
    }
}
 
export default TextFieldStaff;
