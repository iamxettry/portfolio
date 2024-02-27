"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
const Project = ({ src, title, tech }) => {
  return (
    <motion.div
      whileInView={{ scale: [0, 1] }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="w-28 md:w-40"
    >
      <Link href={title} className="">
        <Image
          src={src}
          height={100}
          width={100}
          alt="Project image"
          className="rounded-xl w-32 h-24 "
        />
        <h1 className="font-bold mt-2 text-sm underline">{title}</h1>
        <h3 className="text-xs text-gray-700 font-semibold my-1">{tech}</h3>
      </Link>
    </motion.div>
  );
};

export default Project;
