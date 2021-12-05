import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./wishlistForm.css";

import styled from "styled-components";
import Wishlistmenu from "./wishlistMenu";

const Addwishlist = ({ parentCallback }) => {
  const [wishList, setWishList] = useState([]);
  const [entry, setEntry] = useState([]);

  return (
    <div>
      <div className="FormContainer">
        <form className="Form" onSubmit={(e) => e.preventDefault()}>
          <div className="Title">Add Wishlist </div>
          <div className="label">Name </div>
          <input
            name="Wishlist_Name"
            type="text"
            placeholder="Wishlist Name"
            onChange={(e) => setEntry(e.target.value)}
            value={entry}
          />

          <button
            className="Submitbtn"
            onClick={(e) => {
              e.preventDefault();
              setWishList([...wishList, entry]);
              setEntry("");
              parentCallback(wishList);
            }}
          >
            Done
          </button>
          <button
            className="Cancelbtn"
            type="cancel"
            onclick="javascript:window.location='/Home';"
          >
            <span> Cancel</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addwishlist;
