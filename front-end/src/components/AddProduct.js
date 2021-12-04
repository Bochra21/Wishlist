import React from "react";
import "./Style.css";
function ProductForm() {
  return (
    <div className="page">
      <div className="container2">
        <form className="form">
          <tr>
            <td>
              <label>Name</label>
              <input placeholder="Product Name" />
            </td>
            <td>
              <label>Price</label>
              <input placeholder="Price" />
            </td>{" "}
            <td>
              <label>Currency</label>
              <select>
                <option> TND </option>
                <option> USD </option>
                <option> EURO </option>
              </select>
            </td>
          </tr>
          <tr>
            {" "}
            <textarea rows="4" cols="60">
              {" "}
            </textarea>
          </tr>
          <tr>
            <td>
              <label>Status</label>

              <select>
                <option> To buy </option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <button className="button1">
                <span>Cancel</span>{" "}
              </button>{" "}
            </td>
            <td>
              <button className="button2">
                <span>Save </span>{" "}
              </button>{" "}
            </td>
          </tr>
        </form>
      </div>
    </div>
  );
}
export default ProductForm;
