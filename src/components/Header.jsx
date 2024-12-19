import React, { useContext } from "react";
import { BlogStore } from "../store/Blogsstore";
import { Link } from "react-router-dom";

const Header = () => {

  const {switchBetween, getSwitch} = useContext(BlogStore);
  return (
    <header data-bs-theme="dark">
      <div
        className="text-bg-danger collapse"
        id="navbarHeader"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/originals/1f/e8/00/1fe800748f1c9bafd70488f1062e76f1.gif')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
              <h4>About</h4>
              <p className="text-white">
                Add some information about the album below, the author, or any
                other background context. Make it a few sentences long so folks
                can pick up some informative tidbits. Then, link them off to
                some social networking sites or contact information.
              </p>
            </div>
            <div className="col-sm-4 offset-md-1 py-4">
              <h4 className="text-white">Contact</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white">
                    Follow on Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Like on Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Email me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-dark bg-danger shadow-sm border-top">
        <div className="container">
          <ul className="nav nav-pills flex-row mb-auto">
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
          <button
            className="navbar-toggler text-bg-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarHeader"
            aria-controls="navbarHeader"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
