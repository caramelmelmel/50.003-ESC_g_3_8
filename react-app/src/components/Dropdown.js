import React, { Component, useState, useRef, useEffect } from "react";
import { dropdownTypes, dropdownInstitutes } from "../services/Dropdownmenu";
import * as FiIcons from "react-icons/fi";
import "../index.css";
import { audits, RenderAudit } from "../services/NewAudit";

export default function Dropdown({
  options,
  id,
  label,
  prompt,
  value,
  onChange,
}) {
  const [open, setOpen] = useState(false);
  //close dropdown when click elsewhere
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  function close(e) {
    //console.dir([e.target, ref.current]);
    setOpen(e && e.target === ref.current);
    //console.log(e.target);
  }

  const Filterthis = (option) => {
    //console.log(option);
    console.log(option[label]);
    if (option[label] == "Non Food & Beverage") {
      //console.log("found");
      let filtereddata = audits.filter(
        (audit) => audit.type == "Non Food & Beverage Tenant"
      );
      //console.log(audits);
      console.log(filtereddata);
    }
    if (option[label] == "Food & Beverage") {
      let filtereddata = audits.filter(
        (audit) => audit.type == "Food & Beverage Tenant"
      );

      console.log(filtereddata);
    }
    if (option[label] == "None") {
      let filtereddata = audits;
      console.log(filtereddata);
    }

    if (option[label] == "CGH") {
      let filtereddata = audits.filter((audit) => audit.institution == "CGH");
      console.log(filtereddata);
      return filtereddata;
    }

    if (option[label] == "SGH") {
      let filtereddata = audits.filter((audit) => audit.institution == "SGH");
      console.log(filtereddata);
      return filtereddata;
    }

    if (option[label] == "KKH") {
      let filtereddata = audits.filter((audit) => audit.institution == "KKH");
      console.log(filtereddata);
      return filtereddata;
    }

    if (option[label] == "SKH") {
      let filtereddata = audits.filter((audit) => audit.institution == "SKH");
      console.log(filtereddata);
      return filtereddata;
    }

    if (option[label] == "NCCS") {
      let filtereddata = audits.filter((audit) => audit.institution == "NCCS");
      console.log(filtereddata);
      return filtereddata;
    }
    if (option[label] == "OCH") {
      let filtereddata = audits.filter((audit) => audit.institution == "OCH");
      console.log(filtereddata);
    }
  };

  return (
    <div className="dropdown">
      <div className="control" onClick={() => setOpen((prev) => !prev)}>
        <div className="selected-value" ref={ref}>
          <FiIcons.FiFilter size="10" style={{ marginRight: "10" }} />
          {value ? value[label] : prompt}
        </div>
        <div className={`arrow ${open ? "open" : null}`} />
      </div>
      <div className={`options ${open ? "open" : null}`}>
        {options.map((option) => (
          <div
            key={option[id]}
            className={`option ${value === option ? "selected" : null}`}
            onClick={() => {
              onChange(option);
              setOpen(false);
              Filterthis(option);
            }}
          >
            {option[label]}
          </div>
        ))}
      </div>
    </div>
  );
}

export let filtereddata;
