import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar/Navbar.css';
import navlogo from "../../images/Sweet_Paws__2_-removebg-preview.png"

const Navbar = () => {
  const navItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/availablepuppies">Available Puppies</Link>
      </li>
      <li>
        <Link to="/aboutus">About Us</Link>
      </li>
      <li>
        <Link to="/contactus">Contact Us</Link>
      </li>
    </>
  );
  return (
    <div>
      <section className="nav-1">
        <p>Email us between 8AM-Midnight EST, every day! </p>
      </section>
      <section>
        <div className="navbar bg-[#e6e7eb] text-black font-bold ">
          {/* nav-1 */}
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
              >
                {navItem}
              </ul>
            </div>
            {/* <a className="normal-case text-xl">SweetPaws</a> */}
           
              <a href="">
                <img className="navlogo" src={navlogo} alt="" />
              </a>
          
          </div>

          {/* nav-2 */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItem}</ul>
          </div>

          {/* nav-3 */}
          <div className="navbar-end mx-auto ">
            {/* <p>{user?.displayName}</p> */}
            <Link>
              <h2>Login</h2>
            </Link>
          </div>
        </div>
      </section>
      <hr />
    </div>
  );
};

export default Navbar;
