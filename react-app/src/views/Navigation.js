import React from "react";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/dashboard-staff">DashboardStaff</NavLink>
      <NavLink to="/audits-staff">AuditsStaff</NavLink>
      <NavLink to="/tenant-staff">TenantStaff</NavLink>
      <NavLink to="/reports-staff">ReportsStaff</NavLink>
      <NavLink to="/sidebar">Sidebar</NavLink>
    </div>
  );
};

export default Navigation;
