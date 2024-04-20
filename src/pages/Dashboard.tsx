
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
      <div className='navbar'>
        <Link to={"/"} className='link mx'>Home</Link>
        <Link to={"/profile"} className='link mx'>Profile</Link>
        <Link to={"/dashboard"} className='link mx'>Dashboard</Link>
    </div>
      Dashboard</div>
  )
}

export default Dashboard