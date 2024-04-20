
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import AdminRoute from './components/AdminRoute'
import ContactAdmin from './pages/ContactAdmin'
import Error from './components/Error'

const fetchPosts = async () => {
  try {
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts/");
    return posts
  } catch (error) {
    console.log(error)
    return  []
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement : <Error/>
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <ProtectedRoute><Profile /></ProtectedRoute>,
    loader : fetchPosts
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute><AdminRoute><Dashboard /></AdminRoute></ProtectedRoute>,
  },
  {
    path: "/contact-admin",
    element: <ContactAdmin />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
])

function App() {


  return (
    <div className='app'>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  )
}

export default App;
