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
        title: 'Dashboard',
        path: '/dashboard',
        icon: <BsIcons.BsGraphUp />,
        cName: 'nav-text',
        actor: 'both'
    },
    {
        title: 'Reports',
        path: '/reports-staff',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text',
        actor: 'both'
    },
    {
        title: 'Audits',
        path: '/audits-staff',
        icon: <IoIcons.IoIosClipboard />,
        cName: 'nav-text',
        actor: 'staff'
    },
    {
        title: 'Tenants',
        path: '/tenant-staff',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text',
        actor: 'staff'
    },
    {
        title: 'Non-Compliances',
        path: '/non-compliances-tenant',
        icon: <IoIcons.IoIosChatboxes />,
        cName: 'nav-text',
        actor: 'tenant'
    },
    {
        title: 'Logout',
        path: '/',
        icon: <AiIcons.AiOutlineLogout />,
        cName: 'nav-text',
        actor: 'both'
    },




]

//Messages use FaIcons.FaEnvelopeOpenText

export default Sidebar;
