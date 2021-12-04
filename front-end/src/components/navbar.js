import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar/navbar.css";

import Productmenu from "./productsMenu";
import Wishlistmenu from "./wishlistMenu";

function Navbar() {
  const [showWlMenu, ShowWlMenu] = useState(false);
  const [showpl, setShowpl] = useState(false);
  // const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <ul className="nav-menu">
            <div className="nav-item">
              <li>
                <NavLink
                  exact
                  to="/Home"
                  activeClassName="active"
                  className="nav-links"
                  onClick={() => ShowWlMenu(!showWlMenu)}
                >
                  My wishlists
                </NavLink>
              </li>
            </div>
            <div className="nav-item">
              <li>
                <NavLink
                  exact
                  to="/Products"
                  activeClassName="active"
                  className="nav-links"
                  onClick={() => setShowpl(!showpl)}
                  //  onClick={handleClick}
                >
                  My products
                </NavLink>
              </li>
            </div>
            <div className="nav-item">
              <li>
                <NavLink
                  exact
                  to="/blog"
                  activeClassName="active"
                  className="nav-links"
                  //onClick={}
                >
                  Blog
                </NavLink>
              </li>
            </div>
            <div className="nav-item">
              <li>
                <NavLink
                  exact
                  to="/contact"
                  activeClassName="active"
                  className="nav-links"
                  //  onClick={}
                >
                  Contact Us
                </NavLink>
              </li>
            </div>
          </ul>
          <div></div>
        </div>
      </nav>

      <div> {showWlMenu ? <Wishlistmenu /> : null} </div>
      <div> {showpl ? <Productmenu /> : null} </div>
    </>
  );
}

export default Navbar;
