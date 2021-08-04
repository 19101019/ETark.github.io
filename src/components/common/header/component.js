import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeaderComponent = (props) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", getOffsetWindow)
  }, [])

  function getOffsetWindow() {
    setOffset(window.pageYOffset)
  }

  return (
    <nav className='navbar navbar-expand-lg '>
      <div className="container py-2 px-4">
        <Link to="/" className="navbar-brand">
        	ETark
        </Link>
        <button className="navbar-toggler custom-toggler btn" data-toggle="collapse" data-target="#CollapseNavbar" aria-controls="CollapseNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="CollapseNavbar">
          <ul className={`navbar-nav ml-auto text-center ${offset > 200 ? "move-right-with-join" : "move-right-without-join"}`}>
            <li className='nav-item px-sm-2' >
              <Link to='/' className="nav-link" >
               How to use
              </Link>
            </li>
            <li className='nav-item px-sm-2'>
              <Link to='/' className="nav-link" >
                About Us
              </Link>
            </li>
            <li className='nav-item px-sm-2' >
              <Link to='/' className="nav-link">
                Contact Us
              </Link>
            </li>
            <li className='nav-item px-sm-2' >
              <Link to='/' className="nav-link">
               Login
              </Link>
            </li>
            <li className='nav-item px-sm-3'>
              <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-violet">
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;
