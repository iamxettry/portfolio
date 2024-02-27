"use client";
import { motion } from "framer-motion";

const Skill = ({ icon, title, technology }) => {
  return (
    <div className="w-32  border border-gray-400 rounded-md p-2 overflow-hidden">
      <motion.p whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }} >{icon}</motion.p>
      <motion.h1
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="font-bold text-sm"
      >
        {title}
      </motion.h1>
      <motion.h3
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-xs text-gray-500"
      >
        {technology}
      </motion.h3>
    </div>
  );
};

export default Skill;
