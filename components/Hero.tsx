import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, I'm ${pageInfo?.name}`,
      "Web Developer",
      "Mobile Developer",
      "Designer",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div
      className="h-screen flex flex-col space-y-8 items-center justify-center 
    text-center overflow-hidden"
    >
      <BackgroundCircles />
      <Image
        src={urlFor(pageInfo?.heroImage).url()}
        alt="Dumebi's picture"
        width={200}
        height={200}
        className="relative rounded-full mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroBtn">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroBtn">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroBtn">Skills </button>
          </Link>
          <Link href="#projects">
            <button className="heroBtn">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
