import { Button } from "react-bootstrap";
import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import SeeUpdates from "../components/SeeUpdatesButton";


//noofnoncomplainces = length of noncompliances list

//render in ongoin table
//on press solved, change resolved variable to true
// once all resolved = true, create finished_date 

//post audit to resolvedauditstable



export const audits = [
  {
    store_name: "1",
    auditid: "1",
    institution: { _id: "1", name: "CGH" },
    store_name: "Subway",
    type: { _id: "1", name: "Food & Beverage Tenant" },
    date_recorded: "2018-01-03T19:04:28.809Z",
    audit_score: 96,
    noncompliances: [
      { key: "professionalism_02", resolved: false, value:{message: "hello", image:"bleh", actor:"staff"} },
      { key: "staff_hygiene_02", resolved: false },
      { key: "environment_cleanliness_02", resolved: false },
    ],

  },

  // noncomplianceslength => when noncompliances[i].resolved==true=> -1
  /*{
    store_name: "2",
    staff_email: "2",
    institution_name: "KKH",
    store_name: "Kopitiam",
    category:"F&B",
    date_recorded: "2018-01-03T19:04:28.809Z",
    audit_score: 96,
    noncompliances: [
      { key: "professionalism_02", resolved: false, value:{message: , image:, actor:"staff"} },
      { key: "staff_hygiene_02", resolved: false },
      { key: "environment_cleanliness_02", resolved: false },
    ],
    noofnoncompliances: 3,
  },*/
  {
    store_name: "3",
    auditid: "3",
    institution: { _id: "2", name: "SGH" },
    store_name: "Presents",
    type: { _id: "2", name: "Non Food & Beverage Tenant" },
    date_recorded: "2018-01-03T19:04:28.809Z",
    audit_score: 96,
    noncompliances: [
     {key: "professionalism_02", resolved: false },
     {key: "staff_hygiene_02", resolved: false },
     {key: "environment_cleanliness_02", resolved: false },
    ],
    
  },
  {
    store_name: "4",
    auditid: "4",
    institution: { _id: "6", name: "OCH" },
    store_name: "ToastBox",
    type: { _id: "1", name: "Food & Beverage Tenant" },
    date_recorded: "2018-01-03T19:04:28.809Z",
    audit_score: 96,
    noncompliances: [
     {key: "professionalism_02", resolved: false },
     {key: "staff_hygiene_02", resolved: true},
     {key: "environment_cleanliness_02", resolved: false },
    ],
   
  },
  {
    store_name: "5",
    auditid: "5",
    institution: { _id: "1", name: "CGH" },
    store_name: "Popular",
    type: { _id: "2", name: "Non Food & Beverage Tenant" },
    date_recorded: "2018-01-03T19:04:28.809Z",
    audit_score: 95,
    noncompliances: [
     {key: "professionalism_02", resolved: true },
     {key: "staff_hygiene_02", resolved: true },
     {key: "environment_cleanliness_02", resolved: true },
    ],
    
  },
  {
    store_name: "6",
    auditid: "6",
    institution: { _id: "1", name: "CGH" },
    store_name: "MrBean",
    type: { _id: "1", name: "Food & Beverage Tenant" },
    date_recorded: "2018-01-03T19:04:28.809Z",
    audit_score: 100,
    noncompliances: [],
   
  },
  {
    store_name: "7",
    auditid: "7",
    institution: { _id: "6", name: "OCH" },
    store_name: "Flowers",
    type: { _id: "2", name: "Non Food & Beverage Tenant" },
    date_recorded: "2018-01-03T19:04:28.809Z",
    audit_score: 98,
    noncompliances: [
     {key: "professionalism_02", resolved: false },
     {key: "staff_hygiene_02", resolved: false },
     {key: "environment_cleanliness_02", resolved: false },
    ],

  },
  {
    store_name: "8",
    auditid: "8",
    institution: { _id: "4", name: "SKH" },
    store_name: "Chicken",
    type: { _id: "1", name: "Food & Beverage Tenant" },
    date_recorded: "2018-01-03T19:04:28.809Z",
    audit_score: 100,
    noncompliances: [],
  },
  {
    store_name: "9",
    auditid: "9",
    institution: { _id: "4", name: "SKH" },
    store_name: "Fairprice",
    type: { _id: "1", name: "Food & Beverage Tenant" },
    date_recorded: "2018-01-03T19:04:28.809Z",
    audit_score: 100,
    noncompliances: [
     {key: "professionalism_02", resolved: false },
     {key: "staff_hygiene_02", resolved: false },
    ],
  },
];

/*
export const RenderAudit = (audit, index) => {
  return (
    <tr key={index}>
      <td>{audit.tenantname}</td>
      <td>{audit.date_recorded}</td>
      <td>
        <SeeUpdates key={audit.auditid} itemId={audit.auditid} />
      </td>
      <td>{audit.audit_score}</td>
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
