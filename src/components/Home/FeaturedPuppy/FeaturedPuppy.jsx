import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import './FeaturedPuppy.css';
const FeaturedPuppy = () => {
  return (
    <div className="featured-puppy-main container mx-auto">
      <h1>Featured Puppies</h1>
      <section className="featured-slider">
        <div className="featured-item-1">
          div
          <div className="featured-love"></div>
          <img
            src="https://photos.puppyspot.com/9/listing/752039/photo/502195379.JPG"
            alt=""
          />
          <div className="featured-item-1-content">
            <h1>Zando</h1>
            <div className="featured-flex">
              <i class="fa-solid fa-dog"></i>
              <p>Havanese</p>
            </div>
            <div className="featured-flex">
              <i class="fa-solid fa-calendar-days"></i>
              <p>3 weeks</p>
            </div>
          </div>
        </div>
        <div className="featured-item-1">
          div
          <div className="featured-love"></div>
          <img
            src="https://photos.puppyspot.com/4/listing/752044/photo/502195429.JPG"
            alt=""
          />
          <div className="featured-item-1-content">
            <h1>Jolie</h1>
            <div className="featured-flex">
              <i class="fa-solid fa-dog"></i>
              <p>Shiba Inu</p>
            </div>
            <div className="featured-flex">
              <i class="fa-solid fa-calendar-days"></i>
              <p>6 weeks</p>
            </div>
          </div>
        </div>
        <div className="featured-item-1">
          div
          <div className="featured-love"></div>
          <img
            src="https://photos.puppyspot.com/4/listing/752034/photo/502195621.jpg"
            alt=""
          />
          <div className="featured-item-1-content">
            <h1>Paisley</h1>
            <div className="featured-flex">
              <i class="fa-solid fa-dog"></i>
              <p>Golden Retriver</p>
            </div>
            <div className="featured-flex">
              <i class="fa-solid fa-calendar-days"></i>
              <p>4 weeks</p>
            </div>
          </div>
        </div>
        <div className="featured-item-1">
          div
          <div className="featured-love"></div>
          <img
            src="https://photos.puppyspot.com/0/listing/752010/photo/502194970.jpg"
            alt=""
          />
          <div className="featured-item-1-content">
            <h1>Jade</h1>
            <div className="featured-flex">
              <i class="fa-solid fa-dog"></i>
              <p>Whoodle</p>
            </div>
            <div className="featured-flex">
              <i class="fa-solid fa-calendar-days"></i>
              <p>8 weeks</p>
            </div>
          </div>
        </div>
        <div className="featured-item-1">
          div
          <div className="featured-love"></div>
          <img
            src="https://photos.puppyspot.com/1/listing/752011/photo/502194948.jpg"
            alt=""
          />
          <div className="featured-item-1-content">
            <h1>Casper</h1>
            <div className="featured-flex">
              <i class="fa-solid fa-dog"></i>
              <p>Pomsky</p>
            </div>
            <div className="featured-flex">
              <i class="fa-solid fa-calendar-days"></i>
              <p>7 weeks</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedPuppy;
