import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
    return (
      <div>
        <div className="contactUs-container">
          <img
            src="https://www.puppyspot.com/assets/img/components/contact-us/envelope.svg"
            alt=""
          />
          <h3>Contact Us</h3>
          <h1>Need help?</h1>
          <p>
            Visit our Help Center where we answer all questions related to
            finding and preparing for your puppy’s arrival.
          </p>
          <p>
            You can also reach our team by email or phone for additional
            support: help@puppyspot.com | (888) 671-0518
          </p>
          <p>Please direct all press inquiries to press@puppyspot.com</p>
        </div>
      </div>
    );
};

export default ContactUs;