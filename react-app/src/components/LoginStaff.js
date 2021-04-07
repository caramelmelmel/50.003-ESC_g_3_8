import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import sha256 from 'crypto-js/sha256'
import Base64 from 'crypto-js/enc-base64';

//crypto for the pasword registration
const {createHash} = require('crypto');
const hash = createHash('sha256');

// set to tenant email requirements!!
var regexEmail = /^\w{0,}@singhealth\.com\.sg$/;
// one uppercase + lowercase + num + symb, min 8 char
var regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

class LoginStaff extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        isClicked: false,
        isInvalid: false,
        error: "Fill in all fields!",
     }

    handleLogin = () => {
        console.log(this.state.name);
        console.log(this.state.email);
        console.log(this.state.password);
        this.setState({isClicked: true});

        var objString = `{
            "staff_name": "${this.state.name}",
            "staff_email": "${this.state.email}",
            "staff_password": "${this.state.password}"
        }`;
      
        var JSONdata = JSON.parse(objString);

        var isEmail = regexEmail.test(this.state.email);
        var isPassword = regexPassword.test(this.state.password);

        if (isEmail === false && isPassword === false) {
            this.setState({error: "Invalid email and password given."});
            this.setState({isInvalid: true});
        } else if (isPassword === false) {
            this.setState({error: "Invalid password given."});
            this.setState({isInvalid: true});
        } else if (isEmail === false) {
            this.setState({error: "Invalid email given."});
            this.setState({isInvalid: true});
        } else {
            this.setState({error: "Fill in all fields!"});
            this.setState({isInvalid: false});
            if (this.state.name != "" && this.state.email != "" && this.state.password != "") {
                //crypting the password 
                const staff_password = Base64.stringify(sha256(this.state.password));
                console.log(staff_password);
                JSONdata[staff_password] = staff_password;
                console.log(JSONdata);

                // check data with db

                // go to staff home page
                // this.props.history.push("/register-staff");

            }
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
            <div style={titleStyle}>Staff Login</div>

            <Form>

                {/* NAME */}
                <Form.Group 
                controlId="formName"
                style={headerStyle}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                    type="name" 
                    placeholder="Name" 
                    style={fillStyle}
                    value={this.state.name} 
                    onChange={e => {this.setState({ name: e.target.value })}}/>
                </Form.Group>

                {/* EMAIL */}
                <Form.Group 
                controlId="formBasicEmail"
                style={headerStyle}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="Email" 
                    style={fillStyle}
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value })}/>
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text> */}
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
                {((this.state.name == "" || this.state.email == "" || this.state.password == "") && this.state.isClicked == true) || this.state.isInvalid == true ? 
                <div
                style={errorStyle}>
                    {this.state.error}
                </div> : <div></div>
                }
                
                {/* LOGIN */}
                <button 
                type="button"
                style={submitStyle}
                onClick={this.handleLogin}>
                    Login
                </button>
            </Form>
        </React.Fragment>
    }
}
 
export default LoginStaff;