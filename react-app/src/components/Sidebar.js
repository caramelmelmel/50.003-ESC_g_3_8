import React, { Component } from "react";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from 'react-icons/io';
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import '../index.css'



export const Sidebar = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Dashboard',
        path: '/dashboard-staff',
        icon: <BsIcons.BsGraphUp />,
        cName: 'nav-text'
    },
    {
        title: 'Reports',
        path: '/reports-staff',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Audits',
        path: '/audits-staff',
        icon: <IoIcons.IoIosClipboard />,
        cName: 'nav-text'
    },
    {
        title: 'Tenants',
        path: '/tenant-staff',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Checklist FB',
        path: '/checklist-fb-staff',
        icon: <IoIcons.IoIosList />,
        cName: 'nav-text'
    },




]

//Messages use FaIcons.FaEnvelopeOpenText
