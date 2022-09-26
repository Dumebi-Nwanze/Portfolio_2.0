import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";

type Props = {
  skills: SkillType[];
};

export default function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 500,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1.2,
      }}
      viewport={{ once: true }}
      className="h-screen flex relative overflow-hidden flex-col text-center 
      max-w-[2000px] xl:px-10 min-h-screen pt-36 xl:pt-0 xl:justify-evenly xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <div className="grid grid-cols-4 gap-5 xl:grid-cols-5">
        {skills.map((skill, index) => (
          <Skill key={index} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}
