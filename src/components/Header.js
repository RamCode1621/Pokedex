import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div className='header shadow'>
        <h1>Pokeweb</h1>
        <nav>
            <Link className='header-link' to="/">Home</Link>
            {/* <Link className='header-link' to="/repo">Repositorie</Link> */}
            <Link className='header-link' to="/credits">Credits</Link>
            <Link className='header-link' to="/search">Search</Link>
        </nav>
    </div>
  )
}

export default Header