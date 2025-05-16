"use client";
import React, { useState } from "react";
import "./Contactsec.scss";
import {
  AboutsecPatternOne,
  CombePattern,
} from "../../../assets/AllSvgs/AllSvgs";

import ContactImg1 from "../../../assets/Images/ContactImg1.png";
import ContactImg2 from "../../../assets/Images/ContactGirlBarbarImg.jpg";
import { CommonBTNs } from "../../common/BTN/CommonBTNs";
import Image from "next/image";

export const Contactsec = () => {
  const [appointmentDetails, setAppointmentDetails] = useState({
    userName: "",
    email: "",
    phoneNumber: "",
    category: "",
    appointmentDate: "",
    instructions: "",
  });
  const handleOnChnage = (e) => {
    const { name, value } = e.target;
    setAppointmentDetails({ ...appointmentDetails, [name]: value });
  };
  return (
    <div className="min-h-[100dvh] py-16 relative bg-[var(--whiteColor)] flex justify-center items-center">
      <div className="h-full w-[90%]  relative z-20 flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:portrait:flex-col justify-between items-center gap-5">
        <div className="2xl:h-[100dvh] xl:h-[100dvh] lg:h-[100dvh] md:portrait:h-[20dvh] h-[80dvh] 2xl:w-[20dvw] xl:w-[20dvw] lg:w-[20dvw] md:portrait:w-full w-full relative">
          <Image
            fill
            loading="lazy"
            className="w-full h-full object-cover"
            src={ContactImg1}
            alt="allinone.com"
          />
        </div>

        <div className="h-full bg-[#FFE6B1] 2xl:w-[60%] xl:w-[60%] lg:w-[60%] md:portrait:w-full w-full flex justify-center items-center py-8">
          {/* <div className=" w-[80%] flex flex-col gap-5">
            <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:portrait:flex-row justify-between items-center gap-4 w-full">
              <div className="w-full flex flex-col gap-2">
                <label className="font-[Montserrat] font-[600] 2xl:text-[1dvw] xl:text-[1dvw] lg:text-[1dvw] md:portrait:text-[2dvw] text-[3dvw] text-[#414651]">
                  Your First Name
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  onChange={handleOnChnage}
                  name="userName"
                  value={appointmentDetails.userName}
                  className="bg-[#fff]/80 border border-[#D5D7DA] w-full p-3 font-[Montserrat] font-[500] outline-none"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label className="font-[Montserrat] font-[600] 2xl:text-[1dvw] xl:text-[1dvw] lg:text-[1dvw] md:portrait:text-[2dvw] text-[3dvw] text-[#414651]">
                  Email
                </label>
                <input
                  className="bg-[#fff]/80 border border-[#D5D7DA] w-full p-3 font-[Montserrat] font-[500] outline-none"
                  type="text"
                  placeholder="Email"
                  onChange={handleOnChnage}
                  value={appointmentDetails.email}
                  name="email"
                />
              </div>
            </div>

            <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:portrait:flex-row justify-between items-center gap-4 w-full">
              <div className="w-full flex flex-col gap-2">
                <label className="font-[Montserrat] font-[600] 2xl:text-[1dvw] xl:text-[1dvw] lg:text-[1dvw] md:portrait:text-[2dvw] text-[3dvw] text-[#414651]">
                  Phone No
                </label>
                <input
                  type="text"
                  placeholder="Phone No"
                  onChange={handleOnChnage}
                  value={appointmentDetails.phoneNumber}
                  name="phoneNumber"
                  className="bg-[#fff]/80 border border-[#D5D7DA] w-full p-3 font-[Montserrat] font-[500] outline-none"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label className="font-[Montserrat] font-[600] 2xl:text-[1dvw] xl:text-[1dvw] lg:text-[1dvw] md:portrait:text-[2dvw] text-[3dvw] text-[#414651]">
                  Select Category
                </label>
               
                <select
                  onChange={handleOnChnage}
                  value={appointmentDetails.category}
                  name="category"
                  className="bg-[#fff]/80 border border-[#D5D7DA] w-full p-3 font-[Montserrat] font-[500] outline-none"
                >
                  <option value={null}>Select Category</option>
                  <option value="Hair Color">Hair Color</option>
                  <option value="Hair Cutting">Hair Cutting</option>
                  <option value="Hair Wash">Hair wash</option>
                  <option value="Beauty & Spa">Beauty & Spa</option>
                  <option value="Body Treatments">Body Treatments</option>
                  <option value="Stylist Shaving">Stylist Shaving</option>
                </select>
              </div>
            </div>

            <div className="w-full flex flex-col gap-2">
              <label className="font-[Montserrat] font-[600] 2xl:text-[1dvw] xl:text-[1dvw] lg:text-[1dvw] md:portrait:text-[2dvw] text-[3dvw] text-[#414651]">
                Appointment Date & Time
              </label>
              <input
                type="date" onChange={handleOnChnage} value={appointmentDetails.appointmentDate} name="appointmentDate"
                placeholder="Appointment Date & Time"
                className="bg-[#fff]/80 border border-[#D5D7DA] w-full p-3 font-[Montserrat] font-[500] outline-none"
              />
            </div>

            <div className="w-full flex flex-col gap-2">
              <label className="font-[Montserrat] font-[600] 2xl:text-[1dvw] xl:text-[1dvw] lg:text-[1dvw] md:portrait:text-[2dvw] text-[3dvw] text-[#414651]">
                Special Instructions
              </label>
              <textarea onChange={handleOnChnage} name="instructions" value={appointmentDetails.instructions}
                placeholder="Write here..."
                rows={5}
                className="bg-[#fff]/80 border border-[#D5D7DA] w-full p-3 font-[Montserrat] font-[500] outline-none"
              ></textarea>
            </div>

            <CommonBTNs btnTitle="Book An Appointment" />
          </div> */}
          <div className="w-[80%] h-[70dvh]">
            <iframe className="w-full h-full"
              class="shrivraWidget"
              src="https://allinonesalon.salonist.io/booking"
              // style="width: 100%; max-width: 991px; height: 500px; border: 1px solid rgb(128, 128, 128);"
            ></iframe>
          </div>
        </div>

        <div className="2xl:h-[100dvh] xl:h-[100dvh] lg:h-[100dvh] md:portrait:h-[20dvh] h-[80dvh] 2xl:w-[20dvw] xl:w-[20dvw] lg:w-[20dvw] md:portrait:w-full w-full relative">
          <Image
            fill
            loading="lazy"
            className="w-full h-full object-cover"
            src={ContactImg2}
            alt="allinone.com"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0">
        <AboutsecPatternOne />
      </div>
      <div className="absolute right-[1%] bottom-[10%]">
        <CombePattern />
      </div>
    </div>
  );
};
