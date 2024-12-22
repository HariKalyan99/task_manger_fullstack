import React, { useContext } from "react";
import logo from "../assets/tasklogo.svg";

import { BlogStore } from "../store/Blogsstore";
import { Link } from "react-router-dom";
const Navigation = () => {
  const { switchBetween, getSwitch } = useContext(BlogStore);
  return (
    <nav
      className="navbar navbar-expand-md bg-dark sticky-top border-bottom"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link to={"/dashboard"} className="navbar-brand" >
          <img src={logo} alt="" height={40} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas"
          aria-controls="offcanvas"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvas"
          aria-labelledby="offcanvasLabel"
          style={{width: "280px"}}
        >
          <div className="offcanvas-header">
            
            <Link to={"/dashboard"} className="navbar-brand" href="#">
          <img src={logo} alt="" height={40} />
        </Link>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav flex-grow-1 justify-content-end">
              <li className="nav-item" onClick={() => switchBetween("home")}>
                <Link
                  to={"/dashboard"}
                  className={`nav-link text-white ${
                    getSwitch === "home" && "bg-dark"
                  }`}
                  aria-current="home"
                >
                  Dashboard
                </Link>
              </li>
              <li onClick={() => switchBetween("createPost")}>
                <Link
                  to={"/create-task"}
                  className={`nav-link text-white ${
                    getSwitch === "createPost" && "bg-dark"
                  }`}
                  aria-current="createPost"
                >
                  Create Task
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

{
  /* <ul
className="navbar-nav d-flex justify-content-end w-100 align-items-center"
style={{ gap: "2rem" }}
>
<li className="nav-item" onClick={() => switchBetween("home")}>
  <Link
    to={"/dashboard"}
    className={`nav-link text-white ${
      getSwitch === "home" && "bg-dark"
    }`}
    aria-current="home"
  >
    Dashboard
  </Link>
</li>
<li onClick={() => switchBetween("createPost")}>
  <Link
    to={"/create-task"}
    className={`nav-link text-white ${
      getSwitch === "createPost" && "bg-dark"
    }`}
    aria-current="createPost"
  >
    Create Task
  </Link>
</li>
</ul> */
}
