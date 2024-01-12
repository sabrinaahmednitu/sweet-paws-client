import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

import './FavouriteBreeds.css';

const FavouriteBreeds = () => {
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
          slidesPerView={2}
          freeMode={true}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 6,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <a href="#">
              <img
                src="https://images.pexels.com/photos/18964465/pexels-photo-18964465/free-photo-of-a-brown-poodle-laying-on-the-grass-in-front-of-a-fence.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="dog-name">
                <span>Goldendoodle</span>
                <img src="https://www.puppyspot.com/preact/./img/caret.svg"></img>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">
              <img
                src="	https://cdn.buttercms.com/rgvy4FzeTIeT0s0wczjM"
                alt=""
              />
              <div className="dog-name">
                <span>Cavapoo</span>
                <img src="https://www.puppyspot.com/preact/./img/caret.svg"></img>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <a href="#">
              {' '}
              <img
                src="	https://cdn.buttercms.com/HpAuycLVTW6RkJ6tinDR"
                alt=""
              />{' '}
              <div className="dog-name">
                <span>Poodle</span>
                <img src="https://www.puppyspot.com/preact/./img/caret.svg"></img>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">
              {' '}
              <img
                src="	https://cdn.buttercms.com/6BVcLW0aSGYxpPYyEYkn"
                alt=""
              />{' '}
              <div className="dog-name">
                <span>Bernedoodle</span>
                <img src="https://www.puppyspot.com/preact/./img/caret.svg"></img>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <a href="#">
              {' '}
              <img
                src="https://images.pexels.com/photos/3397939/pexels-photo-3397939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />{' '}
              <div className="dog-name">
                <span>Golden Retriever</span>
                <img src="https://www.puppyspot.com/preact/./img/caret.svg"></img>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">
              {' '}
              <img
                src="	https://cdn.buttercms.com/BghzZPMxStixVmA5N0yW"
                alt=""
              />{' '}
              <div className="dog-name">
                <span>Dachshund</span>
                <img src="https://www.puppyspot.com/preact/./img/caret.svg"></img>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <a href="#">
              {' '}
              <img
                src="	https://cdn.buttercms.com/2AaYDX5eT7albkpVsgC0"
                alt=""
              />{' '}
              <div className="dog-name">
                <span>French Bulldog</span>
                <img src="https://www.puppyspot.com/preact/./img/caret.svg"></img>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <a href="#">
              {' '}
              <img
                src="	https://cdn.buttercms.com/DfWbKjqTQDJdULZxrO4L"
                alt=""
              />{' '}
              <div className="dog-name">
                <span>Cavalier King Charles Spaniel</span>
                <img src="https://www.puppyspot.com/preact/./img/caret.svg"></img>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">
              {' '}
              <img
                src="	https://cdn.buttercms.com/kzKMYVqbRh6UnMUmCg0M"
                alt=""
              />{' '}
              <div className="dog-name">
                <span>Havanese</span>
                <img src="https://www.puppyspot.com/preact/./img/caret.svg"></img>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">
              {' '}
              <img
                src="https://cdn.buttercms.com/JJEoMHEpTd8LQr7ezHlV"
                alt=""
              />{' '}
              <div className="dog-name">
                <span>Labrador Retriever</span>
                <img src="https://www.puppyspot.com/preact/./img/caret.svg"></img>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </section>

      <section>
        <div>
          {/* <div>
            <a href="#">
              {' '}
              <img
                src="	https://cdn.buttercms.com/38iL0zXQB2pXvBpHESxB"
                alt=""
              />{' '}
              <div className="dog-name">
                <span>Goldendoodle</span>
                <img src="https://www.puppyspot.com/preact/./img/caret.svg"></img>
              </div>
            </a>
          </div> */}
          {/* <div>
            <a href="#">
              {' '}
              <img
                src="	https://cdn.buttercms.com/rgvy4FzeTIeT0s0wczjM"
                alt=""
              />{' '}
              <div className="dog-name">
                <span>Cavapoo</span>
                <img src="https://www.puppyspot.com/preact/./img/caret.svg"></img>
              </div>
            </a>
          </div> */}
          {/* <div>
            <a href="#">
              {' '}
              <img
                src="	https://cdn.buttercms.com/HpAuycLVTW6RkJ6tinDR"
                alt=""
              />{' '}
              <div className="dog-name">
                <span>Poodle</span>
                <img src="https://www.puppyspot.com/preact/./img/caret.svg"></img>
              </div>
            </a>
          </div> */}
          {/* <div>
            <a href="#">
              {' '}
              <img
                src="	https://cdn.buttercms.com/6BVcLW0aSGYxpPYyEYkn"
                alt=""
              />{' '}
              <div className="dog-name">
                <span>Bernedoodle</span>
                <img src="https://www.puppyspot.com/preact/./img/caret.svg"></img>
              </div>
            </a>
          </div> */}
          {/* <div>
            <a href="#">
              {' '}
              <img
                src="		https://cdn.buttercms.com/7hUftqFZS5YnXo2Un0cw"
                alt=""
              />{' '}
              <div className="dog-name">
                <span>Golden Retriever</span>
                <img src="https://www.puppyspot.com/preact/./img/caret.svg"></img>
              </div>
            </a>
          </div> */}
          {/* <div>
            <a href="#">
              {' '}
              <img
                src="	https://cdn.buttercms.com/BghzZPMxStixVmA5N0yW"
                alt=""
              />{' '}
              <div className="dog-name">
                <span>Dachshund</span>
                <img src="https://www.puppyspot.com/preact/./img/caret.svg"></img>
              </div>
            </a>
          </div> */}
          {/* <div>
            <a href="#">
              {' '}
              <img
                src="	https://cdn.buttercms.com/2AaYDX5eT7albkpVsgC0"
                alt=""
              />{' '}
              <div className="dog-name">
                <span>French Bulldog</span>
                <img src="https://www.puppyspot.com/preact/./img/caret.svg"></img>
              </div>
            </a>
          </div> */}
          {/* <div>
            <a href="#">
              {' '}
              <img
                src="	https://cdn.buttercms.com/DfWbKjqTQDJdULZxrO4L"
                alt=""
              />{' '}
              <div className="dog-name">
                <span>Cavalier King Charles Spaniel</span>
                <img src="https://www.puppyspot.com/preact/./img/caret.svg"></img>
              </div>
            </a>
          </div> */}
          {/* <div>
            <a href="#">
              {' '}
              <img
                src="	https://cdn.buttercms.com/kzKMYVqbRh6UnMUmCg0M"
                alt=""
              />{' '}
              <div className="dog-name">
                <span>Havanese</span>
                <img src="https://www.puppyspot.com/preact/./img/caret.svg"></img>
              </div>
            </a>
          </div>
          <div>
            <a href="#">
              {' '}
              <img
                src="https://cdn.buttercms.com/JJEoMHEpTd8LQr7ezHlV"
                alt=""
              />{' '}
              <div className="dog-name">
                <span>Labrador Retriever</span>
                <img src="https://www.puppyspot.com/preact/./img/caret.svg"></img>
              </div>
            </a>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default FavouriteBreeds;
