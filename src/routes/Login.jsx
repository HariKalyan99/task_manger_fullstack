import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BlogStore } from "../store/Blogsstore";

const Login = () => {
  const {loginUser} = useContext(BlogStore)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      loginUser(email, password);
    } else {
      alert("Invalid username and password");
    }
  };


  return (
    <div className="body">
      <div className="form">
        <form id="formSubmit" onSubmit={(e) => handleLoginSubmit(e)}>
          <h1>Sign in</h1>
          <label htmlFor="email"></label>
          <input type="email" id="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            required
            placeholder="Password"
            value={password} onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Submit</button>
          <Link to={"/"} style={{ color: "white", margin: "5px" }}>
            Don't have an account? Register
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
