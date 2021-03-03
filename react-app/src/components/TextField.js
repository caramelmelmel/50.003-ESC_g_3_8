import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import fontSofiaBold from './../fonts/Sofia\ Pro\ Bold\ Az.otf';

class TextField extends Component {
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
        category: {
            header: "Category",
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
        // date: {
        //     header: "Date",
        //     options: [
        //         "Changi General Hospital",
        //         "Singapore General Hospital",
        //         "KK Hospital"
        //     ],
        //     hrefs: [
        //         "#/action-1",
        //         "#/action-2", 
        //         "#/action-3"
        //     ]
        // }
    };

    debug() {
        this.state.items.hrefs.map(ref => (console.log({ref})));
        this.state.items.options.map(option => (console.log({option})));
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
            {/* {this.debug()} */}

            <h1 style={titleStyle}>Tenant Information</h1>
            <hr style={titleStyle}></hr>

            <Dropdown>
                <Dropdown.Header style={headerStyle}>
                    {this.state.institution.header}
                </Dropdown.Header>

                <Dropdown.Toggle variant="success" id="dropdown-basic"
                style={buttonStyle}>
                    Select {this.state.institution.header}
                </Dropdown.Toggle>


                <Dropdown.Menu
                style={{width: 300}}>
                    {this.state.institution.options.map(option => 
                        (<Dropdown.Item >
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
                    Select {this.state.tenant.header}
                </Dropdown.Toggle>

                <Dropdown.Menu
                style={{width: 300}}>
                    {this.state.tenant.options.map(option => 
                        (<Dropdown.Item>
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
                    Select {this.state.category.header}
                </Dropdown.Toggle>

                <Dropdown.Menu
                style={{width: 300}}>
                    {this.state.category.options.map(option => 
                        (<Dropdown.Item>
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