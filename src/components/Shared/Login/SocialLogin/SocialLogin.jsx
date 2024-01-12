import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
} from 'firebase/auth';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Hooks/AuthProvider';
import google from '../../../../images/google4.png'
import facebook from '../../../../images/facebook.png'
import { toast } from 'react-toastify';

const SocialLogin = () => {
   const { googleLoginInProvider, verifyEmail, facebookSignUp } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();
   const facebookProvider = new FacebookAuthProvider();

  //  for Google SignIn

  const handleGoogleSignIn = () => {
    googleLoginInProvider(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);

         toast.success('Login Successfully', {
           position: toast.POSITION.TOP_RIGHT,
         });
        verifyEmail();
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  const handleFacebook = () => {
    facebookSignUp(facebookProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        verifyEmail();
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="">
      <div className="flex align-items-center w-[75%] mx-auto mt-2 mb-5">
        <div style={{ height: '1px' }} className="bg-black w-[50%] mt-3"></div>
        <p className="px-2 text-black font-bold">OR</p>
        <div style={{ height: '1px' }} className="bg-black w-[50%] mt-3"></div>
      </div>
      {/*  google button */}
      <div className="form-control mt-2">
        <button
          onClick={handleGoogleSignIn}
          className="btn text-white bg-black-200  w-[75%] max-w-md mx-auto"
        >
          <i class="fa-brands fa-google"></i>
          Continue with google
        </button>
      </div>
     
      <div className="form-control mt-2">
        <button
          onClick={handleFacebook}
          className="btn text-white bg-black-200 w-[75%] max-w-md mx-auto"
        >
          <i class="fa-brands fa-facebook"></i>
          Continue with facebook
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
