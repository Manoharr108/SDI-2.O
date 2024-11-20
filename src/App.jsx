import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header';
import Error from './components/Error';
import Team from './components/Team';
import Register from './components/Register';
import Contact from './components/Contact';
import Home from './components/Home';
import Footer from './components/Footer';
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<div className='bg_image_home'><Header></Header><Home></Home><Footer content={"@ Made with ❤️ by SDI  2024"}></Footer></div>,
      errorElement:<Error></Error>
    },
    {
      path:"/register",
      element:<div className='bg_image_register'><Header></Header><Register></Register><Footer content={"@ Made with ❤️ by SDI  2024"}></Footer></div>,
      errorElement:<Error></Error>
    },
    {
      path:"/team",
      element:<div className='bg_image_team'><Header></Header><Team></Team><Footer content={"@ Made with ❤️ by SDI  2024"}></Footer></div>,
      errorElement:<Error></Error>
    },
    {
      path:"/contact",
      element:<div className='bg_image_contact'><Header></Header><Contact></Contact><Footer content={"@ Made with ❤️ by SDI  2024"}></Footer></div>,
      errorElement:<Error></Error>
    },

  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
