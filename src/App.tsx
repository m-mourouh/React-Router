import About from "./components/pages/About"
import Home from "./components/pages/Home"
import {Routes, Route} from "react-router-dom" 
import NavBar from "./components/NavBar"
import OrderSummary from "./components/pages/OrderSummary"
import NoMatch from "./components/pages/NoMatch"


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/order-summary" element={<OrderSummary/>} />
        <Route path="*" element={<NoMatch/>} />
      </Routes>
    </div>
  )
}

export default App
