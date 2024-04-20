import { PropsWithChildren, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserType, useAuth } from './AuthProvider';

function AdminRoute({children} : PropsWithChildren) {
    const user = useAuth();
    const navigate = useNavigate();

    useEffect(()=> {
        if(user?.role!=UserType.ADMIN) {
            navigate("/contact-admin");
        }
    }, [user, navigate])
  return (
    <div>{children}</div>
  )
}

export default AdminRoute