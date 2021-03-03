import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./bootstrap-4.3.1-dist/css/bootstrap.min.css";
import "./App.css";
import DashboardStaff from "./views/DashboardStaff";
import AuditsStaff from "./views/AuditsStaff";
import TenantStaff from "./views/TenantStaff";
import ReportsStaff from "./views/ReportsStaff";
import SeeUpdates from "./views/SeeUpdates";
import ResolvedAudits from "./views/ResolvedAudits";
import OngoingAudits from "./views/OngoingAudits";
import ChecklistFBStaff from "./components/ChecklistFBStaff";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="content">
          <Navbar />
        

          <Switch>
            {/* Route is a wrapper around the component. It contains history, location and match (info about URL) */}
            <Route path="/dashboard-staff" component={DashboardStaff} />
            <Route path="/audits-staff" component={AuditsStaff} />
            <Route path="/tenant-staff" component={TenantStaff} />
            <Route path="/reports-staff" component={ReportsStaff} />
            <Route path="/see-updates" component={SeeUpdates} />
            <Route path="/resolved-audits" component={ResolvedAudits} />
            <Route path="/ongoing-audits" component={OngoingAudits} />
            <Route path="/checklist-fb-staff" component={ChecklistFBStaff} />
            <Route path="/" exact component={DashboardStaff} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
