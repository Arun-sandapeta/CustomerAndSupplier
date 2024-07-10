import React from 'react'
import { useState } from 'react';
// import { Link } from 'react-router-dom';
import NeoLogo from "../Assets/Logo.svg";
import Dashboard from "../Assets/Dashboard.svg";
import Customers from "../Assets/Customers.svg";
import suppliers from "../Assets/suppliers.svg";
import Projects from "../Assets/Projects.svg";
import Contracts from "../Assets/Contracts.svg";
import Timesheet from "../Assets/Timesheet.svg";
import Employee from "../Assets/Employee.svg";
import Announcements from "../Assets/Announcements.svg";
import UserManagement from "../Assets/UserManagement.svg";
import Company from "../Assets/Company.svg";
import Recruitment from "../Assets/Recruitment.svg";
import Leaves from "../Assets/Leaves.svg";
import X from "../Assets/X.svg";
import "./sidebar.css";
// import TableContent from './TableContent';


const Sidebar = () => {
    const [userManagementOpen, setUserManagementOpen] = useState(false);

  const toggleUserManagement = () => {
    setUserManagementOpen(!userManagementOpen);
  };
  return (
    // <div>
      <div className="side-navbar">
            <div className="navbar-left">
            <div className="X">
             <img src={X} alt="X" />
             </div>
              <div className="NeoLogo">
                <img src={NeoLogo} alt="YouTube NeoLogo" />
              </div>
            </div>
            <ul>
              <li>
                <div className="Side-box"></div>
                <img src={Dashboard} alt="Dashboard" /> Dashboard
              </li>
              <li>
              <img src={Customers} alt="Customers" /> Customers
              </li>
              <li>
                <img src={suppliers} alt="Suppliers" /> Suppliers
              </li>
              <li>
                <img src={Projects} alt="Projects" /> Projects
              </li>
              <li>
                <img src={Contracts} alt="Contracts" /> Contracts
              </li>
              <li>
                <img src={Timesheet} alt="Timesheet" /> Time Sheet
              </li>
              <li>
                <img src={Employee} alt="Employee" /> Employee Tasks
              </li>
              <li>
                <img src={Announcements} alt="Announcements" /> Announcements
              </li>
              <li onClick={toggleUserManagement} className="dropdown-main-menu">
                <div className="sub-menu">
                  <img src={UserManagement} alt="User Management" />
                  <span>User Management</span>
                </div>
                {userManagementOpen && (
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#user1">User 1</a>
                    </li>
                    <li>
                      <a href="#user2">User 2</a>
                    </li>
                    <li>
                      <a href="#user3">User 3</a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <img src={Company} alt="Company" /> Company
              </li>
              <li>
                <img src={Recruitment} alt="Recruitment" /> Recruitment
              </li>
              <li>
                <img src={Leaves} alt="Leaves" /> Leaves
              </li>
            </ul>
           </div>
    // </div>
  )
}

export default Sidebar
