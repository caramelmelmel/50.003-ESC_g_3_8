import { Button } from "react-bootstrap";
import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import SeeUpdates from "../components/SeeUpdatesButton"

export const audits = [
  {
    auditid: "1",
    institution: "CGH",
    tenantname: "Subway",
    type: "Food & Beverage Tenant",
    auditdate: "2018-01-03T19:04:28.809Z",
    resolveaudit: 0, //this should auto =1 when noofnoncompliances =0
    performancescore: "96",
    noofnoncompliances: "4",
  },

  {
    auditid: "2",
    institution: "CGH",
    tenantname: "Kopitiam",
    type: "Food & Beverage Tenant",
    auditdate: "2018-01-03T19:04:28.809Z",
    resolveaudit: 0, //this should auto =1 when noofnoncompliances =0
    performancescore: "96",
    noofnoncompliances: "3",
  },
  {
    auditid: "3",
    institution: "SGH",
    tenantname: "Presents",
    type: "Non Food & Beverage Tenant",
    auditdate: "2018-01-03T19:04:28.809Z",
    resolveaudit: 0, //this should auto =1 when noofnoncompliances =0
    performancescore: "96",
    noofnoncompliances: "3",
  },
  {
    auditid: "4",
    institution: "NUH",
    tenantname: "ToastBox",
    type: "Food & Beverage Tenant",
    auditdate: "2018-01-03T19:04:28.809Z",
    resolveaudit: 0, //this should auto =1 when noofnoncompliances =0
    performancescore: "96",
    noofnoncompliances: "3",
  },
  {
    auditid: "5",
    institution: "CGH",
    tenantname: "Popular",
    type: "Non Food & Beverage Tenant",
    auditdate: "2018-01-03T19:04:28.809Z",
    resolveaudit: 0, //this should auto =1 when noofnoncompliances =0
    performancescore: "96",
    noofnoncompliances: "3",
  },
];



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




 /* 
export function getAudits() {
    return audits;
  }

export function getAudit(id) {
    return audits.find(m => m._id === id);
}

export function saveMovie(movie) {
    let movieInDb = movies.find(m => m._id === movie._id) || {};
    movieInDb.name = movie.name;
    movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
    movieInDb.numberInStock = movie.numberInStock;
    movieInDb.dailyRentalRate = movie.dailyRentalRate;
  
    if (!movieInDb._id) {
      movieInDb._id = Date.now();
      movies.push(movieInDb);
    }
  
    return movieInDb;
  }
  
export function finishAudit(id) {
    let movieInDb = movies.find(m => m._id === id);
    movies.splice(movies.indexOf(movieInDb), 1);
    return movieInDb;
//move audits to reports
*/