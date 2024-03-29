import React from "react";
// import Layout
import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import { FeaturedProject, ProjectCard } from "@/components/ProjectCards";
import TransitionEffect from "@/components/TransitionEffect";


const Projects = () => {
  return (
    <>
      <Head>
        <title>Ravin Teja | Projects Page</title>
        <meta name="description" content="Porfolio Website" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark bg-light w-full min-h-screen">
        <Layout className="lg:pt-0 lg:p-8 xs:pb-16 md:pb-24  p-32 pt-0">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            // className="text-8xl sm:!text-4xl xs:!text-4xl  2xl:text-7xl xl:text-6xl lg:!text-6xl !leading-tight "
            className="mb-16 text-8xl !leading-tight lg:!text-6xl sm:mb-8 sm:!text-4xl xs:!text-4xl 2xl:text-6xl xl:text-5xl"
          />
          <div 
          // className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-24 lg:gap-x-8 md:gap-y-24 xs:gap-y-16 sm:gap-x-0"
          className="grid grid-cols-12 gap-24 gap-y-32 lg:gap-x-8 xl:gap-x-16 md:gap-y-24 md:!gap-x-0 sm:gap-x-0">
            <div className="col-span-12 ">
              <FeaturedProject
                name="Outing System"
                link="/"
                githubLink="/"
                imgURL="/images/SS1.png"
                description="Employee management system website that enables offline work to be easily uploaded and managed online, streamlining the process and increasing efficiency."
              />
            </div>
            <div className="md:col-span-12 col-span-6">
              <ProjectCard
                name="Assignement Submission"
                title="Employee Management System"
                link="/"
                githubLink="/"
                imgURL="/images/SS2.png"
              />
            </div>
            <div className="md:col-span-12 col-span-6">
              <ProjectCard
                name="Online Outing System"
                title="Employee Management System"
                link="/"
                githubLink="/"
                imgURL="/images/SS3.png"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                name="Inverse Cooking"
                link="/"
                githubLink="/"
                imgURL="/images/SS4.png"
                description="Inverse Cooking is a dataset of 1.2 million cooking recipes with 13.5 million cooking instructions automatically extracted from 800K food blogs. The dataset is unique in its size, diversity, and accuracy, and can be used for several downstream tasks such as cooking recipe retrieval, recipe classification, and ingredient prediction."
              />
            </div>
            <div className="md:col-span-12 col-span-6">
              <ProjectCard
                name="Optimal Crop Prediciton"
                title="Employee Management System"
                link="/"
                githubLink="/"
                imgURL="/images/SS5.png"
              />
            </div>
            <div className="md:col-span-12 col-span-6">
              <ProjectCard
                name="Online Shopping System"
                title="Employee Management System"
                link="/"
                githubLink="/"
                imgURL="/images/SS6.png"
              />
            </div>
          </div>
        </Layout>
      </main>{" "}
    </>
  );
};

export default Projects;
