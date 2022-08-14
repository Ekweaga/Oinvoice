import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/" style={{color:'10374A', fontSize:'30px',textDecoration:'none'}}>O'Invoice</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup" >
        <div class="navbar-nav" >
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
          <Link class="nav-link" to="/aboutus">About Us</Link>
          <Link class="nav-link" to="/login">Login</Link>
       
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar