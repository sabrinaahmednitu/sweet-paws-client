  
import { updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Helmet from 'react-helmet';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Hooks/AuthProvider';
import SocialLogin from './SocialLogin/SocialLogin';
import money1 from '../../../images/download__1___1___1_-removebg-preview.png';

const Signup = () => {
  const[user,setUser]=useState({})
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { signUp, verifyEmail } = useContext(AuthContext);



  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || '/';

  const navigateLogin = () => {
    navigate('/login');
  };

  const signupOnSubmit = (data) => {
    console.log(data);
    
    signUp(data.email, data.password)
      
      .then((result) => {
        const { email } = result.user;
        const userInfo = { email: email };
        setUser(userInfo)
        const user = result.user;
        console.log(user);
        
        alert(' Thank you !!!', 'Your account has been created');
        reset();
        verifyEmail();

        updateProfile({ displayName: data.name });
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };


  return (
    <div className="login-main">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Create a new account | SweetPaws</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse ">
        {/* form-right */}
        <div className="login-container card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white pt-5 pb-10">
          <h1 className="text-center text-4xl text-black font-bold mb-3">
            Signup
          </h1>
          <form
            onSubmit={handleSubmit(signupOnSubmit)}
            className="w-[75%] mx-auto"
          >
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Enter Name"
                {...register('name', {
                  required: {
                    value: true,
                    message: 'name is required',
                  },
                })}
                className="input input-bordered w-full max-w-md text-white"
              />

              <label className="label">
                {errors.name?.type === 'required' && (
                  <p className="text-red-600 my-2">{errors.name?.message}</p>
                )}
                {errors.name?.type === 'pattern' && (
                  <p className="text-red-600 my-2">{errors.name?.message}</p>
                )}
              </label>
            </div>
            {/* Name */}

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email"
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
                className="input input-bordered w-full max-w-md text-white"
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
            <div>
              <input
                type="password"
                placeholder="Password"
                {...register('password', {
                  minLength: {
                    value: 6,
                    message: 'password must be 6 characters or longer', // JS only: <p>error message</p> TS only support string
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    message: 'provide a valid password',
                  },
                })}
                className="input input-bordered w-full max-w-md text-white"
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
            {/* Password */}

            <div>
              <button
                type="submit"
                className="btn btn-primary  w-full max-w-md text-white"
              >
                sign Up
              </button>
            </div>
          </form>
          <p className="text-black mt-2 text-center">
            Already have an account? <br />
            <Link
              className="text-green-600 font-bold"
              to="/login"
              onClick={navigateLogin}
            >
              Please Login
            </Link>
          </p>
          <SocialLogin></SocialLogin>
        </div>
        {/* text-right */}

        {/* text-left */}
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
        {/* text-left */}
      </div>
    </div>
  );
};

export default Signup;