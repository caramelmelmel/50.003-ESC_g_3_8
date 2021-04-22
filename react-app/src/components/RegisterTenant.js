import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { getAllTenantInfo } from '../data/tenantInfo';
import sha256 from 'crypto-js/sha256'
import Base64 from 'crypto-js/enc-base64';
import axios from 'axios';

// must have "@(gmail/yahoo) (.com/.com.sg)" and be a word infront
var regexEmail = /^\w{0,}@(gmail|yahoo)\.com(\.sg)?$/;
// one uppercase + lowercase + num + symb, min 8 char
var regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
// dd/mm/yyyy format
// var regexDate = /^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/](20)\d\d$/;
// yyyy-mm-dd format
var regexDate = /^(20)\d\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$/;

class RegisterTenantFirst extends Component {
    state = {
        institution: "",
        tenant: "",
        category: "",
        description: "",
        name: "",
        email: "",
        password: "",
        expiry: "",
        isClicked: false,
        isInvalid: false,
        error: "Fill in all fields!",
        info: getAllTenantInfo(),
        selectedInstitution: "Select Institution",
        selectedTenant: "Select Tenant",
        selectedCategory: "Select Category",
     }
     
    handleSubmit = () => {
        console.log(this.state.email);
        console.log(this.state.name);
        console.log(this.state.description);
        console.log(this.state.expiry);
        console.log(this.state.password);
        console.log(this.state.tenant);
        console.log(this.state.category);
        console.log(this.state.institution);

        this.setState({isClicked: true});

        var objString = `{
            "email": "${this.state.email}",
            "tenant_name": "${this.state.name}",
            "store_des": "${this.state.description}",
            "expiry_date": "${this.state.expiry}",
            "password": "${this.state.password}",
            "store_name": "${this.state.tenant} ${this.state.institution}",
            "category": "${this.state.category}",
            "institution_name": "${this.state.institution}"
        }`;

        var JSONdata = JSON.parse(objString);

        console.log(objString);

        var isEmail = regexEmail.test(this.state.email);
        var isPassword = regexPassword.test(this.state.password);
        var isDate = regexDate.test(this.state.expiry);

        if (isEmail === false) {
            this.setState({error: "Invalid email given."});
            this.setState({isInvalid: true});
        } else if (isPassword === false) {
            this.setState({error: "Invalid password given."});
            this.setState({isInvalid: true});
        } else if (isDate === false) {
            this.setState({error: "Invalid expiry date given."});
            this.setState({isInvalid: true});
        } else if (isEmail === true && isPassword === true && isDate === true) {
            this.setState({error: "Fill in all fields!"});
            this.setState({isInvalid: false});
            if (this.state.institution != "" && this.state.tenant != "" && this.state.category != "" && this.state.email != "" && this.state.description != "" && this.state.name != "" && this.state.expiry != "") {

                const tenant_password = Base64.stringify(sha256(this.state.password));
                console.log(tenant_password);
                JSONdata["password"] = tenant_password;
                console.log(JSONdata);

                // send data to db
                this.createTenant(JSONdata);

                // this.props.history.push("/success-tenant");
            }
        }
    }

    async createTenant(data){
        const response = await fetch("http://localhost:8080/tenant/signup",{
            method:'POST',
            mode:'cors',
            credentials:'same-origin',
            headers:{
                'Content-Type': 'application/json'
            },
            referrerPolicy: 'no-referrer',
            body:JSON.stringify(data)
        })
        if(!response.status.ok){
            console.log(`${response.status}`)
            console.log("Tenant registration failed!")
            // route back to register staff page
            // this.props.history.push("/register-tenant");
            console.log("the code has an error here")
            this.setState({error: "Registration unsuccessful."});
            this.setState({isInvalid: true});

        }
        this.props.history.push("/success-tenant");
        return response.json
    }

    // https://shaghao.herokuapp.com/singhealth/tenant/signup
    


    // // synchronous call to create tenant
    // async createTenant(data) {
    //     try {
    //         // change localhost to server name
    //         // response = await fetch("https://shaghao.herokuapp.com/singhealth/tenant/signup", {
    //         // mode: 'no-cors',
    //         // method: "POST",
    //         // headers: {
    //         //     'Content-Type': 'application/json',
    //         //   },
    //         // body: data,
    //         // })
    //         // console.log("Tenant created");
    //         const response = await axios.get("https://shaghao.herokuapp.com/singhealth/tenant/signup");
    //         console.log(response);
    //     } catch (err) {
    //         console.log(err.message);
    //     }
    // }

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

                {/* DESCRIPTION */}
                <div style={headerStyle}>Description</div>
                <Form.Group 
                controlId="formDescription"
                style={headerStyle}>
                    <Form.Control 
                    type="description" 
                    placeholder="Description" 
                    style={fillStyle}
                    value={this.state.description} 
                    onChange={e => {this.setState({ description: e.target.value })}}/>
                </Form.Group>

                {/* EMAIL */}
                <div style={headerStyle}>Registered Email</div>
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

                {/* TENANT EXPIRY */}
                <div style={headerStyle}>Tenant Expiry</div>
                <Form.Group 
                controlId="formBasicExpiry"
                style={headerStyle}>
                    <Form.Control 
                    type="expiry" 
                    placeholder="yyyy-mm-dd" 
                    style={fillStyle}
                    value={this.state.expiry}
                    onChange={e => this.setState({ expiry: e.target.value })}/>
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