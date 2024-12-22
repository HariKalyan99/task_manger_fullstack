import Loginaccess from '../components/Loginaccess'
import BlogsStoreContextProvider from '../store/Blogsstore';
import './App.css'
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';




function App() {
  
    return (
      <BlogsStoreContextProvider>
        <Loginaccess />
        <Navigation />
        <Outlet />
      </BlogsStoreContextProvider>
    )

}

export default App
