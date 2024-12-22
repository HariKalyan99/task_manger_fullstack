import React, { useContext, useState } from "react";
import { BlogStore } from "../store/Blogsstore";

const Editpost = ({ setEditPostActive, editPostActive, edit, post }) => {
  const { editPost } = useContext(BlogStore);

  const [titleRef, settitleRef] = useState(post.title || "");
    const [descriptionRef, setdescriptionRef] = useState(post.description || "");
    const [priorityRef, setPriorityRef] = useState(post.priority || "");
    const [dateRef, setdateRef] = useState("");
    const [statusRef, setStatusRef] = useState(post.status || "");

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const title = titleRef;
    const description = descriptionRef;
    const priority = priorityRef;
    const dueDate = dateRef;
    const status = statusRef;
    editPost({ title, description, priority, dueDate, status, taskId:post.id });
    setEditPostActive(!editPostActive);
  };

 
  if (edit) {
    return (
      <div className="col position-relative z-2">
        <div className="card shadow-sm">
          <img
            src="https://www.socialchamp.io/wp-content/uploads/2022/06/Blog-Banner_Q2-2023_1125x600_39_How-to-Post-on-Pinterest-1.png"
            alt="post.title"
            className="img-eff"
          />

          <div
            className="card-body"
            style={{
              height: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <form className="needs-validation d-flex flex-column gap-2" onSubmit={(e) => handleEditSubmit(e)}>
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
                value={titleRef}
                onChange={(e) => settitleRef(e.target.value)}
              />
              <div className="invalid-feedback">Enter your task title.</div>
            </div>
          </div>

          

          <p> Description</p>

          <div className="form-floating">
            <textarea
              className="form-control"
              id="floatingTextarea2"
              style={{ height: "100px" }}
              value={descriptionRef}
              onChange={(e) => setdescriptionRef(e.target.value)}
            ></textarea>
            <label htmlFor="floatingTextarea2"></label>
          </div>

          

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
                  className="bi bi-bookmark-star"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.18.18 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.18.18 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.18.18 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.18.18 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.18.18 0 0 0 .134-.098z" />
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                </svg>
              </span>
              <select
                className="form-select"
                id="username"
                aria-label="Default select example"
                value={priorityRef}
                onChange={(e) => setPriorityRef(e.target.value)}
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

          <div className="col-8 mt-2">
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
                  className="bi bi-bookmark-star"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.18.18 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.18.18 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.18.18 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.18.18 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.18.18 0 0 0 .134-.098z" />
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                </svg>
              </span>
              <select
                className="form-select"
                id="username"
                aria-label="Default select example"
                value={statusRef}
                onChange={(e) => setStatusRef(e.target.value)}
              >
                <option defaultValue hidden>
                  Select status
                </option>
                <option value="pending">pending</option>
                <option value="completed">completed</option>
              </select>
            </div>
          </div>

          
          <label htmlFor="username" className="form-label">
            Due on
          </label>
          <div className="input-group has-validation w-75">
            <span className="input-group-text text-bg-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="grey"
                className="bi bi-calendar-check-fill"
                viewBox="0 0 16 16"
              >
                <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708" />
              </svg>
            </span>
            <input
              type="date"
              className="form-control bg-dark"
              id="username"
              required
              value={dateRef}
              onChange={(e) => setdateRef(e.target.value)}
            />
          </div>
          
          <button className="w-100 btn btn-danger btn-lg mb-3" type="submit">
            Edit Task
          </button>
        </form>
          
            {edit && (
              <button
                className="w-100 btn btn-dark btn-lg mb-3"
                type="button"
                onClick={() => setEditPostActive(!editPostActive)}
              >
                Don't edit
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default Editpost;

// onSubmit={(e) => handleEditSubmit(e)}