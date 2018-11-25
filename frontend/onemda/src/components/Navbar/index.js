import React from 'react';
import './index.css'
import logo from './logo.png'
import login_logo from './login_icon.png'
const Navbar =()=> {
  return (

  <nav id="navbar" className="navbar navbar-expand-sm navbar-dark bg-dark main-nav">
    <div className="container-fluid justify-content-center">
      <ul className="nav navbar-nav flex-fill w-100 flex-nowrap">
        <li className="nav-item">
          <a className="nav-link" href="#"><img src={logo} alt="logo" height="80px"/></a>
        </li>
      </ul>
      <ul className="nav navbar-nav flex-fill w-100 justify-content-center">
        <li className="nav-item center-heading">Daily Evaluation Form</li>
      </ul>
      <ul className="nav navbar-nav flex-fill w-100 justify-content-end">
        <li className="nav-item">
          <a className="nav-link" href="#">
            <img src={login_logo} alt="logo" height="80px"/>
          </a>
        </li>
      </ul>
    </div>
  </nav>

  )
}

export default Navbar;
