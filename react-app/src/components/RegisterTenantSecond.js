import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import sha256 from 'crypto-js/sha256'
import Base64 from 'crypto-js/enc-base64';

//crypto for the pasword registration
const {createHash} = require('crypto');
const hash = createHash('sha256');

// one uppercase + lowercase + num + symb, min 8 char
var regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

class RegisterTenantSecond extends Component {
    state = {
        code: "",
        password: "",
        isClicked: false,
        isInvalid: false,
        error: "Fill in all fields!",
     }
     
    handleSubmit = () => {
        console.log(this.state.code);
        console.log(this.state.password);
        this.setState({isClicked: true});

        var objString = `{
            "staff_institution": "${this.state.institution}",
            "staff_name": "${this.state.name}",
            "staff_email": "${this.state.email}",
            "staff_password": "${this.state.password}"
        }`;

        var JSONdata = JSON.parse(objString);

        var isPassword = regexPassword.test(this.state.password);

        if (isPassword === false) {
            this.setState({error: "Invalid password given."});
            this.setState({isInvalid: true});
        } else {
            this.setState({error: "Fill in all fields!"});
            this.setState({isInvalid: false});
            if (this.state.code != "" && this.state.password != "") {
                //crypting the password 
                const staff_password = Base64.stringify(sha256(this.state.password));
                console.log(staff_password);
                JSONdata[staff_password] = staff_password;
                console.log(JSONdata);
                // this.createStaff(JSONdata);

                // send data to db
                
                // if code and passwowrd is correct then go to success
                this.props.history.push("/success-tenant");

            }
        }
    }

    // synchronous call to create tenant
    createTenant(data) {
        try {
            // not sure about host here
            fetch("http://localhost:5000/tenantreg", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body: data,
            })
            console.log("Tenant created");
        } catch (err) {
            console.log(err.message);
        }
    }

    render() { 
        const marginVertSpace = 5;
        const titleStyle = {
            marginTop: marginVertSpace,
            marginBottom: marginVertSpace,
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: 16,
            fontWeight: "bold",
            width: "90%",
            color: "#f06d1a",
        }
        const headerStyle = {
            margin: "auto",
            marginTop: marginVertSpace,
            marginBottom: marginVertSpace,
            fontSize: 12,
            fontWeight: "bold",
            width: "90%",
            color: "black",
        }
        const fillStyle = {
            margin: "auto",
            marginTop: marginVertSpace - 5,
            textAlign: "left",
            borderRadius: 3,
            border: "2px solid black",
            width: "100%",
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
        const submitStyle = {
            float: "right",
            marginTop: marginVertSpace + 10,
            marginRight: "5%", 
            width: "100px",
            padding: 4,
            borderRadius: 3,
            backgroundColor: "#f06d1a",
            color: "white",
            fontSize: 12,
            fontWeight: "bold",
            border: "0px solid white",
        }
        return <React.Fragment>
            <div style={titleStyle}>Tenant Registration</div>

            <Form>

                {/* CODE */}
                <Form.Group 
                controlId="formCode"
                style={headerStyle}>
                    <Form.Label>Enter the verification code sent to your email.</Form.Label>
                    <Form.Control 
                    type="code" 
                    placeholder="Code" 
                    style={fillStyle}
                    value={this.state.code} 
                    onChange={e => {this.setState({ code: e.target.value })}}/>
                </Form.Group>

                {/* PASSWORD */}
                <Form.Group 
                controlId="formBasicPassword"
                style={headerStyle}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    style={fillStyle}
                    value={this.state.password}
                    onChange={e => this.setState({ password: e.target.value })} />
                </Form.Group>

                {/* ERROR MESSAGE */}
                {((this.state.code == "" || this.state.password == "") && this.state.isClicked == true) || this.state.isInvalid == true ? 
                <div
                style={errorStyle}>
                    {this.state.error}
                </div> : <div></div>
                }
                
                {/* REGISTER */}
                <button 
                type="button"
                style={submitStyle}
                onClick={this.handleSubmit}>
                    Register
                </button>
            </Form>
        </React.Fragment>
    }
}
 
export default RegisterTenantSecond;