import React, { useEffect, useState } from "react";

const Copypost = ({ userId, title, body, tags, reactions }) => {
  const [showTags, setShowTags] = useState([]);
  const [opacityImage, setOpacityImage] = useState("0.4")

  useEffect(() => {
    if (tags !== " ") {
      let tag = [];
      let str = "#";
      for (let i = 0; i < tags.length; i++) {
        if (tags[i] === "," || tags[i] === " ") {
          tag.push(str);
          str = "#";
        } else {
          str += tags[i];
        }
      }
      setShowTags(tag);
    }
    if(title.length > 0){
      setOpacityImage("1")
    }else {
      setOpacityImage("0.4")
    }
  }, [tags, title]);

  return (
    <div className="col">
      <div className="card shadow-sm">
        <span className="position-absolute z-2 top-0 start-50 translate-middle badge rounded-pill bg-dark pt-2">
          {reactions}
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
          alt="post.title"
          style={{opacity: opacityImage}}
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
          <big >UserId: {userId}</big>
          <h4 className="card-text text-danger">Title: {title} </h4>
          <p className="card-text text-center">Body: {body}</p>
          <div className="d-flex justify-content-evenly align-items-center">
            <div className="btn-group">
            Tags:
              {showTags.map((tag, ind) => (
                <pre key={ind} style={{fontSize: "1rem"}}> {tag} </pre>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copypost;
