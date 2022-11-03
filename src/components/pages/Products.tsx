import {Link, Outlet} from 'react-router-dom'

const Products = () => {
  return (
    <div>
      <input type="text" placeholder='Search products' />
        <p className='products-menu'>
        {/* Relative links */}
        <Link to="/featured">Featured</Link>
        <Link to="/new">New</Link>
        {/* Absolute links */}
        {/* <Link to="/featured">Featured</Link>
        <Link to="/new">New</Link> */}
        </p>
        <Outlet/>
    </div>
  )
}

export default Products

/* 
Relative links or paths :  do not start with "/" and will inherit the closest route in which they are rendered
Absolute Links or paths : starts with "/" and they begin from root/.. 

*/
