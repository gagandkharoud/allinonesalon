import React, { useEffect, useRef } from "react";
import {
  AboutsecPatternOne,
  AboutsecPatternTwo,
} from "../../../assets/AllSvgs/AllSvgs";
import { CommonBTNs } from "../../common/BTN/CommonBTNs";
import { motion, useAnimate, useInView } from "framer-motion";

import AboutsecImg1 from "../../../assets/Images/homeAboutImg3.jpg";
import AboutsecImg2 from "../../../assets/Images/AboutsecImg2.png";
import AboutsecImg3 from "../../../assets/Images/HairColorGirlImg.jpg";
import GalleryImg1 from "../../../assets/Images/SpaBeautyImg.jpg";
import GalleryImg2 from "../../../assets/Images/galleryImg2.png";
import SpecialistImg2 from "../../../assets/Images/homeAboutImg2.jpg";
import Image from "next/image";

export const Aboutsection = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    animate(
      "#aboutImgSliderOne",
      {
        x: ["0%", "-100%"],
      },
      {
        duration: 1.8,
        ease: "backInOut",
        type: "spring",
        power: 0.5,
        mass: 1,
        repeat: Infinity,
        repeatType: "mirror",
        repeatDelay: 1.8,
      }
    );

    animate(
      "#aboutImgSliderTwo",
      {
        x: ["-100%", "0%"],
      },
      {
        duration: 1.8,
        delay: 1,
        ease: "backInOut",
        type: "spring",
        power: 0.5,
        mass: 1,
        repeat: Infinity,
        repeatType: "mirror",
        repeatDelay: 2.5,
      }
    );

    animate(
      "#aboutImgSliderThree",
      {
        x: ["-100%", "0%"],
      },
      {
        duration: 1.8,
        delay: 2,
        ease: "backInOut",
        type: "spring",
        power: 0.5,
        mass: 1,
        repeat: Infinity,
        repeatType: "mirror",
        repeatDelay: 2,
      }
    );
  }, [isInView]);
  return (
    <div className="2xl:min-h-[100dvh] xl:min-h-[100dvh] lg:min-h-[100dvh] md:portrait:min-h-[80dvh] bg-[var(--whiteColor)] relative z-40 flex justify-center items-center aboutsec__mainWrapper overflow-hidden py-16">
      <div className="absolute bottom-0 left-0 aboutsec__patternWrapperOne">
        <AboutsecPatternOne />
      </div>

      <div className="relative  flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:portrait:flex-col justify-between items-center gap-4 2xl:w-[90%] xl:w-[90%] lg:w-[90%] md:portrait:w-[90%] w-[95%] aboutsec__mainContentWrapper z-20">
        <div className="flex-1 p-4 relative z-20 opacity-100">
          <div className="w-[85%] flex flex-col gap-5 items-start">
            <motion.h2
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
              }}
              className="uppercase text-[var(--mainColor)] font-[400] 2xl:text-[4dvw] xl:text-[4dvw] lg:text-[4dvw] md:portrait:text-[6dvw] text-[9dvw]"
            >
              About Us
            </motion.h2>

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
              className="font-[400] 2xl:text-[1.3dvw] xl:text-[1.3dvw] lg:text-[1.3dvw] md:portrait:text-[2.3dvw] text-[4dvw] uppercase"
            >
              At All in One Salon, we’re all about great hair and good vibes.
            </motion.p>
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
              className="font-[400] 2xl:text-[1.3dvw] xl:text-[1.3dvw] lg:text-[1.3dvw] md:portrait:text-[2.3dvw] text-[4dvw] uppercase 2xl:my-5 xl:my-5 lg:my-5 md:portrait:my-5 my-2"
            >
              Our talented team brings expert cuts, color, and styling—tailored
              to you. Whether it’s a fresh look or your regular glow-up, we’ve
              got you covered.
            </motion.p>
            <motion.div
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
            >
              <CommonBTNs btnTitle="Contact Us" path="/contact-us" />
            </motion.div>
          </div>
        </div>
        <div
          ref={scope}
          className="flex-1 p-4 flex justify-center  gap-5 relative z-20 opacity-100"
        >
          <div className="flex  justify-center gap-5 2xl:h-[40dvw] xl:h-[40dvw] lg:h-[40dvw] md:portrait:h-[60dvw] h-[70dvw] 2xl:w-[45dvw] xl:w-[45dvw] lg:w-[45dvw] md:portrait:w-[75dvw] w-[85dvw]">
            <div className="flex flex-col gap-5  flex-1 w-full h-full">
              <div className="flex-1 w-full h-full overflow-hidden ">
                <div
                  id="aboutImgSliderOne"
                  className="flex justify-start  gap-3 w-full h-full"
                >
                  <div className="w-full h-full relative shrink-0">
                    <Image
                      fill
                      loading="lazy"
                      src={GalleryImg2}
                      alt="allinone.com"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full h-full relative shrink-0 bg-red-400">
                    <Image
                      fill
                      loading="lazy"
                      src={AboutsecImg1}
                      alt="allinone.com"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full h-full overflow-hidden">
                <div
                  id="aboutImgSliderTwo"
                  className="flex justify-start relative w-full gap-3 h-full"
                >
                  <div className="relative w-full h-full shrink-0">
                    <Image
                      fill
                      alt="allinone.com"
                      src={AboutsecImg2}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative w-full h-full shrink-0 ">
                    <Image
                      fill
                      alt="allinone.com"
                      src={GalleryImg1}
                      className="w-full h-full object-cover shink-0"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 flex-1">
              <div className="w-full h-[2dvw] bg-[var(--mainColor)]" />
              <div className="flex-1 overflow-hidden">
                <div
                  id="aboutImgSliderThree"
                  className="h-full w-full relative flex justify-start gap-2"
                >
                  <div className="relative h-full w-full shrink-0">
                    <Image
                      fill
                      alt="allinone.com"
                      src={AboutsecImg3}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative w-full h-full shrink-0">
                    <Image
                      fill
                      alt="allinone.com"
                      src={SpecialistImg2}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full h-[2dvw] bg-[var(--secondaryColor)]" />
            </div>
          </div>
        </div>

        <div className="aboutsec__patternWrapperTwo absolute -right-[5dvw] -z-10">
          <AboutsecPatternTwo />
        </div>
      </div>
    </div>
  );
};
