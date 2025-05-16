"use client";
import { CircleX } from "lucide-react";
import React, { useEffect, useState } from "react";

import Cookies from "js-cookie";

import axios from "axios";
import { useRouter, redirect } from "next/navigation";

export const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    userName: "",
    password: "",
  });
  const router = useRouter();
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setLoginInfo({ ...loginInfo, [name]: value });
  };
  // {
  //   email: "surenderstellen@gmail.com",
  //   password: "12345678",
  // }
  const handleLogin = async () => {
    try {
      if (!loginInfo.userName || !loginInfo.password) return;
      const loginTest = await axios.post(
        "https://salonist.io/secureweb/login",
        {
          email: loginInfo.userName,
          password: loginInfo.password,
        }
      );
      console.log(loginTest, "loginTest");
      if (loginTest.status === 200) {
        Cookies.set("domainId", loginTest.data.domainId, {
          expires: 30, // 30 days
          domain: "allinonesalon.salonist.io", // Correct domain (no https://)
          sameSite: "None", // For cross-site compatibility
        });
        document.cookie = ''

        // redirect('https://allinonesalon.salonist.io/calendar')
        // window.location.href = "https://allinonesalon.salonist.io/calendar";
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="fixed top-0 z-50 p-0 w-full left-0 bg-black/50 backdrop-blur-md h-[100dvh] flex justify-center items-center ">
      <div className="w-[40dvw] min-h-[60dvh] rounded-md bg-[var(--whiteColor)] p-7">
        <div className="flex justify-between items-center w-[90%] mx-auto">
          <h3 className="text-[var(--mainColor)] text-[2.5dvw]">LogIn </h3>
          <button className="hover:text-[var(--mainColor)] transition-all duration-300 ease-linear cursor-pointer">
            <CircleX size={30} />
          </button>
        </div>

        <div className="flex justify-center items-center flex-col gap-4 mt-10 w-[90%] mx-auto">
          <div className="w-full flex flex-col gap-3">
            <label className="font-[Montserrat] font-[600] text-[1dvw] text-[#000]">
              Name/Email
            </label>
            <input
              type="text"
              onChange={handleOnChange}
              name="userName"
              value={loginInfo.userName}
              className="bg-[#fff]/80 border border-[#D5D7DA] w-full p-3 font-[Montserrat] font-[500] outline-none"
              placeholder="userName..."
            />
          </div>
          <div className="w-full flex flex-col gap-3">
            <label className="font-[Montserrat] font-[600] text-[1dvw] text-[#000]">
              Password
            </label>
            <input
              type="password"
              onChange={handleOnChange}
              name="password"
              value={loginInfo.password}
              className="bg-[#fff]/80 border border-[#D5D7DA] w-full p-3 font-[Montserrat] font-[500] outline-none"
              placeholder="password..."
            />
          </div>

          <button
            onClick={() => {
              //   Object.keys(cookiesData).forEach((key) => {
              //   });
              Cookies.set("CAKEPHP", "bvds9rfq4i9cvbe4f0pjtgjgf1", {
                expires: 30,
                domain: "https://allinonesalon.salonist.io",
              });
              Cookies.set("domainId", "21824", {
                expires: 30,
                domain: "https://allinonesalon.salonist.io",
              });
              Cookies.set(
                "intercom-device-id-qcdl9v8r",
                "ff9dbb57-90e0-48dc-9b20-858aef0ff9ac",
                {
                  expires: 30,
                  domain: "https://allinonesalon.salonist.io",
                }
              );
              Cookies.set(
                "intercom-session-qcdl9v8r",
                "YitsTW4zK3BFa0lVZkwvQTM2TDZsbllLSVlwb2E2RVltdWZzL3dDcGhxcm5QU0lqNmg3Tm4zQWRCS2JUL2ZQQUpyZGdvdjgxUUxBVGxMS1NEVm9tVmNraWdRRG50bFV1bk85cXRBbmVUeTQ9LS11SVVWZXpoNCtjNm1rNWRQcS91RGl3PT0=--6f1a572bb02098acc2d81f88886b9e7bccc88beb",
                {
                  expires: 30,
                  domain: "https://allinonesalon.salonist.io",
                }
              );
              Cookies.set("loginId", "3480489", {
                expires: 30,
                domain: "https://allinonesalon.salonist.io",
              });
              Cookies.set("password", "e19d5cd5af0378da05f63f891c7467af", {
                expires: 30,
                domain: "https://allinonesalon.salonist.io",
              });
              Cookies.set("username", "AllInOneSalon", {
                expires: 30,
                domain: "https://allinonesalon.salonist.io",
              });
              //   router("https://allinonesalon.salonist.io/calendar");
              handleLogin();
            }}
            className="bg-[var(--mainColor)] text-black px-8 py-2 text-[1.3dvw] font-[600] rounded-md cursor-pointer font-[Montserrat]"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};
