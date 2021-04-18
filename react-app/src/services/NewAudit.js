import { Button } from "react-bootstrap";
import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import SeeUpdates from "../components/SeeUpdatesButton";

//this should be the output from checklist
//noofnoncomplainces = length of noncompliances array
export const audits = [
  {
    Tenant_id: "1",
    auditid: "1",
    institution: { _id: "1", name: "CGH" },
    store_name: "Subway",
    type: { _id: "1", name: "Food & Beverage Tenant" },
    auditdate: "2018-01-03T19:04:28.809Z",
    performancescore: 96,
    noncomplainces: [
      { name: "professionalism_02", resolved: false },
      { name: "staff_hygiene_02", resolved: false },
      { name: "environment_cleanliness_02", resolved: false },
      { name: "environment_cleanliness_05", resolved: false },
    ],
    noofnoncompliances: 4,
  },

  /*{
    Tenant_id: "2",
    auditid: "2",
    institution: { _id: "1", name: "CGH" },
    store_name: "Kopitiam",
    type: { _id: "1", name: "Food & Beverage Tenant" },
    auditdate: "2018-01-03T19:04:28.809Z",
    performancescore: 96,
    noncomplainces: [
      { name: "professionalism_02", resolved: false },
      { name: "staff_hygiene_02", resolved: false },
      { name: "environment_cleanliness_02", resolved: false },
    ],
    noofnoncompliances: 3,
  },*/
  {
    Tenant_id: "3",
    auditid: "3",
    institution: { _id: "2", name: "SGH" },
    store_name: "Presents",
    type: { _id: "2", name: "Non Food & Beverage Tenant" },
    auditdate: "2018-01-03T19:04:28.809Z",
    performancescore: 96,
    noncomplainces: [
      { name: "professionalism_02", resolved: false },
      { name: "staff_hygiene_02", resolved: false },
      { name: "environment_cleanliness_02", resolved: false },
    ],
    noofnoncompliances: 3,
  },
  {
    Tenant_id: "4",
    auditid: "4",
    institution: { _id: "6", name: "OCH" },
    store_name: "ToastBox",
    type: { _id: "1", name: "Food & Beverage Tenant" },
    auditdate: "2018-01-03T19:04:28.809Z",
    performancescore: 96,
    noncomplainces: [
      { name: "professionalism_02", resolved: false },
      { name: "staff_hygiene_02", resolved: true},
      { name: "environment_cleanliness_02", resolved: false },
    ],
    noofnoncompliances: 3,
  },
  {
    Tenant_id: "5",
    auditid: "5",
    institution: { _id: "1", name: "CGH" },
    store_name: "Popular",
    type: { _id: "2", name: "Non Food & Beverage Tenant" },
    auditdate: "2018-01-03T19:04:28.809Z",
    performancescore: 95,
    noncomplainces: [
      { name: "professionalism_02", resolved: false },
      { name: "staff_hygiene_02", resolved: true },
      { name: "environment_cleanliness_02", resolved: false },
    ],
    noofnoncompliances: 3,
  },
  {
    Tenant_id: "6",
    auditid: "6",
    institution: { _id: "1", name: "CGH" },
    store_name: "MrBean",
    type: { _id: "1", name: "Food & Beverage Tenant" },
    auditdate: "2018-01-03T19:04:28.809Z",
    performancescore: 100,
    noncomplainces: [],
    noofnoncompliances: 0,
  },
  {
    Tenant_id: "7",
    auditid: "7",
    institution: { _id: "6", name: "OCH" },
    store_name: "Flowers",
    type: { _id: "2", name: "Non Food & Beverage Tenant" },
    auditdate: "2018-01-03T19:04:28.809Z",
    performancescore: 98,
    noncomplainces: [
      { name: "professionalism_02", resolved: false },
      { name: "staff_hygiene_02", resolved: false },
      { name: "environment_cleanliness_02", resolved: false },
    ],
    noofnoncompliances: 3,
  },
  {
    Tenant_id: "8",
    auditid: "8",
    institution: { _id: "4", name: "SKH" },
    store_name: "Chicken",
    type: { _id: "1", name: "Food & Beverage Tenant" },
    auditdate: "2018-01-03T19:04:28.809Z",
    performancescore: 100,
    noncomplainces: [],
    noofnoncompliances: 0,
  },
  {
    Tenant_id: "9",
    auditid: "9",
    institution: { _id: "4", name: "SKH" },
    store_name: "Fairprice",
    type: { _id: "1", name: "Food & Beverage Tenant" },
    auditdate: "2018-01-03T19:04:28.809Z",
    performancescore: 100,
    noncomplainces: [
      { name: "professionalism_02", resolved: false },
      { name: "staff_hygiene_02", resolved: false },
    ],
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
