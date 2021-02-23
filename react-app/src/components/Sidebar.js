import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    render() { 
        return ( 
        <div>
            <Link className="header-style" to="/">Home</Link>
            <Link className="header-style" to="/dashboard-staff">Dashboard</Link>
            <Link className="header-style" to="/reports-staff">Reports</Link>
            <Link className="header-style" to="/audits-staff">Audits</Link>
            <Link className="header-style" to="/tenant-staff">Tenants</Link>
        </div> );
    }
}
 
export default Sidebar;