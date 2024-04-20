
import { useAuth } from '../components/AuthProvider'
import { Link, useNavigate } from 'react-router-dom';

function Home() {
    const user = useAuth();
    const navigate = useNavigate();
    // throw new Error("Something")
  return (
    <div className=''>
        <div className='navbar'>
        <Link to={"/"} className='link mx'>Home</Link>
        <Link to={"/profile"} className='link mx'>Profile</Link>
        <Link to={"/dashboard"} className='link mx'>Dashboard</Link>
    </div>
        <h1>Welcome to 
            <span className='highlight mx'>
            React Router Practice
            </span>
        </h1>
        <h2>Hi, {user ? user.name : <span className='link' onClick={()=> {
            navigate("/login")
        }}>Login Please ⚠️</span>}</h2>
    </div>
  )
}

export default Home