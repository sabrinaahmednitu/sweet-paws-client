import './TrustedCommunity.css';

const TrustedCommunity = () => {
  return (
    <div>
      <div className="container mx-auto TrustedCommunity-container ">
        <section className="TrustedCommunity-content">
          <div>
            <img
              className="TrustedCommunity-img"
              src="	https://www.puppyspot.com/preact/img/trusted-by-community-icon.svg"
              alt=""
            />
            <h3>Trusted by the Community</h3>
            <p>
              Sweet paws serves you best by putting the health and well-being of
              your puppy first. Don't take our word for it,{' '}
              <strong>
                here's what real customers have to say about SweetPaws.
              </strong>
            </p>
          </div>

          {/* part-2 */}
          <div className="TrustedCommunity-content-2">
            <img
              src="https://www.puppyspot.com/preact/img/trusted-by-community-check-mark.svg"
              alt=""
            />
            <p>
              We’ve placed over <strong>352,000</strong> healthy puppies in
              happy homes.
            </p>
          </div>

          {/* part-3 */}
          <div className="trustrd-btn-container">
            <a href="">
              <button className="trustedCom-btn">
                More Review
                <img
                  src="https://www.puppyspot.com/preact/img/forward-caret-white.svg"
                  alt=""
                />
              </button>
            </a>
            <a href="">
              <button className="trustedCom-btn-2">
                Browse All Puppies
                <img
                  src="https://www.puppyspot.com/preact/img/we-deliver-joy-forward-caret-black.svg"
                  alt=""
                />
              </button>
            </a>
          </div>
        </section>
        <section className="TrustedCommunity-slider">
          <div className="trusted-item-1">
            <img
              src="https://images.pexels.com/photos/6491060/pexels-photo-6491060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className="trusted-item-1-content">
              <div className="home-stars">
                <div>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
              <div>
                <p>
                  Our experience with sweet paws was excellent . Communication
                  was good. The wait in between buying the puppy and delivery
                  was torture lol but they sent updated pics and videos and kept
                  in touch. Our puppy is in excellent health as per our vet. The
                  breeder he came from took good care of him. He is an absolute
                  joy to our family .
                </p>
              </div>
              <div>
                <h6>- Albert K., New York</h6>
              </div>
              <div>
                <h5>12/13/2023</h5>
              </div>
            </div>
          </div>
          <div className="trusted-item-1">
            <img
              src="https://images.pexels.com/photos/3299908/pexels-photo-3299908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className="trusted-item-1-content">
              <div className="home-stars">
                <div>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
              <div>
                <p>Had a very pleasant experience from start to finish .</p>
              </div>
              <div>
                <h6>- Linda C., California</h6>
              </div>
              <div>
                <h5>12/11/2023</h5>
              </div>
            </div>
          </div>
          <div className="trusted-item-1">
            <img
              src="https://images.pexels.com/photos/5623944/pexels-photo-5623944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className="trusted-item-1-content">
              <div className="home-stars">
                <div>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
              <div>
                <p>
                  Toby is a wonderful addition to our family. We are in love and
                  he is adjusting perfectly ❤️ Thank you
                </p>
              </div>
              <div>
                <h6>- Lorre S., New York</h6>
              </div>
              <div>
                <h5>12/10/2023</h5>
              </div>
            </div>
          </div>
          <div className="trusted-item-1">
            <img
              src="https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className="trusted-item-1-content">
              <div className="home-stars">
                <div>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
              <div>
                <p>
                  Toby is a wonderful addition to our family. We are in love and
                  he is adjusting perfectly ❤️ Thank you
                </p>
              </div>
              <div>
                <h6>- Mickey M., Texas</h6>
              </div>
              <div>
                <h5>12/10/2023</h5>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TrustedCommunity;
