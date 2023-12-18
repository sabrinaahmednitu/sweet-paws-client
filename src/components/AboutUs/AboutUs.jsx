import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
    return (
      <div>
        <section>
          <div className="about-header">
            <div className="about-header-content">
              <h2>
                <strong>Our mission</strong> is to make{' '}
                <strong>lives better</strong> by placing{' '}
                <strong>healthy puppies</strong> in ,
                <strong>happy homes</strong>
              </h2>
            </div>
          </div>
        </section>
        <section className="container mx-auto">
          <div className="hero-section">
            <div className="hero-header">
              <h1>About SweetPaws</h1>
              <p>
                We are a community of dog lovers, committed to connecting the
                nation’s top breeders to caring, responsible individuals and
                families. We hold ourselves and our customers to the highest
                standards and aim to improve the life of each puppy, breeder and
                owner who joins our family.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="about-placed-container">
            <div className="about-placed">
              <div className="placed-1">
                <img
                  src="https://cdn.buttercms.com/t3WV6cnQuSjBz6lZWs3E"
                  alt=""
                />
              </div>
              <div className="placed-2">
                We have placed over 220,000 puppies into over 220,000 homes.
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default AboutUs;