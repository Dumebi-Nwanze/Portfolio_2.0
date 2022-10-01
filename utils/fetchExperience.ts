import { Experience } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

const query = groq`
*[_type=="experience"]{
    ...,
    technologies[]->
}`;

export const fetchExperiences = async () => {
  const result = await sanityClient.fetch(query);
  const experience: Experience[] = result;

  return experience;
};
