import React, { Component } from 'react'

const NavBar = (props) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Navbar <span className="badge badge-pill badge-secondary">
                                {props.totalCounter}
                            </span>
                </a> 
            </nav>
     )
}
 
export default NavBar

