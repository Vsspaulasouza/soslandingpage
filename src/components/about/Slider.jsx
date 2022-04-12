import React from "react";
import { Navigation, Pagination, EffectCards, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Screenshot1 from "../../images/screenshot1.png";
import Screenshot2 from "../../images/screenshot2.jpg";
import Screenshot3 from "../../images/screenshot3.jpg";
import Screenshot4 from "../../images/screenshot4.png";
import "swiper/scss";
import "./Slider.scss";

function Slider() {
  return (
    <Swiper
      className="slider"
      modules={[Navigation, Pagination, EffectCards, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      grabCursor
      loop
      effect="cards"
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
      width={502}
    >
      <SwiperSlide>
        <figure>
          <img src={Screenshot1} alt="Screnshot 1" className="slider-img" />
        </figure>
      </SwiperSlide>
      <SwiperSlide>
        <figure>
          <img src={Screenshot2} alt="Screnshot 2" className="slider-img" />
        </figure>
      </SwiperSlide>
      <SwiperSlide>
        <figure>
          <img src={Screenshot3} alt="Screnshot 3" className="slider-img" />
        </figure>
      </SwiperSlide>
      <SwiperSlide>
        <figure>
          <img src={Screenshot4} alt="Screnshot 4" className="slider-img" />
        </figure>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
