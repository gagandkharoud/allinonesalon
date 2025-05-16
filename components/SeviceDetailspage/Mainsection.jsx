import React, { useState } from "react";
import ServiceDetailsImg2 from "../../assets/Images/ServiceDetailsImg2.png";
import ServiceDetailsImg3 from "../../assets/Images/ServiceDetailsImg3.png";
import {
  ArrowIcon,
  DownloadBrochureIcon,
  DownloadPDFIcon,
  SmallBodyTreatmentIcon,
  SmallHairColorIcon,
  SmallHairCuttingIcon,
  SmallHairWashIcon,
  SmallShavingIcon,
  SmallSpaIcon,
} from "../../assets/AllSvgs/AllSvgs";
import { CommonBTNs } from "../common/BTN/CommonBTNs";
import { ServiceData } from "../../servicedata";
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

const accordionData = [
  {
    title: "What services does All in One Salon offer?",
    desc: `All in One Salon is your ultimate destination for comprehensive beauty care, offering a wide range of services to meet all your grooming needs. Our skilled team provides precision haircuts, vibrant hair coloring, and nourishing hair treatments, alongside professional barber services for classic and modern styles. Additionally, we offer luxurious nail care, including manicures, pedicures, and creative nail art, as well as rejuvenating skincare treatments like facials. Using premium products and the latest techniques, All in One Salon ensures every service delivers stunning, long-lasting results in a relaxing environment tailored to your preferences.`,
  },
  {
    title: "How can I book an appointment at All in One Salon?",
    desc: `Booking an appointment at All in One Salon is quick and convenient to fit your busy schedule. You can reserve your spot online through our website’s booking portal, where you’ll select your preferred service, stylist, and time. Alternatively, feel free to call our salon directly or visit us in person to schedule your appointment. Our friendly team is happy to assist in finding a time that works for you. At All in One Salon, we prioritize flexibility and exceptional customer service to ensure your visit is seamless from start to finish.`,
  },
  {
    title: "Are the products used at All in One Salon safe and high-quality?",
    desc: `At All in One Salon, we are committed to using only safe, high-quality products to ensure the best results for our clients. Our team carefully selects professional-grade hair, nail, and skincare products from trusted brands known for their effectiveness and safety. These products are designed to nourish and protect, delivering vibrant, long-lasting results without compromising your health. Whether it’s a hair color treatment, a manicure, or a facial, you can trust All in One Salon to prioritize quality and care in every service we provide.`,
  },
];

