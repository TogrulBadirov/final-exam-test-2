import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
  return (
    <nav>
      <div className="container">
        <div id="desktop-nav">
          <div className="logo">
            <Link to="/"><span>Floral Studio</span></Link>
          </div>
          <div className="nav-actions">
            <ul className="nav-menu">
              <li className="nav-elements">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-elements">
                <Link>About Us</Link>
              </li>
              <li className="nav-elements">
                <Link>Portfolio</Link>
              </li>
              <li className="nav-elements">
                <Link>Pricing</Link>
              </li>
              <li className="nav-elements">
                <Link>Contacts</Link>
              </li>
              <li className="nav-elements">
                <Link to="/wishlist">wishlist</Link>
              </li>
              <li className="nav-elements">
                <Link to="/add-page">Add Page</Link>
              </li>
            </ul>
          </div>
        </div>

        <div id="mobile-nav">
          <div className="nav-top-part">
          <div className="logo">
            <span>Floral Studio</span>
          </div>
          <div className="nav-icon-burger">
            <button onClick={()=>setIsNavOpen(!isNavOpen)}><GiHamburgerMenu /></button>
          </div>
          </div>
          <div className={`sub-menu ${isNavOpen? "active":''}`}>
            <ul>
            <li className="nav-elements">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-elements">
                <Link>About Us</Link>
              </li>
              <li className="nav-elements">
                <Link>Portfolio</Link>
              </li>
              <li className="nav-elements">
                <Link>Pricing</Link>
              </li>
              <li className="nav-elements">
                <Link>Contacts</Link>
              </li>
              <li className="nav-elements">
                <Link to="/wishlist">wishlist</Link>
              </li>
              <li className="nav-elements">
                <Link to="/add-page">Add Page</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
