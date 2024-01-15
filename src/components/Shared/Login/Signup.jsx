import { updateProfile } from 'firebase/auth';
import React, { useContext, useEffect, useRef, useState } from 'react';
import Helmet from 'react-helmet';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Hooks/AuthProvider';
import SocialLogin from './SocialLogin/SocialLogin';
import emailjs from '@emailjs/browser';
import './Signup.css';
import { toast } from 'react-toastify';
import signupimage from '../../../images/login-signup-photo/sign-concept-illustration_114360-125.avif';
const Signup = () => {
   useEffect(() => {
     window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
   }, []);
  const [user, setUser] = useState({});
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
        setUser(userInfo);
        // alert(' Thank you !!!', 'Your account has been created');
        toast.success('Thank you ! Your account has been created', {
          position: toast.POSITION.TOP_RIGHT,
        });
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
      <div className="flex-signup--content">
        {/* form-right */}
        <div className="login-container card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white pt-5 pb-10">
          <h1 className="text-center text-4xl text-white font-bold mb-5">
            Signup
          </h1>
          <form
            onSubmit={handleSubmit(signupOnSubmit)}
            className="w-[75%] mx-auto"
          >
            {/* Name */}
            <div>
              <label className="label">
                <span className="label-text text-black">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your Name"
                {...register('name', {
                  required: {
                    value: true,
                    message: 'name is required',
                  },
                })}
                className="input input-bordered w-full max-w-md "
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
              <label className="label">
                <span className="label-text text-black">Email</span>
              </label>
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
                className="input input-bordered w-full max-w-md "
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
              <label className="label">
                <span className="label-text text-black">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
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
      </div>
    </div>
  );
};

export default Signup;
