import React, { useRef } from "react";
import "./Combinesec.scss";
import { useScroll, useTransform, motion } from "framer-motion";
import {
  AboutsecPatternOne,
  CombePattern,
} from "../../../assets/AllSvgs/AllSvgs";
import { OurServicessec } from "../OurServicesec/OurServicessec";
import { Gallerysec } from "../Gallerysec/Gallerysec";
import { Testimonialssec } from "../Testimonialssec/Testimonialssec";
// import { Specialistsec } from "../Specialistsec/Specialistsec";

export const Combinesec = () => {
  const mainWrapperRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: mainWrapperRef,
  });

  // define scroll animations..
  const animateWrapperOneScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.3]
  );
  const animateWrapperOneOpacity = useTransform(scrollYProgress,[0,1],[1,0])
  const animateWrapperTwoScale = useTransform(
    scrollYProgress,
    [0.5, 1],
    [1, 0.3]
  );
  const animateWrapperTwoOpacity = useTransform(scrollYProgress,[0.5,1],[1,.5])
  const animateYPatternOne = useTransform(
    scrollYProgress,
    [0.15, 0.5],
    ["0dvw", "50dvw"]
  );
  const animateYPatternTwo = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["0dvw", "-40dvw"]
  );

  return (
    <>
      <div
        ref={mainWrapperRef}
        className="2xl:h-[200dvh] xl:h-[200dvh] lg:h-[200dvh] md:portrait:h-[120dvh] h-[200dvh] bg-[var(--whiteColor)] relative"
      >
        <motion.div
          style={{
            y: animateYPatternOne,
          }}
          transition={{
            duration: 2.9,
            ease: "linear",
            power: 8,
            mass: 8,
            damping: 20,
            type: "tween",
          }}
          className="absolute top-[5%] left-0 transition-all duration-500 ease-linear"
        >
          <AboutsecPatternOne />
        </motion.div>
        <motion.div
          style={{
            y: animateYPatternTwo,
          }}
          transition={{
            duration: 2.9,
            ease: "linear",
            power: 8,
            mass: 8,
            damping: 20,
            type: "tween",
          }}
          className="absolute bottom-[0%] right-0"
        >
          <CombePattern />
        </motion.div>

        <Gallerysec animateMainWrapper={animateWrapperOneScale} animateWrapperOneOpacity={animateWrapperOneOpacity} />
        <Testimonialssec
        //  animateWrapperTwoScale={animateWrapperTwoScale} animateWrapperTwoOpacity={animateWrapperTwoOpacity}
          />
        {/* <Specialistsec /> */}
      </div>
    </>
  );
};
