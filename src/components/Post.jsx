import React, { useContext, useState } from "react";
import Editpost from "./Editpost";
import { BlogStore } from "../store/Blogsstore";

const Post = ({ post }) => {
  const { delPost } = useContext(BlogStore);
  const [editPostActive, setEditPostActive] = useState(false);
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
        <div className="card shadow-sm">
          <span className="position-absolute z-2 top-0 start-50 translate-middle badge rounded-pill bg-dark pt-2">
            {post.reactions}{" "}
            <sup>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chat-heart-fill text-danger"
                viewBox="0 0 16 16"
              >
                <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9 9 0 0 0 8 15m0-9.007c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
              </svg>
            </sup>
            <span className="visually-hidden">unread messages</span>
          </span>
          <img
            src="https://www.socialchamp.io/wp-content/uploads/2022/06/Blog-Banner_Q2-2023_1125x600_39_How-to-Post-on-Pinterest-1.png"
            alt={post.title}
            className="img-eff"
            style={{ cursor: "pointer" }}
          />

          <div
            className="card-body"
            style={{
              height: "400px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <small>userId: {post.userId}</small>
            <h4 className="card-text text-danger">
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

            <p className="card-text">{post.body}</p>
            <div className="d-flex justify-content-evenly align-items-center">
              <div className="btn-group">
                {post.tags.map((tag, ind) => (
                  <pre key={ind}> #{tag} </pre>
                ))}
              </div>
            </div>

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
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
