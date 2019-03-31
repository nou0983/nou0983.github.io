import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top"
      id="main-nav"
    >
      <div className="container">
        <a href="index.html" className="navbar-brand">
          LoopLAB
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="home-section"
                spy={true}
                smooth={true}
                offset={0}
                duration={800}
                className="nav-link"
              >
                Home
              </Link>
            </li>
            <li className="nav-item ml-2">
              <Link
                activeClass="active"
                to="explore-head-section"
                spy={true}
                smooth={true}
                offset={0}
                duration={800}
                className="nav-link"
              >
                Explorer
              </Link>
            </li>
            <li className="nav-item ml-2">
              <Link
                activeClass="active"
                to="create-head-section"
                spy={true}
                smooth={true}
                offset={0}
                duration={800}
                className="nav-link"
              >
                Create
              </Link>
            </li>
            <li className="nav-item ml-2">
              <Link
                activeClass="active"
                to="share-head-section"
                spy={true}
                smooth={true}
                offset={6}
                duration={800}
                className="nav-link"
              >
                Share
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
