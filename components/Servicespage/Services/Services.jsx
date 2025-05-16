'use client'
import React from "react";
import "./Services.scss";
import {
  AboutsecPatternOne,
  ArrowIcon,
  BodyTreatmemtIcon,
  CombePattern,
  HairColorIncon,
  HairCuttingIcon,
  HairWashIcon,
  OurServiceBoxPattern,
  ShavingIcon,
  SpaIcon,
  WavePatternBordered,
  WavePatternColored,
} from "../../../assets/AllSvgs/AllSvgs";
import { CommonBTNs } from "../../common/BTN/CommonBTNs";
import ServiceImg2 from "../../../assets/Images/ServicesImg2.png";

import { motion, stagger } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
const serviceData = [
  {
    icon: <HairCuttingIcon />,
    heading: `Hair Cutting Style`,
    description: `Every great look starts with the perfect cut.Tailored styles for every face, vibe, and lifestyle.`,
  },
  {
    icon: <HairWashIcon />,
    heading: `Hair Washing`,
    description: `Every great look starts with the perfect cut.Tailored styles for every face, vibe, and lifestyle.`,
  },
  {
    icon: <BodyTreatmemtIcon />,
    heading: `Body Treatments`,
    description: `Every great look starts with the perfect cut.Tailored styles for every face, vibe, and lifestyle.`,
  },
  {
    icon: <SpaIcon />,
    heading: `Beauty & Spa`,
    description: `Every great look starts with the perfect cut.Tailored styles for every face, vibe, and lifestyle.`,
  },
  {
    icon: <ShavingIcon />,
    heading: `Stylist Shaving`,
    description: `Every great look starts with the perfect cut.Tailored styles for every face, vibe, and lifestyle.`,
  },
  {
    icon: <HairColorIncon />,
    heading: `Multi hair colors`,
    description: `Every great look starts with the perfect cut.Tailored styles for every face, vibe, and lifestyle.`,
  },
];

export const Services = () => {
  const router = useRouter();
  return (
    <div className="min-h-[100dvh] overflow-x-hidden bg-[var(--secondaryColor)] py-16 relative flex justify-center items-center">
      <div className="w-[90%] relative z-20  flex flex-col justify-center items-center gap-14">
        <div className="flex flex-col justify-center items-center gap-8">
          <div className="w-full flex justify-center items-center">
            <div className="flex flex-col gap-0 2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:portrait:w-[80%] w-[95%]">
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
                className="text-[var(--mainColor)] 2xl:text-[4dvw] xl:text-[4dvw] lg:text-[4dvw] md:portrait:text-[7dvw] text-[8dvw] uppercase text-center"
              >
                Our Services
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
                className="text-center 2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] md:portrait:text-[2.2dvw]  text-[3.5dvw] text-[var(--whiteColor2)] font-[400] uppercase"
              >
                At All in one salon, we don’t just cut hair—we create confidence. Let’s make your next look your best yet!
              </motion.p>
            </div>
          </div>
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
              delayChildren: stagger(0.2),
            }}
            className="grid 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-6 md:portrait:grid-cols-3 grid-cols-1 w-full gap-3"
          >
            {serviceData.map((cur, id) => (
              <motion.div
                key={id}
                className="w-full bg-[#FFF7e0] px-4 2xl:py-10 xl:py-10 lg:py-10 md:portrait:py-10 py-16 flex justify-center items-center gap-4 relative overflow-hidden ourService__hoverEffect"
              >
                <div className="flex justify-center flex-col items-center gap-3 relative z-20">
                  <div>{cur.icon}</div>
                  <h4 className="font-[Montserrat] font-[700] 2xl:text-[1dvw] xl:text-[1dvw] lg:text-[1dvw] md:portrait:text-[2dvw] text-[5.5dvw] uppercase">
                    {cur.heading}
                  </h4>
                  <button
                    onClick={() => router.push(`/service-details/${id+1}`)}
                    // to={`/service-details/${id}`}
                    className="bg-[var(--mainColor)] px-3 py-1.5 cursor-pointer viewMoreBTN transition-all duration-300 ease-linear"
                  >
                    <ArrowIcon />
                  </button>
                </div>

                <div className="absolute -bottom-[30%] -left-[30%] z-10 scale-[.5] ">
                  <OurServiceBoxPattern />
                </div>
                <div className="absolute bottom-[15%] -right-[3%] z-10 scale-[.8] ">
                  <WavePatternBordered />
                  <WavePatternColored />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:portrait:flex-col justify-between  gap-4">
          <div className="flex justify-center items-center flex-1">
            <div className="2xl:w-[90%] xl:w-[90%] lg:w-[90%] md:portrait:w-[90%] w-[95%] flex flex-col gap-8 justify-start items-start overflow-hidden">
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
                className="2xl:text-[3dvw] xl:text-[3dvw] lg:text-[3dvw] md:portrait:text-[5dvw] text-[5.5dvw] text-[var(--whiteColor2)] uppercase"
              >
                modern tools for your hair style fashion
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
                className="text-[var(--whiteColor2)] 2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] md:portrait:text-[2.2dvw] text-[3.5dvw]  font-[400]"
              >
                At All in one Salon, we elevate your hair style with cutting-edge modern tools designed to bring your fashion vision to life. Our state-of-the-art equipment, from precision clippers and advanced coloring systems to high-performance styling wands, ensures flawless results for both men and women. Whether it’s a sleek fade, vibrant balayage, or intricate updo, our skilled stylists use the latest technology to deliver unparalleled accuracy, comfort, and creativity. Step into our salon and experience the perfect blend of innovation and artistry, tailored to make your hair the ultimate expression of your style.
              </motion.p>

              <CommonBTNs btnTitle="LEARN MORE" />
            </div>
          </div>
          <div className="relative 2xl:w-[40%] xl:w-[40%] lg:w-[40%] md:portrait:w-full w-[95%] flex justify-center items-center">
            <div className="2xl:h-[60dvh] xl:h-[60dvh] lg:h-[60dvh] md:portrait:h-[50dvh] h-[50dvh] 2xl:w-[55dvh] xl:w-[55dvh]  lg:w-[55dvh] md:portrait:w-[40dvh] w-[45dvh] relative z-20">
              <Image fill src={ServiceImg2} alt="allinone.com" />
            </div>
            <div className="absolute top-[15%] -right-[15%] bg-[var(--mainColor)] w-[50%] h-[70%]" />
          </div>
        </div>
      </div>
    </div>
  );
};
