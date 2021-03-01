import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import DashboardStaff from "./views/DashboardStaff";
import AuditsStaff from "./views/AuditsStaff";
import TenantStaff from "./views/TenantStaff";
import ReportsStaff from "./views/ReportsStaff";
import Sidebar from "./components/Sidebar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="content">
          
          <Switch>
            {/* Route is a wrapper around the component. It contains history, location and match (info about URL) */}
            <Route path="/dashboard-staff" component={DashboardStaff} />
            <Route path="/audits-staff" component={AuditsStaff} />
            <Route path="/tenant-staff" component={TenantStaff} />
            <Route path="/reports-staff" component={ReportsStaff} />
            <Route path="/sidebar" component={Sidebar} />
            <Route path="/" exact component={DashboardStaff} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
