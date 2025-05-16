import React from "react";
import "./Blogsec.scss";
import {
  AboutsecPatternOne,
  BlogBgPatternOne,
  CalendarIcon,
  CombePattern,
  CommentIcon,
} from "../../../assets/AllSvgs/AllSvgs";

import BlogImg1 from "../../../assets/Images/BlogImg1.png";
import BlogImg2 from "../../../assets/Images/BlogImg2.png";
import BlogImg3 from "../../../assets/Images/SpaBeautyImg.jpg";
import BlogImg4 from "../../../assets/Images/HairCuttingGGImg.jpg";
import { motion } from "framer-motion";
import Image from "next/image";

export const Blogsec = () => {
  return (
    <>
      <div className="min-h-[100dvh] relative bg-[var(--whiteColor)] flex justify-center items-center py-16">
        <div className="relative z-20 w-[90%] flex flex-col justify-center items-center gap-8">
          <div className="flex w-full justify-center items-center">
            <div className="2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:portrait:w-full flex gap-2 justify-center items-center flex-col">
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
                className="2xl:text-[4dvw] xl:text-[4dvw] lg:text-[4dvw] md:portrait:text-[6dvw] text-[8dvw] uppercase text-[var(--mainColor)] 2xl:leading-[5dvw] xl:leading-[5dvw] lg:leading-[5dvw] md:portrait:leading-[6dvw]"
              >
                News & Articles
              </motion.h3>
              <div className="2xl:w-[55%] xl:w-[55%] lg:w-[55%] md:portrait:w-[85%]">
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
                  className="uppercase 2xl:text-[1.3dvw] xl:text-[1.3dvw] lg:text-[1.3dvw] md:portrait:text-[2.3dvw] text-[3dvw] text-center"
                >
                  Loved by locals, trusted by trendsetters.Hear what our clients
                  have to say.
                </motion.p>
              </div>
            </div>
          </div>
          <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:portrait:flex-col justify-center items-center min-h-[63dvh] gap-6 2xl:px-8 xl:px-8 lg:px-8 md:portrait:px-8 px-3 2xl:w-[90%] xl:w-[90%] lg:w-[90%] md:portrait:w-full w-full">
            <div className="flex-1 h-full flex flex-col gap-4 bg-[var(--whiteColor2)] relative">
              <div className=" relative w-full h-[35dvh]">
                <Image fill src={BlogImg1} alt="allinone.com" className="w-full h-full object-cover" />
                sdfasdf
                <div className="h-full w-[.3dvw] absolute top-0 left-0 bg-[var(--mainColor)]" />
              </div>
              <div className="flex-1 px-6 py-3 flex flex-col justify-center items-start gap-2">
                <div className="flex justify-start items-center gap-4">
                  <h4 className="text-[#505050] font-[Montserrat] font-[600] 2xl:text-[1dvw] xl:text-[1dvw] lg:text-[1dvw] md:portrait:text-[2dvw] text-[2.4dvw] flex justify-center items-center gap-3">
                    <CalendarIcon />
                    April 12, 2025
                  </h4>
                  <h4 className="text-[#505050] font-[Montserrat] font-[600] 2xl:text-[1dvw] xl:text-[1dvw] lg:text-[1dvw] md:portrait:text-[2dvw] text-[2.4dvw] flex justify-center items-center gap-3">
                    <CommentIcon /> 0 Comments
                  </h4>
                </div>
                <h5 className="3xl:text-[1.4dvw] xl:text-[1.4dvw] lg:text-[1.4dvw] md:portrait:text-[2.4dvw] text-[4.5dvw] my-3">
                  From textured layers to bold bangs—discover what’s hot and how
                  to make it...
                </h5>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-6 h-full w-full">
              <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row w-full h-full justify-start items-center gap-4 bg-white relative">
                <div className="2xl:w-[20dvw] xl:w-[20dvw] lg:w-[20dvw] md:portrait:w-[20dvw] w-full 2xl:h-full xl:h-full lg:h-full md:portrait:h-full h-auto relative">
                  <Image fill
                    src={BlogImg2}
                    className="w-full h-full object-cover"
                    alt="allinone.com"
                  />
                </div>
                <div className="flex flex-col gap-2.5 p-2">
                  <div className="flex justify-start items-center gap-4 mt-2">
                    <h4 className="text-[#505050] font-[Montserrat] font-[600] 2xl:text-[.9dvw] xl:text-[.9dvw] lg:text-[.9dvw] md:portrait:text-[1.9dvw] text-[2dvw] flex justify-center items-center gap-3">
                      <CalendarIcon />
                      April 12, 2025
                    </h4>
                    <h4 className="text-[#505050] font-[Montserrat] font-[600] 2xl:text-[.9dvw] xl:text-[.9dvw] lg:text-[.9dvw] md:portrait:text-[1.9dvw] text-[2dvw] flex justify-center items-center gap-3">
                      <CommentIcon /> 0 Comments
                    </h4>
                  </div>
                  <h5 className="2xl:text-[1.1dvw] xl:text-[1.1dvw] lg:text-[1.1dvw] md:portrait:text-[2dvw] text-[3dvw] my-3">
                    It’s more than just hair. Learn how the right cut can
                    boost...
                  </h5>
                </div>
                <div className="h-full w-[.3dvw] absolute top-0 left-0 bg-[var(--mainColor)]" />
              </div>
              <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row w-full h-full justify-start items-center gap-4 bg-white relative">
                <div className="2xl:w-[20dvw] xl:w-[20dvw] lg:w-[20dvw] md:portrait:w-[20dvw] w-full 2xl:h-full xl:h-full lg:h-full md:portrait:h-full h-auto relative">
                  <Image fill
                    src={BlogImg3}
                    className="w-full h-full object-cover"
                    alt="allinone.com"
                  />
                </div>
                <div className="flex flex-col gap-2.5 p-2">
                  <div className="flex justify-start items-center gap-4">
                    <h4 className="text-[#505050] font-[Montserrat] font-[600] 2xl:text-[.9dvw] xl:text-[.9dvw] lg:text-[.9dvw] md:portrait:text-[1.9dvw] text-[2dvw] flex justify-center items-center gap-3">
                      <CalendarIcon />
                      April 12, 2025
                    </h4>
                    <h4 className="text-[#505050] font-[Montserrat] font-[600] 2xl:text-[.9dvw] xl:text-[.9dvw] lg:text-[.9dvw] md:portrait:text-[1.9dvw] text-[2dvw] flex justify-center items-center gap-3">
                      <CommentIcon /> 0 Comments
                    </h4>
                  </div>
                  <h5 className="2xl:text-[1.1dvw] xl:text-[1.1dvw] lg:text-[1.1dvw] md:portrait:text-[2dvw] my-3">
                  Why Regular Salon Visits Are Key to Your Beauty Routine
                  </h5>
                </div>
                <div className="h-full w-[.3dvw] absolute top-0 left-0 bg-[var(--mainColor)]" />
              </div>
              <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row w-full h-full justify-start items-center gap-4 bg-white relative">
                <div className="2xl:w-[20dvw] xl:w-[20dvw] lg:w-[20dvw] md:portrait:w-[20dvw] w-full 2xl:h-full xl:h-full lg:h-full md:portrait:h-full h-auto relative">
                  <Image fill
                    src={BlogImg4}
                    className="w-full h-full object-cover"
                    alt="allinone.com"
                  />
                </div>
                <div className="flex flex-col gap-2.5 p-2">
                  <div className="flex justify-start items-center gap-4">
                    <h4 className="text-[#505050] font-[Montserrat] font-[600] 2xl:text-[.9dvw] xl:text-[.9dvw] lg:text-[.9dvw] md:portrait:text-[1.9dvw] text-[2dvw] flex justify-center items-center gap-3">
                      <CalendarIcon />
                      April 12, 2025
                    </h4>
                    <h4 className="text-[#505050] font-[Montserrat] font-[600] 2xl:text-[.9dvw] xl:text-[.9dvw] lg:text-[.9dvw] md:portrait:text-[1.9dvw] text-[2dvw] flex justify-center items-center gap-3">
                      <CommentIcon /> 0 Comments
                    </h4>
                  </div>
                  <h5 className="2xl:text-[1.1dvw] xl:text-[1.1dvw] lg:text-[1.1dvw] md:portrait:text-[2dvw] my-3">
                  Transform Your Look: Top Hair Trends to Try This Season
                  </h5>
                </div>

                <div className="h-full w-[.3dvw] absolute top-0 left-0 bg-[var(--mainColor)]" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0">
          <BlogBgPatternOne />
        </div>
        <div className="absolute -bottom-[4dvw] scale-[.6] -left-[4dvw]">
          <AboutsecPatternOne />
        </div>
        <div className="absolute right-[1%] bottom-[10%]">
          <CombePattern />
        </div>
      </div>
    </>
  );
};
