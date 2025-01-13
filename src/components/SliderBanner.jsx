import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { resizeImage } from "../utils/imgUtils";
import { useRecoilState } from "recoil";
import { bannerImagesState } from "../recoil/atoms/bannerAtoms";
import GeneralRequest from "../caller/api-requestor/GeneralRequest";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const SliderBanner = () => {
  const [images, setImages] = useRecoilState(bannerImagesState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imgRes = await GeneralRequest.getBannerImg();
        console.log("imgRes: ", imgRes);
        setImages(imgRes);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchImages();
  }, [setImages]);
  return (
    <div className="w-full h-full overflow-hidden">
      {images.length > 0 ? (
        <Swiper
          direction="horizontal"
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="banneSlider"
        >
          {images.map((url, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center">
                <img
                  src={resizeImage(url, 1200, 255)}
                  //src={url}
                  alt={`Slide ${index}`}
                  className="w-full h-full rounded-lg object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-center">Loading images...</p>
      )}
    </div>
  );
};

export default React.memo(SliderBanner);
