//import { useState } from "react"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaSquarePlus } from "react-icons/fa6";
import {Form, Link, useNavigate} from "react-router-dom"
import debounce from 'lodash.debounce'
//import './index.css';

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Debounce search input
  const debouncedSearch = debounce((term) => {
    if (term.length >= 3) {
      navigate(`/?search=${encodeURIComponent(term)}`);
    } else if (term === '') {
      navigate('/');
    }
  }, 500);

  useEffect(() => {
    debouncedSearch(searchTerm);
    return () => debouncedSearch.cancel();
  }, [searchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.length >= 3) {
      navigate(`/?search=${encodeURIComponent(searchTerm)}`);
    }
  }

    return (
      <nav className="navbar bg-body-tertiary py-50" style={{ padding: "20px" }}>
        <div className="container d-flex justify-content-around">
          <Link className="navbar-brand" to="/">
            <h4 style={{ fontWeight: "bold" }}>Notey</h4>
          </Link>
          <div className="d-flex">
            <div
              onSubmit={handleSubmit}
              className="input-group input-group-sm"
              style={{ width: "500px", height: "40px" }}
            >
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value = {searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </div>
            
            
            {/* <button className="btn btn-outline-primary btn-md" type="button">Add</button> */}
          </div>
  
          <Link to="/add-note"  style={{ textDecoration: "none" }}>
            <button
              className="btn btn-outline-primary btn-md"
              type="button"
             
            >
              <FaSquarePlus /> Add Notes
            </button>
          </Link>
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