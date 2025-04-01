"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";

const ProductImgsCarousel = ({ parsedProductImages }) => {
  const productImages = JSON.parse(parsedProductImages);

  return (
    <div className="md:px-8 px-4 md:w-1/3 w-full">
      {/* Main Image Slider */}
      <Swiper
        spaceBetween={10}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="w-full aspect-square rounded-md overflow-hidden"
      >
        {productImages?.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt="Product Image"
              className="w-full aspect-square object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductImgsCarousel;
