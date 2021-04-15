
import React, { Component, PropTypes } from 'react';

class Calender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date : "2021-04-23"
        };
    }

    render() {
        return (
            <input type="date" ref={(date) => {this.dateRef = date;}} value={this.state.date} onChange={this._onDateChange.bind(this)}/>
        );
    }

    _onDateChange(e) {
        let state = this.state;
        state['date'] = e.target.value;
        // Or (you can use below method to access component in another method)
        state['date'] = this.dateRef.value;
        //{date: "2021-04-01T13:00"}
        //console.log(this.dateRef.value.substr(0,10));
        //console.log(this.dateRef.value);
        localStorage.setItem("date_recorded", this.dateRef.value);
        //console.log(localStorage.getItem("date_recorded"));
        this.setState(state);
    }

}

export default Calender;