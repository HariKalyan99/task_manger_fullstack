import BlogsStoreContextProvider from '../store/Blogsstore';
import './App.css'
import { Outlet } from 'react-router-dom';





function App() {
  
    return (
      <BlogsStoreContextProvider>
        <Outlet />
      </BlogsStoreContextProvider>
    )

}

export default App
