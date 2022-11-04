import React from 'react'
import { Link, NavLink } from "react-router-dom"
import { useAuth } from '../contexts/AuthContext'
const NavBar = () => {
    const auth = useAuth();

    const navLinkStyle = ({ isActive }: {isActive: boolean}) => {
        return {
            color: isActive  ? "darkorange"  : undefined
        } 
    }
  return (
    <nav>
      <ul>
   
        {/* <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li> */}

        <li><NavLink end style={navLinkStyle} to="/">Home</NavLink></li>
        <li><NavLink style={navLinkStyle} to="about">About</NavLink></li>
        <li><NavLink style={navLinkStyle} to="products">Products</NavLink></li>
        <li><NavLink style={navLinkStyle} to="users">Users</NavLink></li>
        <li><NavLink style={navLinkStyle} to="profile">Profile</NavLink></li> 
        {
          !auth.user && <li><NavLink style={navLinkStyle} to="login">Login</NavLink></li>
        }
      
        

      </ul>
    </nav>
  )
}

export default NavBar
