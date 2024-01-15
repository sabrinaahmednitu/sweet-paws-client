import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Hooks/AuthProvider';
import './Login.css';
import SocialLogin from './SocialLogin/SocialLogin';

import Helmet from 'react-helmet';
import { toast } from 'react-toastify';
const Login = () => {

   useEffect(() => {
     window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
   }, []);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const navigateSignup = () => {
    navigate('/signup');
  };

  //  for signUp
  const loginOnSubmit = async (data) => {
    console.log(data);
    logIn(data.email, data.password)
      .then((result) => {
        toast.success('Thank you !! Successfully Login  ', {
          position: toast.POSITION.TOP_RIGHT,
        });

        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="login-main">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Log into your account | SweetPaws</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="flex-login--content">
        {/* form-right */}
        <div className="login-container card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white pt-5 pb-10">
          <h1 className="text-center text-4xl text-white font-bold mb-3">
            Login
          </h1>
          <form
            onSubmit={handleSubmit(loginOnSubmit)}
            className="w-[75%] mx-auto"
          >
            {/* Email */}
            <div>
              <label className="label ">
                <span className="label-text text-black">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Email is required',
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'provide a valid email',
                  },
                })}
                className="input input-bordered w-full max-w-md"
              />

              <label className="label">
                {errors.email?.type === 'required' && (
                  <p className="text-red-600 my-2">{errors.email?.message}</p>
                )}
                {errors.email?.type === 'pattern' && (
                  <p className="text-red-600 my-2">{errors.email?.message}</p>
                )}
              </label>
            </div>
            {/* Email */}

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Password</span>
              </label>

              <input
                type="password"
                placeholder="password"
                {...register('password', {
                  minLength: {
                    value: 6,
                    message: 'password must be 6 characters or longer', // JS only: <p>error message</p> TS only support string
                  }
                })}
                className="input input-bordered w-full max-w-md "
              />

              <label className="label">
                {errors.password?.type === 'minLength' && (
                  <p className="text-red-600 my-2">
                    {errors.password?.message}
                  </p>
                )}
                {errors.password?.type === 'pattern' && (
                  <p className="text-red-600 my-2">
                    {errors.password?.message}
                  </p>
                )}
              </label>

              {/* Forgot password */}
              <label className="label">
                <span className="label-text text-black">
                  Forget Password ?
                  <Link to="/reset" className="btn btn-link">
                    Reset
                  </Link>
                </span>
              </label>
              {/* Forgot password */}
            </div>
            {/* Password */}

            <div className="form-control ">
              <button
                type="submit"
                className="btn btn-primary max-w-md text-white"
              >
                Login
              </button>
            </div>
          </form>
          <p className="text-black mt-3 text-center">
            Do not have an account? <br />
            <Link
              className="text-green-600 font-bold "
              to="/signup"
              onClick={navigateSignup}
            >
              Please Signup
            </Link>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
