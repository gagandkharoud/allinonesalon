"use client"
import { useRouter } from "next/navigation";
import { ArrowIcon } from "../../../assets/AllSvgs/AllSvgs";
import { motion } from "framer-motion";



export const CommonBTNs = ({ btnTitle, bgColor, path }) => {
  const router = useRouter();
  return (
    <motion.button
      onClick={() => path && router.push(path)}
      initial={{
        opacity: 0,
        y: "5dvw",
      }}
      whileInView={{
        opacity: 1,
        y: "0dvw",
      }}
      transition={{
        duration: 0.6,
        ease: "backInOut",
        mass: 4,
        power: 4,
        type: "tween",
        delay: 0.2,
      }}
      className={`${
        bgColor === "black"
          ? "bg-black text-[var(--mainColor)]"
          : "bg-[var(--mainColor)] text-black"
      }  flex justify-center items-center gap-4 px-6 py-2 font-[Inter Tight] 2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] md:portrait:text-[2.2dvw] text-[3.2dvw] font-[500]  cursor-pointer`}
    >
      {btnTitle} <ArrowIcon color={bgColor === "black" ? "#fff" : "#000"} />
    </motion.button>
  );
};
