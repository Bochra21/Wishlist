import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./wishlistForm.css";

import styled from "styled-components";
import Wishlistmenu from "./wishlistMenu";

//import Wishlists from "./wishlist";

class Addwishlist extends Component {
  /*
  constructor(props) {
    super(props);
    this.state = {
      wishlist: ["wishlist 1", "wishlist 2"],
    };
  }
  addWishlist(e) {
    e.preventDefault();
    const wishlist = this.state;
    const newItem = "test";
    this.setState({
      wishlist: [...this.state.wishlist, newItem],
    });
  }*/

  //state = { visible: false };

  render() {
    return (
      <div>
        <div className="FormContainer">
          <form className="Form">
            <div className="Title">Add Wishlist </div>
            <div className="label">Name </div>
            <input
              name="Wishlist_Name"
              type="text"
              placeholder="Wishlist Name"
            />

            <button
              className="Submitbtn"
              onclick={(e) => {
                this.addWishlist(e);
              }}
            >
              <span>Done </span>
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
  }
}

export default Addwishlist;

/*value={WishlistName}
onChange={(e) => setName(e.target.value)}
*************************************************
{wishlist.map((item) => {
  return <p>key={item}</p>;
})}
*/
