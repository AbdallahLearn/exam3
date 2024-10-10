import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Header() {

    const navigate = useNavigate();


    const logout=()=>{
        localStorage.removeItem("userdata")
        navigate("/Login")
        }
  return (
    <>
      <div className="navbar bg-gray-700">
        
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content text-white bg-gray-700 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       <li><a>Home</a></li>
      <li><a>ٌReaded</a></li>
      <li><a>Cart</a></li>
      <li><a>Favorite</a></li>
      </ul>
      
    </div>
    <img className="w-16 text-xl rounded-[100%]" src='https://i.pinimg.com/564x/f9/e4/f5/f9e4f5abe44464acd6bca0eec26a9f9f.jpg'></img>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white">
      <li><Link to="/home">Home</Link></li>
      <li><a>ٌReaded</a></li>
      <li><a>Cart</a></li>
      <li><a>Favorite</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <p>{localStorage.getItem('username')}</p>
    <button className="btn bg-white text-black text-sm" onClick={logout}>Logout</button>
  </div>
</div>
    </>
  )
}

export default Header
