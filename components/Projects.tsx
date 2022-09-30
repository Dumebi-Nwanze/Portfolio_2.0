import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Link from "next/link";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
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
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row 
      max-w-full justify-evenly mx-auto items-center z-0 pt-8"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-lg md:text-2xl ml-4 text-center">
        Projects
      </h3>
      <div
        className="w-full relative flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory 
      z-20 scrollbar-track-gray-500 scrollbar-thumb-green-700 scrollbar-thin"
      >
        {/*Projects map */}
        {projects.map((project, index) => {
          return (
            <div
              key={project._id}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 
              items-center justify-center p-10 md:p-44 h-screen"
            >
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={urlFor(project.image).url()}
                alt="Project image"
                className=" xl:w-[700px] xl:h-[350px]"
              />
              <div className="space-y-5 xl:space-y-10 px-0 md:px:10 max-w-6xl flex flex-col">
                <h4 className="text-3xl xl:text-3xl font-semibold text-center">
                  <span className="underline decoration-green-700/70">
                    Case Study <span className="font-bold">{index + 1}</span> of{" "}
                    {projects.length}:
                  </span>{" "}
                  {project.title}
                </h4>
                <p className="text-xs md:text-base  xl:text-lg text-center md:text-left">
                  {project.summary}
                </p>
                <div className="self-center space-x-10">
                  <Link href={project.linkToBuild}>
                    <button
                      className="px-4 py-2 md:px-6 md:py-3 bg-green-700 font-semibold text-sm md:text-base rounded-lg cursor-pointer 
                  hover:bg-green-700/70 transition-all"
                    >
                      Github Repo
                    </button>
                  </Link>
                  <Link href={project.linkToDemo}>
                    <button
                      className="px-4 py-2 md:px-6 md:py-3 bg-green-700 font-semibold text-sm md:text-base rounded-lg cursor-pointer 
                  hover:bg-green-700/70 transition-all"
                    >
                      Live Demo
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="w-full absolute top-[30%] bg-green-700 left-0 h-[300px] 
      -skew-y-12"
      />
    </motion.div>
  );
}
