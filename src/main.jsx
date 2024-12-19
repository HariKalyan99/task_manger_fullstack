import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Dashboard from './components/Dashboard.jsx';
import Createpost from './components/Createpost.jsx';
import App from './routes/App.jsx';
import Recyclebin from './components/Recyclebin.jsx';

const router = createBrowserRouter([
  {path: "/mainpage.html", element: <App />, children: [{
    path: "/mainpage.html", element: <Dashboard />
  }, {
    path: "/mainpage.html/create-post", element: <Createpost />
  }, {path: "/mainpage.html/recycle-bin", element: <Recyclebin />}]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
