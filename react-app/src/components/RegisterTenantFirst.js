import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { getAllTenantInfo } from '../data/tenantInfo';

// must have "@singhealth.com.sg" and be a word infront
var regexEmail = /^\w{0,}@singhealth\.com\.sg$/;

class RegisterTenantFirst extends Component {
    state = {
        institution: "",
        tenant: "",
        category: "",
        description: "",
        name: "",
        email: "",
        password: "",
        isClicked: false,
        isInvalid: false,
        error: "Fill in all fields!",
        info: getAllTenantInfo(),
        selectedInstitution: "Select Institution",
        selectedTenant: "Select Tenant",
        selectedCategory: "Select Category",
     }
     
    handleSubmit = () => {
        console.log(this.state.institution);
        console.log(this.state.name);
        console.log(this.state.category);
        console.log(this.state.email);
        // console.log(this.state.error);
        // console.log(this.state.isClicked);
        this.setState({isClicked: true});

        // console.log(regexEmail.test(this.state.email));
        // console.log(regexPassword.test(this.state.password));

        var objString = `{
            "tenant_name": "${this.state.name}",
            "tenant_category": "${this.state.category}",
            "tenant_email": "${this.state.email}"
        }`;

        var JSONdata = JSON.parse(objString);

        var isEmail = regexEmail.test(this.state.email);

        if (isEmail === false) {
            this.setState({error: "Invalid email given."});
            this.setState({isInvalid: true});
        } else {
            this.setState({error: "Fill in all fields!"});
            this.setState({isInvalid: false});
            if (this.state.institution != "" && this.state.tenant != "" && this.state.category != "" && this.state.email != "") {
                // send data to db

                this.props.history.push("/register-second-tenant");

                // pass json to next page
            }
        }
    }

    // synchronous call to create tenant
    createTenant(data) {
        try {
            // not sure about host here
            fetch("http://localhost:5000/tenant", {
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

    handleInstitutionChange(value) {
        console.log(value.option);
        this.setState({institution: value.option});
    }

    handleTenantChange(value) {
        console.log(value.option);
        this.setState({tenant: value.option});
    }

    handleCategoryChange(value) {
        console.log(value.option);
        this.setState({category: value.option});
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

                {/* INSTITUTION */}
                <div style={headerStyle}>Institution</div>

                <Dropdown
                style={buttonStyle}>

                    <Dropdown.Toggle 
                    variant=""
                    style={toggleStyle}>
                        {this.state.institution == "" ? this.state.selectedInstitution : this.state.institution}
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

                {/* TENANT */}
                <div style={headerStyle}>Tenant</div>

                <Dropdown
                style={buttonStyle}>

                    <Dropdown.Toggle 
                    variant=""
                    style={toggleStyle}>
                        {this.state.tenant == "" ? this.state.selectedTenant : this.state.tenant}
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

                {/* CATEGORY */}
                <div style={headerStyle}>Category</div>

                <Dropdown
                style={buttonStyle}>

                    <Dropdown.Toggle 
                    variant=""
                    style={toggleStyle}>
                        {this.state.category == "" ? this.state.selectedCategory : this.state.category}
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

                {/* DESCRIPTION */}
                <Form.Group 
                controlId="formDescription"
                style={headerStyle}>
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                    type="description" 
                    placeholder="Description" 
                    style={fillStyle}
                    value={this.state.description} 
                    onChange={e => {this.setState({ description: e.target.value })}}/>
                </Form.Group>

                {/* EMAIL */}
                <Form.Group 
                controlId="formBasicEmail"
                style={headerStyle}>
                    <Form.Label>Registered Email</Form.Label>
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

                {/* NAME */}
                {/* <Form.Group 
                controlId="formName"
                style={headerStyle}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                    type="name" 
                    placeholder="Name" 
                    style={fillStyle}
                    value={this.state.name} 
                    onChange={e => {this.setState({ name: e.target.value })}}/>
                </Form.Group> */}

                {/* EMAIL */}
                {/* <Form.Group 
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
                    </Form.Text>
                </Form.Group> */}

                {/* PASSWORD */}
                {/* <Form.Group 
                controlId="formBasicPassword"
                style={headerStyle}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    style={fillStyle}
                    value={this.state.password}
                    onChange={e => this.setState({ password: e.target.value })} />
                </Form.Group> */}

                {/* ERROR MESSAGE */}
                {((this.state.institution == "" || this.state.tenant == "" || this.state.category == "" || this.state.email == "") && this.state.isClicked == true) || this.state.isInvalid == true ? 
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
 
export default RegisterTenantFirst;