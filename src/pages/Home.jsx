import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "../assets/styles/components/pages/_home.scss";

const Home = () => {
  // Estado para almacenar las imágenes
  const [images, setImages] = useState([]);

  // Llamada a la API de Lorem Picsum para obtener las imágenes
  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
      })
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, EffectFade]}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            {" "}
            <img src={`${image.download_url}?w=800&h=400`} alt={`Slide ${image.id}`} />
            <div className="caption">Slide {image.id} Caption</div>
          </SwiperSlide>
        ))}
      </Swiper>
      <h1>Home Page</h1>
      <p>Bienvenido a la página principal.</p>
    </div>
  );
};

export default Home;
