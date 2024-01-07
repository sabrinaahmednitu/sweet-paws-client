/* eslint-disable no-unused-vars */
import React from 'react';
import Helmet from 'react-helmet';
import './AvailablePuppies.css';
import Rotate from 'react-reveal/Rotate';
import Roll from 'react-reveal/Roll';
import Yorkie from '../../images/Available-puppy/Yorkie.jpg'
import ShihTzu2 from '../../images/Available-puppy/ShihTzu2.jpeg'
import Dachshund from '../../images/Available-puppy/Dachshund3.jpg';
import Beagle from '../../images/Available-puppy/Beagle.jpg';
import Boxer2 from '../../images/Available-puppy/Boxer2.jpeg';
import Corgi from '../../images/Available-puppy/Corgi.jpg';
import corgi from '../../images/Available-puppy/corgi.avif';
import German from '../../images/Available-puppy/GermanShepherd.jpg'
import schnauzer from '../../images/Available-puppy/schnauzer.jpeg'
import bulldog from '../../images/Available-puppy/Bulldog.jpg' 
import Poodle from '../../images/Available-puppy/Poodle .webp'; 
import Poodle2 from '../../images/Available-puppy/poodle-2.jpeg'; 
import Chihuahua from '../../images/Available-puppy/Chihuahua.jpg'; 
const AvailablePuppies = () => {
  return (
    <div className="available-main">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Puppies for Sale - SweetPaws</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="container mx-auto">
        <section className="available-header">
          <h6>
            SweetPaws <i className="fa-solid fa-arrow-right"></i> Puppies for
            Sale
          </h6>
          <h1>Happy, Healthy Puppies for Sale</h1>
          <p>
            Browse our nationwide selection of adorable, healthy puppies for
            sale and discover... your perfect companion at PuppySpot. With our
            rigorous breeder screening process, dedicated support, and expertise
            in getting the dog to you, you’ll find peace of mind knowing you’re
            getting a well-bred puppy from a trusted source. Start your journey
            today!{' '}
          </p>
        </section>
        <section>
          <div className="available-cards">
            <Rotate top left>
              <div className="puppy-review-card">
                <div className="card-img-box">
                  <div className="love"></div>
                  <img className="img-box-1" src={Yorkie} alt="Shoes" />
                  <div className="puppy-review-card-content">
                    <h2 className="card-title">Yorkie</h2>
                    <p>Golden Retriever</p>
                    <p>15 weeks</p>
                  </div>
                </div>
              </div>
            </Rotate>
            <Rotate top left>
              <div className="puppy-review-card">
                <div className="card-img-box">
                  <div className="love"></div>
                  <img className="img-box-1" src={ShihTzu2} alt="Shoes" />

                  <div className="puppy-review-card-content">
                    <h2 className="card-title">ShihTz</h2>
                    <p>Golden Retriever</p>
                    <p>15 weeks</p>
                  </div>
                </div>
              </div>
            </Rotate>
            <Rotate top left>
              <div className="puppy-review-card">
                <div className="card-img-box">
                  <div className="love"></div>
                  <img className="img-box-1" src={Dachshund} alt="Shoes" />

                  <div className="puppy-review-card-content">
                    <h2 className="card-title">Dachshund</h2>
                    <p>Golden Retriever</p>
                    <p>15 weeks</p>
                  </div>
                </div>
              </div>
            </Rotate>
            <Rotate top left>
              <div className="puppy-review-card">
                <div className="card-img-box">
                  <div className="love"></div>
                  <img className="img-box-1" src={Beagle} alt="Shoes" />

                  <div className="puppy-review-card-content">
                    <h2 className="card-title">Beagle</h2>
                    <p>Golden Retriever</p>
                    <p>15 weeks</p>
                  </div>
                </div>
              </div>
            </Rotate>
            <Rotate top left>
              <div className="puppy-review-card">
                <div className="card-img-box">
                  <div className="love"></div>
                  <img className="img-box-1" src={Boxer2} alt="Shoes" />
                  <div className="puppy-review-card-content">
                    <h2 className="card-title">Boxer</h2>
                    <p>Golden Retriever</p>
                    <p>15 weeks</p>
                  </div>
                </div>
              </div>
            </Rotate>
            <Rotate top left>
              <div className="puppy-review-card">
                <div className="card-img-box">
                  <div className="love"></div>
                  <img className="img-box-1" src={Corgi} alt="Shoes" />

                  <div className="puppy-review-card-content">
                    <h2 className="card-title">Corgi</h2>
                    <p>Golden Retriever</p>
                    <p>15 weeks</p>
                  </div>
                </div>
              </div>
            </Rotate>
            <Rotate top left>
              <div className="puppy-review-card">
                <div className="card-img-box">
                  <div className="love"></div>
                  <img className="img-box-1" src={German} alt="Shoes" />

                  <div className="puppy-review-card-content">
                    <h2 className="card-title">German Shephard</h2>
                    <p>Golden Retriever</p>
                    <p>15 weeks</p>
                  </div>
                </div>
              </div>
            </Rotate>
            <Rotate top left>
              <div className="puppy-review-card">
                <div className="card-img-box">
                  <div className="love"></div>
                  <img className="img-box-1" src={schnauzer} alt="Shoes" />

                  <div className="puppy-review-card-content">
                    <h2 className="card-title">miniature schnauzer</h2>
                    <p>Golden Retriever</p>
                    <p>15 weeks</p>
                  </div>
                </div>
              </div>
            </Rotate>
            <Rotate top left>
              <div className="puppy-review-card">
                <div className="card-img-box">
                  <div className="love"></div>
                  <img className="img-box-1" src={bulldog} alt="Shoes" />

                  <div className="puppy-review-card-content">
                    <h2 className="card-title">bulldog</h2>
                    <p>Golden Retriever</p>
                    <p>15 weeks</p>
                  </div>
                </div>
              </div>
            </Rotate>
            <Rotate top left>
              <div className="puppy-review-card">
                <div className="card-img-box">
                  <div className="love"></div>
                  <img className="img-box-1" src={Poodle2} alt="Shoes" />

                  <div className="puppy-review-card-content">
                    <h2 className="card-title">Poodle</h2>
                    <p>Golden Retriever</p>
                    <p>15 weeks</p>
                  </div>
                </div>
              </div>
            </Rotate>
            <Rotate top left>
              <div className="puppy-review-card">
                <div className="card-img-box">
                  <div className="love"></div>
                  <img className="img-box-1" src={Chihuahua} alt="Shoes" />

                  <div className="puppy-review-card-content">
                    <h2 className="card-title">Chihuahua</h2>
                    <p>Golden Retriever</p>
                    <p>15 weeks</p>
                  </div>
                </div>
              </div>
            </Rotate>
          </div>
        </section>
      </div>
      <section className="some-info-container">
        <div className="some-info">
          <p>
            At PuppySpot, we have the widest selection of puppies for sale on
            the internet. Whether you're looking for a purebred Australian
            Shepherd, a hypoallergenic Mini Poodle, a dashing designer breed
            like the Goldendoodle or the Cavapoo, or the ever-popular Golden
            Retriever, we've got what you're looking for. Our exclusive network
            of breeders is second to none, which is why every puppy provided
            through us is backed by our industry-leading 10-year health
            commitment.
          </p>
          <p>
            We have spent over twenty years sourcing the highest quality
            breeders from all around the country. From the Miniature Poodle to
            the Great Dane, each puppy comes with a special AKC registration
            package provided through PuppySpot. We want you to feel secure in
            your purchase, knowing your breeder only utilizes the most
            responsible, sustainable breeding practices.
          </p>
          <p>
            We're excited to be there with you on your journey, whether you're a
            new pet parent welcoming your first Goldendoodle into the family, or
            you're a seasoned pro adding your fourth Siberian Husky to the pack.
            We all treat our dogs like family around here, which is why we will
            always go the extra mile to help you find the puppy you will love
            from the moment they're delivered to your door.
          </p>
        </div>
      </section>
      <section>
        <div className="puppy-review">
          <h1>Reviews</h1>
          <div className="puppy-reviews-cards">
            <div className="puppy-review-card">
              <div className="">
                <img
                  src="https://cdn-yotpo-images-production.yotpo.com/Review/529462792/500378480/original.jpg?1702210791"
                  alt="Shoes"
                />

                <div className="puppy-review-card-content">
                  <h2>Lorre S.</h2>
                  <h6>12/10/2023</h6>
                  <p>Goldendoodle</p>
                  <div className="stars">
                    <div>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <div>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <div>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <div>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <div>
                      <i class="fa-solid fa-star"></i>
                    </div>
                  </div>

                  <p>
                    Toby is a wonderful addition to our family. We are in love
                    and he is adjusting perfectly ❤️ Thank you
                  </p>
                </div>
              </div>
            </div>
            <div className="puppy-review-card">
              <div className="">
                <img
                  src="https://cdn-yotpo-images-production.yotpo.com/Review/529165115/499072457/original.jpg?1702058808"
                  alt="Shoes"
                />

                <div className="puppy-review-card-content">
                  <h2>Amrei G.</h2>
                  <h6>12/08/2023</h6>
                  <p>Goldendoodle</p>
                  <div className="stars">
                    <div>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <div>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <div>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <div>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <div>
                      <i class="fa-solid fa-star"></i>
                    </div>
                  </div>

                  <p>
                    We absolutely love Murray (his name is now Mookie in honor
                    of a childhood toy). He is the sweetest boy. Thank you!
                  </p>
                </div>
              </div>
            </div>
            <div className="puppy-review-card">
              <div className="">
                <img
                  src="	https://cdn-yotpo-images-production.yotpo.com/Review/528622514/498225517/original.jpg?1701983199"
                  alt="Shoes"
                />

                <div className="puppy-review-card-content">
                  <h2 className="">Lorre S.</h2>
                  <h6>12/10/2023</h6>
                  <p>Goldendoodle</p>
                  <div className="stars">
                    <div>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <div>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <div>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <div>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <div>
                      <i class="fa-solid fa-star"></i>
                    </div>
                  </div>

                  <p>
                    Awesome communication from start to finish!! So in love with
                    our goldendoodle. I just love the communication piece,
                    everything was seamless and I was aware of every step from
                    payment and delivery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="dog-character-main">
        <h1 className="dog-character-head">Dog Characteristics</h1>
        <div className="dog-character">
          <div className="dog-char-1">
            <img
              src="https://www.puppyspot.com/preact/img/active-dog-breeds.svg"
              alt=""
            />
            <p>Top Active Dog Breeds</p>
          </div>
          <div className="dog-char-1">
            <img
              src="	https://www.puppyspot.com/preact/img/apartment-breeds.svg"
              alt=""
            />
            <p>Best Apartment Dogs</p>
          </div>
          <div className="dog-char-1">
            <img
              src="https://www.puppyspot.com/preact/img/family-breeds.svg"
              alt=""
            />
            <p>Best Family Dogs</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AvailablePuppies;
