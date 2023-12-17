import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './FavouriteBreeds.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const FavouriteBreeds = () => {
    const [swiperRef, setSwiperRef] = useState(null);

   
    return (
      <div>
        <section>
          <div className="fav-head">
            <h3 className="fav-head-h3">Our Customers’ Favorite Breeds</h3>
            <h4 className="fav-head-h4">Let’s find a puppy you’ll love.</h4>
          </div>
        </section>
        <section>
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={6}
            centeredSlides={true}
            pagination={{
              type: 'fraction',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <a href="#">
                {' '}
                <img
                  src="	https://cdn.buttercms.com/38iL0zXQB2pXvBpHESxB"
                  alt=""
                />{' '}
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                {' '}
                <img
                  src="	https://cdn.buttercms.com/rgvy4FzeTIeT0s0wczjM"
                  alt=""
                />{' '}
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                {' '}
                <img
                  src="	https://cdn.buttercms.com/HpAuycLVTW6RkJ6tinDR"
                  alt=""
                />{' '}
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                {' '}
                <img
                  src="	https://cdn.buttercms.com/6BVcLW0aSGYxpPYyEYkn"
                  alt=""
                />{' '}
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                {' '}
                <img
                  src="		https://cdn.buttercms.com/7hUftqFZS5YnXo2Un0cw"
                  alt=""
                />{' '}
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                {' '}
                <img
                  src="	https://cdn.buttercms.com/BghzZPMxStixVmA5N0yW"
                  alt=""
                />{' '}
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                {' '}
                <img
                  src="	https://cdn.buttercms.com/2AaYDX5eT7albkpVsgC0"
                  alt=""
                />{' '}
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                {' '}
                <img
                  src="	https://cdn.buttercms.com/DfWbKjqTQDJdULZxrO4L"
                  alt=""
                />{' '}
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                {' '}
                <img
                  src="	https://cdn.buttercms.com/kzKMYVqbRh6UnMUmCg0M"
                  alt=""
                />{' '}
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                {' '}
                <img
                  src="https://cdn.buttercms.com/JJEoMHEpTd8LQr7ezHlV"
                  alt=""
                />{' '}
              </a>
            </SwiperSlide>
          </Swiper>
        </section>
      </div>
    );
};

export default FavouriteBreeds;