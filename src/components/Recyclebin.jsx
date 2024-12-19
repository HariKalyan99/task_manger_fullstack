import React, { useContext } from "react";
import { BlogStore } from "../store/Blogsstore";
import { useNavigate } from "react-router-dom";
import recycle from '../assets/re.png'
import {v4 as uuidv4} from 'uuid';

const Recyclebin = () => {
  const { deletedPost, addPost, switchBetween, setDeletedPost } = useContext(BlogStore);

  const navigate = useNavigate();
  const handleClick = (post) => {
    const userId = post.userId;
    const title = post.title;
    const body = post.body;
    const tags = post.tags;
    const reactions = post.reactions;
    const id = post.id
    

    addPost({ userId, title, body, tags, reactions, id: uuidv4()});
    const newRecycleList = deletedPost.filter(x => x.id !== id);
    setDeletedPost(newRecycleList)
    navigate("/mainpage.html");
    switchBetween("home");
    
  };

  if (deletedPost.length > 0) {
    return (
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {deletedPost.map((post) => {
              return (
                <form key={post.id} className="col">
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
                      <h4 className="card-text text-danger">{post.title} </h4>
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
                        className="deletePost"
                        width="30"
                        height="30"
                        fill="currentColor"
                        class="bi bi-arrow-bar-left deletePost"
                        viewBox="0 0 16 16"
                        onClick={() => handleClick(post)}
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5"
                        />
                      </svg>
                      Restore
                    </div>
                  </div>
                </form>
              );
            })}
          </div>
        </div>
      </div>
    );
  }else {
    return (
        <div className="d-flex justify-content-center flex-column container align-items-center" style={{height: "800px"}}>
            <h1>Deleted blogs land here</h1>
            <p>As of now no blogs have been deleted</p>
            <img src={recycle} alt="recycle" style={{height: "300px"}}/>
            <p className="text-danger fw-bold">Warning! if logged out, you can't retain your deleted posts.</p>
        </div>
    )
  }
};

export default Recyclebin;
