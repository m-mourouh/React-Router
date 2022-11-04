import { useAuth } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const handleLogout = () => {
    auth.logout();
    navigate('/')
  }
  return (
    <>
    <div>Profile Page</div>
    <br />
    <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Profile