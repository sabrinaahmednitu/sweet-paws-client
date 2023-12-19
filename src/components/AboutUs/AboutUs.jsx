import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div>
      <section>
        <div className="searchFind">
          <div className="searchFind-left">
            <img
              src="https://epicpaws.modeltheme.com/wp-content/uploads/2022/11/about-banner.png"
              alt=""
            />
          </div>
          <div className="searchFind-right">
            <h6>Trusted Dog Walker</h6>
            <h1>Search & Find Dog Walking Services In Your Area</h1>
            <p>
              We provide group and individual daily dogs walking that are
              tailored to fit you and your dog’s needs. During the dog walking
              booking, your sitter will walk and engage with your dog on a safe
              route.
            </p>

            <div className="searchFind-list">
              <div className="searchFind-list-left">
                <ul>
                  <li>
                    <i
                      aria-hidden="true"
                      className="fas fa-paw searchfind-icon"
                    ></i>
                    Professional Service
                  </li>
                  <li>
                    {' '}
                    <i
                      aria-hidden="true"
                      className="fas fa-map-marker-alt searchfind-icon"
                    ></i>
                    GPS Tracking
                  </li>
                  <li>
                    <i
                      aria-hidden="true"
                      className="fas fa-tv searchfind-icon"
                    ></i>
                    Online Booking
                  </li>
                </ul>
              </div>
              <div className="searchFind-list-right">
                <ul>
                  <li>
                    <i
                      aria-hidden="true"
                      className="fas fa-chess-king searchfind-icon"
                    ></i>{' '}
                    30 Award Winner
                  </li>
                  <li>
                    <i
                      aria-hidden="true"
                      className="fas fa-globe-africa searchfind-icon"
                    ></i>
                    Top Worldwide
                  </li>
                  <li>
                    <i
                      aria-hidden="true"
                      className="fas fa-star searchfind-icon"
                    ></i>
                    500+ 5 Star Reviews
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <a href="">
                <button className="about-btn">Contact Us</button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="about-header">
          <div className="about-header-content">
            <h2>
              <strong>Our mission</strong> is to make{' '}
              <strong>lives better</strong> by placing{' '}
              <strong>healthy puppies</strong> in ,<strong>happy homes</strong>
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
      <section>
        <div className="coverage-main container mx-auto">
          <h1>Coverage</h1>
          <div className="coverage-container">
            <div className="coverage-item">
              <p>April 14, 2022</p>
              <h2>The Marketplace 100: 2022</h2>
              <h6>A16Z FUTURE</h6>
            </div>
            <hr />
            <div className="coverage-item">
              <p>April 1, 2022</p>
              <h2>
                Two-thirds of Americans claim they spare no expense when it
                comes to their furry companions
              </h2>
              <h6>YAHOO! NEWS</h6>
            </div>
            <hr />
            <div className="coverage-item">
              <p>February 20, 2022</p>
              <h2>
                Make-A-Wish Southern Florida gifts 2-year-old with Goldendoodle
                puppy
              </h2>
              <h6>CBS TAMPA BAY</h6>
            </div>
            <hr />
            <div className="coverage-item">
              <p>February 3, 2022</p>
              <h2>
                Make-A-Wish, PuppySpot surprise 8-year-old South Jersey girl
                with puppy
              </h2>
              <h6>ABC PHILADELPHIA</h6>
            </div>
            <hr />
            <div className="coverage-item">
              <p>January 28, 2022</p>
              <h2>
                6 Major Companies That Offer Pawternity Leave for Pet Parents
              </h2>
              <h6>GOBANKINGRATES</h6>
            </div>
            <hr />
          </div>
          <div className="about-last">
            <strong>Read More</strong>
            <p>
              Please direct all press inquiries to{' '}
              <strong>press@sweetpaws.com</strong>{' '}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
