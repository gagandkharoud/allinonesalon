"use client";
import { Aboutsection } from "@/components/Aboutpage/Aboutsec/Aboutsection";
import { Herosection } from "@/components/Aboutpage/Herosec/Herosection";
import { WhatWeDo } from "@/components/Aboutpage/WhatWeDo/WhatWeDo";
import { Footer } from "@/components/common/Footer/Footer";
import { Navbar } from "@/components/common/Navbar/Navbar";
import { OffcanvasMenu } from "@/components/common/OffcanvasMenu/OffcanvasMenu";
import React, { useState } from "react";

const Aboutpage = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <Navbar setShowMenu={setShowMenu} />
      <Herosection />
      <Aboutsection />
      <WhatWeDo />
      <Footer />

      {showMenu && <OffcanvasMenu setShowMenu={setShowMenu} />}
    </>
  );
};
export default Aboutpage;
