import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo;
};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe({ pageInfo }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:davisnwanze7@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };
  return (
    <div
      className="h-screen relative flex flex-col text-center md:text-left 
    max-w-7xl px-10 justify-evenly mx-auto pt-20 items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-lg md:text-2xl ml-4 text-center">
        Contact
      </h3>

      <div className="flex flex-col space-y-5">
        <h4 className="text-2xl md:text-3xl font-semibold text-center">
          Like what you see?{" "}
          <span className="underline decoration-green-700/70">
            Get in touch.
          </span>
        </h4>
      </div>
      <div className="space-y-3 md:space-y-5">
        <div className="flex items-center space-x-5 justify-center">
          <PhoneIcon className="text-green-700 h-4 w-4 md:h-7 md:w-7 animate-pulse" />
          <p className="text-lg md:text-2xl">{pageInfo.phoneNumber}</p>
        </div>
        <div className="flex items-center space-x-5 justify-center">
          <EnvelopeIcon className="text-green-700 h-4 w-4 md:h-7 md:w-7 animate-pulse" />
          <p className="text-lg md:text-2xl">{pageInfo.email}</p>
        </div>
        <div className="flex items-center space-x-5 justify-center">
          <MapPinIcon className="text-green-700 h-4 w-4 md:h-7 md:w-7 animate-pulse" />
          <p className="text-lg md:text-2xl">{pageInfo.address}</p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 w-fit mx-auto"
      >
        <div className="flex space-x-2">
          <input
            {...register("name")}
            className="contactInput w-[100px] md:w-fit"
            type="text"
            placeholder="Name"
          />
          <input
            {...register("email")}
            className="contactInput w-[150px] md:w-fit"
            type="email"
            placeholder="Email"
          />
        </div>
        <input
          {...register("subject")}
          className="contactInput"
          type="text"
          placeholder="Subject"
        />
        <textarea
          {...register("message")}
          className="contactInput"
          placeholder="Message"
        />
        <button
          type="submit"
          className="bg-green-700 py-5 px-10 rounded-md text-black font-bold"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
