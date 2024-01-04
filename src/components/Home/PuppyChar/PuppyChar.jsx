
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode } from 'swiper/modules';
import './PuppyChar.css';

const PuppyChar = () => {
  return (
    <div className="container mx-auto">
      <section>
        <div className="puppy-char-header">
          <img src="	https://www.puppyspot.com/preact/img/star.svg" alt="" />
          <h2>Puppy Characteristics</h2>
          <p>
            We’ve curated a list of our most popular characteristics of breeds
            for you.
          </p>
        </div>
      </section>

      <section>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          freeMode={true}
          breakpoints={{
            576: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          className="mySwiper-char"
        >
          <SwiperSlide className="SwiperSlide-char">
            <a href="#">
              <img
                src="https://www.puppyspot.com/preact/img/active-dog-breeds.svg"
                alt=""
              />
              <div className="dog-char">
                <h2>Active Dog Breeds</h2>
                <img src="https://www.puppyspot.com/preact/./img/caret.svg"></img>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide-char">
            <a href="#">
              <img
                src="https://www.puppyspot.com/preact/img/apartment-breeds.svg"
                alt=""
              />
              <div className="dog-char">
                <h2>Apartment Breeds</h2>
                <img src="https://www.puppyspot.com/preact/./img/caret.svg"></img>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide-char">
            {' '}
            <a href="#">
              {' '}
              <img
                src="https://www.puppyspot.com/preact/img/doodle-breeds.svg"
                alt=""
              />{' '}
              <div className="dog-char">
                <h2>Doodle Breeds</h2>
                <img src="https://www.puppyspot.com/preact/./img/caret.svg"></img>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide-char">
            <a href="#">
              {' '}
              <img
                src="https://www.puppyspot.com/preact/img/family-breeds.svg"
                alt=""
              />{' '}
              <div className="dog-char">
                <h2>Family Breeds</h2>
                <img src="https://www.puppyspot.com/preact/./img/caret.svg"></img>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide-char">
            {' '}
            <a href="#">
              {' '}
              <img
                src="https://www.puppyspot.com/preact/img/hypoallergenic.svg"
                alt=""
              />{' '}
              <div className="dog-char">
                <h2>Hypoallergenic</h2>
                <img src="https://www.puppyspot.com/preact/./img/caret.svg"></img>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide-char">
            <a href="#">
              {' '}
              <img
                src="https://www.puppyspot.com/preact/img/teacup-breeds.svg"
                alt=""
              />{' '}
              <div className="dog-char">
                <h2>Teacup Breeds</h2>
                <img src="https://www.puppyspot.com/preact/./img/caret.svg"></img>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="char-btn-container">
        <a href="">
          <button className="char-btn">
            Browse All Puppies
            <img
              src="	https://www.puppyspot.com/preact/img/forward-caret-white.svg"
              alt=""
            />
          </button>
        </a>
      </section>
    </div>
  );
};

export default PuppyChar;
