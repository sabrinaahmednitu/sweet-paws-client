import React, { useContext, useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Hooks/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Reset.css';
import Helmet from 'react-helmet';
const Reset = () => {
   useEffect(() => {
     window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
   }, []);
  const emailRef = useRef();
  const { ResetPassword, setLoading } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/login';

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage('');
      setError('');
      await ResetPassword(emailRef.current.value);
      navigate(from, { replace: true });
      setMessage('Check your inbox for further instructions');
      Swal.fire('Check your email');
    } catch (error) {

      setError('Failed to reset password');
    }

    setLoading(false);
    emailRef.current.value = ' ';
  }

  return (
    <div
      style={{
        padding: '190px',
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Forgot Your Password ? | SweetPaws</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="reset-main">
        {message && <p className="text-cyan-600">{message}</p>}
        <form className="reset-container" onSubmit={handleSubmit}>
          <h3> Forgot your password?</h3>
          <h2 className="text- mb-4">
            Enter your email address and we will send you instructions to reset
            your password.
          </h2>
          <div className="" id="email">
            <label>Email</label>
            <br />
            <div className="flex items-center border-solid border-2 border-gray-300 hover:border-solid rounded-[12px]">
              <input
                type="email"
                ref={emailRef}
                required
                className="input focus:outline-none focus:ring-0 w-[100%] text-white"
              />
            </div>

            {error && <p className="text-red-700 my-4">{error}</p>}

            <button
              className="btn w-full mt-2 text-white reset-btn"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reset;
