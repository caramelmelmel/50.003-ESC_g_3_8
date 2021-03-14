import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class LoginStaff extends Component {
    state = {  }
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
            marginTop: marginVertSpace,
            marginBottom: marginVertSpace,
            marginLeft: "auto",
            marginRight: "auto",
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
                    <Form.Control type="name" placeholder="Name"style={fillStyle} />
                </Form.Group>

                {/* EMAIL */}
                <Form.Group 
                controlId="formBasicEmail"
                style={headerStyle}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" style={fillStyle} />
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                {/* PASSWORD */}
                <Form.Group 
                controlId="formBasicPassword"
                style={headerStyle}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" style={fillStyle} />
                </Form.Group>
                
                {/* SUBMIT */}
                <button 
                type="button"
                style={submitStyle}>
                {/* onClick={this.handleCreateAudit}> */}
                    Login
                </button>
            </Form>
        </React.Fragment>
    }
}
 
export default LoginStaff;