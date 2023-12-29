import React, { useRef } from 'react';
import Helmet from 'react-helmet';
import emailjs from '@emailjs/browser';
import './ContactUs.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_tryq59o',
        'template_mbkrxrd',
        form.current,
        'QOZd1uV8CWVQhvq-N'
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Success Notification !', {
            position: toast.POSITION.TOP_RIGHT,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact us | SweetPaws</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
          You can also reach our team by email or phone for additional support:{' '}
          <strong>help@SweetPaws.com | (888) 671-0518</strong>
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
            ref={form}
            onSubmit={sendEmail}
            // action="https://formspree.io/f/xwkdndpq"
            // method="POST"
            className="contact-form w-[100%]"
          >
            <input type="text" placeholder="username" name="user_name" />
            <input type="email" placeholder="Email" name="user_email" />
            <textarea
              name="message"
              id=""
              cols="20"
              rows="7"
              placeholder="Place your comment here"
            ></textarea>
            <button type="submit" className="btn bg-indigo-400">
              Submit
            </button>
          </form>
        </section>
      </section>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
