  
import { updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Hooks/AuthProvider';
import SocialLogin from './SocialLogin/SocialLogin';

const Signup = () => {
  const[user,setUser]=useState({})
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { signUp, verifyEmail, ResetPassword } = useContext(AuthContext);



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



  const handleReset = (user) => {
    console.log(user)
  ResetPassword(user.email)
    .then(() => {
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      console.log(error);
    });
  }
  
  // const handleReset = (user) => {
  //   console.log(user)
  // ResetPassword(user.email)
  //   .then(() => {
  //     // Password reset email sent!
  //     // ..
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // }
  
  // const handleReset = async (data) => {
  //   try {
  //     await ResetPassword(data.email);
  //     // Password reset email sent!
  //     console.log(`Password reset email sent to ${data.email}`);
  //   } catch (error) {
  //     console.error('Error sending password reset email:', error.message);
  //   }
  // };


  return (
    <div className=" hero login-main ">
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
            Already have an account? <br /><Link
              className="text-green-600 font-bold"
              to="/login"
              onClick={navigateLogin}
            >
                Please Login
            </Link>
          </p>
          <SocialLogin></SocialLogin>
        </div>
        {/* text-left */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-white ">Signup now !</h1>

          <p className="py-6 text-2xl text-white ">
            Signup is the process of gaining access to a secure system or
            account providing valid credentials, such as a username and
            password.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;