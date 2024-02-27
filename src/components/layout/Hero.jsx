"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const Hero = () => {
  const scaleVarients = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
     
    },
  };
  return (
    <div className="  mt-6 flex flex-col md:flex-row  gap-3   ">
      <div className="absolute -z-10  top-0 left-0 bg-hero bg-cover bg-center bg-no-repeat h-[440px] w-full "></div>

      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex-[0.5]"
      >
        <div className=" flex justify-center flex-col items-start md:items-end">
          <div className="flex items-center justify-center gap-4 py-4 px-8 shadow-md shadow-black/10 rounded-xl bg-white">
            <span className="text-4xl grid place-content-center">👋</span>
            <div className="">
              <p className="text-sm text-gray-500">Hello, I am</p>
              <h1 className="font-bold text-xl md:text-4xl ">Khim</h1>
            </div>
          </div>
          <div className=" py-4 px-8 shadow-md shadow-black/10 rounded-xl mt-10 bg-white">
            <p className="text-xs text-gray-500 uppercase">Web Developer</p>
            <p className="text-xs text-gray-500 uppercase">Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="flex-1 md:relative  z-0"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        <Image
          src={"/handsome_man.png"}
          height={100}
          width={400}
          alt="hero"
          className=" rounded-xl  w-full md:absolute bottom-0 "
        />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute top-64  md:top-0 left-0 bottom-0 right-0 -z-10"
          src={"/circle.svg"}
          alt="profile_fircle"
        />
      </motion.div>

      <motion.div
        variants={scaleVarients}
        whileInView={scaleVarients.whileInView}
        transition={{ duration: 0.5 }}
        className="flex-[0.5] flex flex-row justify-center flex-wrap md:flex-col  bg-slate-100 md:bg-transparent "
      >
        <div className="w-24 h-24 rounded-full shadow-md shadow-black/10 flex justify-center items-center bg-white">
          <img src="react.png" alt="redux"  className="h-3/5  w-3/5" />
        </div>
        <div className="w-32 h-32 rounded-full shadow-md shadow-black/10 flex justify-center items-center bg-white m-6 md:m-10">
          <img src="redux.png" alt="redux"  className="h-3/5  w-3/5" />
        </div>
        <div className="w-16 h-16 rounded-full shadow-md shadow-black/10 flex justify-center items-center bg-white">
          <img src="python.png" alt="redux"  className="h-3/5  w-3/5" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
