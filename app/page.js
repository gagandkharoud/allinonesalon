"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import { Navbar } from "@/components/common/Navbar/Navbar";
import { Footer } from "@/components/common/Footer/Footer";
import { HeroSection } from "@/components/Hompage/Herosec/HeroSection";
import { Aboutsection } from "@/components/Hompage/Aboutsec/Aboutsection";
import { ExperienceDifference } from "@/components/Hompage/ExperienceDifference/ExperienceDifference";
import { OurServicessec } from "@/components/Hompage/OurServicesec/OurServicessec";
import { Combinesec } from "@/components/Hompage/Combinesec/Combinesec";
import { Blogsec } from "@/components/Hompage/Blogsec/Blogsec";
import { Contactsec } from "@/components/Hompage/Contactsec/Contactsec";
import { OffcanvasMenu } from "@/components/common/OffcanvasMenu/OffcanvasMenu";
import { Login } from "@/components/common/Login/Login";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <HeroSection setShowMenu={setShowMenu} />
      <Aboutsection />
      <ExperienceDifference />
      <OurServicessec />
      <Combinesec />
      <Blogsec />
      <Contactsec />
      <Footer />



      {showMenu && <OffcanvasMenu setShowMenu={setShowMenu} />}
      {/* <Login /> */}
    </>
  );
}
