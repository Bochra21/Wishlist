import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar/navbar.css";
import "./Style.css";
import AddProduct from "./AddProduct";

//import Wishlists from "./wishlist";
function Product() {
  const [childData, setChildData] = useState([]);
  let handleCallback = (data) => {
    setChildData(data);
  };
  const [showForm, ShowForm] = useState(false);
  return (
    <>
      <nav className="WishlistMenu">
        <div>
          <ul className="nav-menu2">
            <div className="nav-item2">
              <li>
                <NavLink
                  exact
                  to="/Products"
                  activeClassName="active"
                  onClick={() => ShowForm(!showForm)}
                >
                  + Add Product
                </NavLink>
              </li>
            </div>
          </ul>
          {showForm ? <AddProduct parentCallback={handleCallback} /> : null}
        </div>
        <div>
          {childData.map((item, key) => {
            return <button className="button3">{item}</button>;
          })}
        </div>
      </nav>
    </>
  );
}

export default Product;
