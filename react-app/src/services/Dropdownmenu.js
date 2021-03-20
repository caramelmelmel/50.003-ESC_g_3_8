import { Button } from "react-bootstrap";
import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { audits } from "./NewAudit";


export const types = [
  { _id: "1", name: "Food & Beverage Tenant" },

  { _id: "2", name: "Non Food & Beverage Tenant" },


];

export function getTypes() {
  return types.filter(g => g);
}


export const institutes = [
  { _id:"1", name: "CGH" },

  { _id:"2", name: "SGH" },

  { _id:"3", name: "KKH" },

  { _id:"4", name: "SKH" },

  { _id:"5", name: "NCCS" },

  { _id:"6", name: "OCH" },

];

export function getInstitutes() {
  return institutes.filter(g => g);
}
