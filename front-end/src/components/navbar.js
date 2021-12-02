import React, { component } from "react";
import { NavLink } from "react-router-dom";
import "./navbar/navbar.css";

import Productmenu from "./productsMenu";
import Wishlistmenu from "./wishlistMenu";
class Navbar extends component {
  state = { visible: false }; //this component

  //const [click, setClick] = useState(false);*/

  // const handleClick = () => setClick(!click);
  render() {
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
                    onClick={() => {
                      this.setState({ visible: true });
                    }}
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
                    onClick={() => {
                      this.setState({ visible: true });
                    }}
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

        <div> {this.state.visible ? <Productmenu /> : null} </div>
      </>
    );
  }
}

export default Navbar;
