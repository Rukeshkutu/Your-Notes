//import { useState } from "react"
import React from 'react'
import { FaSquarePlus } from "react-icons/fa6";
import {Link} from "react-router-dom"
//import './index.css';
{/*
const NavBar = () => {
    

  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary py-3' >
        <div className='container-fluid'>
            <a className = 'navbar-brand' to='/'>
                
                <h4 style={{fontWeight: "bold", marginBottom:0 }}>Note </h4>
            </a>
            <button 
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarContent'
                aria-controls='navbarContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <span className='navbar-toggler-icon'></span>
            </button> 

            <div className='collapse navbar-collapse' id='navbarContent'>
                <div className='d-flex flex-column flex-lg-row justify-content-between w-50 align-items-center'>
                    <form className='d-flex my-2 my-lg-9 mx-lg-3 flex-grow-1' role='search'>
                        <div className='form-control'>
                            <input className='form-control' type='search' placeholder='Search Notes...' aria-label='Search' />
                            <button className='btn btn-outline-success' type='submit'> Search </button>
                        </div>
                    </form> 
                    
                    <div className='ms-lg-3 my-2 my-lg-0'>
                        <a to="/add-note" style={{textDecoration:'none'}}>
                            <button className='btn btn-outline-primary d-flex align-items-center gap-2'>
                                <FaSquarePlus /> 
                                <span>Add Notes</span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar; */}

const NavBar = () => {
    return (
      <nav className="navbar bg-body-tertiary py-50" style={{ padding: "20px" }}>
        <div className="container d-flex justify-content-around">
          <a className="navbar-brand" to="/">
            <h4 style={{ fontWeight: "bold" }}>Notey</h4>
          </a>
          <div className="d-flex">
            <div
              className="input-group input-group-sm"
              style={{ width: "500px", height: "40px" }}
            >
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </div>
            {/* <button className="btn btn-outline-primary btn-md" type="button">Add</button> */}
          </div>
  
          <a to="/add-notes"  style={{ textDecoration: "none" }}>
            <button
              className="btn btn-outline-primary btn-md"
              type="button"
             
            >
              <FaSquarePlus /> Add Notes
            </button>
          </a>
        </div>
      </nav>
  
      // <nav className="navbar navbar-dark bg-dark">
      //   <div className="container d-flex justify-content-around">
      //     <a className="navbar-brand">Navbar</a>
      //     <div className="d-flex">
      //       <div className="input-group input-group-sm custom-input-group" style={{ width: '300px' }}>
      //         <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
      //         <button className="btn btn-outline-success" type="submit">Search</button>
      //       </div>
      //       <button className="btn btn-outline-primary btn-sm ms-2" type="button">Add</button>
      //     </div>
      //   </div>
      // </nav>
    );
  };
  
  export default NavBar;