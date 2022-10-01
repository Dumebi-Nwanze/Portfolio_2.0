import type { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Link from "next/link";
import Image from "next/image";
import {
  Experience as Experiences,
  PageInfo,
  Project,
  Skill,
  Social,
} from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchExperiences } from "../utils/fetchExperience";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocials } from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experiences: Experiences[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ projects, pageInfo, experiences, skills, socials }: Props) => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-x-hidden  z-0 overflow-y-scroll scrollbar-thin md:scrollbar scrollbar-track-gray-500 scrollbar-thumb-green-700"
    >
      <Head>
        <title>Dumebi 2.0</title>
      </Head>
      <Header socials={socials} />
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      <section id="experience" className="snap-center">
        <Experience experiences={experiences} />
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <footer className="sticky bottom-5 w-full">
        <div className="flex items-center justify-center ">
          <Link href="#hero">
            <Image
              className="rounded-full filter grayscale hover:grayscale-0 
            cursor-pointer"
              src="https://firebasestorage.googleapis.com/v0/b/linkedin-clone-4baf1.appspot.com/o/up_icon.png?alt=media&token=29675f21-b557-4d84-b9fc-785be013cd62"
              alt="Scroll to top"
              width={40}
              height={40}
              objectFit="contain"
            />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const skills: Skill[] = await fetchSkills();
  const experiences: Experiences[] = await fetchExperiences();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 86400,
  };
};
