import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
        <nav className="navbar navbar-expand-lg navbar-dark backgrond-nav">
          <a className="navbar-brand ml-3"  href="/">
            <div className="text-nav">
              DOTA
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mr-5">
             
                <li className="nav-item">
                  <Link className="nav-link" to="/fav">
                    Favorite
                  </Link>
                </li>
            </ul>
          </div>
        </nav>
      </div>
    );
}

export default Navbar;
