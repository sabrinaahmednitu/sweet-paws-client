import './TrustedCommunity.css';

const TrustedCommunity = () => {
  return (
    <div>
      <div className="container mx-auto TrustedCommunity-container ">
        <section className="TrustedCommunity-content">
          <div>
            <img
              src="	https://www.puppyspot.com/preact/img/trusted-by-community-icon.svg"
              alt=""
            />
            <h3>Trusted by the Community</h3>
            <p>
              PuppySpot serves you best by putting the health and well-being of
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
                Read More Review
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
        <section className="TrustedCommunity-slider"></section>
      </div>
    </div>
  );
};

export default TrustedCommunity;
