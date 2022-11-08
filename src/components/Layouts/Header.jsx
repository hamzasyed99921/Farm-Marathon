import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
       <nav className="navbar navbar-expand-lg  bg-white" style={{zIndex: '1'}} id="navbar_top">
        <div className="container">
          <div className='d-flex justify-content-between align-items-center w-100 flex-wrap'>
          <Link className="navbar-brand" to="/">
            <img
              src="assets/images/logo.png"
              className="img-fluid "
              alt="logo"
            />
            MarathonCash.Com
          </Link>
          <div className='nav_right'>
            <a href="#">Connect Wallet</a>
          </div>
          </div>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
           
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header