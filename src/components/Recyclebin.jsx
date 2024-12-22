import React, { useContext, useEffect } from "react";
import { BlogStore } from "../store/Blogsstore";
import { useNavigate } from "react-router-dom";
import recycle from "../assets/re.png";
import { v4 as uuidv4 } from "uuid";

const Recyclebin = () => {
  const { deletedPost, addPost, switchBetween, setDeletedPost } =
    useContext(BlogStore);

  const navigate = useNavigate();
  useEffect(() => {
    console.log(deletedPost)
  }, [])
  // const handleClick = (post) => {
  //   const userId = post.userId;
  //   const title = post.title;
  //   const body = post.body;
  //   const tags = post.tags;
  //   const reactions = post.reactions;
  //   const id = post.id;

  //   addPost({ userId, title, body, tags, reactions, id: uuidv4() });
  //   const newRecycleList = deletedPost.filter((x) => x.id !== id);
  //   setDeletedPost(newRecycleList);
  //   navigate("/mainpage.html");
  //   switchBetween("home");
  // };

  if (deletedPost.length > 0) {
    return (
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {[].map(
              ({ id, priority, title, description, status, dueDate }) => {
                return (
                  <form key={id} className="col">
                    <div className="card shadow-sm">
                      <span className="position-absolute z-2 top-0 start-50 translate-middle badge rounded-pill bg-dark pt-2">
                        {priority === "high" ? (
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
                        ) : priority === "medium" ? (
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
                        <span className="visually-hidden">unread messages</span>
                      </span>
                      <img
                        src="https://www.socialchamp.io/wp-content/uploads/2022/06/Blog-Banner_Q2-2023_1125x600_39_How-to-Post-on-Pinterest-1.png"
                        alt={title}
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
                        <h4 className="card-text text-white">
                          Title: {title}{" "}
                        </h4>
                        <h4 className="card-text text-white">
                          Description: {description}{" "}
                        </h4>
                        <h4 className="card-text text-white">
                          Due on: {dueDate}{" "}
                        </h4>
                        <h4 className="card-text text-white">
                          status: {status}{" "}
                        </h4>
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
              }
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="d-flex justify-content-center flex-column container align-items-center"
        style={{ height: "800px" }}
      >
        <h1>Deleted blogs land here</h1>
        <p>As of now no blogs have been deleted</p>
        <img src={recycle} alt="recycle" style={{ height: "300px" }} />
        <p className="text-danger fw-bold">
          Warning! if logged out, you can't retain your deleted posts.
        </p>
      </div>
    );
  }
};

export default Recyclebin;
