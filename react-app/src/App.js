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
import ChecklistFBStaffA from "./checklists/ChecklistFBStaffA";
import ChecklistFBStaffB from './checklists/ChecklistFBStaffB';
import ChecklistFBStaffC from './checklists/ChecklistFBStaffC';
import ChecklistFBStaffD from './checklists/ChecklistFBStaffD';
import ChecklistFBStaffE from './checklists/ChecklistFBStaffE';
import Navbar from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import TextFieldStaff from "./components/TextFieldStaff";
import AddNCStaff from "./views/AddNCStaff";
import ChecklistNonFBStaff from "./components/ChecklistNonFBStaff";
import LoginStaff from "./components/LoginStaff";
import LoginTenant from "./components/LoginTenant";
import SubmitChecklistStaff from "./checklists/SubmitChecklistStaff";
import RegisterStaff from "./components/RegisterStaff";


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
            <Route path="/checklist-non-fb-staff" component={ChecklistNonFBStaff} />
            <Route path="/checklist-fb-staff-professionalism-and-staff-hygiene" component={ChecklistFBStaffA} />
            <Route path="/checklist-fb-staff-housekeeping-and-cleanliness" component={ChecklistFBStaffB} />
            <Route path="/checklist-fb-staff-food-hygiene" component={ChecklistFBStaffC} />
            <Route path="/checklist-fb-food-and-beverages" component={ChecklistFBStaffD} />
            <Route path="/checklist-fb-safety-and-health" component={ChecklistFBStaffE} />
            <Route path="/submit-checklist-staff" component={SubmitChecklistStaff} />
            <Route path="/sidebar" component={Sidebar} />
            <Route path="/textfield-staff" component={TextFieldStaff} />
            <Route path="/add-nc-staff" component={AddNCStaff} />

            <Route path="/login-staff" component={LoginStaff} />
            <Route path="/login-tenant" component={LoginTenant} />
            <Route path="/register-staff" component={RegisterStaff} />

            <Route path="/" exact component={DashboardStaff} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
