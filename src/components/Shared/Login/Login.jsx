import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Hooks/AuthProvider';
import './Login.css';
import SocialLogin from './SocialLogin/SocialLogin';
import money1 from '../../../images/download__1___1___1_-removebg-preview.png';
import Helmet from 'react-helmet';
const Login = () => {
   
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
        const user = result.user;
        console.log(user);
        alert(' Thank you !!!', 'Successfully login');
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

 

  return (
    <div className=" hero login-main">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Log into your account | SweetPaws</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse ">
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
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    message: 'provide a valid ppassword',
                  },
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
        {/* form-right */}

        {/* form-left bg-[#dcfce7]*/}
        <div className=" card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white pt-5 pb-10">
          <h1 className="text-center text-4xl text-black font-bold mb-3">
            Pay Invioce
          </h1>
          <div className="money-cards d-block m-auto">
            <img src={money1} alt="" />
          </div>
          <form className="w-[75%] mx-auto" onSubmit={(e) => handlemoney(e)}>
            {/* Name on card */}
            <div>
              <label className="label">
                <span className="label-text text-black">Name on card</span>
              </label>
              <input
                type="text"
                {...register('cardName', {
                  required: {
                    value: true,
                    message: 'cardName is required',
                  },
                  
                })}
                className="input input-bordered w-full max-w-md bg-white"
              />

              <label className="label">
                {errors.email?.type === 'required' && (
                  <p className="text-red-600 my-2">
                    {errors.cardName?.message}
                  </p>
                )}
                
              </label>
            </div>
            {/* Name on card */}

            {/* card number */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Card number</span>
              </label>

              <input
                type="text"
                placeholder="Visa Card Number"
                {...register('cardNumber', {
                  pattern: {
                    value: /^4\d{12}(\d{3})?$/,
                    message: 'Please provide a valid Visa card number',
                  },
                  pattern: {
                    value: /^(5[1-5]\d{14})$/,
                    message:
                      'Please provide a valid mastercardPattern  card number',
                  },
                  pattern: {
                    value: /^(34|37)\d{13}$/,
                    message: 'Please provide a valid amexPattern  card number',
                  },
                })}
                className="input input-bordered w-full max-w-md bg-white"
              />

              <label className="label text-black">
                {errors.cardNumber?.type === 'pattern' && (
                  <p className="text-red-600 my-2">
                    {errors.cardNumber?.message}
                  </p>
                )}
              </label>
            </div>
            {/* card number */}
            {/* ZIP/Postal code */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">ZIP/Postal code</span>
              </label>

              <input
                type="password"
                {...register('password', {
                  minLength: {
                    value: 6,
                    message: 'password must be 6 characters or longer', // JS only: <p>error message</p> TS only support string
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    message: 'provide a valid ppassword',
                  },
                })}
                className="input input-bordered w-full max-w-md bg-white"
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
            </div>
            {/* ZIP/Postal code */}

            <div className="form-control ">
              <button
                type="submit"
                className="btn btn-info bg-[#fb923c] max-w-md text-white outline-none border-none"
              >
                Pay $5.00
              </button>
            </div>
          </form>
        </div>
        {/* form */}
      </div>
    </div>
  );
};

export default Login;
