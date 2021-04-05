import React, { Component } from 'react';

class StaffSuccess extends Component {
    state = {
     }

    handleSubmit = () => {
        this.props.history.push("/login-staff");
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
            <div style={titleStyle}>Staff Registration</div>

            <div style={headerStyle}>Registration Successful!</div>
                
            {/* REGISTER */}
            <button 
            type="button"
            style={submitStyle}
            onClick={this.handleSubmit}>
                Login
            </button>
        </React.Fragment>
    }
}
 
export default StaffSuccess;