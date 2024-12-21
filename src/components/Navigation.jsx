import React, { useContext } from "react";

import { BlogStore } from "../store/Blogsstore";
import { Link } from "react-router-dom";
const Navigation = () => {
  const { switchBetween, getSwitch } = useContext(BlogStore);
  return (
    <nav className="navbar navbar-expand-md bg-black sticky-top border-bottom flex justify-content-center flex-column" data-bs-theme="dark">
        
  <div className="container">
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasLabel">Aperture</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body nav-pills">
        <ul className="navbar-nav flex-grow-1 justify-content-between">
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
              <li className="nav-item" onClick={() => switchBetween("recycle")}>
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
</nav>
  );
};

export default Navigation;
