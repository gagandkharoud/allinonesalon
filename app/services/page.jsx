"use client";
import { Footer } from "@/components/common/Footer/Footer";
import { Navbar } from "@/components/common/Navbar/Navbar";
import { OffcanvasMenu } from "@/components/common/OffcanvasMenu/OffcanvasMenu";
import { Blogsec } from "@/components/Hompage/Blogsec/Blogsec";
import { Contactsection } from "@/components/Servicespage/Contactsec/Contactsection";
import { Experiencesection } from "@/components/Servicespage/Experiencesec/Experiencesection";
import { Herosection } from "@/components/Servicespage/Herosec/Herosection";
import { Services } from "@/components/Servicespage/Services/Services";
import { useEffect, useState } from "react";

const ServicePage = () => {
    const [showMenu, setShowMenu] = useState(false);
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, []);
  return (
    <>
      <Navbar setShowMenu={setShowMenu} />
      <Herosection />
      <Experiencesection />
      <Services />
      <Contactsection />
      <Blogsec />      
      <Footer />
      {showMenu && <OffcanvasMenu setShowMenu={setShowMenu} />}
    </>
  );
};

export default ServicePage;
