import React from 'react'
import{ BrowserRouter, Route} from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h1 id="name">Tax Collection</h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
            
                <li className="nav-item">
                    <a className="nav-link" href="index.html">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="./images.html">Images</a>
                </li>
                <li className="nav-item">
                        <a className="nav-link" href="https://www.instagram.com/incometaxes/">Social</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
