import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {

    const [getUserName, setUsername] = useState("");
  return (
    <div className="body">
      <div className="form">
        <form id="formSubmit">
          <h1 className="reg-heading">Register</h1>
          <label for="username"></label>
          <input type="text" id="username" required placeholder="Username" />
          <label for="email"></label>
          <input type="email" id="email" required placeholder="Email" />
          <label for="password"></label>
          <input
            type="password"
            id="password"
            required
            placeholder="Password"
          />
          <label for="password"></label>
          <input
            type="password"
            id="confirmPassword"
            required
            placeholder="Confirm Password"
          />
          <button type="submit">Submit</button>
          <Link to={"/login"} style={{ color: "white", margin: "5px" }}>
            Alredy registerd? Sign in
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
