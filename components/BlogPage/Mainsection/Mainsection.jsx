import React, { useState } from "react";
import BlogImg6 from "@/assets/Images/BlogImg6.png";
import BlogImg7 from "@/assets/Images/BlogImg7.png";
import BlogImg5 from "@/assets/Images/Blogimg5.png";

import {
  ArrowIcon,
  CalendarIcon,
  DownloadBrochureIcon,
  DownloadPDFIcon,
  SmallBodyTreatmentIcon,
  SmallHairColorIcon,
  SmallHairCuttingIcon,
  SmallHairWashIcon,
  SmallShavingIcon,
  SmallSpaIcon,
} from "@/assets/AllSvgs/AllSvgs";

import { CommonBTNs } from "@/components/common/BTN/CommonBTNs";
import { ServiceData } from "@/servicedata";
import Image from "next/image";
const dataArr = [
  {
    icon: <SmallHairCuttingIcon />,
    title: "hair cutting sTyle",
    path: "/",
  },
  {
    icon: <SmallHairWashIcon />,
    title: "hair Washing",
    path: "/",
  },
  {
    icon: <SmallBodyTreatmentIcon />,
    title: "Body Treatments",
    path: "/",
  },
  {
    icon: <SmallSpaIcon />,
    title: "Beauty & Spa",
    path: "/",
  },
  {
    icon: <SmallShavingIcon />,
    title: "Stylist Shaving",
    path: "/",
  },
  {
    icon: <SmallHairColorIcon />,
    title: "Multi Hair Color",
    path: "/",
  },
];

