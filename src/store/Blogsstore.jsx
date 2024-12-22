import {
  createContext,
  useState,
  useEffect,
  useReducer,
  useCallback,
} from "react";
import axios from "axios";
let { user, token } = JSON.parse(localStorage.getItem("user"));

function pureReducerFunction(currentPostList, action) {
  let newPostList = currentPostList;
  if (action.type === "INITIAL_POSTS") {
    newPostList = action.payload.data;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload.data, ...currentPostList];
  } else if (action.type === "DEL_POST") {
    const filteredDelPosts = newPostList.filter(
      (x) => x.id !== action.payload.id
    );
    newPostList = filteredDelPosts;
  } else if (action.type === "EDIT_POST") {
    const newPosts = newPostList.filter((x) => x.id !== action.payload.Id);
    newPostList = [
      {
        id: action.payload.data.id,
        userId: action.payload.data.userId,
        title: action.payload.data.title,
        body: action.payload.data.body,
        tags: action.payload.data.tags,
        reactions: action.payload.data.reactions,
      },
      ...newPosts,
    ];
  }
  return newPostList;
}

export const BlogStore = createContext({
  postList: [],
  addPost: () => {},
  delPost: () => {},
  editPost: () => {},
  goback: () => {},
  switchBetween: () => {},
  handleLogout: () => {},
  getToken: "",
  getUserName: "",
  getSwitch: "",
  deletedPost: [],
  setDeletedPost: () => {},
});

const BlogsStoreContextProvider = ({ children }) => {
  const [getToken, setToken] = useState(token);
  const [getUserName, setUserName] = useState(user);

  const [loading, setLoading] = useState(true);

  const handleLogout = () => {
    localStorage.clear();
    setToken("");
    setUserName("");
    window.location.href = "../index.html";
    window.reload();
  };

  const goback = () => {
    window.location.href = "../index.html";
  };

  const [getSwitch, setSwitch] = useState("home");

  const switchBetween = (content) => {
    setSwitch(content);
  };

  //reducer
  const [postList, dispatchPostList] = useReducer(pureReducerFunction, []);

  const [getAddPost, setAddPost] = useState("");
  const [getDelPost, setDelPost] = useState("");
  const [getEditPost, setEditPost] = useState("");
  const [deletedPost, setDeletedPost] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const fetchPosts = async () => {
      setLoading(!loading);
      try {
        const { data } = await axios.get(
          "https://personal-task-manager-api-vu5e.onrender.com/api/v1/tasks",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${getToken}`,
            },
          }
        );
        useCallback(
          dispatchPostList({
            type: "INITIAL_POSTS",
            payload: {
              data: data.data,
            },
          }),
          [dispatchPostList]
        );
        setLoading(!loading);
      } catch (err) {
        console.log("Error", err);
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const addPosts = async (task) => {
      try {
        const { data } = await axios.post(
          "https://personal-task-manager-api-vu5e.onrender.com/api/v1/tasks",
          {
            ...task,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${getToken}`,
            },
          }
        );

        useCallback(
          dispatchPostList({
            type: "ADD_POST",
            payload: {
              data: data.data,
            },
          }),
          [dispatchPostList]
        );
      } catch (err) {
        console.log("Error", err);
      }
    };
    if (getAddPost?.title) {
      addPosts(getAddPost);
    }
  }, [getAddPost]);

  useEffect(() => {
    const delPosts = async (id) => {
      try {
        const { data } = await axios.delete(
          `https://personal-task-manager-api-vu5e.onrender.com/api/v1/tasks/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${getToken}`,
            },
          }
        );
        setDeletedPost([...deletedPost, data]);
        useCallback(
          dispatchPostList({
            type: "DEL_POST",
            payload: {
              id,
            },
          }),
          [dispatchPostList]
        );
      } catch (err) {
        console.log("Error", err);
      }
    };
    if (getDelPost) {
      delPosts(getDelPost);
    }
  }, [getDelPost]);

  useEffect(() => {
    const editPosts = async ({ UserId, Title, Body, Tags, Reactions, Id }) => {
      try {
        const { data } = await axios.put(`http://localhost:8082/posts/${Id}`, {
          id: Id,
          title: Title,
          body: Body,
          userId: UserId,
          tags: Tags,
          reactions: Reactions,
        });

        useCallback(
          dispatchPostList({
            type: "EDIT_POST",
            payload: {
              data,
              Id,
            },
          }),
          [dispatchPostList]
        );
      } catch (err) {
        console.log("Error", err);
      }
    };
    if (getEditPost.Title) {
      editPosts(getEditPost);
    }
  }, [getEditPost]);

  const addPost = (task) => {
    setAddPost(task);
    // console.log(task)
  };

  const delPost = (id) => {
    setDelPost(id);
  };

  const editPost = (post) => {
    setEditPost(post);
  };
  return (
    <BlogStore.Provider
      value={{
        postList,
        addPost,
        delPost,
        editPost,
        goback,
        switchBetween,
        getToken,
        getUserName,
        handleLogout,
        getSwitch,
        deletedPost,
        setDeletedPost,
      }}
    >
      {loading && (
        <div>
          <div
            class="spinner-border"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
          <div
            class="spinner-grow"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {children}
    </BlogStore.Provider>
  );
};

export default BlogsStoreContextProvider;
