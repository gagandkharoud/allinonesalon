import { X } from "lucide-react";
import Link from "next/link";


export const OffcanvasMenu = ({ setShowMenu }) => {
    return (
      <div className="fixed top-0 left-0 bg-[#000]/40 z-[99999] w-full h-[100dvh]">
        <div className="ml-auto  2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:portrait:w-[90%] w-full bg-white/10 backdrop-blur-md h-full flex flex-col justify-center items-center gap-5">
          <div className="w-[80%] h-[75%] flex flex-col gap-10 ">
            <div className="flex justify-between items-center w-full ">
              <h2 className="2xl:text-[3dvw] xl:text-[3dvw] lg:text-[3dvw] md:portrait:text-[5dvw] text-[7dvw] text-[var(--mainColor)] uppercase">
                Menu
              </h2>
              <button
                className="cursor-pointer bg-[var(--mainColor)] flex justify-center items-center 2xl:h-[3dvw] xl:h-[3dvw] lg:h-[3dvw] md:portrait:h-[4dvw] h-[8dvw] 2xl:w-[3dvw] xl:w-[3dvw] lg:w-[3dvw] md:portrait:w-[4dvw] w-[8dvw] "
                onClick={() => setShowMenu(false)}
              >
                <X/>
              </button>
            </div>
  
            <ul className="flex flex-col gap-4 my-auto">
              <Link onClick={()=>setShowMenu(false)}
                href="/"
                className="2xl:text-[2.4dvw] xl:text-[2.4dvw] lg:text-[2.4dvw] md:portrait:text-[5dvw] text-[6.4dvw] font-[400] uppercase text-white mix-blend-darken"
              >
                Home
              </Link>
              <Link
                href="/about" onClick={()=>setShowMenu(false)}
                className="2xl:text-[2.4dvw] xl:text-[2.4dvw] lg:text-[2.4dvw] md:portrait:text-[5dvw] text-[6.4dvw] font-[400] uppercase text-white"
              >
                About Us
              </Link>
              <Link
                href="/services" onClick={()=>setShowMenu(false)}
                className="2xl:text-[2.4dvw] xl:text-[2.4dvw] lg:text-[2.4dvw] md:portrait:text-[5dvw] text-[6.4dvw] font-[400] uppercase text-white"
              >
                Our Services
              </Link>
              <Link
                href="/news-and-articles" onClick={()=>setShowMenu(false)}
                className="2xl:text-[2.4dvw] xl:text-[2.4dvw] lg:text-[2.4dvw] md:portrait:text-[5dvw] text-[6.4dvw] font-[400] uppercase text-white"
              >
                News & Articles
              </Link>
              <Link
                href="/contact-us" onClick={()=>setShowMenu(false)}
                className="2xl:text-[2.4dvw] xl:text-[2.4dvw] lg:text-[2.4dvw] md:portrait:text-[5dvw] text-[6.4dvw] font-[400] uppercase text-white"
              >
                Contact US
              </Link>
            </ul>
          </div>
        </div>
      </div>
    );
  };