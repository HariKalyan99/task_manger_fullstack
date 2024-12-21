import Loginaccess from '../components/Loginaccess'
import Header from '../components/Header'
import BlogsStoreContextProvider from '../store/Blogsstore';
import './App.css'
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';




function App() {
  
    return (
      <BlogsStoreContextProvider>
        <Loginaccess />
        {/* <Header /> */}
        <Navigation />
        <Outlet />
      </BlogsStoreContextProvider>
    )

}

export default App
