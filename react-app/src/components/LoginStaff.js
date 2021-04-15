import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import sha256 from 'crypto-js/sha256'
import Base64 from 'crypto-js/enc-base64';
import { setLogin } from '../services/loginCheck';

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
            "email": "${this.state.email}",
            "password": "${this.state.password}"
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
                JSONdata["password"] = staff_password;
                console.log(JSONdata);

                // check data with db
                setLogin();

                this.verifyStaff(JSONdata);
              
                // go to staff home page
                this.props.history.push("/dashboard");

            }
        }
    }

    verifyStaff(data) {
        fetch("https://shaghao.herokuapp.com/singhealth/staff/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                // 'x-auth-token':
                // console.log(response.headers)
              },
            body: data,
        }).then(response => {
            console.log(response.status)
            if (!response.status.ok) {
                console.log("Staff login failed!")
                // route back to login staff page
                // this.props.history.push("/login-staff");
            } else {
                console.log("Staff logged in!");
                // put token in local storage
                console.log(response.headers);
                // route to staff home page
                // this.props.history.push("/success-staff");
            }
        })
    }

    // synchronous call to verify staff
    // verifyStaff(data) {
    //     try {
    //         // not sure about host here
    //         fetch("https://shaghao.herokuapp.com/singhealth/staff/login", {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             // 'x-auth-token':
    //             // console.log(response.headers)
    //           },
    //         body: data,
    //         })
    //         // if verified, store token in local storage 
    //         // else redirect to login page
    //         console.log("Staff verified");
    //     } catch (err) {
    //         console.log(err.message);
    //     }
    // }

    
    
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
                <div style={headerStyle}>Name</div>
                <Form.Group 
                controlId="formName"
                style={headerStyle}>
                    <Form.Control 
                    type="name" 
                    placeholder="Name" 
                    style={fillStyle}
                    value={this.state.name} 
                    onChange={e => {this.setState({ name: e.target.value })}}/>
                </Form.Group>

                {/* EMAIL */}
                <div style={headerStyle}>Email</div>
                <Form.Group 
                controlId="formBasicEmail"
                style={headerStyle}>
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
                <div style={headerStyle}>Password</div>
                <Form.Group 
                controlId="formBasicPassword"
                style={headerStyle}>
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