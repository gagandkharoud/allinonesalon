'use client'
import  { useEffect, useState } from 'react'
import { Footer } from '@/components/common/Footer/Footer'
import { InnerPageHerosection } from '@/components/common/InnerPageHerosec/InnerPageHerosection'
import { Navbar } from '@/components/common/Navbar/Navbar'
import BlogHeroImg1 from "@/assets/Images/BlogHeroImg1.png";
import { Mainsection } from '@/components/BlogPage/Mainsection/Mainsection'
import { OffcanvasMenu } from '@/components/common/OffcanvasMenu/OffcanvasMenu'

 const Blogpage = () => {
    const [showMenu, setShowMenu] = useState(false);
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, []);
  return (
   <>
    <Navbar setShowMenu={setShowMenu} />
    <InnerPageHerosection
        bgImage={BlogHeroImg1}
        pageTitle="News & Articles"
        pageSubTitle="News & Articles"
      />
      <Mainsection />
    <Footer />


    {showMenu && <OffcanvasMenu setShowMenu={setShowMenu} />}
   </>
  )
}

export default Blogpage
