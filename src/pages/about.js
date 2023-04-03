import React from "react";
// import Layout
import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
//import RavinTeja.png
import RavinTeja from "../../public/images/RavinTeja.png";
import Card from "@/components/Card";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const About = () => {
  return (
    <>
      <Head>
        <title>Ravin Teja | About Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark bg-light w-full min-h-screen">
        <Layout className="pt-16 p-8 lg:p-32 lg:pt-0">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="text-4xl sm:!text-6xl  sm:mb-8 xl:text-6xl lg:!text-7xl !leading-tight "
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-8 md:col-span-4 xl:col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                BIOGRAPHY
              </h2>
              <p className="font-medium ">
                Hi, I'm <strong>Ravin Teja</strong>, a web developer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 2+ years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients' visions to life.
              </p>
              <p className="my-4 font-medium">
                I believe that design is about more than just making things look
                pretty – it's about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium">
                Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <Card
              className={
                "col-span-8 md:col-span-4 xl:col-span-3 -order-1 md:order-none"
              }
            >
              <Image
                alt="Ravin Teja"
                className="h-auto w-full rounded-2xl bg-dark"
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={RavinTeja}
              />
            </Card>
            <div className="col-span-8  xl:col-span-2 flex xl:flex-col  xl:items-center items-end justify-around">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <span>6</span>+
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <span>2</span>+
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills/>
          <Experience />
          <Education />
        </Layout>
      </main>{" "}
    </>
  );
};

export default About;
