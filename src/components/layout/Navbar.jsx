import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.scss';

const NavbarComponent = () => {
    return (
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          {/* Navbar Brand (Logo) */}
          <Link className="navbar-brand" to="/">
            VitalPath
          </Link>
  
          {/* Toggler for Mobile View */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          {/* Navbar Links */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {/* Home Link */}
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
  
              {/* Blog Link */}
              <li className="nav-item">
                <Link className="nav-link" to="/blog">Blog</Link>
              </li>
  
              {/* Dropdown for Business */}
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Business
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><Link className="dropdown-item" to="/business/overview">Overview</Link></li>
                  <li><Link className="dropdown-item" to="/business/results">Results</Link></li>
                  <li><Link className="dropdown-item" to="/business/mental-health">Mental Health</Link></li>
                  <li><Link className="dropdown-item" to="/business/get-in-touch">Get in Touch</Link></li>
                </ul>
              </li>
  
              {/* Contact Button */}
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  <button className="btn btn-primary">Contact</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default NavbarComponent;