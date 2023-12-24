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
            Visit our <strong>Help Center</strong> where we answer all questions
            related to finding and preparing for your puppy’s arrival.
          </p>
          <p>
            You can also reach our team by email or phone for additional
            support: <strong>help@SweetPaws.com | (888) 671-0518</strong>
          </p>
          <p>
            Please direct all press inquiries to{' '}
            <strong>press@SweetPaws.com</strong>{' '}
          </p>
        </div>
        <section>
          <section className="contact-form-section mt-12 mb-12">
            <div className="contact-img">
              {/* <img src={contact} alt="" /> */}
            </div>
            <form
              action="https://formspree.io/f/xwkdndpq"
              method="POST"
              className="contact-form w-[100%]"
            >
              <input type="text" placeholder="username" name="username" />
              <input type="text" placeholder="Email" name="Email" />
              <textarea
                name="message"
                id=""
                cols="20"
                rows="7"
                placeholder="Place your comment here"
              ></textarea>
              <button className="btn bg-indigo-400">Submit</button>
            </form>
          </section>
        </section>
      </div>
    );
};

export default ContactUs;