export const Mainsection = ({ pageTitle, img1, img2, img3, para1, para2 }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="min-h-[100dvh] py-16 bg-[var(--whiteColor)] relative flex justify-center items-center">
      <div className="relative w-[90%] flex justify-center  gap-5">
        <div className="flex-1 p-2 flex flex-col gap-5">
          <h2 className="2xl:text-[3dvw] xl:text-[3dvw] lg:text-[3dvw] md:portrait:text-[4dvw] text-[7dvw] text-[var(--mainColor)] uppercase">
            {pageTitle}
          </h2>
          <div className="flex flex-col gap-8 w-full">
            <p className="2xl:text-[1.1dvw] xl:text-[1.1dvw] lg:text-[1.1dvw] md:portrait:text-[2.1dvw] text-[3.5dvw] font-[400] uppercase">
              {para1}
            </p>
            <div className="w-full 2xl:h-[60dvh] xl:h-[60dvh] lg:h-[60dvh] md:portrait:h-[40dvh] h-[40dvh] relative">
              <Image
                fill
                src={img1}
                alt="allinone.com"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="2xl:text-[1.1dvw] xl:text-[1.1dvw] lg:text-[1.1dvw] md:portrait:text-[2.1dvw] text-[3.5dvw] font-[400] uppercase">
              {para2}
            </p>
            <div className="w-full 2xl:h-[60dvh] xl:h-[60dvh] lg:h-[60dvh] md:portrait:h-[40dvh] h-[40dvh] relative">
              <Image
                fill
                src={img2}
                alt="allinone.com"
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="2xl:text-[3dvw] xl:text-[3dvw] lg:text-[3dvw] md:portrait:text-[4dvw] text-[7dvw] text-[var(--mainColor)] uppercase">
              benefit our services
            </h2>
            <p className="2xl:text-[1.1dvw] xl:text-[1.1dvw] lg:text-[1.1dvw] md:portrait:text-[2.1dvw] text-[3.5dvw] font-[400] uppercase">
              We go beyond the basics to bring you a salon experience that’s
              clean, comfortable, and completely customized to you.
            </p>

            <div className="flex flex-col gap-4">
              {accordionData.map((item, index) => (
                <AccordionItem
                  key={index}
                  index={index}
                  title={item.title}
                  content={item.desc}
                  isOpen={openIndex === index}
                  onToggle={handleToggle}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 p-4 2xl:flex xl:flex lg:flex md:portrait:flex hidden flex-col gap-10">
          <div className="flex flex-col gap-5">
            {ServiceData.map((cur, id) => (
              <div
                key={id}
                className={`flex justify-start items-center gap-4 p-4 ${
                  pageTitle === cur.title ? "bg-[var(--mainColor)]" : "bg-white"
                } shadow border-none outline-none`}
              >
                <div className="scale-[.8]">{cur.icon}</div>
                <div className="flex justify-between items-center flex-1">
                  <h5
                    className={`uppercase text-[1.5dvw] ${
                      pageTitle === cur.title
                        ? "text-[#000]"
                        : "text-[var(--mainColor)]"
                    }`}
                  >
                    {cur.title}
                  </h5>
                  <CommonBTNs
                    bgColor={pageTitle === cur.title && "black"}
                    path={`/service-details/${cur.id}`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[var(--mainColor2)] w-full px-5 py-10">
            <div className="w-[90%] flex flex-col gap-4 mx-auto">
              <h3 className="text-[3dvw] text-white">Get In Touch</h3>

              <div className="w-[100%] mx-auto flex flex-col gap-5 justify-center ">
                <div className="flex justify-between items-center gap-4 w-full">
                  <div className="w-full flex flex-col gap-2">
                    <label className="font-[Montserrat] font-[600] text-[1dvw] text-[#fff]">
                      Your First Name
                    </label>
                    <input
                      type="text"
                      placeholder="First name"
                      className="bg-[#fff] border border-[#D5D7DA] w-full p-3 font-[Montserrat] font-[500] outline-none"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label className="font-[Montserrat] font-[600] text-[1dvw] text-[#fff]">
                      Last Name
                    </label>
                    <input
                      className="bg-[#fff] border border-[#D5D7DA] w-full p-3 font-[Montserrat] font-[500] outline-none"
                      type="text"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center gap-4 w-full">
                  <div className="w-full flex flex-col gap-2">
                    <label className="font-[Montserrat] font-[600] text-[1dvw] text-[#fff]">
                      Phone No
                    </label>
                    <input
                      type="text"
                      placeholder="Phone No"
                      className="bg-[#fff] border border-[#D5D7DA] w-full p-3 font-[Montserrat] font-[500] outline-none"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label className="font-[Montserrat] font-[600] text-[1dvw] text-[#fff]">
                      Select Category
                    </label>
                    <input
                      type="text"
                      placeholder="Select Category"
                      className="bg-[#fff] border border-[#D5D7DA] w-full p-3 font-[Montserrat] font-[500] outline-none"
                    />
                  </div>
                </div>

                <div className="w-full flex flex-col gap-2">
                  <label className="font-[Montserrat] font-[600] text-[1dvw] text-[#fff]">
                    Appointment Date & Time
                  </label>
                  <input
                    type="date"
                    placeholder="Appointment Date & Time"
                    className="bg-[#fff] border border-[#D5D7DA] w-full p-3 font-[Montserrat] font-[500] outline-none"
                  />
                </div>

                <div className="w-full flex flex-col gap-2">
                  <label className="font-[Montserrat] font-[600] text-[1dvw] text-[#fff]">
                    Special Instructions
                  </label>
                  <textarea
                    placeholder="Write here..."
                    rows={5}
                    className="bg-[#fff] border border-[#D5D7DA] w-full p-3 font-[Montserrat] font-[500] outline-none"
                  ></textarea>
                </div>

                <CommonBTNs btnTitle="Book An Appointment" bgColor="black" />
              </div>
            </div>
          </div>

          {/* <div className="bg-[var(--mainColor)] w-full p-5 flex flex-col gap-4">
            <div
              className={`flex justify-start items-center gap-4 px-4 py-8 bg-white
                 shadow border-none outline-none`}
            >
              <div className="scale-[.8]">
                <DownloadPDFIcon />
              </div>
              <div className="flex justify-between items-center flex-1">
                <h5
                  className={`uppercase text-[1.5dvw] text-[var(--mainColor)]`}
                >
                  Download PDF
                </h5>
              </div>
            </div>

            <div
              className={`flex justify-start items-center gap-4 px-4 py-8 bg-white
                 shadow border-none outline-none`}
            >
              <div className="scale-[.8]">
                <DownloadBrochureIcon />
              </div>
              <div className="flex justify-between items-center flex-1">
                <h5
                  className={`uppercase text-[1.5dvw] text-[var(--mainColor)]`}
                >
                  Download Brochure
                </h5>
              </div>
            </div>
          </div> */}

          <div className="w-full h-[50dvh] relative">
            <Image
              fill
              src={img3}
              alt="allinone.com"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const AccordionItem = ({ title, content, isOpen, index, onToggle }) => {
  return (
    <div
      style={{
        border: isOpen ? "1px solid #dea93a" : "1px solid transparent",
      }}
      className="bg-transparent customShadowCoreValue rounded-md"
    >
      <button
        style={{
          background: isOpen ? "#fff" : "#fff",
          color: isOpen ? "#fff" : "#0C0544",
        }}
        className="flex justify-between items-center w-full py-6 rounded-md px-6 text-left  focus:outline-none"
        onClick={() => onToggle(index)}
      >
        <h4
          style={{
            color: isOpen ? "#dea93a" : "#dea93a",
          }}
          className="font-[600] font-[Montserrat] 2xl:text-[1.4dvw] xl:text-[1.4dvw] lg:text-[1.4dvw] md:portrait:text-[1.4dvw] text-[3.5dvw] uppercase"
        >
          {title}
        </h4>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-linear ${
          isOpen ? "max-h-[95dvh]" : "max-h-0"
        }`}
      >
        <div className="p-6  bg-[#fff]">
          <p className="text-black font-[Montserrat] font-[400] 2xl:text-[1dvw] xl:text-[1dvw] lg:text-[1dvw] md:portrait:text-[1dvw] text-[3.5dvw] ">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};
