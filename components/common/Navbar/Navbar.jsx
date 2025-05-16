'use client'
import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";
// import {
//   FacebookIcon,
//   InstagramIcon,
//   MenuIcon,
//   TwitterIcon,
//   YoutubeIcon,
// } from "../../../assets/AllSvgs/AllSvgs";

import YellowLogo from "@/assets/Images/LogoWhite.png";

import Image from "next/image";
import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  MenuIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/assets/AllSvgs/AllSvgs";

export const Navbar = ({ animateNavOpacity, setShowMenu }) => {
  const [scrollPositionY, setScrollPositionY] = useState(0);

  const handleScrollPosition = () => {
    setScrollPositionY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPosition);
  }, []);

  return (
    <>
      <motion.nav
        style={{
          opacity: animateNavOpacity,
          backdropFilter: scrollPositionY >= 5 ? "blur(5px)" : "transparent",
          background: scrollPositionY >= 5 ? "rgba(0,0,0,.25)" : "transparent",
        }}
        transition={{
          duration: 2.9,
          ease: "linear",
          power: 8,
          mass: 8,
          damping: 20,
          type: "tween",
        }}
        className="w-full bg-transparent flex justify-center items-center fixed top-0 z-50"
      >
        <div
          className={`${
            scrollPositionY >= 5 ? "w-full" : "w-[95%]"
          } transition-all duration-300 ease-linear`}
        >
          <div className="flex justify-between items-center border-b border-[var(--border-color)] px-4 py-1.5">
            <div>
              <p
                className={`2xl:text-[1.3dvw] xl:text-[1.3dvw] lg:text-[1.3dvw] md:portrait:text-[2.3dvw] text-[4dvw] font-[500] text-white ${
                  scrollPositionY >= 5 ? "scale-[.8]" : "scale-[1]"
                }`}
              >
                Mon - Sun, 9:00 am - 9:00 pm
              </p>
            </div>
            <div className="2xl:flex xl:flex lg:flex md:portrait:flex hidden justify-center items-center gap-9 ">
              <div className="flex justify-center items-center gap-6 border-r border-[var(--border-color)] px-5">
                <button
                  className={`cursor-pointer ${
                    scrollPositionY >= 5 ? "scale-[.8]" : "scale-[1]"
                  } transition-all duration-300 ease-linear`}
                >
                  <FacebookIcon />
                </button>
                <button
                  className={`cursor-pointer ${
                    scrollPositionY >= 5 ? "scale-[.8]" : "scale-[1]"
                  } transition-all duration-300 ease-linear`}
                >
                  <TwitterIcon />
                </button>
                <button
                  className={`cursor-pointer ${
                    scrollPositionY >= 5 ? "scale-[.8]" : "scale-[1]"
                  } transition-all duration-300 ease-linear`}
                >
                  <InstagramIcon />
                </button>
                <button
                  className={`cursor-pointer ${
                    scrollPositionY >= 5 ? "scale-[.8]" : "scale-[1]"
                  } transition-all duration-300 ease-linear`}
                >
                  <YoutubeIcon />
                </button>
              </div>
              <button className="px-5 py-2 text-[var(--mainColor)] font-[600] font-[Montserrat] cursor-pointer">
                Book Now
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center px-4 py-1.5">
            <Link
              href="/"
              className={`2xl:w-[13dvw] xl:w-[13dvw] lg:w-[13dvw] md:portrait:w-[20dvw] w-[40dvw] 2xl:h-[5dvw] xl:h-[5dvw] lg:h-[5dvw] md:portrait:h-[7dvw] h-[13dvw] ${
                scrollPositionY >= 5 ? "scale-[.8]" : "scale-[1]"
              } transition-all duration-300 ease-linear relative`}
            >
              <Image
                fill
                className="w-full h-full object-cover"
                alt="allinone.com"
                src={YellowLogo}
              />
            </Link>
            <button
              onClick={() => setShowMenu(true)}
              className={`cursor-pointer ${
                scrollPositionY >= 5 ? "scale-[.8]" : "scale-[1]"
              } transition-all duration-300 ease-linear`}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </motion.nav>
    </>
  );
};
