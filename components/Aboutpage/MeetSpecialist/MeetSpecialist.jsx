import React from "react";
import SpecialistImg1 from "../../../assets/Images/SpecialistImg1.png";
import SpecialistImg2 from "../../../assets/Images/SpecialistImg2.png";
import SpecialistImg3 from "../../../assets/Images/SpecialistImg3.png";
import SpecialistImg4 from "../../../assets/Images/SpecialistImg4.png";
import { CombePattern } from "../../../assets/AllSvgs/AllSvgs";

export const MeetSpecialist = () => {
  return (
    <div className="min-h-[100dvh] flex justify-center items-center py-16 relative">
      <div className="absolute left-[40%] bottom-[0%] opacity-40 scale-[.8]">
        <CombePattern />
      </div>
      <div className="w-[90%] flex flex-col gap-10 relative z-20">
        <div className="flex flex-col gap-2 w-[60%] mx-auto">
          <h3 className="text-[var(--mainColor)] text-[4dvw] font-[500] uppercase text-center">
            Meet our specialist
          </h3>
          <p className="text-[1.3dvw] font-[400] text-center uppercase">
            Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
            fringilla lacus nec metus bibendum egestas.{" "}
          </p>
        </div>

        <div className="grid grid-cols-4 gap-4 w-full">
          <div className="w-full">
            <div className="w-full h-[50dvh]">
              <img
                className="h-full w-full object-cover"
                src={SpecialistImg1}
                alt="allinone.com"
              />
            </div>
            <div className="w-full bg-[var(--secondaryColor)] p-4 flex flex-col gap-1 justify-center items-center">
              <h3 className="text-white text-[1.4dvw] uppercase">Mark Liuw</h3>
              <p className="text-[1.2dvw] text-white uppercase">
                Hair Specialist
              </p>
            </div>
          </div>

          <div className="w-full">
            <div className="w-full h-[50dvh]">
              <img
                className="h-full w-full object-cover"
                src={SpecialistImg2}
                alt="allinone.com"
              />
            </div>
            <div className="w-full bg-[var(--secondaryColor)] p-4 flex flex-col gap-1 justify-center items-center">
              <h3 className="text-white text-[1.4dvw] uppercase">
                Angela Kwang
              </h3>
              <p className="text-[1.2dvw] text-white uppercase">
                Skin Specialist
              </p>
            </div>
          </div>

          <div className="w-full">
            <div className="w-full h-[50dvh]">
              <img
                className="h-full w-full object-cover"
                src={SpecialistImg3}
                alt="allinone.com"
              />
            </div>
            <div className="w-full bg-[var(--secondaryColor)] p-4 flex flex-col gap-1 justify-center items-center">
              <h3 className="text-white text-[1.4dvw] uppercase">
                Donald j.Cuellar
              </h3>
              <p className="text-[1.2dvw] text-white uppercase">
                Hair Specialist
              </p>
            </div>
          </div>

          <div className="w-full">
            <div className="w-full h-[50dvh]">
              <img
                className="h-full w-full object-cover"
                src={SpecialistImg4}
                alt="allinone.com"
              />
            </div>
            <div className="w-full bg-[var(--secondaryColor)] p-4 flex flex-col gap-1 justify-center items-center">
              <h3 className="text-white text-[1.4dvw] uppercase">
                Scott k. henderson
              </h3>
              <p className="text-[1.2dvw] text-white uppercase">
                Hair Specialist
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
