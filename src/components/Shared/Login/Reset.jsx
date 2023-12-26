import { sendPasswordResetEmail } from "firebase/auth";
import { useContext } from "react";
import auth from "../../../firebase.init";
import { AuthContext } from "../../../Hooks/AuthProvider";
import './Reset.css'
const Reset = () => {
  const { ResetPassword } = useContext(AuthContext);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const emailValue = e.target.value;
//     ResetPassword(auth, emailValue)
//       .then((data) => {
//         alert('check your email');
//       })
//       .catch((err) => {
//         alert(err.code);
//       });
//     };
    

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValue = e.target.value;
    ResetPassword(auth, emailValue)
      .then(() => {
       alert('check your email');
      })
      .catch((error) => {
        console.log(error);
      });
    };
    
  return (
    <div
      style={{
        padding: '190px',
      }}
    >
      <form className="reset-container" onSubmit={(e) => handleSubmit(e)} >
        <label htmlFor="">Email</label>
        <br />
        <input
          style={{
            padding: '10px',
          }}
          type="email"
          className="input input-bordered  max-w-md text-white "
        ></input>
        <br />

        <label htmlFor="">password</label>
        <br />
        <input
          style={{
            padding: '10px',
          }}
          type="email"
          className="input input-bordered  max-w-md text-white"
        ></input>
        <br />
        <label htmlFor="">Confirm password</label>
        <br />
        <input
          style={{
            padding: '10px',
          }}
          type="email"
          className="input input-bordered  max-w-md text-white"
        ></input>
        <br />
        <br />
        <button className="btn reset-btn">Reset</button>
      </form>
      

    </div>
  );
};

export default Reset;