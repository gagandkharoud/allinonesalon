import React from "react";
import Logo from "@/assets/Images/LogoWhite.png";

import FooterImg1 from "@/assets/Images/FooterImg1.png";
// import FooterImg2 from "@/assets/Images/BlogImg3.png";
// import FooterImg3 from "@/assets/Images/BlogImg4.png";
import FooterImg2 from "../../../assets/Images/SpaBeautyImg.jpg";
import FooterImg3 from "../../../assets/Images/HairCuttingGGImg.jpg";

import { CommonBTNs } from "../BTN/CommonBTNs";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-[var(--secondaryColor)]">
      <div className="border-b border-[#505050] flex justify-center items-center py-5">
        <div className="w-[90%] flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:portrait:flex-row justify-between items-center">
          <div className="2xl:w-[16dvw] relative xl:w-[16dvw] lg:w-[16dvw] md:portrait:w-[23dvw] w-[45dvw] 2xl:h-[6dvw] xl:h-[6dvw] lg:h-[6dvw] md:portrait:h-[8dvw] h-[18dvw] mb-5 2xl:mb-0 xl:mb-0 lg:mb-0 md:portrait:mb-0">
            <Link href="/" className="w-full">
              <Image fill src={Logo} alt="allinone.com" />
            </Link>
          </div>
          <div className="bg-white p-2 flex justify-center items-center gap-2 2xl:w-[40%] xl:w-[40%] lg:w-[40%] md:portrait:w-[60%]">
            <input
              placeholder="Enter your Email"
              className="flex-1 p-2.5 border-none outline-none font-[Montserrat] font-[600] 2xl:text-[1dvw] xl:text-[1dvw] lg:text-[1dvw] md:portrait:text-[1.8dvw] text-[3dvw]"
            />
            <div className="shink-0">
              <CommonBTNs btnTitle="Subscribe Now" path="/" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-5">
        <div className="w-[90%] grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:portrait:grid-cols-2 gap-4">
          <div className=" w-full p-2">
            <h3 className="2xl:text-[1.3dvw] xl:text-[1.3dvw] lg:text-[1.3dvw] md:portrait:text-[2.3dvw] font-[500] text-white">
              Quick Links
            </h3>
            <div className="my-3">
              <ul className="flex flex-col gap-2.5">
                <Link
                  href="/about"
                  className="font-[Montserrat] 2xl:text-[1.1dvw] xl:text-[1.1dvw] lg:text-[1.1dvw] md:portrait:text-[2.1dvw] font-[400] text-white hover:text-[var(--mainColor)] hover:scale-[1.05] transition-all duration-200 ease-linear"
                >
                  . About Us
                </Link>
                <Link
                  href="/services"
                  className="font-[Montserrat] 2xl:text-[1.1dvw] xl:text-[1.1dvw] lg:text-[1.1dvw] md:portrait:text-[2.1dvw] font-[400] text-white hover:text-[var(--mainColor)] hover:scale-[1.05] transition-all duration-200 ease-linear"
                >
                  . Our Services
                </Link>

                <Link
                  href="/news-and-articles"
                  className="font-[Montserrat] 2xl:text-[1.1dvw] xl:text-[1.1dvw] lg:text-[1.1dvw] md:portrait:text-[2.1dvw] font-[400] text-white hover:text-[var(--mainColor)] hover:scale-[1.05] transition-all duration-200 ease-linear"
                >
                  . Our News & Articles
                </Link>
                <Link
                  href="/contact-us"
                  className="font-[Montserrat] 2xl:text-[1.1dvw] xl:text-[1.1dvw] lg:text-[1.1dvw] md:portrait:text-[2.1dvw] font-[400] text-white hover:text-[var(--mainColor)] hover:scale-[1.05] transition-all duration-200 ease-linear"
                >
                  . Contact Us
                </Link>
              </ul>
            </div>
          </div>
          <div className=" w-full p-2">
            <h3 className="2xl:text-[1.3dvw] xl:text-[1.3dvw] lg:text-[1.3dvw] md:portrait:text-[2.3dvw] font-[500] text-white">
              Our Services
            </h3>
            <div className="my-3">
              <ul className="flex flex-col gap-2.5">
                <Link
                  href={`/service-details/1`}
                  className="font-[Montserrat] 2xl:text-[1.1dvw] xl:text-[1.1dvw] lg:text-[1.1dvw] md:portrait:text-[2.1dvw] font-[400] text-white hover:text-[var(--mainColor)] hover:scale-[1.05] transition-all duration-200 ease-linear"
                >
                  . Hair Cutting Style
                </Link>
                <Link
                  href={`/service-details/2`}
                  className="font-[Montserrat] 2xl:text-[1.1dvw] xl:text-[1.1dvw] lg:text-[1.1dvw] md:portrait:text-[2.1dvw] font-[400] text-white hover:text-[var(--mainColor)] hover:scale-[1.05] transition-all duration-200 ease-linear"
                >
                  . Hair Washing
                </Link>
                <Link
                  href={`/service-details/3`}
                  className="font-[Montserrat] 2xl:text-[1.1dvw] xl:text-[1.1dvw] lg:text-[1.1dvw] md:portrait:text-[2.1dvw] font-[400] text-white hover:text-[var(--mainColor)] hover:scale-[1.05] transition-all duration-200 ease-linear"
                >
                  . Body Treatments
                </Link>
                <Link
                  href={`/service-details/4`}
                  className="font-[Montserrat] 2xl:text-[1.1dvw] xl:text-[1.1dvw] lg:text-[1.1dvw] md:portrait:text-[2.1dvw] font-[400] text-white hover:text-[var(--mainColor)] hover:scale-[1.05] transition-all duration-200 ease-linear"
                >
                  . Beauty & Spa
                </Link>
                <Link
                  href={`/service-details/5`}
                  className="font-[Montserrat] 2xl:text-[1.1dvw] xl:text-[1.1dvw] lg:text-[1.1dvw] md:portrait:text-[2.1dvw] font-[400] text-white hover:text-[var(--mainColor)] hover:scale-[1.05] transition-all duration-200 ease-linear"
                >
                  . Stylist Shaving
                </Link>
                <Link
                  href={`/service-details/6`}
                  className="font-[Montserrat] 2xl:text-[1.1dvw] xl:text-[1.1dvw] lg:text-[1.1dvw] md:portrait:text-[2.1dvw] font-[400] text-white hover:text-[var(--mainColor)] hover:scale-[1.05] transition-all duration-200 ease-linear"
                >
                  . Multi Hair Colors
                </Link>
              </ul>
            </div>
          </div>
          <div className="w-full">
            <h3 className="2xl:text-[1.3dvw] xl:text-[1.3dvw] lg:text-[1.3dvw] md:portrait:text-[2.3dvw] font-[500] text-white">
              News & Articels
            </h3>

            <div className="flex flex-col gap-4 my-4 w-full">
              <div className="flex justify-center items-center gap-3 w-full">
                <div className="2xl:h-[5dvw] relative xl:h-[5dvw] lg:h-[5dvw] md:portrait:h-[7dvw] h-[20dvw] w-[25dvw] 2xl:w-[9dvw] xl:w-[9dvw] lg:w-[9dvw] md:portrait:w-[11dvw] shink-0">
                  <Image
                    fill
                    className="h-full w-full object-cover"
                    src={FooterImg1}
                    alt="allinone.com"
                  />
                </div>
                <div>
                  <h5 className="text-white 2xl:text-[.9dvw] xl:text-[.9dvw] lg:text-[.9dvw] md:portrait:text-[1.9dvw]">
                    The Ultimate Guide to Healthy, Vibrant Hair
                  </h5>
                </div>
              </div>
              <div className="flex justify-center items-center gap-3 w-full">
                <div className="2xl:h-[5dvw] relative xl:h-[5dvw] lg:h-[5dvw] md:portrait:h-[7dvw] h-[20dvw] w-[25dvw] 2xl:w-[9dvw] xl:w-[9dvw] lg:w-[9dvw] md:portrait:w-[11dvw] shink-0">
                  <Image
                    fill
                    className="h-full w-full object-cover"
                    src={FooterImg2}
                    alt="allinone.com"
                  />
                </div>
                <div>
                  <h5 className="text-white 2xl:text-[.9dvw] xl:text-[.9dvw] lg:text-[.9dvw] md:portrait:text-[1.9dvw]">
                    Why Regular Salon Visits Are Key to Your Beauty Routine"
                  </h5>
                </div>
              </div>
              <div className="flex justify-center items-center gap-3 w-full">
                <div className="2xl:h-[5dvw] relative xl:h-[5dvw] lg:h-[5dvw] md:portrait:h-[7dvw] h-[20dvw] w-[25dvw] 2xl:w-[9dvw] xl:w-[9dvw] lg:w-[9dvw] md:portrait:w-[11dvw] shink-0">
                  <Image
                    fill
                    className="h-full w-full object-cover"
                    src={FooterImg3}
                    alt="allinone.com"
                  />
                </div>
                <div>
                  <h5 className="text-white 2xl:text-[.9dvw] xl:text-[.9dvw] lg:text-[.9dvw] md:portrait:text-[1.9dvw]">
                    Transform Your Look: Top Hair Trends to Try This Season
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className=" w-full p-2">
            <h3 className="2xl:text-[1.3dvw] xl:text-[1.3dvw] lg:text-[1.3dvw] md:portrait:text-[2.3dvw] font-[500] text-white">
              Contact Us
            </h3>
            <div className="my-3">
              <ul className="flex flex-col gap-5">
                <Link
                  href="https://maps.app.goo.gl/9ttFkGDuMuchHr7r8"
                  target="_blank"
                  className="font-[Montserrat] 2xl:text-[1.1dvw] xl:text-[1.1dvw] lg:text-[1.1dvw] md:portrait:text-[2.1dvw] font-[400] text-white flex items-center gap-2"
                >
                  <span>
                    <svg
                      width="18"
                      height="24"
                      viewBox="0 0 18 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 11.25C10.5508 11.25 11.8125 9.98831 11.8125 8.4375C11.8125 6.88669 10.5508 5.625 9 5.625C7.44919 5.625 6.1875 6.88669 6.1875 8.4375C6.1875 9.98831 7.44919 11.25 9 11.25ZM9 7.5C9.51694 7.5 9.9375 7.92056 9.9375 8.4375C9.9375 8.95444 9.51694 9.375 9 9.375C8.48306 9.375 8.0625 8.95444 8.0625 8.4375C8.0625 7.92056 8.48306 7.5 9 7.5Z"
                        fill="#FFB624"
                      />
                      <path
                        d="M17.4375 8.4375C17.4375 3.78506 13.6524 0 9 0C4.34756 0 0.5625 3.78506 0.5625 8.4375C0.5625 10.278 1.14478 12.0272 2.24644 13.496L6.74916 19.4991C7.27805 20.2041 8.1195 20.625 9 20.625C9.8805 20.625 10.722 20.2041 11.2509 19.499L15.7536 13.496C16.8552 12.0272 17.4375 10.278 17.4375 8.4375ZM14.2536 12.3709L9.75098 18.3739C9.57164 18.6129 9.29794 18.75 9 18.75C8.70206 18.75 8.42836 18.6129 8.24906 18.374L3.74639 12.3709C2.89013 11.2293 2.4375 9.86911 2.4375 8.4375C2.4375 4.81894 5.38144 1.875 9 1.875C12.6186 1.875 15.5625 4.81894 15.5625 8.4375C15.5625 9.86911 15.1099 11.2293 14.2536 12.3709Z"
                        fill="#FFB624"
                      />
                      <path
                        d="M13.6875 23.0625C13.6875 22.5447 13.2678 22.125 12.75 22.125H5.25C4.73222 22.125 4.3125 22.5447 4.3125 23.0625C4.3125 23.5803 4.73222 24 5.25 24H12.75C13.2678 24 13.6875 23.5803 13.6875 23.0625Z"
                        fill="#FFB624"
                      />
                    </svg>
                  </span>
                  18522 Pioneer Blvd, Artesia, CA 90701
                </Link>
                <Link
                  href="tel:+1 (562)888-0000"
                  className="font-[Montserrat] 2xl:text-[1.1dvw] xl:text-[1.1dvw] lg:text-[1.1dvw] md:portrait:text-[2.1dvw] font-[400] text-white flex items-center gap-2"
                >
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_125_3968)">
                        <path
                          d="M6.23926 17.7603C9.59293 21.114 13.382 23.367 16.6351 23.9417C16.853 23.9806 17.0739 24.0003 17.2952 24.0006C18.2316 24.0006 19.1005 23.6378 19.7911 22.9471L22.0979 20.6404C22.4152 20.3224 22.5933 19.8916 22.5933 19.4425C22.5933 18.9934 22.4152 18.5626 22.0979 18.2446L17.9537 14.1005C17.6358 13.7832 17.205 13.605 16.7558 13.605C16.3067 13.605 15.8759 13.7832 15.558 14.1005L13.4649 16.1935C11.4834 14.7578 9.24179 12.5161 7.80606 10.5347L9.89912 8.44162C10.2164 8.12371 10.3946 7.69291 10.3946 7.24376C10.3946 6.79461 10.2164 6.36381 9.89912 6.04589L5.75495 1.90172C5.43704 1.58446 5.00624 1.40628 4.55711 1.40628C4.10797 1.40628 3.67718 1.58446 3.35926 1.90172L1.05245 4.20848C0.201762 5.05912 -0.151441 6.18 0.0578559 7.36458C0.632403 10.6176 2.88559 14.4067 6.23926 17.7603ZM2.11309 5.26912L4.4199 2.9625C4.45651 2.92655 4.50577 2.90641 4.55708 2.90641C4.60839 2.90641 4.65765 2.92655 4.69426 2.9625L8.83843 7.10667C8.87416 7.14342 8.89414 7.19265 8.89414 7.2439C8.89414 7.29515 8.87416 7.34438 8.83843 7.38113L6.63531 9.58425C6.41465 9.80389 6.27923 10.0948 6.25322 10.4051C6.22721 10.7153 6.31231 11.0247 6.49332 11.278C8.06584 13.4891 10.5105 15.9338 12.7216 17.5062C12.9749 17.6873 13.2843 17.7724 13.5946 17.7465C13.9048 17.7205 14.1958 17.585 14.4154 17.3643L16.6186 15.1612C16.6552 15.1252 16.7045 15.1051 16.7558 15.1051C16.8071 15.1051 16.8564 15.1252 16.8931 15.1612L21.0372 19.3054C21.0732 19.3421 21.0933 19.3913 21.0933 19.4426C21.0933 19.4939 21.0732 19.5432 21.0372 19.5798L18.7304 21.8866C18.2288 22.3882 17.5942 22.588 16.8959 22.4647C13.9824 21.9499 10.395 19.7948 7.2999 16.6997C4.20479 13.6046 2.04972 10.0172 1.53498 7.10363C1.41156 6.40514 1.61148 5.77073 2.11309 5.26912ZM23.9996 9.93844C23.9996 10.1374 23.9206 10.3281 23.7799 10.4688C23.6393 10.6094 23.4485 10.6884 23.2496 10.6884C23.0507 10.6884 22.8599 10.6094 22.7193 10.4688C22.5786 10.3281 22.4996 10.1374 22.4996 9.93844C22.4996 5.28544 18.7141 1.5 14.0612 1.5C13.8622 1.5 13.6715 1.42098 13.5308 1.28033C13.3902 1.13968 13.3112 0.948912 13.3112 0.75C13.3112 0.551088 13.3902 0.360322 13.5308 0.21967C13.6715 0.0790176 13.8622 0 14.0612 0C19.5413 0 23.9996 4.45838 23.9996 9.93844ZM14.0612 5.80205C13.8622 5.80205 13.6715 5.72303 13.5308 5.58238C13.3902 5.44172 13.3112 5.25096 13.3112 5.05205C13.3112 4.85313 13.3902 4.66237 13.5308 4.52172C13.6715 4.38106 13.8622 4.30205 14.0612 4.30205C15.5555 4.30373 16.9882 4.89811 18.0448 5.95477C19.1015 7.01143 19.6959 8.44409 19.6975 9.93844C19.6975 10.1374 19.6185 10.3281 19.4779 10.4688C19.3372 10.6094 19.1465 10.6884 18.9475 10.6884C18.7486 10.6884 18.5579 10.6094 18.4172 10.4688C18.2766 10.3281 18.1975 10.1374 18.1975 9.93844C18.1963 8.84178 17.7601 7.79038 16.9847 7.01492C16.2092 6.23947 15.1578 5.80328 14.0612 5.80205ZM12.4754 8.59509C12.4754 8.39618 12.5544 8.20542 12.695 8.06476C12.8357 7.92411 13.0265 7.84509 13.2254 7.84509C14.0309 7.846 14.8033 8.16642 15.3729 8.73605C15.9425 9.30568 16.263 10.078 16.2639 10.8836C16.2639 11.0825 16.1848 11.2733 16.0442 11.4139C15.9035 11.5546 15.7128 11.6336 15.5139 11.6336C15.3149 11.6336 15.1242 11.5546 14.9835 11.4139C14.8429 11.2733 14.7639 11.0825 14.7639 10.8836C14.7634 10.4757 14.6012 10.0846 14.3127 9.79621C14.0243 9.50779 13.6333 9.34555 13.2254 9.34509C13.0265 9.34509 12.8357 9.26608 12.695 9.12542C12.5544 8.98477 12.4754 8.79401 12.4754 8.59509Z"
                          fill="#FFB624"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_125_3968">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  +1 (562)888-0000
                </Link>
                <li className="font-[Montserrat] 2xl:text-[1.1dvw] xl:text-[1.1dvw] lg:text-[1.1dvw] md:portrait:text-[2.1dvw] font-[400] text-white flex items-center gap-2">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_125_3972)">
                        <path
                          d="M16.2756 14.1179L12.9294 11.6082V6.49594C12.9294 5.98191 12.5139 5.56641 11.9998 5.56641C11.4858 5.56641 11.0703 5.98191 11.0703 6.49594V12.073C11.0703 12.3658 11.2079 12.6419 11.4421 12.8167L15.1602 15.6052C15.3275 15.7307 15.5227 15.7911 15.7169 15.7911C16.0004 15.7911 16.2793 15.6638 16.4615 15.4184C16.7702 15.0084 16.6865 14.4256 16.2756 14.1179Z"
                          fill="#FFB624"
                        />
                        <path
                          d="M12 0C5.3828 0 0 5.3828 0 12C0 18.6172 5.3828 24 12 24C18.6172 24 24 18.6172 24 12C24 5.3828 18.6172 0 12 0ZM12 22.141C6.40898 22.141 1.85902 17.591 1.85902 12C1.85902 6.40898 6.40898 1.85902 12 1.85902C17.592 1.85902 22.141 6.40898 22.141 12C22.141 17.591 17.591 22.141 12 22.141Z"
                          fill="#FFB624"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_125_3972">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Mon - Sun, 9:00 am - 9:00 pm
                </li>
                <Link
                  href="mailto:contact@allinonesalon.us"
                  className="font-[Montserrat] 2xl:text-[1.1dvw] xl:text-[1.1dvw] lg:text-[1.1dvw] md:portrait:text-[2.1dvw] font-[400] text-white flex items-center gap-2"
                >
                  <span>
                    <svg
                      width="24"
                      height="18"
                      viewBox="0 0 24 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.8906 0.5625H2.10938C0.943922 0.5625 0 1.51228 0 2.67188V15.3281C0 16.4946 0.950859 17.4375 2.10938 17.4375H21.8906C23.0463 17.4375 24 16.4986 24 15.3281V2.67188C24 1.51434 23.0598 0.5625 21.8906 0.5625ZM21.5952 1.96875C21.1642 2.39742 13.7476 9.77499 13.4916 10.0297C13.0931 10.4281 12.5634 10.6475 12 10.6475C11.4366 10.6475 10.9069 10.4281 10.5071 10.0284C10.3349 9.85706 3.00014 2.56097 2.40478 1.96875H21.5952ZM1.40625 15.0419V2.95898L7.48303 9.00375L1.40625 15.0419ZM2.40567 16.0312L8.48006 9.99548L9.51408 11.0241C10.1781 11.6881 11.061 12.0538 12 12.0538C12.939 12.0538 13.8219 11.6881 14.4846 11.0254L15.5199 9.99548L21.5943 16.0312H2.40567ZM22.5938 15.0419L16.517 9.00375L22.5938 2.95898V15.0419Z"
                        fill="#FFB624"
                      />
                    </svg>
                  </span>
                  contact@allinonesalon.us
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFB624] py-5 flex justify-center items-center">
        <p className="2xl:text-[1dvw] xl:text-[1dvw] lg:text-[1dvw]  md:portrait:text-[2.2dvw] text-[3dvw] text-center  font-[600]">
          Copyright 2025 All In One Salon. All Rights Reserved. Developed and Designed by
          Kyptronix LLP
        </p>
      </div>
    </footer>
  );
};
