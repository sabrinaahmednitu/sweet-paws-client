import React from 'react';
import Helmet from 'react-helmet';
import './ContactUs.css';
import Jump from 'react-reveal/Jump';


const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact us | SweetPaws</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="contactUs-container">
        <Jump>
          <img
            src="https://www.puppyspot.com/assets/img/components/contact-us/envelope.svg"
            alt=""
          />
        </Jump>
        <h3>Contact Us</h3>
        <h1>Need help?</h1>
        <p>
          Visit our <strong>Help Center</strong> where we answer all questions
          related to finding and preparing for your puppy’s arrival.
        </p>
        <p>
          You can also reach our team by email or phone for additional support:{' '}
          <strong>sweetpaws.service@gmail.com | +1(202)855-9181</strong>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
