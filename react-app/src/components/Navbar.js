import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import "../index.css";
//import { FaBars } from "react-icons/fa";
import { Sidebar } from "./Sidebar";
import { IconContext } from "react-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { getActor } from './../services/actorUpdate';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const actor = getActor();

  return (
    <>
      <IconContext.Provider value={{ color: "black" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars
              onClick={showSidebar}
              style={{
                position: "absolute",
                left: 20,
                top: 20,
              }}
            />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {Sidebar.map((item, index) => { if (item.actor == "both" || item.actor == actor) {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            }}
            )};
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

/*
            {Sidebar.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            */

/*
            {Sidebar.map((item, index) => { if (item.actor == "both" || item.actor == "staff") {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            } else if (item.actor == "both" || item.actor == "tenant") {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            }

            })}
*/