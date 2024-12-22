import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Dashboard from './components/Dashboard.jsx';
import Createpost from './components/Createpost.jsx';
import App from './routes/App.jsx';
import Signup from './routes/Signup.jsx';
import Login from './routes/Login.jsx';

const router = createBrowserRouter([
  {path: "/", element: <App />, children: [
    {
      path: "/", element: <Signup />
    },{
      path: "/login", element: <Login />
    },
    {
    path: "/dashboard", element: <Dashboard />
  },{
    path: "/create-task", element: <Createpost />
  }
  ]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
