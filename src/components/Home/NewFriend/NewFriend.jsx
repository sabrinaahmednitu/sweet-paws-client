import React from 'react';
import './NewFriend.css'
const NewFriend = () => {
    return (
      <div className="newfriend-main">
        <div className="newfriend-content">
          <img
            className="newfriend-img"
            src="https://www.puppyspot.com/assets/img/components/contact-us/dog-medium.svg"
            alt=""
          />
          <p>
            Need help finding you new best friend? Start with our{' '}
            <strong>Breed Match Quiz</strong>{' '}
          </p>
        </div>
      </div>
    );
};

export default NewFriend;