export const Mainsection = () => {
  return (
    <div className="min-h-[100dvh] py-16 bg-[var(--whiteColor)] relative flex justify-center items-center">
      <div className="relative w-[90%] flex justify-center   gap-5">
        <div className="2xl:flex-1 xl:flex-1 lg:flex-1 md:portrait:w-[80%] p-2 flex flex-col gap-5">
          <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-4">
              <div className="w-full relative 2xl:h-[60dvh] xl:h-[60dvh] lg:h-[60dvh] md:portrait:h-[40dvh] h-[40dvh]">
                <Image
                  fill
                  src={BlogImg5}
                  alt="allinone.com"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="2xl:text-[2.5dvw] xl:text-[2.5dvw] lg:text-[2.5dvw] md:portrait:text-[4.5dvw] text-[6dvw] text-black uppercase">
                we’re Best barbers & hair cutting salon
              </h2>
              <p className="2xl:text-[1.1dvw] xl:text-[1.1dvw] lg:text-[1.1dvw] md:portrait:text-[2.1dvw] text-[3.5dvw] font-[400] uppercase">
                At All in One Salon, we pride ourselves on being the best
                barbers and hair cutting salon in town, delivering precision
                cuts and timeless styles that elevate your look. Our skilled
                barbers combine expertise with the latest trends to create
                personalized hairstyles that suit your unique personality and
                lifestyle. From classic fades to modern undercuts, we use
                top-quality tools and techniques to ensure every visit leaves
                you feeling confident and refreshed. Step into our welcoming
                space, where exceptional service and a passion for hair
                craftsmanship make us the go-to destination for your grooming
                needs.
              </p>

              <CommonBTNs btnTitle={"Read More"} />
            </div>

            <div className="flex flex-col gap-4">
              <div className="w-full relative 2xl:h-[60dvh] xl:h-[60dvh] lg:h-[60dvh] md:portrait:h-[40dvh] h-[40dvh]">
                <Image
                  fill
                  src={BlogImg6}
                  alt="allinone.com"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="2xl:text-[2.5dvw] xl:text-[2.5dvw] lg:text-[2.5dvw] md:portrait:text-[4.5dvw] text-[6dvw]  text-black uppercase">
                Discover Your Signature Style at All in One Salon
              </h2>
              <p className="2xl:text-[1.1dvw] xl:text-[1.1dvw] lg:text-[1.1dvw] md:portrait:text-[2.1dvw] text-[3.5dvw] font-[400] uppercase">
                At All in One Salon, we believe everyone deserves a look that
                feels uniquely theirs. Our expert stylists and barbers are
                dedicated to crafting personalized haircuts, vibrant colors, and
                stunning styles that reflect your individuality. Whether you’re
                after a sleek, professional cut, a bold new hue, or a complete
                makeover, our team uses top-tier products and cutting-edge
                techniques to ensure you leave feeling confident and refreshed.
                Step into All in One Salon, where creativity meets precision,
                and let us help you discover your signature style today.
              </p>
              <CommonBTNs btnTitle={"Read More"} />
            </div>

            <div className="flex flex-col gap-4">
              <div className="w-full 2xl:h-[60dvh] xl:h-[60dvh] lg:h-[60dvh] md:portrait:h-[40dvh] h-[40dvh] relative">
                <Image
                  fill
                  src={BlogImg7}
                  alt="allinone.com"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="2xl:text-[2.5dvw] xl:text-[2.5dvw] lg:text-[2.5dvw] md:portrait:text-[4.5dvw] text-[6dvw]  text-black uppercase">
                Why All in One Salon is Your Go-To for Complete Beauty Care
              </h2>
              <p className="2xl:text-[1.1dvw] xl:text-[1.1dvw] lg:text-[1.1dvw] md:portrait:text-[2.1dvw] text-[3.5dvw] font-[400] uppercase">
                All in One Salon is more than just a salon—it’s your one-stop
                destination for all things beauty. From precision haircuts and
                luxurious hair treatments to flawless nail art and rejuvenating
                skincare services, our talented team delivers exceptional
                results tailored to your needs. At All in One Salon, we combine
                a welcoming atmosphere with professional expertise to make every
                visit a pampering experience. Trust us to enhance your natural
                beauty with our comprehensive services, and walk out feeling
                like the best version of yourself.
              </p>
              <CommonBTNs btnTitle={"Read More"} />
            </div>
          </div>
        </div>
        <div className="flex-1 p-4 2xl:flex xl:flex lg:flex md:portrait:hidden hidden flex-col gap-10 sticky top-0">
          <div className="flex flex-col gap-5">
            {ServiceData.map((cur, id) => (
              <div
                key={id}
                className={`flex justify-start items-center gap-4 p-4 ${
                  id === 0 ? "bg-[var(--mainColor)]" : "bg-white"
                } shadow border-none outline-none`}
              >
                <div className="scale-[.8]">{cur.icon}</div>
                <div className="flex justify-between items-center flex-1">
                  <h5
                    className={`uppercase text-[1.5dvw] ${
                      id === 0 ? "text-[#000]" : "text-[var(--mainColor)]"
                    }`}
                  >
                    {cur.title}
                  </h5>
                  <CommonBTNs
                    bgColor={id === 0 && "black"}
                    path={`/service-details/${cur.id}`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[var(--whiteColor2)] w-full p-5 flex flex-col gap-4">
            <h3 className="text-[2.5dvw] text-[var(--mainColor2)] uppercase">
              Recent News
            </h3>
            <div className="flex flex-col gap-4">
              {[BlogImg5, BlogImg6, BlogImg7].map((cur, id) => (
                <div
                  key={id}
                  className="bg-[#505050]/20 p-3 flex justify-center items-center gap-4"
                >
                  <div className="w-[7dvw] h-[8dvw] shrink-0 relative">
                    <Image
                      fill
                      className="w-full h-full object-cover"
                      alt="allinone.com"
                      src={cur}
                    />
                  </div>
                  <div>
                    <div className="flex justify-start items-center gap-4 my-3">
                      <CalendarIcon />
                      <p className="text-[1dvw] font-[600] text-[#505050] uppercase">
                        April 12, 2025
                      </p>
                    </div>
                    <h5 className="text-[1.2dvw]">
                      It’s more than just hair. Learn how the right cut can
                      boost...
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[var(--whiteColor2)]  w-full p-5 flex flex-col gap-4">
            <h3 className="text-[2.5dvw] text-[var(--mainColor2)] uppercase">
              Product Tag
            </h3>
            <div className="flex flex-wrap gap-4">
              {[
                "Salon",
                "Beauty",
                "Treatments",
                "Massage",
                "Hair",
                "Shaving",
              ].map((cur, id) => (
                <button
                  key={id}
                  className="bg-[var(--whiteColor)]/60 shrink-0 text-[1.2dvw] font-[400] px-6 cursor-pointer hover:bg-[var(--mainColor)] transition-all duration-200 ease-linear py-1.5 uppercase"
                >
                  {cur}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
