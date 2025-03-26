import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const lightMode = { color: "black" };
  const darkMode = { color: "white" };


  return (
    <nav
      className={`navbar navbar-expand-lg navbar -${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to="/"
          style={props.mode === "light" ? lightMode : darkMode}
        >
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/"
                style={props.mode === "light" ? lightMode : darkMode}
              >
                Home
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={props.mode === "light" ? lightMode : darkMode}
              >
                Movies
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="/"
                  >
                    Bollywood
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/"
                  >
                    Hollywood
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/"
                  >
                    Anime
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={props.mode === "light" ? lightMode : darkMode}
              >
                Genre
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="/"
                  >
                    Action
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/"
                  >
                    Adventure
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/"
                  >
                    Comedy
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={props.mode === "light" ? lightMode : darkMode}
              >
                Web Series
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="/"
                  >
                    K-Drama
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/"
                  >
                    NetFlix
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/"
                  >
                    Jio Hotstar
                  </a>
                </li>
              </ul>
            </li>


            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/about"
                style={props.mode === "light" ? lightMode : darkMode}
              >
                About Us
              </Link>
            </li>

          </ul>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
              style={props.mode === "light" ? lightMode : darkMode}
            >
              {props.mode ==="dark"?"Enable Dark Mode":"Enable Light Mode"}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Understanding proptypes
Navbar.propTypes = {
  title: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Your Navbar title here",
};
