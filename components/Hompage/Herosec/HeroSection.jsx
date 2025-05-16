import React, { useRef, useState } from "react";
import "./Herosection.scss";
import YellowLogoImg from "../../../assets/Images/LogoIcon.png";
// import YellowLogoImg from "../../../assets/Images/YellowLogo2.png";
import { useScroll, useTransform, motion } from "framer-motion";
import SliderImg1 from "@/assets/Images/sliderImg1.png";
import SliderImg2 from "@/assets/Images/sliderImg2.png";
import SliderImg3 from "@/assets/Images/sliderImg3.png";
import HeroImg1 from "@/assets/Images/HeroImg1.png";
import { Navbar } from "@/components/common/Navbar/Navbar";
import { CommonBTNs } from "@/components/common/BTN/CommonBTNs";
import Image from "next/image";
import HeroAnimImg1 from "@/assets/Images/HeroAnimImg1.jpg";
import HeroAnimImg2 from "@/assets/Images/HeroAnimImg4.jpg";
import HeroAnimImg3 from "@/assets/Images/HeroAnimImg3.jpg";
import { ArrowDown } from "lucide-react";

export const HeroSection = ({ setShowMenu }) => {
  const [logoGrayscale, setLogoGrayscale] = useState(2);
  const [circlezIndex, setCirclezIndex] = useState(0);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
  });

  //   for the logo...
  const logoOverlaySlide = useTransform(
    scrollYProgress,
    [0, 0.19],
    ["0dvw", "120dvw"]
  );
  const animateGrayScaleLogo = useTransform(scrollYProgress, [0, 0.15], [2, 0]);
  animateGrayScaleLogo.on("change", (val) => {
    setLogoGrayscale(Math.round(val));
  });
  const animateLogoScale = useTransform(
    scrollYProgress,
    [0.2, 0.4],
    [0.8, 1.8]
  );
  const smallLogoOpacity = useTransform(scrollYProgress, [0.35, 0.4], [1, 0]);
  const logoTextScale = useTransform(scrollYProgress, [0.35, 0.4], [1, 1.2]);
  const logoTextX = useTransform(
    scrollYProgress,
    [0.37, 0.4],
    ["0dvw", "6dvw"]
  );
  const smallLogoTextOpacity = useTransform(
    scrollYProgress,
    [0.4, 0.54],
    [1, 0]
  );

  //   bg color circles...
  const outerWrapperScale = useTransform(scrollYProgress, [0.2, 0.4], [1, 15]);
  const innerWrapperScale = useTransform(
    scrollYProgress,
    [0.3, 0.43],
    [0.8, 8]
  );
  const outterWrapperOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.4],
    [0, 1]
  );
  const innerWrapperOpacity = useTransform(
    scrollYProgress,
    [0.29, 0.43],
    [0.9, 1]
  );
  const scrollDownWrapperOpacity = useTransform(
    scrollYProgress,
    [0, 0.1],
    [1, 0]
  );

  //   for slider images..
  const animateZIndexMainWrapper = useTransform(
    scrollYProgress,
    [0.44, 0.5],
    [0, 20]
  );

  const imageWrapperOpacity = useTransform(
    scrollYProgress,
    [0.44, 0.54],
    [0, 1]
  );
  const imageWrapperScale = useTransform(
    scrollYProgress,
    [0.44, 0.54],
    [0, 1.3]
  );

  const sliderImgOneopacityPhase1 = useTransform(
    scrollYProgress,
    [0.56, 0.65],
    [0, 1]
  );
  const combineOpacityImg1 = useTransform(scrollYProgress, (val) => {
    if (val <= 0.56) return 0;
    if (val >= 0.56 && val <= 0.65) return sliderImgOneopacityPhase1.get();
    if (val >= 0.651) return 0;
  });
  const sliderImgTwoopacityPhase1 = useTransform(
    scrollYProgress,
    [0.65, 0.75],
    [0, 1]
  );
  const combineOpacityImg2 = useTransform(scrollYProgress, (val) => {
    if (val <= 0.65) return 0;
    if (val >= 0.65 && val <= 0.75) return sliderImgTwoopacityPhase1.get();
    if (val >= 0.751) return 0;
  });

  const sliderImgThreeopacity = useTransform(
    scrollYProgress,
    [0.75, 0.86],
    [0, 1]
  );

  const animateSliderWrapperY = useTransform(
    scrollYProgress,
    [0.86, 0.92],
    ["0dvw", "-50dvw"]
  );
  const animateSliderWrapperOpacity = useTransform(
    scrollYProgress,
    [0.86, 0.92],
    [1, 0]
  );

  const animateHeroBgOpacity = useTransform(
    scrollYProgress,
    [0.86, 0.92],
    [0, 1]
  );
  const animateHeroBgWidth = useTransform(
    scrollYProgress,
    [0.86, 0.96],
    ["20dvw", "100dvw"]
  );
  const animateHeroBgHeight = useTransform(
    scrollYProgress,
    [0.86, 0.96],
    ["20dvh", "100dvh"]
  );
  const animateNavOpacity = useTransform(scrollYProgress, [0.95, 1], [0, 1]);

  const animateMainContentWrapperOpacity = useTransform(
    scrollYProgress,
    [0.95, 1],
    [0, 1]
  );
  const animateMainContentWrapperY = useTransform(
    scrollYProgress,
    [0.96, 1],
    ["5dvw", "0dvw"]
  );

  return (
    <div ref={heroRef} className="homePage__herosecMainWrapper">
      <div className="heroMain__contentWrapper relative overflow-hidden">
        {/* logo wrapper */}
        <motion.div
          style={{
            filter: `grayScale(${logoGrayscale})`,
            scale: animateLogoScale,
          }}
          transition={{
            duration: 0.8,
            ease: "backInOut",
            power: 5,
            damping: 20,
            mass: 5,
            type: "spring",
          }}
          className="relative z-10 transition-all duration-300 ease-linear overflow-hidden p-2 flex justify-center items-center introLogo__wrapper"
        >
          <motion.h2
            style={{
              x: logoTextX,
              scale: logoTextScale,
              opacity: smallLogoTextOpacity,
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
              power: 8,
              damping: 10,
              mass: 6,
              type: "spring",
            }}
            className="herosec__allinoneText 2xl:text-[2.5dvw] xl:text-[2.5dvw] lg:text-[2.5dvw] md:portrait:text-[2.5dvw] text-[3.5dvw]  transition-all duration-300 ease-linear"
          >
            All In One Salon
          </motion.h2>
          <motion.div
            className="relative 2xl:w-[9dvw] xl:w-[9dvw] lg:w-[9dvw] md:portrait:w-[12dvw] w-[14dvw] 2xl:h-[10dvw] xl:h-[10dvw] lg:h-[10dvw] md:portrait:h-[10dvw] h-[15dvw]"
            style={{
              opacity: smallLogoOpacity,
              //   scale:smallLogoScale
            }}
            transition={{
              duration: 1.6,
              ease: "backInOut",
              power: 5,
              damping: 30,
              mass: 9,
              type: "spring",
            }}
          >
            <Image
              fill
              src={YellowLogoImg}
              className="w-full h-full transition-all duration-300 ease-linear"
              alt="logo"
            />
          </motion.div>
          {/* <motion.img
            src={YellowLogoImg}
            className="2xl:w-[12dvw] xl:w-[12dvw] lg:w-[12dvw] md:portrait:w-[12dvw] w-[20dvw] h-auto transition-all duration-300 ease-linear"
            alt="allinone.com"
            style={{
              opacity: smallLogoOpacity,
              //   scale:smallLogoScale
            }}
            transition={{
              duration: 1.6,
              ease: "backInOut",
              power: 5,
              damping: 30,
              mass: 9,
              type: "spring",
            }}
          /> */}
          <motion.div
            style={{
              x: logoOverlaySlide,
            }}
            transition={{
              duration: 0.6,
              ease: "backInOut",
              power: 0.8,
              damping: 10,
              mass: 5,
              type: "spring",
            }}
            className="absolute blur-[60px] -top-[35%] -left-[35%] w-[100dvw] h-[100dvw] introLogo__slideWrapper transition-all duration-300 ease-linear"
          />
        </motion.div>

        {/* bg color circle */}
        <motion.div
          style={{
            scale: outerWrapperScale,
            opacity: outterWrapperOpacity,
          }}
          transition={{
            ease: "backInOut",
            duration: 0.5,
            damping: 10,
            power: 0.2,
          }}
          className="intro__outterWrapper flex justify-center items-center absolute h-[15dvw] w-[15dvw] rounded-full transition-all duration-300 ease-linear"
        >
          <motion.div
            style={{
              scale: innerWrapperScale,
              opacity: innerWrapperOpacity,
            }}
            transition={{
              ease: "backInOut",
              duration: 0.7,
              damping: 15,
              power: 0.4,
            }}
            className="h-[10dvw] w-[10dvw] intro__innerWrapper rounded-full transition-all duration-500 ease-linear"
          />
        </motion.div>

        {/* <motion.div
          style={{
            zIndex: animateZIndexMainWrapper,
            y: animateSliderWrapperY,
            opacity: animateSliderWrapperOpacity,
          }}
          transition={{
            duration: 2.9,
            ease: "linear",
            power: 3,
            mass: 5,
            damping: 20,
          }}
          className="absolute w-full  flex justify-center items-center transition-all duration-300 ease-linear"
        >
          <motion.div
            style={{
              opacity: imageWrapperOpacity,
              scale: imageWrapperScale,
            }}
            transition={{
              duration: 1,
              ease: "linear",
              power: 3,
              mass: 5,
              damping: 20,
            }}
            className="bg-[#d9d9d9]  2xl:w-[30dvw] xl:w-[30dvw] lg:w-[30dvw] md:portrait:w-[30dvw] w-[60dvw] 2xl:h-[30dvw] xl:h-[30dvw] lg:h-[30dvw] md:portrait:h-[30dvw] h-[60dvw]  rounded-full border-8 border-black flex justify-center items-center overflow-hidden relative transition-all duration-500 ease-linear"
          >
            <motion.img
              src={`${SliderImg1}`}
              className="object-cover absolute z-10 w-full h-full -mb-[1.5dvw] transition-all duration-300 ease-linear"
              alt="allinone.com"
              style={{
                opacity: combineOpacityImg1,
              }}
              transition={{
                duration: 1.9,
                ease: "linear",
                power: 3,
                mass: 5,
                damping: 20,
              }}
            />
            <motion.img
              src={`${SliderImg2}`}
              className="object-cover w-full absolute z-20 h-full -mb-[1.5dvw] ml-[7%] transition-all duration-300 ease-linear"
              alt="allinone.com"
              style={{
                opacity: combineOpacityImg2,
              }}
              transition={{
                duration: 1.9,
                ease: "linear",
                power: 3,
                mass: 5,
                damping: 20,
              }}
            />
            <motion.img
              src={SliderImg3}
              className="object-cover absolute z-30 w-full h-full -mb-[1.5dvw] transition-all duration-300 ease-linear"
              alt="allinone.com"
              style={{
                opacity: sliderImgThreeopacity,
              }}
              transition={{
                duration: 1.9,
                ease: "linear",
                power: 3,
                mass: 5,
                damping: 20,
              }}
            />
          </motion.div>
        </motion.div> */}

        {/* new images */}

        <motion.div
          style={{
            zIndex: animateZIndexMainWrapper,
            y: animateSliderWrapperY,
            opacity: animateSliderWrapperOpacity,
          }}
          transition={{
            duration: 2.9,
            ease: "linear",
            power: 3,
            mass: 5,
            damping: 20,
          }}
          className="absolute top-0 w-full h-full transition-all duration-300 ease-linear"
        >
          <motion.div
            style={{
              opacity: combineOpacityImg1,
            }}
            transition={{
              duration: 1.9,
              ease: "linear",
              power: 3,
              mass: 5,
              damping: 20,
            }}
            className="absolute w-full h-full transition-all duration-300 ease-linear"
          >
            <Image
              alt="allinone.com"
              src={HeroAnimImg1}
              // fill
              loading="eager"
              className="w-full h-full 2xl:object-cover xl:object-cover lg:object-cover md:portrait:object-cover object-contain "
            />
          </motion.div>
          <motion.div
            style={{
              opacity: combineOpacityImg2,
            }}
            transition={{
              duration: 1.9,
              ease: "linear",
              power: 3,
              mass: 5,
              damping: 20,
            }}
            className="absolute w-full h-full transition-all duration-300 ease-linear"
          >
            <Image
              alt="allinone.com"
              src={HeroAnimImg2}
              fill
              loading="eager"
              className="w-full h-full 2xl:object-cover xl:object-cover lg:object-cover md:portrait:object-cover object-contain"
            />
          </motion.div>
          <motion.div
            style={{
              opacity: sliderImgThreeopacity,
            }}
            transition={{
              duration: 1.9,
              ease: "linear",
              power: 3,
              mass: 5,
              damping: 20,
            }}
            className="absolute w-full h-full transition-all duration-300 ease-linear"
          >
            <Image
              alt="allinone.com"
              src={HeroAnimImg3}
              fill
              loading="eager"
              className="w-full h-full 2xl:object-cover xl:object-cover lg:object-cover md:portrait:object-cover object-contain"
            />
          </motion.div>
        </motion.div>

        <motion.div
          style={{
            opacity: scrollDownWrapperOpacity,
          }}
          transition={{
            duration: 1.9,
            ease: "linear",
            power: 3,
            mass: 5,
            damping: 20,
          }}
          className="px-5 py-2 flex justify-center gap-5 items-center absolute bottom-[5%] rounded-2xl border border-[#eee]/10"
        >
          <motion.h3
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: [0, 1],
            }}
            transition={{
              duration: 1.5,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-[var(--mainColor)] text-[1.3dvw] uppercase"
          >
            Scroll Down
          </motion.h3>
          <motion.button
            initial={{
              // opacity: 1,
              y: "0%",
            }}
            animate={{
              // opacity: [0, 1],
              y: ["20%", "0%", "-20%", "0%"],
            }}
            transition={{
              duration: 1.5,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-[var(--mainColor)]"
          >
            <ArrowDown />
          </motion.button>
        </motion.div>

        <motion.div
          style={{
            opacity: animateHeroBgOpacity,
            width: animateHeroBgWidth,
            height: animateHeroBgHeight,
          }}
          transition={{
            duration: 2.9,
            ease: "linear",
            power: 8,
            mass: 8,
            damping: 20,
            type: "tween",
          }}
          className="absolute  z-40 h-full w-full flex justify-center items-center overflow-hidden transition-all duration-300 ease-linear"
        >
          <motion.div className="h-[100dvh] w-full  overflow-hidden absolute z-10">
            <Image
              fill
              loading="eager"
              src={HeroImg1}
              alt="allinone.com"
              className="object-cover h-full w-full"
            />
            <div className="absolute top-0 w-full h-full bg-[#161616]/70 z-20"></div>
          </motion.div>

          <motion.div className="relative z-20 top-0 w-full h-full overflow-hidden flex justify-center items-center">
            <Navbar
              animateNavOpacity={animateNavOpacity}
              setShowMenu={setShowMenu}
            />

            <motion.div
              style={{
                opacity: animateMainContentWrapperOpacity,
                y: animateMainContentWrapperY,
              }}
              transition={{
                duration: 2.9,
                ease: "linear",
                power: 8,
                mass: 8,
                damping: 20,
                type: "tween",
              }}
              className="w-[90%] transition-all duration-300 ease-linear"
            >
              <div className="2xl:w-[45%] xl:w-[45%] lg:w-[45%] md:portrait:w-[90%] w-full md:portrait:mx-auto  p-5 flex flex-col gap-8 justify-start items-start">
                <h1 className="text-[var(--mainColor)] font-[Aclonica] font-[400] 2xl:text-[3dvw] xl:text-[3dvw] lg:text-[3dvw] text-[8dvw] md:portrait:text-[6dvw] 2xl:leading-[4dvw] xl:leading-[4dvw] lg:leading-[4dvw] md:portrait:leading-[7dvw] leading-[10dvw]  uppercase">
                  Elevate Your Style. Feel Your Best.
                </h1>
                <p className="text-white font-[Montserrat] font-[400] 2xl:text-[1.3dvw] xl:text-[1.3dvw] lg:text-[1.3dvw] md:portrait:text-[2.3dvw] uppercase">
                  More than just a haircut—it's a vibe.Come for the style, stay
                  for the experience.
                </p>

                <CommonBTNs btnTitle="All Services" path="/services" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
