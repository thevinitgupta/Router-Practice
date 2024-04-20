
import { Link, useLocation } from 'react-router-dom'

function Error() {
  const navigate = useLocation();
  return (
    <div>
        <div className='navbar'>
        <Link to={"/"} className='link mx'>Home</Link>
        <Link to={"/profile"} className='link mx'>Profile</Link>
        <Link to={"/dashboard"} className='link mx'>Dashboard</Link>
    </div>
    <p className=''>Current Path : <span className='highlight'>{navigate.pathname}</span></p>
        <h2>
            We will be Back Shortly
            </h2>
        </div>
  )
}

export default Error