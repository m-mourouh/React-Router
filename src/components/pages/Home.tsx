import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate() ;
  return (
    <div>
      <h1>Home Page</h1>
      {/* if u want to replace history stack set replace to true */}
      <button onClick={() => navigate("order-summary",{replace: true})}>Place order</button>
    </div>
  )
}

export default Home
