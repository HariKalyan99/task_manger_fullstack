import Loginaccess from '../components/Loginaccess'
import BlogsStoreContextProvider from '../store/Blogsstore';
import './App.css'
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Signup from './Signup';
import Login from './Login';




function App() {
  
    return (
      <BlogsStoreContextProvider>
        <Outlet />
      </BlogsStoreContextProvider>
    )

}

export default App
