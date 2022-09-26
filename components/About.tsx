import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
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
      viewport={{ once: true }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row 
    max-w-7xl px-10 md:pt-0 justify-evenly mx-auto items-center pt-10"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        alt="Dumebi's picture"
        className="w-64 h-64 -mb-20 md:mb-0 object-cover  flex-shrink rounded-full 
          md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h[600px] xl:rounded-lg "
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Get to <span className="decoration-green-700/70 underline">know</span>{" "}
          me
        </h4>
        <p className="text-base xl:text-lg">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}
