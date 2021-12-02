import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./navbar/navbar.css";
import Signin from "./signin";
import NavBar from "./navbar";
//import Wishlists from "./wishlist";
class Productmenu extends Component {
  state = { visible: false };

  render() {
    return (
      <>
        <nav className="WishlistMenu">
          <div>
            <ul className="nav-menu2">
              <div className="nav-item2">
                <li>
                  <NavLink exact to="/Home" activeClassName="active">
                    + Add Product
                  </NavLink>
                </li>
              </div>
            </ul>
            <div></div>
          </div>
        </nav>
      </>
    );
  }
}

export default Productmenu;
