import React, { useContext, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Hooks/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Reset.css';
const Reset = () => {
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
      // setLoading(true)
      console.log('wait');
      await ResetPassword(emailRef.current.value);
      navigate(from, { replace: true });
      console.log('done');
      setMessage('Check your inbox for further instructions');
      Swal.fire('Check your email');
    } catch (error) {
      console.log(error);
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
      <div className="w-96 p-7 mx-auto">
        <h2 className="text-center mb-4">Reset Password </h2>
        {message && <p className="text-cyan-600">{message}</p>}
        <form className="reset-container" onSubmit={handleSubmit}>
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
              className="btn btn-accent w-full mt-2 text-white"
              type="submit"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reset;