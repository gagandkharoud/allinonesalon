import React from "react";
import ServiceHeroImg from "../../../assets/Images/ServiceHeroImg.png";

import Image from "next/image";
import Link from "next/link";

export const Herosection = () => {
  return (
    <div className="h-[85dvh] bg-[var(--secondaryColor)] relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image fill
          className="w-full h-full object-cover brightness-75"
          alt="allinone.com"
          src={ServiceHeroImg}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[var(--secondaryColor)]/60" />
      </div>
      <div className="relative w-full h-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="2xl:text-[6dvw] xl:text-[6dvw] lg:text-[6dvw] md:portrait:text-[8dvw] text-[9dvw] text-[var(--mainColor)]">Our Services</h1>
          <p className="text-white flex justify-center items-center gap-4 font-[Montserrat] 2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] md:portrait:text-[2.2dvw] text-[3.5dvw] font-[500]">
            <Link
              href="/"
              className="hover:text-[var(--mainColor)] transition-all duration-200 ease-linear"
            >
              Home
            </Link>
            <span>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15.5L12.5 10.5L7.5 5.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>{" "}
            <span className="text-[var(--mainColor)]">Our Services</span>
          </p>
        </div>
      </div>
    </div>
  );
};
