import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BlogStore } from "../store/Blogsstore";

const Signup = () => {
  const { saveUsers } = useContext(BlogStore);
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    saveUsers(username, password, confirmPassword, email);
  };
  return (
    <div className="body">
      <div className="form">
        <form id="formSubmit" onSubmit={(e) => handleSignupSubmit(e)}>
          <h1 className="reg-heading">Register</h1>
          <label htmlFor="username"></label>
          <input
            type="text"
            id="username"
            required
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password"></label>
          <input
            type="password"
            id="confirmPassword"
            required
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
