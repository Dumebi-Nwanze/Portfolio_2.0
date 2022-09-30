/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { Skill as SkillType } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skill: SkillType;
  directionLeft?: boolean;
};

export default function Skill({ directionLeft, skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <img
        className="rounded-full border border-gray-500 bg-gray-700 object-cover w-16 h-16 md:w-20 md:h-20
        filter group-hover:grayscale transition duration-300 ease-in-out "
        src={urlFor(skill?.image).url()}
        alt="Skill image"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover: bg-black
          h-16 w-16 md:w-20 md:h-20 rounded-full z-0 px-1"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-xs md:text-sm font-bold text-green-700 opacity-100">
            {skill.skillName}
          </p>
        </div>
      </div>
    </div>
  );
}
