import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Copypost from "./Copypost";
import { BlogStore } from "../store/Blogsstore";
import { useNavigate } from "react-router-dom";

const Createpost = () => {
  const { token } = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const { addPost, switchBetween } = useContext(BlogStore);
  const [titleRef, settitleRef] = useState("");
  const [descriptionRef, setdescriptionRef] = useState("");
  const [priorityRef, setPriorityRef] = useState("");
  const [dateRef, setdateRef] = useState("");
  const [statusRef, setStatusRef] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleRef;
    const description = descriptionRef;
    const priority = priorityRef;
    const dueDate = dateRef;
    const status = statusRef;
    addPost({ title, description, priority, dueDate, status });
    navigate("/mainpage.html");
    switchBetween("home");
  };
  return (
    <div className="col g-5 d-flex bg-dark justify-content-center m-5 flex-wrap border border-5">
      <div className="col-sm-12 col-md-8 col-lg-5">
        <h2 className="mt-4 text-center">Create a Task</h2>
        <form className="needs-validation" onSubmit={(e) => handleSubmit(e)}>
          <div className="row g-3">
            <div className="col-12">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                required=""
                placeholder={token ? "Enter Title" : "you don't have access"}
                value={titleRef}
                onChange={(e) => settitleRef(e.target.value)}
                readOnly={!token && true}
              />
              <div className="invalid-feedback">Enter your task title.</div>
            </div>
          </div>

          <hr className="my-4" />

          <h4 className="mb-3"> Description</h4>

          <div className="form-floating">
            <textarea
              className="form-control"
              id="floatingTextarea2"
              style={{ height: "100px" }}
              value={descriptionRef}
              onChange={(e) => setdescriptionRef(e.target.value)}
              readOnly={!token && true}
            ></textarea>
            <label htmlFor="floatingTextarea2"></label>
          </div>

          <hr className="my-4" />

          <div className="col-8">
            <label htmlFor="username" className="form-label">
              Priority
            </label>
            <div className="input-group has-validation">
              <span className="input-group-text text-bg-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-bookmark-star"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.18.18 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.18.18 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.18.18 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.18.18 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.18.18 0 0 0 .134-.098z" />
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                </svg>
              </span>
              <select
                class="form-select"
                id="username"
                aria-label="Default select example"
                value={priorityRef}
                onChange={(e) => setPriorityRef(e.target.value)}
                readOnly={!token && true}
              >
                <option defaultValue hidden>
                  Select the priority
                </option>
                <option value="low">low</option>
                <option value="medium">medium</option>
                <option value="high">high</option>
              </select>
            </div>
          </div>

          <div className="col-4 mt-2">
            <label htmlFor="username" className="form-label">
              Status
            </label>
            <div className="input-group has-validation">
              <span className="input-group-text text-bg-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-bookmark-star"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.18.18 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.18.18 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.18.18 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.18.18 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.18.18 0 0 0 .134-.098z" />
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                </svg>
              </span>
              <select
                class="form-select"
                id="username"
                aria-label="Default select example"
                value={statusRef}
                onChange={(e) => setStatusRef(e.target.value)}
                readOnly={!token && true}
              >
                <option defaultValue hidden>
                  Select status
                </option>
                <option value="pending">pending</option>
                <option value="completed">completed</option>
              </select>
            </div>
          </div>

          <hr className="my-4" />
          <label htmlFor="username" className="form-label">
            Due on
          </label>
          <div className="input-group has-validation w-50">
            <span className="input-group-text text-bg-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="grey"
                class="bi bi-calendar-check-fill"
                viewBox="0 0 16 16"
              >
                <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708" />
              </svg>
            </span>
            <input
              type="date"
              className="form-control bg-dark"
              id="username"
              placeholder={
                token ? "Reactions to this post" : "you don't have access"
              }
              required=""
              value={dateRef}
              onChange={(e) => setdateRef(e.target.value)}
              readOnly={!token && true}
            />
          </div>
          <hr className="my-4" />
          <button className="w-100 btn btn-danger btn-lg mb-3" type="submit">
            Add Task
          </button>
        </form>
      </div>
      <div className="container m-3" style={{ width: "600px" }}>
        <h1>Take a look!</h1>
        <Copypost
          dueDate={dateRef}
          title={titleRef}
          description={descriptionRef}
          priority={priorityRef}
          status={statusRef}
        />
      </div>
    </div>
  );
};

export default Createpost;
