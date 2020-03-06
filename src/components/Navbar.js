import React from 'react'
import{ Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{paddingTop:'2%'}}>
            <h1 id="name" ><Link to="/about" style={{ textDecoration: 'none', color: 'black'}}>TAXPHOTO</Link></h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <Link to="/about">
                    <li className="nav-item nav-link">
                        About
                    </li>
                </Link>
                <Link to="/images">
                    <li className="nav-item nav-link">
                    Images
                    </li>
                </Link>
                <Link to="/contact">
                    <li className="nav-item nav-link">
                        Contact
                    </li>
                </Link>
                    <li className="nav-item ">
                        <a className="nav-link" href="https://www.instagram.com/incometaxes/">Social</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
