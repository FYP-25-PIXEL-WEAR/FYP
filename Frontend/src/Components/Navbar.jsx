import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/home"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Men
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  WoMen
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Kids
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sale
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Categories</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <button className="btn btn-dark">
                    Design Your Custom Clothes
                  </button>
                </a>
              </li>
            </ul>
            <ul className=""></ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
