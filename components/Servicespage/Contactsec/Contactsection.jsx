import React from "react";
import { CommonBTNs } from "../../common/BTN/CommonBTNs";
import "./Contactsec.scss";
import {
  AboutsecPatternOne,
  CombePattern,
} from "../../../assets/AllSvgs/AllSvgs";

export const Contactsection = () => {
  return (
    <div className="min-h-[100dvh] bg-[var(--whiteColor)] relative flex justify-center items-center py-16">
      <div className="absolute bottom-0 left-0">
        <AboutsecPatternOne />
      </div>
      <div className="absolute right-[1%] bottom-[10%] ">
        <CombePattern />
      </div>
      <div className="w-[90%]  flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:portrait:flex-col justify-center items-center relative z-20 gap-6">
        <div className="flex-1 w-full flex justify-center items-center">
          <div className="bg-[var(--secondaryColor)] 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:portrait:w-[60%] w-[95%] px-6 py-12 relative flex justify-center items-center WH__hoverEffect">
            <div className="absolute top-0 left-0 h-[1.5dvh] w-full bg-[var(--mainColor)] overlayWrapper transition-all duration-300 ease-linear" />
            <div className="relative flex flex-col gap-4">
              <h3 className="text-[var(--whiteColor2)] 2xl:text-[2.5dvw] xl:text-[2.5dvw] lg:text-[2.5dvw] md:portrait:text-[5dvw] text-[7.5dvw] uppercase">
                Working Hours
              </h3>
              

              <ul className="w-full flex flex-col gap-3">
                <li className="w-full flex justify-between items-center text-[var(--whiteColor2)] 2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] md:portrait:text-[2.3dvw] text-[4dvw] font-[600] uppercase">
                  <span>Monday</span>
                  <span>09.00 am - 9.00 pm</span>
                </li>
                <li className="w-full flex justify-between items-center text-[var(--whiteColor2)] 2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] md:portrait:text-[2.3dvw] text-[4dvw] font-[600] uppercase">
                  <span>Tuesday</span>
                  <span>09.00 am - 9.00 pm</span>
                </li>
                <li className="w-full flex justify-between items-center text-[var(--whiteColor2)] 2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] md:portrait:text-[2.3dvw] text-[4dvw] font-[600] uppercase">
                  <span>Wednesday</span>
                  <span>09.00 am - 9.00 pm</span>
                </li>
                <li className="w-full flex justify-between items-center text-[var(--whiteColor2)] 2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] md:portrait:text-[2.3dvw] text-[4dvw] font-[600] uppercase">
                  <span>Thursday</span>
                  <span>09.00 am - 9.00 pm</span>
                </li>
                <li className="w-full flex justify-between items-center text-[var(--whiteColor2)] 2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] md:portrait:text-[2.3dvw] text-[4dvw] font-[600] uppercase">
                  <span>Friday</span>
                  <span>09.00 am - 9.00 pm</span>
                </li>
                <li className="w-full flex justify-between items-center text-[var(--whiteColor2)] 2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] md:portrait:text-[2.3dvw] text-[4dvw] font-[600] uppercase">
                  <span>Saturday</span>
                  <span>09.00 am - 9.00 pm</span>
                </li>
                <li className="w-full flex justify-between items-center text-[var(--whiteColor2)] 2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] md:portrait:text-[2.3dvw] text-[4dvw] font-[600] uppercase">
                  <span>Sunday</span>
                  <span>09.00 am - 9.00 pm</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full flex justify-center items-center">
          <div className="bg-[var(--mainColor)] px-6 py-12 flex flex-col justify-center items-center gap-6">
            <div className="2xl:w-[85%] xl:w-[85%] lg:w-[85%] md:portrait:w-[95%] w-[95%] mx-auto">
              <h3 className="2xl:text-[3dvw] xl:text-[3dvw] lg:text-[3dvw] md:portrait:text-[4dvw] text-[8dvw] text-white uppercase text-center">
                CONTACT US
              </h3>
              <p className="2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] md:portrait:text-[2.2dvw] text-[3.5dvw] text-white uppercase text-center">
                Loved by locals, trusted by trendsetters.Hear what our clients
                have to say.
              </p>
            </div>

            <div className="2xl:w-[90%] xl:w-[90%] lg:w-[90%] md:portrait:w-[90%] w-[95%] flex flex-col gap-4">
              <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:portrait:flex-row justify-between items-center gap-4 w-full">
                <div className="w-full flex flex-col gap-2">
                  <label className="font-[Montserrat] font-[600] 2xl:text-[1dvw] xl:text-[1dvw] lg:text-[1dvw] md:portrait:text-[1.5dvw] text-[3dvw] text-[#000]">
                    Your First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First name"
                    className="bg-[#fff]/80 border border-[#D5D7DA] w-full p-3 font-[Montserrat] font-[500] outline-none"
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label className="font-[Montserrat] font-[600] 2xl:text-[1dvw] xl:text-[1dvw] lg:text-[1dvw] md:portrait:text-[1.5dvw] text-[3 text-[#000]">
                    Last Name
                  </label>
                  <input
                    className="bg-[#fff]/80 border border-[#D5D7DA] w-full p-3 font-[Montserrat] font-[500] outline-none"
                    type="text"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:portrait:flex-row justify-between items-center gap-4 w-full">
                <div className="w-full flex flex-col gap-2">
                  <label className="font-[Montserrat] font-[600] 2xl:text-[1dvw] xl:text-[1dvw] lg:text-[1dvw] md:portrait:text-[1.5dvw] text-[3 text-[#000]">
                    Phone No
                  </label>
                  <input
                    type="text"
                    placeholder="Phone No"
                    className="bg-[#fff]/80 border border-[#D5D7DA] w-full p-3 font-[Montserrat] font-[500] outline-none"
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label className="font-[Montserrat] font-[600] 2xl:text-[1dvw] xl:text-[1dvw] lg:text-[1dvw] md:portrait:text-[1.5dvw] text-[3 text-[#000]">
                    Select Category
                  </label>
                  <input
                    type="text"
                    placeholder="Select Category"
                    className="bg-[#fff]/80 border border-[#D5D7DA] w-full p-3 font-[Montserrat] font-[500] outline-none"
                  />
                </div>
              </div>

              <div className="w-full flex flex-col gap-2">
                <label className="font-[Montserrat] font-[600] 2xl:text-[1dvw] xl:text-[1dvw] lg:text-[1dvw] md:portrait:text-[1.5dvw] text-[3 text-[#000]">
                  Appointment Date & Time
                </label>
                <input
                  type="date"
                  placeholder="Appointment Date & Time"
                  className="bg-[#fff]/80 border border-[#D5D7DA] w-full p-3 font-[Montserrat] font-[500] outline-none"
                />
              </div>

              <div className="w-full flex flex-col gap-2">
                <label className="font-[Montserrat] font-[600] 2xl:text-[1dvw] xl:text-[1dvw] lg:text-[1dvw] md:portrait:text-[1.5dvw] text-[3 text-[#000]">
                  Special Instructions
                </label>
                <textarea
                  placeholder="Write here..."
                  rows={5}
                  className="bg-[#fff]/80 border border-[#D5D7DA] w-full p-3 font-[Montserrat] font-[500] outline-none"
                ></textarea>
              </div>

              <CommonBTNs btnTitle="Book An Appointment" bgColor="black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
