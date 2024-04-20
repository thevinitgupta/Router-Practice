
import { Link, useLoaderData } from 'react-router-dom'

function Profile() {
  const posts = useLoaderData() as Array<any>;
  return (
    <div>
      <div className='navbar'>
        <Link to={"/"} className='link mx'>Home</Link>
        <Link to={"/profile"} className='link mx'>Profile</Link>
        <Link to={"/dashboard"} className='link mx'>Dashboard</Link>
    </div>
      <h2>Your Posts</h2>
      {
        posts && posts.slice(0,10).map((post) => {
          return <div className='link'>{post.title}</div>
        })
      }
      </div>
  )
}

export default Profile