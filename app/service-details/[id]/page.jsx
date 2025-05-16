"use client";
import { Footer } from "@/components/common/Footer/Footer";
import { InnerPageHerosection } from "@/components/common/InnerPageHerosec/InnerPageHerosection";
import { Navbar } from "@/components/common/Navbar/Navbar";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ServiceDetailsImg1 from "@/assets/Images/ServiceDetailsImg1.png";
import { ServiceData } from "@/servicedata";
import { Mainsection } from "@/components/SeviceDetailspage/Mainsection";
import { OffcanvasMenu } from "@/components/common/OffcanvasMenu/OffcanvasMenu";

const Servicesdetailspage = () => {
  const [currentServiceData, setCurrentServiceData] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  const { id } = useParams();

  useEffect(() => {
    const result = ServiceData.filter(
      (service) => service.id.toString() === id
    )[0];
    setCurrentServiceData(result);
  }, [id]);
  return (
    <>
      <Navbar setShowMenu={setShowMenu} />
      <InnerPageHerosection
        bgImage={currentServiceData?.img1}
        pageTitle={currentServiceData?.title}
        pageSubTitle="Service-details"
      />
      <Mainsection
        pageTitle={currentServiceData?.title}
        img1={currentServiceData?.img1}
        img2={currentServiceData?.img2}
        img3={currentServiceData?.img3}
        para1={currentServiceData?.para1}
        para2={currentServiceData?.para2}
      />
      <Footer />


      {showMenu && <OffcanvasMenu setShowMenu={setShowMenu} />}
    </>
  );
};

export default Servicesdetailspage;
