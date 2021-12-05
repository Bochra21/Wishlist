import React, { useState } from "react";
import "./Style.css";
import "./Form.css";
const AddProduct = ({ parentCallback }) => {
  const [product, setProduct] = useState([]);
  const [entry, setEntry] = useState([]);

  return (
    <div>
      <div className="Formcontainer">
        <form onSubmit={(e) => e.preventDefault()}>
          <label className="label">Name</label>
          <input
            onChange={(e) => setEntry(e.target.value)}
            value={entry}
            type="text"
            placeholder="Product Name"
          />

          <label className="label">Price</label>

          <input type="text" placeholder="Price" />
          <label className="label">Currency</label>

          <select>
            <option> TND </option>
            <option> USD </option>
            <option> EURO </option>
          </select>

          <tr className="box2">
            {" "}
            Description
            <textarea rows="4" cols="100">
              {" "}
            </textarea>
          </tr>
          <tr className="box2">
            <td>
              <label>Status</label>

              <select>
                <option> To buy </option>
              </select>
            </td>
          </tr>
          <tr className="box2">
            <td>
              {" "}
              <button className="button1">
                <span>Cancel</span>{" "}
              </button>{" "}
            </td>
            <td>
              <button
                className="button2"
                onClick={(e) => {
                  e.preventDefault();
                  setProduct([...product, entry]);
                  setEntry("");
                  parentCallback(product);
                }}
              >
                <span>Save </span>{" "}
              </button>{" "}
            </td>
          </tr>
        </form>
      </div>
    </div>
  );
};
export default AddProduct;
