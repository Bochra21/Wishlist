import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar/navbar.css";
import "./Style.css";
import ProductForm from "./AddProduct";

//import Wishlists from "./wishlist";
function Product() {
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
          <div>{showForm ? <ProductForm /> : null}</div>
        </div>
      </nav>
    </>
  );
}

export default Product;
