import { sendPasswordResetEmail } from "firebase/auth";
import { useContext } from "react";
import auth from "../../../firebase.init";
import { AuthContext } from "../../../Hooks/AuthProvider";
import MessengerCustomerChat from 'react-messenger-customer-chat';
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
      <form className="reset-container" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="">Email</label>
        <br />
        <input
          style={{
            padding: '10px',
          }}
          type="email"
          className="input input-bordered  max-w-md "
        ></input>
        <br />

        <label htmlFor="">password</label>
        <br />
        <input
          style={{
            padding: '10px',
          }}
          type="email"
          className="input input-bordered  max-w-md "
        ></input>
        <br />
        <label htmlFor="">Confirm password</label>
        <br />
        <input
          style={{
            padding: '10px',
          }}
          type="email"
          className="input input-bordered  max-w-md "
        ></input>
        <br />
        <br />
        <button className="btn reset-btn">Reset</button>
      </form>
      <div className="money-form">
        <div className="money-form-container">
          <h1>Pay Invoice</h1>
          <form>
            <div className="money-input-group">
              <div className="money-input">
                <label htmlFor="">Name on card </label>
                <input type="text" placeholder="card name" />
              </div>
              <div className="money-input">
                <label htmlFor="">Card Number</label>
                <input type="text" placeholder="card number" />
              </div>
              <div className="money-input">
                <label htmlFor="">expire date</label>
                <input type="text" placeholder="card name" />
              </div>
              <div className="money-input">
                <label htmlFor="">security code</label>
                <input type="text" placeholder="card name" />
              </div>
              <div className="money-input">
                <label htmlFor="">ZIP/Postal code</label>
                <input type="text" placeholder="card name" />
              </div>
            </div>
            <button>Pay $5</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reset;