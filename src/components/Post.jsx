import React, { useContext, useState } from "react";
import Editpost from "./Editpost";
import { BlogStore } from "../store/Blogsstore";

const Post = ({ post }) => {
  const { delPost } = useContext(BlogStore);
  const [editPostActive, setEditPostActive] = useState(false);
  const convertDate = (date) => {
    return new Date(date).toDateString()
  }
  return (
    <div className="col">
      {editPostActive ? (
        <Editpost
          setEditPostActive={setEditPostActive}
          editPostActive={editPostActive}
          edit
          post={post}
        />
      ) : (
        <div
          className={`card shadow-sm ${
            post.status === "completed"
              ? "border border-black border-5"
              : "border border-white border-5"
          }`}
        >
          <span className="position-absolute z-2 top-0 start-50 translate-middle badge rounded bg-black pt-2">
            {post.priority === "high" ? (
              <sup>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </sup>
            ) : post.priority === "medium" ? (
              <sup>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star-half"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                </svg>
              </sup>
            ) : (
              <sup>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                </svg>
              </sup>
            )}
          </span>
          <img
            src="https://www.socialchamp.io/wp-content/uploads/2022/06/Blog-Banner_Q2-2023_1125x600_39_How-to-Post-on-Pinterest-1.png"
            alt={post?.title}
            className={post?.status === "completed" && "img-eff"}
          />

          <div
            className="card-body"
            style={{
              minHeight: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <h4 className={`card-text text-danger`}>
              <span>
                <h5
                  style={{
                    display: "inline-block",
                    textDecoration: "underline",
                    textDecorationColor: "grey",
                    color: "white",
                  }}
                >
                  Title:{" "}
                </h5>
              </span>{" "}
              {post.title}{" "}
              <span
                className="spanSvg"
                onClick={() => setEditPostActive(!editPostActive)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path
                    fillRule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                  />
                </svg>
              </span>
            </h4>

            <p className="card-text lh-sm">
              <h5
                style={{
                  display: "inline-block",
                  textDecoration: "underline",
                  textDecorationColor: "grey",
                }}
              >
                Description:
              </h5>{" "}
              {post?.description}
            </p>
            <p className="card-text">
              <h5
                style={{
                  display: "inline-block",
                  textDecoration: "underline",
                  textDecorationColor: "grey",
                }}
              >
                Due on:
              </h5>{" "}
              {convertDate(post?.dueDate)}
            </p>
            <div className="d-flex">
              <div className="d-flex gap-2 justify-content-center align-items-center">
                <h6 className={`text-light`}>
                  <span>
                    <h5
                      style={{
                        display: "inline-block",
                        textDecoration: "underline",
                        textDecorationColor: "grey",
                      }}
                    >
                      Status:
                    </h5>
                  </span>{" "}
                  {post.status}
                </h6>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-calendar-x-fill deletePost"
              viewBox="0 0 16 16"
              onClick={() => delPost(post.id)}
            >
              <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M6.854 8.146 8 9.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 10l1.147 1.146a.5.5 0 0 1-.708.708L8 10.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 10 6.146 8.854a.5.5 0 1 1 .708-.708" />
            </svg>

            <div className="d-flex justify-content-center align-items-center gap-2">
              <span>Mark as completed</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-marker-tip markPost"
              viewBox="0 0 16 16"
            >
              
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5 6.064-1.281-4.696A.5.5 0 0 0 9.736 9H6.264a.5.5 0 0 0-.483.368l-1.28 4.696A6.97 6.97 0 0 0 8 15c1.275 0 2.47-.34 3.5-.936m.873-.598a7 7 0 1 0-8.746 0l1.19-4.36a1.5 1.5 0 0 1 1.31-1.1l1.155-3.851c.213-.713 1.223-.713 1.436 0l1.156 3.851a1.5 1.5 0 0 1 1.31 1.1z" />
            </svg>
            </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
