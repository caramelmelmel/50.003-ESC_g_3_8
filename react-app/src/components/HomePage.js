import React, { Component } from 'react';
class HomePage extends Component {
    state = {
     }
     
    handleTenantLogin = () => {
        this.props.history.push("/login-tenant");
    }

    handleTenantRegister = () => {
        this.props.history.push("/register-first-tenant");
    }

    handleStaffLogin = () => {
        this.props.history.push("/login-staff");
    }

    handleStaffRegister = () => {
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
        }
        const headerStyle = {
            margin: 0,
            padding: 0,
            marginTop: "5%",
            textAlign: "center",
            fontSize: 16,
            fontWeight: "bold",
            width: "100%",
            color: "#f06d1a",
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
            fontWeight: "bold",
            border: "0px solid white",
        }
        const registerStyle = {
            marginTop: "10px",
            marginBottom: "70px",
            marginRight: "20%", 
            marginLeft: "20%",
            width: "60%",
            padding: 10,
            borderRadius: 3,
            backgroundColor: "#f06d1a",
            color: "white",
            fontSize: 12,
            fontWeight: "bold",
            border: "0px solid white",
        }
        const leftContainer = {
            float: "left", 
            width: "30%",
            height: "30%",
            marginTop: "8%",
            backgroundColor: "green",
            marginLeft: "20%",
            borderRadius: "8px 0px 0px 8px",
            backgroundColor: "#d1dfff",
       }
        const rightContainer = {
            float: "right", 
            width: "30%",
            height: "30%",
            marginTop: "8%",
            backgroundColor: "red",
            marginRight: "20%",
            borderRadius: "0px 8px 8px 0px",
            backgroundColor: "#81e09e",
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