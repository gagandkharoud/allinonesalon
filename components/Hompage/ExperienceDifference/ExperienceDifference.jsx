import React from "react";
import "./ExperienceDifference.scss";
import {
  ExperienceChairsIcon,
  ExperienceDifferencePatternOne,
  ExperienceDifferencePatternTwo,
  ExperienceHotTowelIcon,
  ExperienceUVIcon,
} from "../../../assets/AllSvgs/AllSvgs";
import ExperienceDifferenceImg1 from "../../../assets/Images/ExperienceImg1.png";
import ExperienceDifferenceImg2 from "../../../assets/Images/differenceImg2.jpg";
import ExperienceDifferenceImg3 from "../../../assets/Images/ExperienceImg3.png";
import { motion } from "framer-motion";
import Image from "next/image";

const experiencedata = [
  {
    icon: <ExperienceUVIcon />,
    image: ExperienceDifferenceImg1,
    heading: `UV-Sterilized & Sanitize Tool`,
    description: `We use hospital-grade UV sterilizers and sanitizers to disinfect all tools after every client—so you can feel confident in our cleanliness.`,
  },
  {
    icon: <ExperienceHotTowelIcon />,
    image: ExperienceDifferenceImg2,
    heading: `Hot Towel Treatments`,
    description: `Included in our premium services, hot towel therapy adds a relaxing touch while opening pores for a cleaner, smoother grooming experience.`,
  },
  {
    icon: <ExperienceChairsIcon />,
    image: ExperienceDifferenceImg3,
    heading: `Massage-Enabled Shampoo Chairs`,
    description: `Massage-Enabled Shampoo Chairs
Because you deserve it. Our shampoo chairs include built-in massage functions to help you unwind while we prep your hair for styling.`,
  },
];

export const ExperienceDifference = () => {
  return (
    <div className="ED__mainWrapper 2xl:min-h-[100dvh] xl:min-h-[100dvh] lg:min-h-[100dvh] md:portrait:min-h-[80dvh] py-16 bg-[var(--secondaryColor)] relative overflow-hidden flex justify-center items-center">
      <div className="absolute top-0 left-0 aboutsec__patternWrapperOne">
        <ExperienceDifferencePatternOne />
      </div>
      <div className="absolute bottom-0 right-0 aboutsec__patternWrapperOne">
        <ExperienceDifferencePatternTwo />
      </div>

      <div className="relative 2xl:w-[90%] xl:w-[90%] lg:w-[90%] md:portrait:w-[90%] w-[95%] p-5 flex flex-col gap-10">
        <div className="w-full flex justify-center items-center">
          <div className="2xl:w-[85%] xl:w-[85%] lg:w-[85%] md:portrait:w-full flex flex-col justify-center items-center gap-5">
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
              className="text-[var(--mainColor)] 2xl:text-[3dvw] xl:text-[3dvw] lg:text-[3dvw] md:portrait:text-[5dvw] text-[8dvw] uppercase text-center"
            >
              Experience the Difference
            </motion.h3>
            <motion.p
              initial={{
                opacity: 0,
                y: "2.5dvw",
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
              className="text-center text-white 2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] md:portrait:text-[2dvw] text-[3.5dvw] uppercase font-[300]"
            >
              Your safety and comfort are our top priorities. At All In One
              Salone, we combine expert care with top-tier hygiene and
              relaxation tools to ensure every visit is as clean and calming as
              it is stylish
            </motion.p>
          </div>
        </div>

        <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:portrait:grid-cols-2 gap-5">
          {experiencedata.map((cur, id) => (
            <div key={id} className="bg-white p-7 relative w-full ">
              <div className="flex flex-col gap-4 w-full">
                <div className="2xl:h-[19dvw] xl:h-[19dvw] lg:h-[19dvw] md:portrait:h-[27dvw] h-[50dvw] w-full relative">
                  <Image fill
                    src={cur.image}
                    loading="lazy"
                    alt="allinone.com"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-[4%] left-[4%] bg-[var(--mainColor)] h-[3.5dvw] w-[3.5dvw] flex justify-center items-center">
                    {cur.icon}
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <h4 className="font-[Montserrat] font-bold 2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] md:portrait:text-[2.2dvw] uppercase">
                    {cur.heading}
                  </h4>
                  <p className="2xl:text-[1.05dvw] xl:text-[1.05dvw] lg:text-[1.05dvw] md:portrait:text-[2.05dvw] font-[400] mb-5  line-clamp-3">
                    {cur.description}
                  </p>
                </div>
              </div>

              <div className="w-full absolute bottom-0 left-0 bg-[var(--mainColor)] h-[1dvw]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
