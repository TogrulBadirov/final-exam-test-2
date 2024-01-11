import React from "react";
import "./index.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
const Header = () => {
  return (
    <header>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="background-swiper">
          <img
            src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl7.jpg"
            alt=""
          />
          <div className="swiper-content">Excellent bouquets for you</div>
        </SwiperSlide>
        <SwiperSlide className="background-swiper">
          <img
            src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl4.jpg"
            alt=""
          />
          <div className="swiper-content">Excellent bouquets for you</div>
        </SwiperSlide>
        <SwiperSlide className="background-swiper">
          <img
            src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl1-967x725.jpg"
            alt=""
          />
          <div className="swiper-content">Excellent bouquets for you</div>
        </SwiperSlide>
      </Swiper>
    </header>
  );
};

export default Header;
