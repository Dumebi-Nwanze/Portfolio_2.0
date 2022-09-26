import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience as Experiences } from "../typings";

type Props = {
  experiences: Experiences[];
};

export default function Experience({ experiences }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.2,
      }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row 
    max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div
        className="w-full flex space-x-5 p-10 mt-36 overflow-x-scroll snap-x snap-mandatory
       scrollbar scrollbar-track-gray-500 scrollbar-thumb-green-500"
      >
        {experiences
          .sort((a, b) => {
            return (
              new Date(b.dateEnded).getTime() - new Date(a.dateEnded).getTime()
            );
          })
          .map((experience) => (
            <ExperienceCard key={experience._id} experience={experience} />
          ))}
      </div>
    </motion.div>
  );
}
