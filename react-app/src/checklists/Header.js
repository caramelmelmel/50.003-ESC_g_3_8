import React, { Component } from 'react';

class Header extends Component {
    render() { 
        const { headerTitle } = this.props;
        return (
        <tr>
            <th className="checklist-sideheader-style">{headerTitle}</th>
            <th/>
            <th/>
        </tr>);
    }
}
 
export default Header;