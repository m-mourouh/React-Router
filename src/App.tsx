import React, { Suspense } from "react";

import Home from "./components/pages/Home";
// import About from "./components/pages/About"
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import OrderSummary from "./components/pages/OrderSummary";
import NoMatch from "./components/pages/NoMatch";
import Products from "./components/pages/Products";
import FeaturedProducts from "./components/pages/FeaturedProducts";
import NewProducts from "./components/pages/NewProducts";
import Users from "./components/pages/Users";
import UserDetails from "./components/pages/UserDetails";
import Admin from "./components/pages/Admin";
import Login from "./components/pages/Login";
import { AuthProvider } from "./contexts/AuthContext";
import Profile from "./components/pages/Profile";
import RequireAuth from "./components/RequireAuth";

// Code splitting - Lazy loading
const LazyAbout = React.lazy(() => import("./components/pages/About"));

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="about"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LazyAbout />
              </Suspense>
            }
          />
          <Route path="order-summary" element={<OrderSummary />} />
          <Route path="products" element={<Products />}>
            {/* Index Route */}
            <Route index element={<FeaturedProducts />} />
            {/* Nested routes */}
            <Route path="featured" element={<FeaturedProducts />} />
            <Route path="new" element={<NewProducts />} />
          </Route>
          <Route path="users" element={<Users />}>
            <Route path=":userID" element={<UserDetails />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<RequireAuth><Profile/></RequireAuth>} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
