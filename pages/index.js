import { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Header from "../components/Header";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Head from "next/head";
import Cursor from "../components/Cursor";
import Resume from "../components/Resume";

// Dynamic imports for below-the-fold components
const WorkCard = dynamic(() => import("../components/WorkCard"));
const Footer = dynamic(() => import("../components/Footer"));

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const contactRef = useRef();
  const resumeRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();
  
  // State pour gérer l'affichage du cursor
  const [showCursor, setShowCursor] = useState(data.showCursor);

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleContactScroll = () => {
    window.scrollTo({
      top: contactRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleResumeScroll = () => {
    window.scrollTo({
      top: resumeRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  // Gérer l'affichage du cursor selon la taille de l'écran
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShowCursor(false);
      } else {
        setShowCursor(data.showCursor);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`relative ${showCursor && "cursor-none"}`}>
      {showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleContactScroll={handleContactScroll}
          handleResumeScroll={handleResumeScroll}
        />
        <div className="laptop:mt-20 mt-10">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineFour}
            </h1>
          </div>

        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-3xl">PROJECTS</h1>
          <h2 className="text-xl">Here are some of my favorite projects I&apos;ve been working on</h2>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project, index) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                priority={index === 0}
                onClick={() => window.open(project.url)}
              />
            
            ))}
          </div>
        </div>
        <div ref={resumeRef}>
          <Resume/>
        </div>
        <div className="mt-10 p-2" ref={contactRef}>
          <Footer/>
        </div>
      </div>
    </div>
  );
}
