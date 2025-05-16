import React, { useEffect, useState } from "react";
import "./Testimonialssec.scss";
import {
  AboutsecPatternOne,
  AngleArrowLeftIcon,
  AngleArrowRightIcon,
  CombePattern,
  QuotesIcon,
  QuotesIcon2,
} from "../../../assets/AllSvgs/AllSvgs";
import { motion } from "framer-motion";

import TestimonialsImg1 from "../../../assets/Images/TestimonialImg1.png";
import TestimonialsImg2 from "../../../assets/Images/TestimonialsImg2.jpg";
import TestimonialsImg3 from "../../../assets/Images/TestimonialsImg3.jpg";
import TestimonialsImg4 from "../../../assets/Images/TestimonialsImg4.jpg";
import TestimonialsImg5 from "../../../assets/Images/TestimonialsImg5.jpg";
import Image from "next/image";

const TestimonialsData = [
  {
    name: "Sarah M",
    role: "Co-Owner at LionEnergy",
    review: `I had the best experience at All in One Salon! My haircut and color turned out exactly how I envisioned, and the stylist really listened to what I wanted. The atmosphere is so welcoming, and I left feeling like a new person. Highly recommend!`,
    image: TestimonialsImg1,
  },
  {
    name: "James L. ",
    role: "Co-Owner at LionEnergy",
    review: `My facial and manicure at All in One Salon were pure bliss! The staff made me feel so pampered, and my skin has never looked better. Their attention to detail and quality products make all the difference. I’m hooked!”`,
    image: TestimonialsImg2,
  },
  {
    name: "Priya K.",
    role: "Co-Owner at LionEnergy",
    review: `I booked a full bridal package for my wedding, and All in One Salon exceeded all expectations. From my flawless updo to my makeup, everything was perfect. They made me feel so confident on my big day. Thank you!”`,
    image: TestimonialsImg3,
  },
  {
    name: "Emma R.",
    role: "Co-Owner at LionEnergy",
    review: `I always leave feeling like a new person. The team is so talented and friendly!”`,
    image: TestimonialsImg4,
  },
  {
    name: "Michael T.",
    role: "Co-Owner at LionEnergy",
    review: `I tried their spa massage and it was hands-down the most relaxing experience ever. The staff is so skilled and the vibe of the salon is just perfect. All in One Salon is my go-to for any grooming or self-care needs!”`,
    image: TestimonialsImg5,
  },
];

export const Testimonialssec = ({
  animateWrapperTwoScale,
  animateWrapperTwoOpacity,
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const handelNext = (dataArray, setCurrentIndex) => {
    setCurrentIndex((curr) => (curr === dataArray.length - 1 ? 0 : curr + 1));
  };

  const handlePrev = (dataArray, setCurrentIndex) => {
    setCurrentIndex((curr) => (curr === 0 ? dataArray.length - 1 : curr - 1));
  };




  return (
    <motion.div
      style={{
        scale: animateWrapperTwoScale,
        opacity: animateWrapperTwoOpacity,
      }}
      transition={{
        duration: 2.9,
        ease: "linear",
        power: 12,
        mass: 10,
        damping: 20,
        type: "tween",
      }}
      className="2xl:h-[100dvh] xl:h-[100dvh] lg:h-[100dvh] md:portrait:h-[60dvh] h-[100dvh] sticky top-0 bg-[var(--whiteColor)] flex justify-center items-center"
    >
      <div className="absolute bottom-0 left-0">
        <AboutsecPatternOne />
      </div>
      <div className="absolute right-[1%] bottom-[10%]">
        <CombePattern />
      </div>

      <div className="relative px-5 py-2.5 2xl:w-[90%] xl:w-[90%] lg:w-[90%] md:portrait:w-[90%] w-[95%] flex flex-col justify-center items-center gap-10">
        <div className="w-full flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:portrait:flex-row justify-between items-center ">
          <div className="flex-1">
            <div className="2xl:w-[90%] xl:w-[90%] lg:w-[90%] md:portrait:w-[90%] w-full flex flex-col gap-4">
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
                className="2xl:text-[3dvw] xl:text-[3dvw] lg:text-[3dvw] md:portrait:text-[5dvw] text-[9dvw] uppercase text-[var(--mainColor)] 2xl:leading-[4dvw] xl:leading-[4dvw] lg:leading-[4dvw] md:portrait:leading-[4dvw] leading-[10dvw]"
              >
                What our clients say
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
                className="uppercase 2xl:text-[1.3dvw] xl:text-[1.3dvw] lg:text-[1.3dvw] md:portrait:text-[1.3dvw] text-[3.5dvw] text-start"
              >
                Loved by locals, trusted by trendsetters.Hear what our clients
                have to say.
              </motion.p>
            </div>
          </div>
          <div className="flex-1 flex justify-end items-center">
            <div className="flex justify-center items-center gap-5">
              <button
                onClick={() => handlePrev(TestimonialsData, setCurrentValue)}
                className="bg-[var(--whiteColor2)] p-3 rounded-full cursor-pointer"
              >
                <AngleArrowLeftIcon />
              </button>
              <button
                onClick={() => handelNext(TestimonialsData, setCurrentValue)}
                className="bg-[var(--secondaryColor)] p-3 rounded-full cursor-pointer"
              >
                <AngleArrowRightIcon />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-start gap-5  overflow-hidden">
          {TestimonialsData.map((cur, id) => (
            <motion.div
              // initial={{
              //     background: "#fff",
              //     minWidth: "28dvw",
              // }}
              //   whileHover={{
              //     background: "#dea93a",
              //     minWidth: "36dvw",
              //   }}
              //   transition={{
              //     duration: 0.6,
              //     ease: "backInOut",
              //   }}
              style={{
                transform: `translateX(-${currentValue * 105}%) `,
              }}
              key={id}
              className="bg-[var(--whiteColor2)] 2xl:min-w-[28dvw] xl:min-w-[28dvw] lg:min-w-[28dvw] md:portrait:min-w-[28dvw] min-w-[76dvw] p-5 min-h-[25dvw] flex flex-col justify-center items-start gap-5 transition-all duration-500 ease-linear"
            >
              <div>
                <QuotesIcon />
              </div>
              <div>
                <p className="2xl:text-[1.3dvw] xl:text-[1.3dvw] lg:text-[1.3dvw] md:portrait:text-[1.3dvw] text-[3.5dvw]">
                  {cur.review}
                </p>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="flex justify-center items-center gap-3">
                  <div className="overflow-hidden relative h-[4dvw] w-[4dvw] rounded-full">
                    <Image fill
                      className="w-full h-full object-cover object-top"
                      src={cur.image}
                      alt="allinone.com"
                    />
                  </div>
                  <div>
                    <h4 className="font-[Montserrat] font-semibold 2xl:text-[1.3dvw] xl:text-[1.3dvw] lg:text-[1.3dvw] md:portrait:text-[1.3dvw] text-[3dvw] text-[var(--mainColor2)]">
                      {cur.name}
                    </h4>
                    {/* <p className="text-[#211600] 2xl:text-[.95dvw] xl:text-[.95dvw] lg:text-[.95dvw] md:portrait:text-[.95dvw] text-[2dvw] font-medium">
                      {cur.role}
                    </p> */}
                  </div>
                </div>
                <QuotesIcon2 />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
