import  { PropsWithChildren, useEffect } from 'react'
import { useAuth } from './AuthProvider'
import { useNavigate } from 'react-router-dom';


function ProtectedRoute({children} : PropsWithChildren) {
    const user = useAuth();
    const navigate = useNavigate();

    useEffect(()=> {
        if(user===null) {
            navigate("/login");
        }
    }, [user, navigate])
  return <>{children}</>;
}

export default ProtectedRoute