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
  const sliderPages = [Screenshot1, Screenshot2, Screenshot3, Screenshot4];

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
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      width={502}
    >
      {sliderPages.map((sliderPage, index) => (
        <SwiperSlide key={sliderPage}>
          <figure>
            <img
              src={sliderPage}
              alt={`Screenshot ${index + 1}`}
              className="slider-img"
            />
          </figure>
        </SwiperSlide>
      ))}
      <img id="swiper-button-next" src={Arrow} alt="Arrow next slide" />
    </Swiper>
  );
}

export default Slider;
