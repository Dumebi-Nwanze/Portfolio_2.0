import { Project } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

const query = groq`
*[_type=="project"]{
  ...,
  technologies[]->
}`;

export const fetchProjects = async () => {
  const result = await sanityClient.fetch(query);
  const projects: Project[] = result;

  return projects;
};
