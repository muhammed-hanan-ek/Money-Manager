import React from 'react'
import { Link } from 'react-router-dom'



const Header = ({isHome}) => {
    
  return (
    <div>
        <nav className="navbar navbar-expand-lg shadow bg-dark">
  <div className="container-fluid d-flex justify-content-between align-items-center">
  <Link className="navbar-brand text-light" to={'/'}><i class="fa-solid fa-money-bill-transfer"></i><span className='ms-2 fw-bold fs-4'>Money Manager</span></Link>


<Link to={"/Login"} className='btn btn-light rounded fs-5 ms-3 shadow me-2'>Sign In</Link>
  </div>
</nav>
    </div>
  )
}

export default Header