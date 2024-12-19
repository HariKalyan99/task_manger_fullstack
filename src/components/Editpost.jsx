import React, { useContext, useState } from "react";
import { BlogStore } from "../store/Blogsstore";

const Editpost = ({ setEditPostActive, editPostActive, edit, post }) => {
  const { editPost } = useContext(BlogStore);

  const [previousUserId, setPreviousUserId] = useState(post.userId || "");
  const [previousTitle, setPreviousTitle] = useState(post.title || "");
  const [previousBody, setPreviousBody] = useState(post.body || "");
  const [previousTags, setPreviousTags] = useState(post.tags || "");
  const [previousReactions, setPreviousReactions] = useState(
    post.reactions || ""
  );

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const UserId = Number(previousUserId);
    const Title = previousTitle;
    const Body = previousBody;
    const Tags = previousTags.split(",");
    const Reactions = Number(previousReactions);
    editPost({ UserId, Title, Body, Tags, Reactions, Id: post.id });
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
              height: "650px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <form
              className="needs-validation"
              onSubmit={(e) => handleEditSubmit(e)}
            >
              <div className="row ">
                <div className="col-12">
                  <label htmlFor="firstName" className="form-label">
                    User Id
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder=""
                    required=""
                    value={previousUserId}
                    onChange={(e) => setPreviousUserId(e.target.value)}
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    required=""
                    value={previousTitle}
                    onChange={(e) => setPreviousTitle(e.target.value)}
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping title.
                  </div>
                </div>
              </div>

              <p> Body</p>

              <div className="form-floating">
                <textarea
                  className="form-control"
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                  value={previousBody}
                  onChange={(e) => setPreviousBody(e.target.value)}
                ></textarea>
                <label htmlFor="floatingTextarea2"></label>
              </div>

              <div className="col-12">
                <label htmlFor="username" className="form-label">
                  Tags
                </label>
                <div className="input-group has-validation">
                  <span className="input-group-text text-bg-dark">#</span>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Tags"
                    required=""
                    value={previousTags}
                    onChange={(e) => setPreviousTags(e.target.value)}
                  />
                  <div className="invalid-feedback">
                    Tags must be entered with ','.
                  </div>
                </div>
              </div>
              <label htmlFor="username" className="form-label">
                Reactions
              </label>
              <div className="input-group has-validation">
                <span className="input-group-text text-bg-dark">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chat-heart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9 9 0 0 0 8 15m0-9.007c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                  </svg>
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Reactions"
                  required=""
                  value={previousReactions}
                  onChange={(e) => setPreviousReactions(e.target.value)}
                />
                <div className="invalid-feedback">
                  Tags must be entered with ','.
                </div>
              </div>
              <hr />
              <button
                className="w-100 btn btn-danger btn-lg mb-3"
                type="submit"
              >
                Add Post
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
