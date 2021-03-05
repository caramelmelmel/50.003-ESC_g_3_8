import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import fontSofiaBold from './../fonts/Sofia\ Pro\ Bold\ Az.otf';

class TextField extends Component {
    constructor(props) {
        super(props);
        this.handleInstitutionChange = this.handleInstitutionChange.bind(this);
        this.handleTenantChange = this.handleTenantChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
    }
    state = {
        institution: {
            header: "Institution",
            options: [
                "Changi General Hospital",
                "Singapore General Hospital",
                "KK Hospital"
            ],
            hrefs: [
                "#/action-1",
                "#/action-2", 
                "#/action-3"
            ]
        },
        tenant: {
            header: "Tenant",
            options: [
                "Kopitiam",
                "FairPrice",
                "Starbucks"
            ],
            hrefs: [
                "#/action-1",
                "#/action-2", 
                "#/action-3"
            ]
        },
        category: {
            header: "Category",
            options: [
                "F&B",
                "Non-F&B"
            ],
            hrefs: [
                "#/action-1",
                "#/action-2", 
                "#/action-3"
            ]
        },
        institutionSelected: "Select Institution",
        tenantSelected: "Select Tenant",
        categorySelected: "Select Category"
    };

    
    handleInstitutionChange(value) {
        console.log(value.option);
        this.setState({institutionSelected: value.option})
        this.props.onToggle(value.option);
    }
    handleTenantChange(value) {
        console.log(value.option);
        this.setState({tenantSelected: value.option})
        this.props.onToggle(value.option);
    }
    handleCategoryChange(value) {
        console.log(value.option);
        this.setState({categorySelected: value.option})
        this.props.onToggle(value.option);
    }


    render() { 
        const titleStyle = {
            marginTop: 10,
            marginLeft: 13,
            marginRight: 13,
            fontStyle: fontSofiaBold,
            fontSize: 12
        }
        const buttonStyle = {
            color: "black",
            marginLeft: 13,
            width: 300, 
            textAlign: "left"
        }
        const headerStyle = {
            color: "black",
            fontSize: 12
        }
        const dateStyle = {
            marginTop: 5,
            marginLeft: 13,
            marginRight: 13,
            fontStyle: fontSofiaBold,
            fontSize: 12,
            padding: 2
        }

        return <React.Fragment>

            <h1 style={titleStyle}>Tenant Information</h1>
            <hr style={titleStyle}></hr>

            <Dropdown>
                <Dropdown.Header style={headerStyle}>
                    {this.state.institution.header}
                </Dropdown.Header>

                <Dropdown.Toggle variant="success" id="dropdown-basic"
                style={buttonStyle}>
                    {this.state.institutionSelected}
                </Dropdown.Toggle>


                <Dropdown.Menu
                style={{width: 300}}>
                    {this.state.institution.options.map(option => 
                        (<Dropdown.Item 
                        onSelect={() => this.handleInstitutionChange({option})}>
                            { option }
                        </Dropdown.Item>))}
                    {/* <Dropdown.Item href="#/action-2">SGH</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">NUH</Dropdown.Item> */}
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
                <Dropdown.Header style={headerStyle}>
                    {this.state.tenant.header}
                </Dropdown.Header>
                
                <Dropdown.Toggle variant="success" id="dropdown-basic"
                style={buttonStyle}>
                    {this.state.tenantSelected}
                </Dropdown.Toggle>

                <Dropdown.Menu
                style={{width: 300}}>
                    {this.state.tenant.options.map(option => 
                        (<Dropdown.Item 
                        onSelect={() => this.handleTenantChange({option})}>
                            { option }
                        </Dropdown.Item>))}
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
                <Dropdown.Header style={headerStyle}>
                    {this.state.category.header}
                </Dropdown.Header>
                
                <Dropdown.Toggle variant="success" id="dropdown-basic"
                style={buttonStyle}>
                    {this.state.categorySelected}
                </Dropdown.Toggle>

                <Dropdown.Menu
                style={{width: 300}}>
                    {this.state.category.options.map(option => 
                        (<Dropdown.Item 
                        onSelect={() => this.handleCategoryChange({option})}>
                            { option }
                        </Dropdown.Item>))}
                </Dropdown.Menu>
            </Dropdown>
            <div style={dateStyle}>
                Date
            </div>
            <form>
                <input type="date" style={buttonStyle}></input>
            </form>
        </React.Fragment>;
    }
    
}


 
export default TextField;