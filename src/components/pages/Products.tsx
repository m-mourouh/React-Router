import {Link, Outlet} from 'react-router-dom'

const Products = () => {
  return (
    <div>
      <input type="text" placeholder='Search products' />
        <p className='products-menu'>
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
        </p>
        <Outlet/>
    </div>
  )
}

export default Products
