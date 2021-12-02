import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./navbar/navbar.css";
import Addwishlist from "./AddwishlistForm";
import Signin from "./signin";
import NavBar from "./navbar";
//import Wishlists from "./wishlist";
class Wishlistmenu extends Component {
  state = { visible: false };

  render() {
    return (
      <>
        <nav className="WishlistMenu">
          <div>
            <ul className="nav-menu2">
              <div className="nav-item2">
                <li>
                  <NavLink
                    exact
                    to="/Home"
                    activeClassName="active"
                    className="nav-links"
                    onClick={() => {
                      this.setState({ visible: true });
                    }}
                  >
                    + Add Wishlist
                  </NavLink>
                </li>
              </div>
            </ul>
            <div>{this.state.visible ? <Addwishlist /> : null}</div>
          </div>
        </nav>
      </>
    );
  }
}

export default Wishlistmenu;
