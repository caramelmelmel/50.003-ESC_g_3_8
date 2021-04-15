import React, { Component } from 'react';
import { setActor } from "./../services/actorUpdate";

class HomePage extends Component {
    state = {
     }
     
    handleTenantLogin = () => {
        setActor("tenant");
        this.props.history.push("/login-tenant");
    }

    handleTenantRegister = () => {
        setActor("tenant");
        this.props.history.push("/register-tenant");
    }

    handleStaffLogin = () => {
        setActor("staff");
        this.props.history.push("/login-staff");
    }

    handleStaffRegister = () => {
        setActor("staff");
        this.props.history.push("/register-staff");
    }


    render() { 
        const titleStyle = {
            textAlign: "center",
            marginTop: "5%",
            marginBottom: "1%",
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: 24,
            fontWeight: "bold",
            width: "60%",
            color: "#f06d1a",
            fontFamily: "Sofia Pro",
        }
        const headerStyle = {
            margin: 0,
            padding: 0,
            marginTop: "5%",
            textAlign: "center",
            fontSize: 18,
            fontWeight: "bold",
            width: "100%",
            color: "#f06d1a",
            fontFamily: "Sofia Pro",

        }
        const loginStyle = {
            marginTop: "40px",
            marginRight: "20%", 
            marginLeft: "20%",
            width: "60%",
            padding: 10,
            borderRadius: 3,
            backgroundColor: "#f06d1a",
            color: "white",
            fontSize: 12,
            fontWeight: "medium",
            border: "0px solid white",
            fontFamily: "Sofia Pro",

        }
        const registerStyle = {
            marginTop: "10px",
            marginBottom: "70px",
            marginRight: "20%", 
            marginLeft: "20%",
            width: "60%",
            padding: 10,
            borderRadius: 3,
            backgroundColor: "#FFFFFF",
            color: "#f06d1a",
            fontSize: 12,
            fontWeight: "medium",
            borderColor: "#f06d1a",
            fontFamily: "Sofia Pro",

        }
        const leftContainer = {
            float: "left", 
            width: "30%",
            height: "30%",
            marginTop: "8%",
            marginLeft: "20%",
            borderRadius: "8px 0px 0px 8px",
            backgroundColor: "#ffffff",
            borderColor: "#f06d1a",
       }
        const rightContainer = {
            float: "right", 
            width: "30%",
            height: "30%",
            marginTop: "8%",
            marginRight: "20%",
            borderRadius: "0px 8px 8px 0px",
            borderColor: "#f06d1a",
            backgroundColor: "#ffffff",
            border: "2px"

        }
        return <React.Fragment>
            <div style={titleStyle}>Welcome to Singhealth's Audit System!</div>

            <div style={leftContainer}>
                
                <div style={headerStyle}>Tenant</div>
                <hr style={{backgroundColor: "#f06d1a"}}></hr>

                {/* LOGIN - TENANT*/}
                <button 
                type="button"
                style={loginStyle}
                onClick={this.handleTenantLogin}>
                    Login
                </button>

                {/* REGISTER - TENANT*/}
                <button 
                type="button"
                style={registerStyle}
                onClick={this.handleTenantRegister}>
                    Register
                </button>
            </div>

            <div style={rightContainer}>
                
                <div style={headerStyle}>Staff</div>
                <hr style={{backgroundColor: "#f06d1a"}}></hr>
                
                {/* LOGIN - STAFF*/}
                <button 
                type="button"
                style={loginStyle}
                onClick={this.handleStaffLogin}>
                    Login
                </button>

                {/* REGISTER - STAFF*/}
                <button 
                type="button"
                style={registerStyle}
                onClick={this.handleStaffRegister}>
                    Register
                </button>
            </div>

            
        </React.Fragment>
    }
}
 
export default HomePage;