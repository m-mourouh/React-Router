import { useAuth } from "../contexts/AuthContext"
import { Navigate, useLocation } from "react-router-dom";

interface RequireAuthProps {
    children: React.ReactNode
}

const RequireAuth = ({ children }: RequireAuthProps): JSX.Element => {
    const location = useLocation()
    const pathname: string = location.pathname

    const auth = useAuth(); 
    if(!auth.user){
        return <Navigate to="/login" state={{path: pathname}}/>
    }

    return <>{children}</>

}

export default RequireAuth
