import React from 'react';
import './Banner.css';
import Jump from 'react-reveal/Jump';


const Banner = () => {
    return (
      <div className="banner">
        <h2>
          <span>Happy, Healthy</span> Puppies, Direct To You
        </h2>
        <h3>From our nationwide network of responsible breeders</h3>
        <button className="banner-btn">Browse All Puppies</button>
        <Jump>
          <div className="items-group">
            <div className="item-1">
              <img
                src="https://cdn.buttercms.com/xSKyZcPwSV6wodLr9MSH"
                alt=""
              />
              <h3>No Puppy Mills</h3>
              <span>Only Vetted Breeders</span>
            </div>
            <div className="item-1">
              <img
                src="https://cdn.buttercms.com/cK8fZInJTAe6ww7HVQsI"
                alt=""
              />
              <h3>Healthy Pups</h3>
              <span>10-Year Health Commitment</span>
            </div>
            <div className="item-1">
              <img
                src="https://cdn.buttercms.com/wfEWWqd5TTuAwwtYROth"
                alt=""
              />
              <h3>Easy, Safe Delivery</h3>
              <span>Our Private Travel Network</span>
            </div>
            <div className="item-1">
              <img
                src="https://cdn.buttercms.com/iLoEZ9wATx2TTRkkVtCH"
                alt=""
              />
              <h3>Trusted</h3>
              <span>220,000+ Happy Puppies Placed</span>
            </div>
          </div>
        </Jump>
      </div>
    );
};

export default Banner;