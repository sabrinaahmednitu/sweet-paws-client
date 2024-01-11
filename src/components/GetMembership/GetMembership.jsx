import React, { useRef } from 'react';
import './GetMembership.css';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

const GetMembership = () => {
     const {
       register,
       formState: { errors },
     } = useForm();
  //for 2nd one
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_c79eg0z',
        'template_yrh1f72',
        form.current,
        'pR_K-Nt_Ffpfhs6Cv'
      )
      .then(
        (result) => {
          toast.success('Thank you so much', {
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
      <div className="get-membership-container container mx-auto">
        <div className="get-membership-content">
          <div className="get-membershit-header">
            <h1>Get Membership for Lifetime Pet Healthcare service</h1>
            <p>
              Introducing our Lifetime Pet Health Call Services! As a member,
              you gain exclusive access to expert veterinary consultations,
              personalized health plans, and timely advice for your furry
              friends. Enjoy peace of mind with unlimited lifetime support,
              ensuring your pets lead happy, healthy lives. Join today for a
              lifetime commitment to your pet's well-being.
            </p>
          </div>
          <div className="get-membership-form">
            {/* text-left */}
            <div className="shadow-2xl  bg-white pb-10 ">
              <div className="membership-div">
                <h1 className="text-center text-3xl">Get Membership</h1>
                <div className="moneycard-flex">
                  <div>
                    <img
                      src="https://quomodosoft.com/html/reservq/assets/images/small/Visa.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://quomodosoft.com/html/reservq/assets/images/small/Amex.png"
                      alt=""
                    />
                  </div>

                  <div>
                    <img
                      src="https://quomodosoft.com/html/reservq/assets/images/small/Mastercard.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <form className="px-5 mt-5" ref={form} onSubmit={sendEmail}>
                <div className="flex gap-2">
                  {/* first Name*/}
                  <div>
                    <label className="label">
                      <span className="label-text text-black">First Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="First Name"
                      {...register('firstName', {
                        required: {
                          value: true,
                          message: 'First Name is required',
                        },
                      })}
                      className="input input-bordered w-full bg-white"
                    />

                    <label className="label">
                      {errors.email?.type === 'required' && (
                        <p className="text-red-600 my-2">
                          {errors.firstName?.message}
                        </p>
                      )}
                    </label>
                  </div>
                  {/* first Name  */}
                  {/* last Name*/}
                  <div>
                    <label className="label">
                      <span className="label-text text-black">Last Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      {...register('lastName', {
                        required: {
                          value: true,
                          message: 'Last Name is required',
                        },
                      })}
                      className="input input-bordered w-full max-w-md bg-white"
                    />

                    <label className="label">
                      {errors.lastName?.type === 'required' && (
                        <p className="text-red-600 my-2">
                          {errors.lastName?.message}
                        </p>
                      )}
                    </label>
                  </div>
                  {/* last Name  */}
                </div>
                <div className="flex gap-2">
                  {/* date of birth  */}
                  <div>
                    <label className="label">
                      <span className="label-text text-black">
                        Date of Birth{' '}
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="MM\DD\YYYY"
                      {...register('dateBirth', {
                        required: {
                          value: true,
                          message: 'dateBirth is required',
                        },
                      })}
                      className="input input-bordered w-full max-w-md bg-white"
                    />

                    <label className="label">
                      {errors.dateBirth?.type === 'required' && (
                        <p className="text-red-600 my-2">
                          {errors.dateBirth?.message}
                        </p>
                      )}
                    </label>
                  </div>
                  {/* date of birth  */}
                  {/* email*/}
                  <div>
                    <label className="label">
                      <span className="label-text text-black">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Your Email"
                      {...register('email', {
                        required: {
                          value: true,
                          message: 'Email is required',
                        },
                      })}
                      className="input input-bordered w-full  bg-white"
                    />

                    <label className="label">
                      {errors.email?.type === 'required' && (
                        <p className="text-red-600 my-2">
                          {errors.email?.message}
                        </p>
                      )}
                    </label>
                  </div>
                  {/* email  */}
                </div>
                {/* phone number*/}
                <div>
                  <label className="label">
                    <span className="label-text text-black">Phone Number</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Your phone number"
                    {...register('phoneNumber', {
                      required: {
                        value: true,
                        message: 'Phone Number is required',
                      },
                    })}
                    className="input input-bordered w-full max-w-md bg-white"
                  />

                  <label className="label">
                    {errors.phoneNumber?.type === 'required' && (
                      <p className="text-red-600 my-2">
                        {errors.phoneNumber?.message}
                      </p>
                    )}
                  </label>
                </div>
                {/* phone number*/}
                {/* Address*/}
                <div>
                  <label className="label">
                    <span className="label-text text-black">Address</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Address"
                    {...register('address', {
                      required: {
                        value: true,
                        message: 'Address is required',
                      },
                    })}
                    className="input input-bordered w-full max-w-md bg-white"
                  />

                  <label className="label">
                    {errors.address?.type === 'required' && (
                      <p className="text-red-600 my-2">
                        {errors.address?.message}
                      </p>
                    )}
                  </label>
                </div>
                {/* Address */}

                {/* state*/}
                <div>
                  <label className="label">
                    <span className="label-text text-black">Region/State</span>
                  </label>
                  <input
                    type="text"
                    placeholder="State"
                    {...register('state', {
                      required: {
                        value: true,
                        message: 'State is required',
                      },
                    })}
                    className="input input-bordered w-full max-w-md bg-white"
                  />

                  <label className="label">
                    {errors.state?.type === 'required' && (
                      <p className="text-red-600 my-2">
                        {errors.state?.message}
                      </p>
                    )}
                  </label>
                </div>
                {/* state  */}

                {/* country+state */}
                {/* city+zip */}
                <div className="flex gap-2">
                  {/* city*/}
                  <div>
                    <label className="label">
                      <span className="label-text text-black">City </span>
                    </label>
                    <input
                      type="text"
                      placeholder=" Enter City"
                      {...register('city', {
                        required: {
                          value: true,
                          message: 'city is required',
                        },
                      })}
                      className="input input-bordered w-full max-w-md bg-white"
                    />

                    <label className="label">
                      {errors.city?.type === 'required' && (
                        <p className="text-red-600 my-2">
                          {errors.city?.message}
                        </p>
                      )}
                    </label>
                  </div>
                  {/* country  */}
                  {/* ZIP/Postal code */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-black">
                        Postal/ZIP code
                      </span>
                    </label>

                    <input
                      type="text"
                      placeholder="ZIP code"
                      {...register('postalCode', {})}
                      className="input input-bordered w-full max-w-md bg-white"
                    />

                    <label className="label">
                      {errors.postalCode?.type === 'minLength' && (
                        <p className="text-red-600 my-2">
                          {errors.postalCode?.message}
                        </p>
                      )}
                      {errors.postalCode?.type === 'pattern' && (
                        <p className="text-red-600 my-2">
                          {errors.postalCode?.message}
                        </p>
                      )}
                    </label>
                  </div>
                  {/* ZIP/Postal code */}
                </div>

                {/* city+zip */}

                {/* Name on card */}
                <div>
                  <label className="label">
                    <span className="label-text text-black">Card Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name on Card"
                    {...register('cardName', {
                      required: {
                        value: true,
                        message: 'card Name is required',
                      },
                    })}
                    className="input input-bordered w-full max-w-md bg-white"
                  />

                  <label className="label">
                    {errors.cardName?.type === 'required' && (
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
                    placeholder="Enter Card Number"
                    {...register('cardNumber', {
                      pattern: {
                        value: /^(4\d{12}(\d{3})?|5[1-5]\d{14}|(34|37)\d{13})$/,
                        message: 'Please provide a valid card number',
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
                <div className="flex gap-2">
                  {/* Expiration date */}
                  <div>
                    <label className="label">
                      <span className="label-text text-black">
                        Expiration date{' '}
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Expiration date"
                      {...register('expirationDate', {
                        required: {
                          value: true,
                          message: 'Expiration date is required',
                        },
                      })}
                      className="input input-bordered w-full max-w-md bg-white"
                    />

                    <label className="label">
                      {errors.expirationDate?.type === 'required' && (
                        <p className="text-red-600 my-2">
                          {errors.expirationDate?.message}
                        </p>
                      )}
                    </label>
                  </div>
                  {/* Expiration date */}
                  {/* security code*/}
                  <div>
                    <label className="label">
                      <span className="label-text text-black">
                        Security Code
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="security code"
                      {...register('securityCode', {
                        required: {
                          value: true,
                          message: 'securityCode is required',
                        },
                      })}
                      className="input input-bordered w-full max-w-md bg-white"
                    />

                    <label className="label">
                      {errors.securityCode?.type === 'required' && (
                        <p className="text-red-600 my-2">
                          {errors.securityCode?.message}
                        </p>
                      )}
                    </label>
                  </div>
                  {/* security Code  */}
                </div>

                <div className="form-control ">
                  <button
                    type="submit"
                    className="btn btn-success mt-5 bg-[#fb923c] max-w-md text-white outline-none border-none"
                  >
                    Pay $5.00
                  </button>
                </div>
              </form>
            </div>
            {/* text-left */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetMembership;