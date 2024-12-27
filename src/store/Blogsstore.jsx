import { createContext, useState, useEffect, useReducer } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

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
    const index = newPostList.findIndex((x) => x.id === action.payload.taskId);
    newPostList.splice(index, 1, action.payload.data);
    newPostList = [...newPostList];
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
  loginUser: () => {},
  saveUsers: () => {},
});

const BlogsStoreContextProvider = ({ children }) => {
  const [getToken, setToken] = useState("");
  const [getUserName, setUserName] = useState("");
  const [postList, dispatchPostList] = useReducer(pureReducerFunction, []);

  const [getAddPost, setAddPost] = useState("");
  const [getDelPost, setDelPost] = useState("");
  const [getEditPost, setEditPost] = useState("");
  const [deletedPost, setDeletedPost] = useState([]);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    setToken("");
    setUserName("");
    toast.success("Logged out successfully")
    navigate("/");
  };

  const goback = () => {
    navigate("/");
  };

  const [getSwitch, setSwitch] = useState("home");

  const switchBetween = (content) => {
    setSwitch(content);
  };




  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "https://personal-task-manager-api-vu5e.onrender.com/api/v1/tasks",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${getToken}`,
            },
          }
        );
        if(data.status){
          dispatchPostList({
            type: "INITIAL_POSTS",
            payload: {
              data: data.data,
            },
          });
          setLoading(false);
        }
      } catch (err) {
        console.log("Error", err);
      }
    };
    if(getToken?.length > 1){
      fetchPosts();
    }
  }, [getToken]);

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

        if(data.status){
          toast.success(data.message);
          dispatchPostList({
            type: "ADD_POST",
            payload: {
              data: data.data,
            },
          });
        }
      } catch (err) {
        toast.error(err);
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
        if(data.status){
          toast.success(data.message);
          setDeletedPost([...deletedPost, data]);
        dispatchPostList({
          type: "DEL_POST",
          payload: {
            id,
          },
        });
        }
      } catch (err) {
        toast.error(err);
        console.log("Error", err);
      }
    };
    if (getDelPost) {
      delPosts(getDelPost);
    }
  }, [getDelPost]);

  useEffect(() => {
    const editPosts = async ({
      title,
      description,
      priority,
      dueDate,
      status,
      taskId,
    }) => {
      try {
        const { data } = await axios.put(
          `https://personal-task-manager-api-vu5e.onrender.com/api/v1/tasks/${taskId}`,
          {
            title,
            description,
            priority,
            dueDate,
            status,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${getToken}`,
            },
          }
        );

        if(data.status){
          toast.success(data.message);
          dispatchPostList({
            type: "EDIT_POST",
            payload: {
              data: data.data,
              taskId,
            },
          });
        }
      } catch (err) {
        toast.error(err);
        console.log("Error", err);
      }
    };
    if (getEditPost?.title) {
      editPosts(getEditPost);
    }
  }, [getEditPost]);

  function loginUser(email, password) {
    try {
      fetch(
        "https://personal-task-manager-api-vu5e.onrender.com/api/v1/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            password,
            email,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if(data.status){
            toast.success(data.message);
            localStorage.setItem(
              "user",
              JSON.stringify({ user: data.user, token: data.token })
            );
            let { user, token } = JSON.parse(localStorage.getItem("user"));
            setToken(token);
            setUserName(user);
            navigate("/dashboard");
          }
        });
    } catch (err) {
      toast.error(err)
    }
  }
  async function saveUsers(username, password, confirmPassword, email) {
    if (username && password && confirmPassword && email) {
      try {
        const res = await fetch(
          "https://personal-task-manager-api-vu5e.onrender.com/api/v1/auth/signup",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              username,
              password,
              confirmPassword,
              email,
            }),
          }
        );
        const resJson = await res.json();
        if (resJson.status === "fail") {
          toast.error(resJson.message);
        }else{
          toast.success(resJson.message);
          navigate("/login");
        }
      } catch (err) {
        toast.error(err);
        console.log("Error", err);
      }
    } else {
      toast.error("Invalid username and password");
    }
  }

  const addPost = (task) => {
    setAddPost(task);
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
        loginUser,
        saveUsers,
      }}
    >
      {loading && (
        <div>
          <div
            className="spinner-border"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
          <div
            className="spinner-grow"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {children}
    </BlogStore.Provider>
  );
};

export default BlogsStoreContextProvider;
