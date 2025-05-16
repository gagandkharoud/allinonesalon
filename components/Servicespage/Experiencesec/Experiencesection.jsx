import React from "react";
import { CombePattern } from "../../../assets/AllSvgs/AllSvgs";
import { CommonBTNs } from "../../common/BTN/CommonBTNs";
import ExperienceImg4 from "../../../assets/Images/ExperienceImg4.png";
import { motion } from "framer-motion";
import Image from "next/image";

export const Experiencesection = () => {
  return (
    <div className="min-h-[100dvh] py-16 bg-[var(--whiteColor)] relative flex justify-center items-center">
      <div className="absolute -right-[1.8%] bottom-[10%] opacity-80 scale-[.7]">
        <CombePattern />
      </div>
      <div className="w-[90%] relative flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:portrait:flex-col justify-center items-center  gap-8">
        <div className="2xl:w-[40%] xl:w-[40%] lg:w-[40%] md:portrait:w-[80%] w-[95%] flex 2xl:justify-start xl:justify-start lg:justify-start md:portrait:justify-center justify-center items-center relative">
          <div className="2xl:h-[75dvh] xl:h-[75dvh] lg:h-[75dvh] md:portrait:h-[55dvh] h-[50dvh] 2xl:w-[60dvh] xl:w-[60dvh] lg:w-[60dvh] md:portrait:w-[50dvh] w-[60dvh] mx-auto relative z-20">
            <Image fill
              src={ExperienceImg4}
              className="w-full h-full object-cover"
              alt="allinone.com"
            />
          </div>
          <div className="absolute top-[15%] -left-[20%] bg-[var(--mainColor)] w-[50%] h-[70%]" />
        </div>
        <div className="flex-1 ">
          <div className="flex flex-col gap-8 justify-start items-start w-[95%]">
            <div className="flex justify-center gap-4 items-end relative">
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
                className="text-[var(--mainColor)] 2xl:text-[4dvw] xl:text-[4dvw] lg:text-[4dvw] md:portrait:text-[5dvw] text-[6dvw] relative z-20"
              >
                25
              </motion.h3>
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
                className="text-[var(--mainColor)] 2xl:text-[3dvw] xl:text-[3dvw] lg:text-[3dvw] md:portrait:text-[5dvw] text-[6dvw] uppercase"
              >
                years of experience
              </motion.h3>
              <motion.div
                initial={{
                  width: "0dvw",
                }}
                whileInView={{
                  width: "7dvw",
                }}
                transition={{
                  duration: 0.6,
                  ease: "backInOut",
                  mass: 4,
                  power: 4,
                  type: "tween",
                  delay: 1.5,
                }}
                className="absolute -top-[30%] -left-[5%] bg-[var(--secondaryColor)] w-[7dvw] h-[8dvw] "
              />
            </div>
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
              className="2xl:text-[2.5dvw] xl:text-[2.5dvw] lg:text-[2.5dvw] md:portrait:text-[5dvw] text-[6dvw] 2xl:leading-[3dvw] xl:leading-[3dvw] lg:leading-[3dvw] md:portrait:leading-[6dvw] leading-[7dvw] uppercase"
            >
              we’re Best barbers & hair cutting salon{" "}
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
              className="2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] md:portrait:text-[2dvw] text-[3.5dvw] font-[400] "
            >
              Welcome to All in one , where style meets expertise! We offer top-tier haircuts, coloring, and styling for men and women. Our skilled barbers and stylists create everything from classic fades to modern bobs, ensuring you leave looking and feeling your best.
            </motion.p>
            <CommonBTNs btnTitle="Book Now" />
          </div>
        </div>
      </div>
    </div>
  );
};
