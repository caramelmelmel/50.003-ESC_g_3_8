import { Button } from "react-bootstrap";
import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import SeeUpdates from "../components/SeeUpdatesButton";

export const audits = [
  {
    auditid: "1",
    institution: { _id: "1", name: "CGH" },
    tenantname: "Subway",
    type: { _id: "1", name: "Food & Beverage Tenant" },
    auditdate: "2018-01-03T19:04:28.809Z",
    performancescore: 96,
    noofnoncompliances: 4,
  },

  {
    auditid: "2",
    institution: { _id: "1", name: "CGH" },
    tenantname: "Kopitiam",
    type: { _id: "1", name: "Food & Beverage Tenant" },
    auditdate: "2018-01-03T19:04:28.809Z",
    performancescore: 96,
    noofnoncompliances: 3,
  },
  {
    auditid: "3",
    institution: { _id: "2", name: "SGH" },
    tenantname: "Presents",
    type: { _id: "2", name: "Non Food & Beverage Tenant" },
    auditdate: "2018-01-03T19:04:28.809Z",
    performancescore: 96,
    noofnoncompliances: 3,
  },
  {
    auditid: "4",
    institution: { _id: "6", name: "OCH" },
    tenantname: "ToastBox",
    type: { _id: "1", name: "Food & Beverage Tenant" },
    auditdate: "2018-01-03T19:04:28.809Z",
    performancescore: 96,
    noofnoncompliances: 3,
  },
  {
    auditid: "5",
    institution: { _id: "1", name: "CGH" },
    tenantname: "Popular",
    type: { _id: "2", name: "Non Food & Beverage Tenant" },
    auditdate: "2018-01-03T19:04:28.809Z",
    performancescore: 96,
    noofnoncompliances: 3,
  },
  {
    auditid: "6",
    institution: { _id: "1", name: "CGH" },
    tenantname: "MrBean",
    type: { _id: "1", name: "Food & Beverage Tenant" },
    auditdate: "2018-01-03T19:04:28.809Z",
    performancescore: 100,
    noofnoncompliances: 0,
  },
  {
    auditid: "7",
    institution: { _id: "6", name: "OCH" },
    tenantname: "Flowers",
    type: { _id: "2", name: "Non Food & Beverage Tenant" },
    auditdate: "2018-01-03T19:04:28.809Z",
    performancescore: 98,
    noofnoncompliances: 3,
  },
  {
    auditid: "8",
    institution: { _id: "4", name: "SKH" },
    tenantname: "Chicken",
    type: { _id: "1", name: "Food & Beverage Tenant" },
    auditdate: "2018-01-03T19:04:28.809Z",
    performancescore: 100,
    noofnoncompliances: 0,
  },
  {
    auditid: "9",
    institution: { _id: "4", name: "SKH" },
    tenantname: "Fairprice",
    type: { _id: "1", name: "Food & Beverage Tenant" },
    auditdate: "2018-01-03T19:04:28.809Z",
    performancescore: 100,
    noofnoncompliances: 2,
  },
];

/*
export const RenderAudit = (audit, index) => {
  return (
    <tr key={index}>
      <td>{audit.tenantname}</td>
      <td>{audit.auditdate}</td>
      <td>
        <SeeUpdates key={audit.auditid} itemId={audit.auditid} />
      </td>
      <td>{audit.performancescore}</td>
    </tr>
  );
};
*/

export function getAudits() {
  return audits;
}

export function getAudit(id) {
  return audits.find((m) => m._id === id);
}

//need to find a way to link score state to no of non compliances
// if score for checklist item == 0, noofnoncompliance+=1

//performance score should be a function with percentages dep on each category of checklist
