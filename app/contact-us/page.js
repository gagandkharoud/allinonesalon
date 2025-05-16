"use client";
import React, { useEffect, useState } from "react";
import { Footer } from "@/components/common/Footer/Footer";
import { InnerPageHerosection } from "@/components/common/InnerPageHerosec/InnerPageHerosection";
import { Navbar } from "@/components/common/Navbar/Navbar";
import ContactHeroImg from "@/assets/Images/ContactImg3.png";
import { CommonBTNs } from "@/components/common/BTN/CommonBTNs";
import { EmailIcon, LocationIcon, PhoneIcon } from "@/assets/AllSvgs/AllSvgs";
import Link from "next/link";
import { OffcanvasMenu } from "@/components/common/OffcanvasMenu/OffcanvasMenu";

const Contactus = () => {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return (
    <>
      <Navbar setShowMenu={setShowMenu} />
      <InnerPageHerosection
        pageSubTitle="Contact Us"
        pageTitle="Contact"
        bgImage={ContactHeroImg}
      />
      <div className="min-h-[100dvh] bg-[var(--whiteColor)] py-16 relative flex justify-center items-center">
        <div className="w-[90%] relative flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:portrait:flex-col justify-center  gap-6">
          <div className="flex-1 p-2">
            <div className="flex flex-col gap-4 p-5">
              <h2 className="text-[var(--mainColor2)] 2xl:text-[3.5dvw] xl:text-[3.5dvw] lg:text-[3.5dvw] md:portrait:text-[4.5dvw] text-[8dvw] uppercase">
                Contact Us
              </h2>
              <p className="uppercase 2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] md:portrait:text-[2.1dvw] text-[3.5dvw] ">
                Ready to transform your look? Reach out to All in one salon
                today! Our friendly team is here to answer your questions, book
                your appointment, or help you plan your next style.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="bg-[#505050]/20 p-4 flex flex-col gap-3 rounded-md">
                <div className="flex justify-start items-center gap-3">
                  <LocationIcon />
                  <h4 className="2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] md:portrait:text-[3.2dvw] text-[4.2dvw] font-[700] text-black uppercase">
                    ADDRESS
                  </h4>
                </div>
                <Link
                  href="https://maps.app.goo.gl/9ttFkGDuMuchHr7r8"
                  target="_blank"
                  className="2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] md:portrait:text-[2.2dvw] text-[3.5dvw] font-[400] font-[Montserrat] mx-4"
                >
                  18522 Pioneer Blvd, Artesia, CA 90701
                </Link>
              </div>
              <div className="bg-[#505050]/20 p-4 flex flex-col gap-3 rounded-md">
                <div className="flex justify-start items-center gap-3 ">
                  <EmailIcon />
                  <h4 className="2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] md:portrait:text-[3.2dvw] text-[4.2dvw]  font-[700] text-black uppercase">
                    EMAIL US
                  </h4>
                </div>
                <Link
                  href="mailto:contact@allinonesalon.us"
                  className="2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] md:portrait:text-[2.2dvw] text-[3.5dvw] font-[400] font-[Montserrat] mx-4"
                >
                  contact@allinonesalon.us
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  className="2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] md:portrait:text-[2.2dvw] text-[3.5dvw] font-[400] font-[Montserrat] mx-4"
                >
                  www.allinonesalon.us
                </Link>
              </div>
              <div className="bg-[#505050]/20 flex flex-col gap-3 p-4 rounded-md">
                <div className="flex justify-start items-center gap-3">
                  <PhoneIcon />
                  <h4 className="2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] md:portrait:text-[3.2dvw] text-[4.2dvw]  font-[700] text-black uppercase">
                    PHONE
                  </h4>
                </div>
                <Link
                  href="tel:+1 (562)888-0000"
                  className="2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] md:portrait:text-[2.2dvw] text-[3.5dvw] font-[400] font-[Montserrat] mx-4"
                >
                  +1 (562)888-0000
                </Link>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-[var(--mainColor)] px-6 py-12 flex flex-col justify-center items-center gap-6">
              <div className="2xl:w-[85%] xl:w-[85%] lg:w-[85%] md:portrait:w-[85%] w-[95%] mx-auto">
                <h3 className="2xl:text-[3dvw] xl:text-[3dvw] lg:text-[3dvw] md:portrait:text-[4.5dvw] text-[7dvw] text-white uppercase text-center">
                  Send Us Message
                </h3>
                <p className="2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] md:portrait:text-[2.1dvw] text-[3.5dvw] text-white uppercase text-center">
                  Loved by locals, trusted by trendsetters.Hear what our clients
                  have to say.
                </p>
              </div>

              <div className="w-[90%] flex flex-col gap-4">
                <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:portrait:flex-row justify-between items-center gap-4 w-full">
                  <div className="w-full flex flex-col gap-2">
                    <label className="font-[Montserrat] font-[600] 2xl:text-[1dvw] xl:text-[1dvw] lg:text-[1dvw] md:portrait:text-[1.7dvw] text-[3dvw] text-[#000]">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Full name"
                      className="bg-[#fff]/80 border border-[#D5D7DA] w-full p-3 font-[Montserrat] font-[500] outline-none"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label className="font-[Montserrat] font-[600] 2xl:text-[1dvw] xl:text-[1dvw] lg:text-[1dvw] md:portrait:text-[1.7dvw] text-[3dvw] text-[#000]">
                      Email Address
                    </label>
                    <input
                      className="bg-[#fff]/80 border border-[#D5D7DA] w-full p-3 font-[Montserrat] font-[500] outline-none"
                      type="text"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:portrait:flex-row justify-between items-center gap-4 w-full">
                  <div className="w-full flex flex-col gap-2">
                    <label className="font-[Montserrat] font-[600] 2xl:text-[1dvw] xl:text-[1dvw] lg:text-[1dvw] md:portrait:text-[1.7dvw] text-[3dvw] text-[#000]">
                      Phone No
                    </label>
                    <input
                      type="text"
                      placeholder="Phone No"
                      className="bg-[#fff]/80 border border-[#D5D7DA] w-full p-3 font-[Montserrat] font-[500] outline-none"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label className="font-[Montserrat] font-[600] 2xl:text-[1dvw] xl:text-[1dvw] lg:text-[1dvw] md:portrait:text-[1.7dvw] text-[3dvw] text-[#000]">
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
                  <label className="font-[Montserrat] font-[600] 2xl:text-[1dvw] xl:text-[1dvw] lg:text-[1dvw] md:portrait:text-[1.7dvw] text-[3dvw] text-[#000]">
                    Special Instructions
                  </label>
                  <textarea
                    placeholder="Write here..."
                    rows={5}
                    className="bg-[#fff]/80 border border-[#D5D7DA] w-full p-3 font-[Montserrat] font-[500] outline-none"
                  ></textarea>
                </div>

                <CommonBTNs btnTitle="Appointment Now" bgColor="black" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[70dvh] mt-20 relative flex justify-center items-center">
        <div className="w-[90%] h-full mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.0270750963673!2d-118.0818412!3d33.8631931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd2d0994960543%3A0x6272063d1f6ecd34!2s18522%20Pioneer%20Blvd%2C%20Artesia%2C%20CA%2090701%2C%20USA!5e0!3m2!1sen!2sin!4v1747382487121!5m2!1sen!2sin"
            className="w-full h-full"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <Footer />
      {showMenu && <OffcanvasMenu setShowMenu={setShowMenu} />}
    </>
  );
};

export default Contactus;
