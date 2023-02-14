import { NavLink } from "react-router-dom"

import "../styles/navbar.scss"

export const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink className="nav-button" to="/weald" >
        <div className="nav-button-text">Weald</div>
      </NavLink>

      <NavLink className="nav-button" to="/warrens" >
        <div className="nav-button-text">Warrens</div>
      </NavLink>

      <NavLink className="nav-button" to="/ruins" >
        <div className="nav-button-text">Ruins</div>
      </NavLink>

      <NavLink className="nav-button" to="/cove" >
        <div className="nav-button-text">Cove</div>
      </NavLink>
    </nav>
  )
}