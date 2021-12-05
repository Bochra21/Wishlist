import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar/navbar.css";
import Addwishlist from "./AddwishlistForm";
import "./Style.css";
import NavBar from "./navbar";
//import Wishlists from "./wishlist";
const Wishlistmenu = () => {
  const [childData, setChildData] = useState([]);
  //const [] = usedtate();
  const [showForm, ShowForm] = useState(false);
  let handleCallback = (data) => {
    setChildData(data);
  };

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
                  onClick={() => ShowForm(!showForm)}
                >
                  + Add Wishlist
                </NavLink>
              </li>
              <div>
                {childData.map((item, key) => {
                  return <button className="button3">{item}</button>;
                })}
              </div>
            </div>
          </ul>
          <div>
            {showForm ? <Addwishlist parentCallback={handleCallback} /> : null}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Wishlistmenu;
