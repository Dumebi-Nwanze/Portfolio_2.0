/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center  flex-shrink-0 
    w-[400px] md:w-[500px] xl:w-[550px] xl:h-[600px] snap-center bg-[#292929] p-10 xl:p-5
    opacity-40 hover:opacity-100 transition-opacity ease-in-out duration-300 cursor-pointer overflow-hidden overflow-y-scroll 
      scrollbar-track-gray-500 scrollbar-thumb-green-700 scrollbar-thin"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="h-24 w-24 rounded-full xl:w-[150px] xl:h-[150px] 
        object-cover object-center mb-6 mt-2"
        src={urlFor(experience?.companyImage).url()}
        alt="Comapny Logo"
      />
      <div className="px-10 space-y-2">
        <h4 className="text-3xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-xl mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              src={urlFor(technology.image).url()}
              alt=""
              className="h-10 w-10 rounded-full"
            />
          ))}
        </div>
        <p className="py-5 uppercase text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "PRESENT"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-sm">
          {experience.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
