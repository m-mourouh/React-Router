import { useParams } from "react-router-dom"
const UserDetails = () => {
  const { userID } = useParams();
  return (
    <div>
      Details about user {userID}
    </div>
  )
}

export default UserDetails
