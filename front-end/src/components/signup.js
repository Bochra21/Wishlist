import React, { useState } from "react";
import "./Style.css";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:1337/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.status === "ok") {
      navigate("/signin");
    }
  }

  return (
    <div className="container">
      <form className="form" onSubmit={registerUser}>
        <tr className="box">
          <td className="text">
            {" "}
            <label>Full Name</label>
          </td>
          <td className="input">
            {" "}
            <input
              name="fullname"
              type="text"
              placeholder="Enter your fullname"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </td>
        </tr>
        <br />
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
        <button className="button1" onClick={registerUser}>
          <span> Create Account </span>
        </button>{" "}
        <Link to="/signin">
          <button className="button2">
            <span> I have an account </span>
          </button>{" "}
        </Link>
      </form>
    </div>
  );
}

export default Signup;
