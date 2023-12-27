import React from 'react';

const payInvoce = () => {
    return (
      <div>
        {/* form-left */}
        <div className="login-container card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white pt-5 pb-10">
          <h1 className="text-center text-4xl text-black font-bold mb-3">
            Pay Invioce
          </h1>
          <form className="w-[75%] mx-auto">
            {/* Email */}
            <div>
              <label className="label">
                <span className="label-text ">Name on card</span>
              </label>
              <input
                type="text"
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

            {/* name on card */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">name on card</span>
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
            {/* name on card */}
            {/* ZIP/Postal code */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">ZIP/Postal code</span>
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
            {/* ZIP/Postal code */}

            <div className="form-control ">
              <button
                type="submit"
                className="btn btn-primary max-w-md text-white"
              >
                Pay $5.00
              </button>
            </div>
          </form>
        </div>
        {/* form*/}
      </div>
    );
};

export default payInvoce;