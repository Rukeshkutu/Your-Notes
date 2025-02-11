//import { useState } from "react"
import React, {useState} from 'react'
import { FaSquarePlus } from "react-icons/fa6";
import {Link} from "react-router-dom"
//import './index.css';

const NavBar = () => {
    /*const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen)
    };*/

  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary py-3' >
        <div className='navbar-container-fluid'>
            <Link className = 'navbar-brand' to='/'>
                <h4 style='fw-bold mb-0'>Note</h4>
            </Link>
            <button className='navbar-toggle' type='button' data-bs-target ='#navbarContent'
                data-bs-
            <div className='d-flex'>
                <div className='input-group input-group-sm' style={{width: '500px', height:'400px'}>
                    <input className='form-control' type='search' placeholder='Search' aria-label='Search' />
                    <button className='btn btn-outline-success' type='submit'> Search </button>
                </div>
            </div>
            <Link to="/add-note" style={{textDecoration:'none'}}>
                <button className='btn btn-outline-primary btn-md' type='button'>
                    <FaSquarePlus /> Add Notes
                </button>
            </Link>
        </div>
    </nav>
  )
}

export default NavBar;