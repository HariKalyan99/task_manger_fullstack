import React, { useContext, useEffect } from "react";
import Post from "./Post";
import { BlogStore } from "../store/Blogsstore";
import Loginaccess from "./Loginaccess";
import Navigation from "./Navigation";

const Dashboard = () => {
  const { postList } = useContext(BlogStore);

  return (
    <>
      <Loginaccess />
      <Navigation />
      <div className="album py-5 bg-dark" style={{ minHeight: "100vh" }}>
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3">
            {postList.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
