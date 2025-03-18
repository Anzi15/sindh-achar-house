"use client"; // This directive is required for client-side components

import Image from "next/image";
import React, { useState } from "react";

const ProductImgsCarousel = ({ parsedProductImages, parsedThumbnails }) => {
  const productImages = JSON.parse(parsedProductImages);
  // const thumbnails = JSON.parse(parsedThumbnails);
  const [activeImg, setActiveImg] = useState(0);
  const [isImgZoomed, setIsImgZoomed] = useState(false);

  const zoomImage = () => {
    setIsImgZoomed(!isImgZoomed);
  };

  return (
    <div className="md:px-8 px-4 md:w-1/3 w-full md:block">
      {/* Active Image Display */}
      <div className="activeImg relative w-full aspect-square">
        {productImages?.map((img, i) => (
          <Image
            src={img}
            key={i}
            alt="Achar | Pakistan"
            className={`w-full aspect-square rounded-md skeleton-loading absolute transition-opacity duration-300 object-cover ${
              i === activeImg ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
            onClick={zoomImage}
            width={720}
            height={720}
            priority={true}
          />
        ))}
      </div>

      {/* Thumbnails */}
      <div className="w-full flex py-4 gap-4">
        {productImages?.map((img, i) => (
          <button
            className={`w-[32%] hover:opacity-85 transition-all rounded-md ${
              i == activeImg && "border-2 border-brandOrange object-cover"
            }`}
            key={i}
            onClick={() => setActiveImg(i)}
          >
            <Image
              src={img}
              className="rounded-md w-full skeleton-loading aspect-square"
              alt=""
              width={200}
              height={200}
              priority={true}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImgsCarousel;
