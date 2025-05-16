import React from "react";
import "./WhatWeDo.scss";
import {
  CombePattern,
  OurCustomersIcon,
  SatisfactionIcon,
} from "../../../assets/AllSvgs/AllSvgs";

import AboutImg3 from "../../../assets/Images/HairCuttingGirlAImg.jpg";
import { motion } from "framer-motion";
import Image from "next/image";

export const WhatWeDo = () => {
  return (
    <>
      <div className="min-h-[100dvh] bg-[var(--whiteColor2)] flex justify-center items-center relative ">
        <div className="absolute -left-[8%] bottom-[0%] opacity-40 scale-[.5]">
          <CombePattern />
        </div>
        <div className="relative 2xl:w-[90%] xl:w-[90%] lg:w-[90%] md:portrait:w-[90%] w-[95%]  gap-8 2xl:ml-auto xl:ml-auto lg:ml-auto md:portrait:mx-auto mx-auto flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-col justify-center">
          <div className="flex-1 p-4 flex justify-start items-center">
            <div className="flex flex-col gap-5 justify-start items-start px-2">
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
                }}
                className="2xl:text-[3.5dvw] xl:text-[3.5dvw] lg:text-[3.5dvw] md:portrait:text-[5dvw] text-[8dvw] text-[var(--mainColor)] uppercase"
              >
                What WE DO
              </motion.h3>
              <motion.h4
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
                className="2xl:text-[1.7dvw] xl:text-[1.7dvw] lg:text-[1.7dvw] md:portrait:text-[2.7dvw] text-[4.7dvw] font-[700] text-black uppercase"
              >
                fEEL YOUR NEW NELSON sTYLE
              </motion.h4>
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
                className="font-[Montserrat] font-[400] 2xl:text-[1.3dvw] xl:text-[1.3dvw] lg:text-[1.3dvw] md:portrait:text-[2dvw] text-[3dvw]"
              >
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in that some form by
                injected words which don't look even slightly believable.
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
                className="font-[Montserrat] font-[400] 2xl:text-[1.3dvw] xl:text-[1.3dvw] lg:text-[1.3dvw] md:portrait:text-[2dvw] text-[3dvw] capitalize"
              >
                suffered alteration in that some form injected humour or
                randomised words which don’t look even slightly believable.
              </motion.p>
              <div className="flex justify-start items-center gap-5">
                <motion.button
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
                  className="flex justify-center items-center gap-5"
                >
                  <SatisfactionIcon />
                  <div className="flex flex-col justify-start items-start">
                    <p className="font-[700] 2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] md:portrait:text-[2dvw] text-[3dvw] font-[Montserrat] text-[var(--mainColor2)]">
                      100%
                    </p>
                    <p className="font-[700] 2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] md:portrait:text-[2dvw] text-[3dvw] font-[Montserrat] text-[var(--mainColor2)]">
                      Satisfaction
                    </p>
                  </div>
                </motion.button>
                <motion.button
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
                    delay: 0.4,
                  }}
                  className="flex justify-center items-center gap-5"
                >
                  <OurCustomersIcon />
                  <div className="flex flex-col justify-start items-start">
                    <p className="font-[700] 2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] md:portrait:text-[2dvw] text-[3dvw] font-[Montserrat] text-[var(--mainColor2)]">
                      100%
                    </p>
                    <p className="font-[700] 2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] md:portrait:text-[2dvw] text-[3dvw] font-[Montserrat] text-[var(--mainColor2)]">
                      Our Customers
                    </p>
                  </div>
                </motion.button>
              </div>
            </div>
          </div>
          <div className="2xl:flex-1 xl:flex-1 lg:flex-1 w-full gap-5 2xl:h-[60dvh]  xl:h-[60dvh] lg:h-[60dvh] md:portrait:h-[50dvh] h-[40dvh] relative flex justify-center items-center">
            <div className="flex-1 h-full relative z-20 overflow-hidden">
              <motion.div
                initial={{
                  scale: 1,
                }}
                whileHover={{
                  scale: 1.2,
                }}
                transition={{
                  duration: 0.8,
                  ease: "backInOut",
                  type: "tween",
                  mass: 2,
                  damping: 20,
                }}
                className="relative w-[55dvh] h-[55dvh] ml-auto"
              >
                <Image fill
                  className="w-full mx-auto h-full object-cover"
                  src={AboutImg3}
                  alt="allincone.com"
                />
              </motion.div>
            </div>
            <div className="w-[13dvw] -top-[5%] right-0 h-[40dvh] absolute bg-[var(--mainColor)]" />
          </div>
        </div>
      </div>
    </>
  );
};
