import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import footerlogo from '../../../images/Sweet_Paws__2_-removebg-preview.png'
const Footer = () => {
  return (
    <div>
      <section className="footer-logo text-center">
        <div className="">
          <img className="footer-img" src={footerlogo} alt="" />
        </div>

        <div>
          <h3>Call Us: (888) 671-0518</h3>
        </div>
      </section>
      <section className="second-footer z-1">
        <footer className="footer container mx-auto p-10  pt-24">
          <nav>
            <header className="footer-title">Find A Puppy</header>
            <a className="link link-hover">View All Puppies</a>
            <a className="link link-hover">View All Characteristics</a>
            <a href="#">
              <button className="btn">Breed Match Quiz</button>
            </a>
          </nav>
          <nav>
            <header className="footer-title">Customers</header>
            <a className="link link-hover">Log In</a>
            <a className="link link-hover">Sign Up</a>
            <a className="link link-hover">Support</a>
            <a className="link link-hover">Special Offers</a>
            <a className="link link-hover">Breeder Login</a>
          </nav>
          <nav>
            <header className="footer-title">About PuppySpot</header>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Resource Center</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Dog Registration</a>
            <a className="link link-hover">AKC Reunite</a>
          </nav>
          <form>
            <header className="footer-title">Let Us Help You</header>
            <a className="link link-hover">Your Account</a>
            <a className="link link-hover">Your Orders</a>
            <a className="link link-hover">Shipping Rates & Policies</a>
            <a className="link link-hover">Returns & Replacements</a>
            <a className="link link-hover">Manage Your Content and Devices</a>
            <a className="link link-hover">Help</a>
          </form>
        </footer>
        <hr />
        {/* <footer className="bg-[#e6e7eb] text-black  text-center pt-3 pb-5"> */}
        <footer className="last-footer pt-3 pb-5">
          <h1>
            {' '}
            Privacy Terms of Use Sitemap @ {new Date().getFullYear()} SweetPaws
          </h1>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
