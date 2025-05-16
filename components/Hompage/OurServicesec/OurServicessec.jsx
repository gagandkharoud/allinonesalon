import React from "react";
import "./OurServicessec.scss";
import { motion } from "framer-motion";
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
import { useRouter } from "next/navigation";


const serviceData = [
  {
    icon: <HairCuttingIcon />,
    heading: `Hair Cutting Style`,
    description: `At All In One Salon, we believe that a great haircut is more than just a routine—it’s a transformation. Our expert stylists blend tradition with precision to create haircuts that reflect your personality, suit your lifestyle, and enhance your natural features.`,
  },
  {
    icon: <HairWashIcon />,
    heading: `Hair Washing`,
    description: `At All In One Salon, hair washing is more than just a step in your beauty routine—it’s an experience of pure relaxation and care. Our professional hair washing services are designed to cleanse, nourish, and prepare your hair for styling, leaving you feeling refreshed from root to tip.`,
  },
  {
    icon: <BodyTreatmemtIcon />,
    heading: `Body Treatments`,
    description: `At All In One Salon, our body treatments are designed to go beyond skin deep—offering relaxation, detoxification, and a total sense of renewal. Whether you’re looking to smooth your skin, ease muscle tension, or simply indulge in self-care, our tailored treatments provide the ultimate pampering experience.`,
  },
  {
    icon: <SpaIcon />,
    heading: `Beauty & Spa`,
    description: `Whether you’re preparing for a special event, indulging in self-care, or seeking total rejuvenation, our beauty and spa services are customized to meet your desires. Let our experienced team guide you through treatments designed to uplift, restore, and beautify.`,
  },
  {
    icon: <ShavingIcon />,
    heading: `Stylist Shaving`,
    description: `At All In One Salon, shaving is elevated from a daily task to an art form. Our Stylist Shaving services blend classic barbering traditions with modern precision, delivering a grooming experience that’s both luxurious and refreshing. Whether you prefer a clean shave or detailed beard sculpting, our skilled stylists ensure every stroke is smooth, every line is sharp, and every client leaves with confidence.`,
  },
  {
    icon: <HairColorIncon />,
    heading: `Multi hair colors`,
    description: `At All In One Salon, we believe your hair is a canvas—and color is the art. Our Multi Hair Coloring services are designed to bring out your unique style through bold contrasts, soft blends, or vibrant highlights. Whether you dream of a subtle balayage, striking ombré, or a full spectrum of fantasy colors, our expert colorists have the skill and creativity to make it happen.`,
  },
];

export const OurServicessec = ({ animateMainWrapper }) => {
  const router = useRouter();
  return (
    <motion.div
      style={{
        scale: animateMainWrapper,
      }}
      transition={{
        duration: 2.9,
        ease: "linear",
        power: 8,
        mass: 8,
        damping: 20,
        type: "tween",
      }}
      className="2xl:min-h-[100dvh] xl:min-h-[100dvh] lg:min-h-[100dvh] md:portrait:min-h-[80dvh] py-16 flex justify-center bg-[var(--whiteColor)] items-center relative overflow-hidden py-16"
    >
      <div className="absolute bottom-0 left-0">
        <AboutsecPatternOne />
      </div>
      <div className="absolute right-[1%] bottom-[10%]">
        <CombePattern />
      </div>

      <div className="relative 2xl:w-[90%] xl:w-[90%] lg:w-[90%] md:portrait:w-[90%] w-[95%] flex flex-col justify-center items-center gap-10  z-20 p-5 ">
        <div className="flex flex-1 justify-center items-center">
          <div className="2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:portrait:w-full">
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
              className="text-center text-[var(--mainColor)] 2xl:text-[4dvw] xl:text-[4dvw] lg:text-[4dvw] md:portrait:text-[6dvw] text-[9dvw] 2xl:leading-[5dvw] xl:leading-[5dvw] lg:leading-[5dvw] md:portrait:leading-[7dvw]"
            >
              Our Services{" "}
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
              className="text-center 2xl:text-[1.3dvw] xl:text-[1.3dvw] lg:text-[1.3dvw] md:portrait:text-[2.3dvw] text-[3.7dvw]"
            >
              At All in One Salon, we offer a comprehensive range of premium
              salon services designed to cater to all your beauty needs under
              one roof. From expertly crafted haircuts, vibrant coloring, and
              luxurious styling to rejuvenating facials, flawless manicures, and
              relaxing spa treatments, our skilled professionals are dedicated
              to enhancing your natural beauty.
            </motion.p>
          </div>
        </div>
        <div className="flex-1  grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:portrait:grid-cols-2 gap-4 w-full">
          {serviceData.map((cur, id) => (
            <div
              key={id}
              className="min-h-[25dvw] 2xl:max-h-[35dvw] xl:max-h-[35dvw] lg:max-h-[35dvw] md:portrait:max-h-[45dvw] bg-white p-6 w-full flex justify-center items-center relative ourService__hoverEffect"
            >
              <div className="flex justify-center flex-col items-center gap-6 relative z-20">
                <div className="flex flex-col justify-center items-center gap-5">
                  {cur.icon}
                  <h4 className="font-[Montserrat] font-[600] 2xl:text-[1.5dvw] xl:text-[1.5dvw] lg:text-[1.5dvw] md:portrait:text-[2.5dvw] uppercase">
                    {cur.heading}
                  </h4>
                </div>
                <div className="flex flex-col justify-center items-center gap-5">
                  <p className="uppercase 2xl:text-[1dvw] xl:text-[1dvw] lg:text-[1dvw] md:portrait:text-[2dvw] text-center line-clamp-3 2xl:leading-[2dvw] xl:leading-[2dvw] lg:leading-[2dvw] md:portrait:leading-[3dvw]">
                    {cur.description}
                  </p>
                  <button
                    onClick={() => router.push(`/service-details/${id + 1}`)}
                    className="bg-[var(--mainColor)] px-5 py-3 cursor-pointer viewMoreBTN transition-all duration-300 ease-linear"
                  >
                    <ArrowIcon />
                  </button>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 z-10 ">
                <OurServiceBoxPattern />
              </div>
              <div className="absolute bottom-[15%] right-0 z-10 ">
                <WavePatternBordered />
                <WavePatternColored />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
