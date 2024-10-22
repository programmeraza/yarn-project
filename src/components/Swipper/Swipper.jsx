import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Swipper.scss";
const Swipper = () => {
  return (
    <div className="swipper">
      <div className="container">
        <Swiper
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          spaceBetween={30}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            665: {
               slidesPerView: 1.8,
             },
            495: {
              slidesPerView: 1.5,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/img/card1.png" alt="1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/card2.png" alt="2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/card3.png" alt="3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/card1.png" alt="4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/card2.png" alt="5" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Swipper;
