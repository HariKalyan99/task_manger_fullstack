import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="body">
        <div class="form">
      <form id="formSubmit">
        <h1>Sign in</h1>
        <label for="email"></label>
        <input type="email" id="email" required placeholder="Email" />
        <label for="password"></label>
        <input type="password" id="password" required placeholder="Password" />
        <button type="submit">Submit</button>
        <Link to={"/"} style={{color: "white", margin: "5px"}}>
          Don't have an account? Register
        </Link>
      </form>
    </div>
    </div>
  );
};

export default Login;
