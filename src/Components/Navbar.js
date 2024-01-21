import React from 'react'
import PropTypes from 'prop-types'
import { a } from 'react-router-dom'

// import {
//   BrowserRouter,
//   Switch,
//   Route,
//   Routes,
// } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
        <nav className={`navbar navbar-expand-lg navbar-${(props.mode==='light')?"success":"dark"} bg-${(props.mode==='light')?"light":"dark"}`}>
        <div className="container-fluid">
            <a className="navbar-brand " to="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-a active" aria-current="page" to="/alert">{props.home}</a>
                </li>
                <li className="nav-item">
                <a className="nav-a active" aria-current="page" to="/about">{props.about}</a>
                </li>
                <li className="nav-item">
                <a className="nav-a active" aria-current="page" to="/textform">Text Form</a>
                </li>
            </ul>
            
            {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
             */}
             </div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
              <label className={`form-check-label text-${(props.mode==='dark')?'light':'dark'}`} htmlFor="flexSwitchCheckDefault">Enable Dark</label>
            </div>
        </div>
        </nav>
    </>
  )
}
Navbar.defaultProps = {
  title : 'SetTitle',
  home  : 'SetHome',
  about : 'SetAbout'
}