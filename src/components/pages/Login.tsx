import {useRef} from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate, useLocation } from 'react-router-dom';
const Login = () => {
  // hooks 
const userNameRef = useRef<HTMLInputElement>(null!) ;
const navigate = useNavigate() ;
const auth = useAuth();
const location = useLocation();

// variables 
const redirectPath = location.state?.path || "/";


// Functions
const handleLogin = () =>  {
  auth.login({username: userNameRef.current.value}) ;
  navigate(redirectPath, {replace: true});
} ;
  return (
    <div>
        <label>
            UserName: <input type="text" placeholder='Enter your username' ref={userNameRef} />
        </label>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login