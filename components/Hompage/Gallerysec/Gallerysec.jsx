import React, { useEffect, useRef } from "react";
import "./Gallerysec.scss";
import { motion } from "framer-motion";
import {
  AboutsecPatternOne,
  CombePattern,
} from "../../../assets/AllSvgs/AllSvgs";
import GalleryImg1 from "../../../assets/Images/galleryImg1.png";
import GalleryImg2 from "../../../assets/Images/galleryImg2.png";
import GalleryImg3 from "../../../assets/Images/galleryImg3.png";
import GalleryImg4 from "../../../assets/Images/HairCuttingGGImg.jpg";
import GalleryImg5 from "../../../assets/Images/galleryImg5.png";
import GalleryImg6 from "../../../assets/Images/HairCuttingGGImg2.jpg";
import GalleryImg7 from "../../../assets/Images/galleryImg7.jpg";
import GalleryImg8 from "../../../assets/Images/BodyTreatmentGImg.jpg";
import GalleryImg9 from "../../../assets/Images/galleryImg9.jpg";
import GalleryImg10 from "../../../assets/Images/galleryImg10.jpg";
// import GalleryImg11 from "../../../assets/Images/galleryImg11.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";

export const Gallerysec = ({
  animateMainWrapper,
  animateWrapperOneOpacity,
}) => {
  const swiperRef = useRef(null);

  const sliderArr = [
    GalleryImg1,
    GalleryImg2,
    GalleryImg3,
    GalleryImg4,
    GalleryImg5,
    GalleryImg6,
    GalleryImg7,
    GalleryImg8,
    GalleryImg9,
    GalleryImg10,
  ];

  useEffect(() => {
    const autoSlider = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext();
        console.log("dfgsdfgs");
      }
    };
    const sliderInerval = setInterval(autoSlider, 4000);

    return () => clearInterval(sliderInerval);
  }, []);
  return (
    <>
      <motion.div
        style={{
          scale: animateMainWrapper,
          opacity: animateWrapperOneOpacity,
        }}
        transition={{
          duration: 2.9,
          ease: "linear",
          power: 12,
          mass: 10,
          damping: 20,
          type: "tween",
        }}
        className="2xl:min-h-[100dvh] xl:min-h-[100dvh] lg:min-h-[100dvh] md:portrait:min-h-[60dvh] h-[100dvh] bg-[var(--whiteColor)] sticky top-0 flex justify-center items-center transition-all duration-500 ease-linear"
      >
        <div className="absolute bottom-0 left-0">
          <AboutsecPatternOne />
        </div>
        <div className="absolute right-[1%] bottom-[10%]">
          <CombePattern />
        </div>

        <div className="w-[90%] px-5 py-2.5 flex flex-col gap-10 justify-center items-center relative">
          <div className="w-full flex justify-center items-center">
            <div className="2xl:w-[85%] xl:w-[85%] lg:w-[85%] md:portrait:w-[100%] flex flex-col gap-2 justify-center items-center">
              <motion.h3
                initial={{
                  opacity: 0,
                  y: "5dvw",
                }}
                whileInView={{
                  opacity: 1,
                  y: "0dvw",
                }}
                transition={{
                  duration: 0.6,
                  ease: "backInOut",
                  mass: 4,
                  power: 4,
                  type: "tween",
                  delay: 0.2,
                }}
                className="2xl:text-[4dvw] xl:text-[4dvw] lg:text-[4dvw] md:portrait:text-[6dvw] text-[9dvw] text-center uppercase text-[var(--mainColor)] 2xl:leading-[5dvw] xl:leading-[5dvw] lg:leading-[5dvw] md:portrait:leading-[7dvw] leading-[10dvw] "
              >
                Discover our Work
              </motion.h3>
              <motion.p
                initial={{
                  opacity: 0,
                  y: "5dvw",
                }}
                whileInView={{
                  opacity: 1,
                  y: "0dvw",
                }}
                transition={{
                  duration: 0.6,
                  ease: "backInOut",
                  mass: 4,
                  power: 4,
                  type: "tween",
                  delay: 0.2,
                }}
                className="uppercase 2xl:text-[1.3dvw] xl:text-[1.3dvw] lg:text-[1.3dvw] md:portrait:text-[2.3dvw] text-center text-[3.5dvw]"
              >
                Our talented team brings creativity and precision to life,
                crafting stunning hairstyles, vibrant colors, flawless nail
                designs, and radiant skin treatments that elevate your unique
                style.
              </motion.p>
            </div>
          </div>
          <div className="2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:portrait:w-full w-full">
            <Swiper
              ref={swiperRef}
              effect={"coverflow"}
              //   grabCursor={true}
              //   centeredSlides={false}
              //   slidesPerView={"auto"}
              //   coverflowEffect={{
              //     rotate: 10,
              //     stretch: 4,
              //     depth: 500,
              //     modifier: 1,
              //     slideShadows: true,
              //   }}
              centeredSlides={true}
              slidesPerView={"auto"}
              spaceBetween={-400}
              loop="true"
              coverflowEffect={{
                rotate: 5,
                stretch: 0,
                depth: 600,
                modifier: 2,
              }}
              // pagination={true}
              modules={[EffectCoverflow]}
            >
              {sliderArr.map((cur, id) => (
                <SwiperSlide key={id}>
                  <Image
                    fill
                    loading="lazy"
                    className="w-full h-full object-cover"
                    src={cur}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </motion.div>
    </>
  );
};
