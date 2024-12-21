import React, { useContext } from "react";
import logo from "../assets/tasklogo.svg";

import { BlogStore } from "../store/Blogsstore";
import { Link } from "react-router-dom";
const Navigation = () => {
  const { switchBetween, getSwitch } = useContext(BlogStore);
  return (
    <nav
      className="navbar navbar-expand-md bg-black sticky-top border-bottom flex justify-content-center border-2 border-white"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
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
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="d-flex">
            <div className="w-50">
              <img src={logo} alt="logo" height={50} />
            </div>
            <div className="offcanvas-body nav-pills d-flex w-50 justify-content-end">
              <ul
                className="navbar-nav d-flex justify-content-end w-100 align-items-center"
                style={{ gap: "2rem" }}
              >
                <li className="nav-item" onClick={() => switchBetween("home")}>
                  <Link
                    to={"/mainpage.html"}
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
                    to={"/mainpage.html/create-post"}
                    className={`nav-link text-white ${
                      getSwitch === "createPost" && "bg-dark"
                    }`}
                    aria-current="createPost"
                  >
                    Create Task
                  </Link>
                </li>
                <li
                  className="nav-item"
                  onClick={() => switchBetween("recycle")}
                >
                  <Link
                    to={"/mainpage.html/recycle-bin"}
                    className={`nav-link text-white ${
                      getSwitch === "recycle" && "bg-dark"
                    }`}
                    aria-current="recylce"
                  >
                    Recycle bin
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
