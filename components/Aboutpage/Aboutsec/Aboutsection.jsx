import React from "react";
import { CombePattern } from "../../../assets/AllSvgs/AllSvgs";
import { CommonBTNs } from "../../common/BTN/CommonBTNs";
import AboutImg1 from "../../../assets/Images/AboutImg1.png";
import AboutImg2 from "../../../assets/Images/homeAboutImg4.jpg";
import { motion } from "framer-motion";
import Image from "next/image";

export const Aboutsection = () => {
  return (
    <div className="2xl:min-h-[100dvh] xl:min-h-[100dvh] lg:min-h-[100dvh] md:portrait:min-h-[80dvh] min-h-[80dvh] py-16 bg-[var(--whiteColor2)] flex justify-center items-center relative ">
      <div className="absolute -right-[1.8%] bottom-[10%] opacity-40 scale-[.7]">
        <CombePattern />
      </div>
      <div className="relative 2xl:w-[90%] xl:w-[90%] lg:w-[90%] md:portrait:w-[90%] w-[95%]  gap-8 2xl:mr-auto xl:flex lg:mr-auto md:portrait:mx-auto mx-auto flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-col justify-center">
        <div className="2xl:flex-1 xl:flex-1 lg:flex-1 md:portrait:flex-1 gap-5 2xl:h-[60dvh] xl:h-[60dvh] lg:h-[60dvh] md:portrait:h-[50dvh] h-[70dvh] w-full relative flex justify-center items-center">
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
              className="relative w-full h-full"
            >
              <Image
                fill
                className="w-full h-full object-cover"
                src={AboutImg1}
                alt="allincone.com"
              />
            </motion.div>
          </div>
          <div className="flex-1 hidden 2xl:flex lg:flex xl:flex md:portrait:flex h-full relative z-20 overflow-hidden">
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
              className="w-full h-full relative"
            >
              <Image
                fill
                className="w-full h-full object-cover"
                src={AboutImg2}
                alt="allincone.com"
              />
            </motion.div>
          </div>
          <div className="2xl:w-[13dvw] xl:w-[13dvw] lg:w-[13dvw] md:portrait:w-[20dvw] w-[20dvw] -top-[5%] left-0 h-[10dvw] absolute bg-[var(--mainColor)]" />
          <div className="2xl:w-[13dvw] xl:w-[13dvw] lg:w-[13dvw] md:portrait:w-[20dvw] w-[20dvw] -bottom-[5%] right-0 h-[10dvw] absolute bg-[var(--secondaryColor)]" />
        </div>

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
              className="2xl:text-[3.5dvw] xl:text-[3.5dvw] lg:text-[3.5dvw] md:portrait:text-[6dvw] text-[8dvw] text-[var(--mainColor)] uppercase"
            >
              About Us
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
              className="font-[Montserrat] font-[400] 2xl:text-[1.3dvw] xl:text-[1.3dvw] lg:text-[1.3dvw] md:portrait:text-[2.3dvw] text-[3.5dvw] "
            >
              At All in one Salon, we believe a great look starts with great
              care. Our mission is simple: to help you feel confident,
              refreshed, and completely yourself. With a team of skilled
              stylists, top-of-the-line tools, and a focus on both hygiene and
              comfort, we offer more than just a service—we offer an experience.
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
              className="font-[Montserrat] font-[400] 2xl:text-[1.3dvw] xl:text-[1.3dvw] lg:text-[1.3dvw] md:portrait:text-[2.3dvw] text-[3.5dvw]"
            >
              Whether you're coming in for a quick trim or a full
              transformation, you'll leave feeling your absolute best. Style.
              Cleanliness. Comfort. It's what we do best.
            </motion.p>
            <CommonBTNs btnTitle="Contact Us" path="/contact-us" />
          </div>
        </div>
      </div>
    </div>
  );
};
