import React from "react";
// import Layout
import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
//import RavinTeja.png
import Card from "@/components/Card";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const About = () => {
  return (
    <>
      <Head>
        <title>Ravin Teja | About Page</title>
        <meta name="description" content="Portfolio Website" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark bg-light w-full min-h-screen">
        <Layout className="pt-16 p-32 lg:p-8">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="text-8xl md:text-6xl sm:!text-4xl  sm:mb-8 xl:text-6xl  !leading-tight "
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 pt-16 md:pt-0">
            <div className="col-span-3 exmd:col-span-8 xl:col-span-4 flex flex-col items-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                BIOGRAPHY
              </h2>
              <p className="font-medium ">
                Hi, I am <strong>Ravin Teja</strong>, a web developer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 2+ years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients visions to life.
              </p>
              <p className="my-4 font-medium">
                I believe that design is about more than just making things look
                pretty  its about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium">
                Whether I am working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <Card
              className={
                "col-span-3 md:-order-1 exmd:col-span-8  xl:col-span-4  "
              }
            >
              <Image
                alt="Ravin Teja"
                // className="h-max w-full rounded-2xl bg-dark"
                className="relative col-span-3 h-max w-full rounded-2xl border-2 border-solid border-dark  bg-light dark:border-light dark:bg-dark  "
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src="/images/RavinTeja.jpg" 
                width={500}
                height={500}
              />
            </Card>
            <div className="col-span-2  xl:col-span-8 flex flex-col xl:flex-row  xl:items-center items-end justify-around">
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
