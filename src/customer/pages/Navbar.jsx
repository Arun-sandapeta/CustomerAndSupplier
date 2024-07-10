import React from 'react'
import Support from "../Assets/Support.svg";
import Setting from "../Assets/Setting.svg";
import Profile from "../Assets/Profile.svg";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="header-container">
      <nav className="navbar">
            <div className="navbar-right">
              <div className="Support">
                <img src={Support} alt="Support" /> Support
              </div>
              <div className="Setting">
                <img src={Setting} alt="Setting" /> Setting
              </div>
              <div className="Profile">
                <img src={Profile} alt="Profile" /> Profile
              </div>
            </div>
          </nav>
    </div>
  )
}

export default Navbar
