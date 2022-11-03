import About from "./components/pages/About"
import Home from "./components/pages/Home"
import {Routes, Route} from "react-router-dom" 
import NavBar from "./components/NavBar"
import OrderSummary from "./components/pages/OrderSummary"
import NoMatch from "./components/pages/NoMatch"
import Products from "./components/pages/Products"
import FeaturedProducts from "./components/pages/FeaturedProducts"
import NewProducts from "./components/pages/NewProducts"


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="order-summary" element={<OrderSummary/>} />
        <Route path="products" element={<Products/>}>
          {/* Index Route */}
          <Route index element={<FeaturedProducts/>} />
          {/* Nested routes */}
          <Route path="featured"  element={<FeaturedProducts/>}/>
          <Route path="new"  element={<NewProducts/>}/>
        </Route>
        <Route path="*" element={<NoMatch/>} />
      </Routes>
    </div>
  )
}

export default App
