import React, { useState } from "react";
import "./Style.css";
import { Link } from "react-router-dom";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:1337/api/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();

    if (data.user) {
      localStorage.setItem("token", data.user);
      alert("Login successful");
      window.location.href = "/Home";
    } else {
      alert("Please check your username and password");
    }
  }
  return (
    <div className="page">
      <div className="container">
        <form className="form" onSubmit={loginUser}>
          <tr className="box">
            <td className="text">
              <label>Email</label>
            </td>
            <td className="input">
              <input
                name="email"
                type="text"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </td>
          </tr>{" "}
          <br />
          <tr className="box">
            <td className="text">
              <label>Password</label>
            </td>
            <td className="input">
              <input
                name="password"
                type="password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </td>
          </tr>
          <button className="button1" onClick={loginUser}>
            <span> Login </span>
          </button>{" "}
          <Link to="/signup">
            <button className="button2">
              <span> Create an account </span>
            </button>{" "}
          </Link>
        </form>
      </div>
    </div>
  );
}
export default Signin;
