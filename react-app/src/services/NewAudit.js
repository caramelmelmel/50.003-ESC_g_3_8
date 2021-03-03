import { Button } from "react-bootstrap";
import React, { Component, useState } from "react";
import { NavLink } from "react-router-dom";

export const audits = [
  {
    auditid: "5b21ca3eeb7f6fbccd471815",
    institution: "CGH",
    tenantname: "Subway",
    category: "Food & Beverage Tenant",
    auditdate: "2018-01-03T19:04:28.809Z",
    resolveaudit: 0, //this should auto =1 when noofnoncompliances =0
    performancescore: "96",
    noofnoncompliances: "4",
  },

  {
    auditid: "5b21ca3eeb7f6fbccd471815",
    institution: "CGH",
    tenantname: "Subway",
    category: "Food & Beverage Tenant",
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
        <Button variant="primary">
          <NavLink to="/see-updates">Open Updates File</NavLink>
        </Button>
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
}*/

/*export function saveMovie(movie) {
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
    return movieInDb;*/
//move audits to reports
