import React from 'react';
import './DeliverJoy.css'
import happy from '../../../images/pexels-photo-5860106.jpeg' 
import Fade from 'react-reveal/Fade';
const DeliverJoy = () => {
    return (
      <div>
        <div className="container mx-auto Deliver-container ">
          <Fade left>
            <section className="Deliver-content">
              <div>
                <img
                  src="https://cdn.buttercms.com/C8W6lRKSeenROMGu4ekw"
                  alt=""
                />
                <h3>We Deliver Joy</h3>
                <p>
                  Our transportation options ensure the health, comfort,
                  quality, and communication from the breeder’s doorstep to that
                  first wet-nose moment.
                  <strong>
                    Here are the 3 different ways to get your puppy home:
                  </strong>
                </p>
              </div>

              {/* part-2 */}
              <div className="Deliver-content-2">
                <img
                  src="	https://www.puppyspot.com/preact/img/we-deliver-joy-calendar.svg"
                  alt=""
                />
                <p>
                  We try to get all our puppies home within <strong>2-3</strong>{' '}
                  weeks.
                </p>
              </div>

              {/* part-3 */}
              <div className="Deliver-btn-container">
                <a href="">
                  <button className="Deliver-btn">
                    Learn More
                    <img
                      src="https://www.puppyspot.com/preact/img/forward-caret-white.svg"
                      alt=""
                    />
                  </button>
                </a>
                <a href="">
                  <button className="Deliver-btn-2">
                    Browse All Puppies
                    <img
                      src="https://www.puppyspot.com/preact/img/we-deliver-joy-forward-caret-black.svg"
                      alt=""
                    />
                  </button>
                </a>
              </div>
            </section>
          </Fade>
          {/* -------- section-2 ----------- */}
          <Fade right>
            <section>
              <div className="deliver-img">
                <img src={happy} alt="" />
              </div>
            </section>
          </Fade>
        </div>
        <section className="Deliver-slider">
          <div className="delivery-cards">
            <div className="delivery-1-container">
              <div className="delivery-1">
                <img
                  src="https://cdn.buttercms.com/gtCNOEshRxG223uZY7uF"
                  alt=""
                />
                <h3>Puppy Chaperone</h3>
                <p>
                  A Puppy Chaperone brings your puppy to an airport near you. A
                  Puppy Chaperone is a human companion who accompanies your
                  puppy in the cabin of the plane.
                </p>
              </div>
            </div>
            <div className="delivery-1-container">
              <div className="delivery-1">
                <img
                  src="https://cdn.buttercms.com/REPdSlLTi8MAXfzH6zAC"
                  alt=""
                />
                <h3>Deliver Near Your Home</h3>
                <p>
                  We work with trusted licensed professionals in the commercial
                  air and ground transportation puppy travel business to get
                  your puppy to a pickup location as close to your home as
                  possible.
                </p>
              </div>
            </div>
            <div className="delivery-1-container">
              <div className="delivery-1">
                <img
                  src="https://cdn.buttercms.com/ageDkvUSoq7JPxwKFWy0"
                  alt=""
                />
                <h3>Breeder Meet Up</h3>
                <p>
                  Meet the breeder and your puppy at a location near the kennel.
                  If you are interested in a pickup, please check with a
                  sweet paws pack member to see if this is an option.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default DeliverJoy;