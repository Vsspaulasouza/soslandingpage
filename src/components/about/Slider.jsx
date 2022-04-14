import React from "react";
import { Navigation, Pagination, EffectCards, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Screenshot1 from "../../images/screenshot1.png";
import Screenshot2 from "../../images/screenshot2.jpg";
import Screenshot3 from "../../images/screenshot3.jpg";
import Screenshot4 from "../../images/screenshot4.png";
import Arrow from "../../images/switch.svg";
import "swiper/scss";
import "./Slider.scss";

function Slider() {
  return (
    <Swiper
      className="slider"
      modules={[Navigation, Pagination, EffectCards, Autoplay]}
      navigation={{ nextEl: "#swiper-button-next" }}
      pagination={{ clickable: true }}
      grabCursor
      loop
      effect="cards"
      cardsEffect={{
        rotate: false,
      }}
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
      <img id="swiper-button-next" src={Arrow} alt="Arrow next slide" />
    </Swiper>
  );
}

export default Slider;
