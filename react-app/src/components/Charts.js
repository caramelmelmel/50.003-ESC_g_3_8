import React, { Component } from "react";

class Charts extends Component {
    state = { 
        numCharts: 5,
     }
    render() { 
        const chartStyle = {
            float: "left",
            width: 30,
            marginLeft: 5,
            marginRight: 5,
            // width: "10%",
            minHeight: 100,
            // height: "100%",
            backgroundColor: "grey",
            display: "flex",
            borderRadius: 20,
        }
        return <React.Fragment>
            <div style={chartStyle}></div>

        </React.Fragment>
    }
}
 
export default Charts;