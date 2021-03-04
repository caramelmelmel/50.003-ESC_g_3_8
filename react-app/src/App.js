
import {  BrowserRouter, Route, Switch } from 'react-router-dom';
import "./bootstrap-4.3.1-dist/css/bootstrap.min.css";
import './App.css';
import DashboardStaff from './views/DashboardStaff';
import AuditsStaff from './views/AuditsStaff';
import TenantStaff from './views/TenantStaff';
import ReportsStaff from './views/ReportsStaff';
import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import ChecklistFBStaff from './components/ChecklistFBStaff';
import TextFieldStaff from './components/TextFieldStaff'
import AddNCStaff from './views/AddNCStaff';


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
            <Route path="/checklist-fb-staff" component={ChecklistFBStaff}/>
            <Route path="/sidebar" component={Sidebar} />
            <Route path="/textfield-staff" component={TextFieldStaff} />
            <Route path="/add-nc-staff" component={AddNCStaff} />


            <Route path="/" exact component={DashboardStaff} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
