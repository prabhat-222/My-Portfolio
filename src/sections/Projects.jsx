import React, { useEffect, useMemo, useRef, useState } from 'react'
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.PNG";
import photo3 from "../assets/photo3.png";
import { AnimatePresence, useMotionValueEvent, useScroll, motion } from 'framer-motion';

const useIsMobile = (query = "(max-width : 639px)") => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.matchMedia(query).matches
  )
  useEffect(() => {
    if(typeof window === "undefined") return;
    const mql = window.matchMedia(query);
    const handler = (e) => setIsMobile(e.matches);

    mql.addEventListener("change", handler);
    setIsMobile(mql.matches);
    return () => mql.removeEventListener("change", handler);
  },[query])
  return isMobile;
}


export default function Projects() {

  const isMobile = useIsMobile();
  const sceanRef = useRef(null);

  // ++++++++++++++++++++++++++++ project array +++++++++++++++++++++++++++++++++++++++++

  const projects = useMemo(() => [
    {
      title: "nk Studio",
      link : "https://www.nk.studio",
      bgColor: "#0d4d3d",
      image: isMobile ? photo1 : img1
    },
    {
        title: "Gamily",
        link: "https://gamilyapp.com/",
        bgColor: "#3884d3",
        image: isMobile ? photo2 : img2,
      },
      {
        title: "Hungry Tiger",
        link: "https://www.eathungrytiger.com/",
        bgColor: "#dc9317",
        image: isMobile ? photo3 : img3,
      }
  ],[isMobile]);

  const {scrollYProgress} = useScroll({
    target: sceanRef,
    offset: ["start start", "end end"]
  })

  const thresholds = projects.map((_, i) => (i +1) / projects.length);

  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = thresholds.findIndex((t) => v <= t);
    setActiveIndex(idx === -1 ? thresholds.length -1 : idx)
  });

const activeProject = projects[activeIndex] 

  return (
    <section ref={sceanRef} id='projects' className='relative text-white'
    style={{
      height: `${100*projects.length}vh`,
      backgroundColor: activeProject.bgColor,
      transition: "background-color 400ms ease"
    }}
    >

      <div className=' sticky top-0 h-screen flex flex-col items-center justify-center'>
        <h2 className={`text-3xl font-semibold z-10 text-center ${
          isMobile ? "mt-4" : "mt-8"
        }`}>
          My Work
        </h2>

        <div className={`relative w-full flex-1 flex items-center justify-center ${
          isMobile ? "-mt-4" : ""
        }`}>
          {projects.map((project, idx) =>(
            <div key={project.title} className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 pointer-events-none ${activeIndex === idx ? "opacity-100 z-20" : "opacity-0 z-0 sm:z-10"}`}
            style={{width: "80%", maxWidth: "1200px"}}
            >
              <AnimatePresence mode='wait'>
                {activeIndex === idx && (
                  <motion.h3 key={project.title}
                  initial={{opacity: 0, y: -30}}
                  animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0, y: 30}}
                  transition={{duration: 0.5, ease: "easeOut"}}
                  className={`block mt-1 md:mt-0 text-center text-[clamp(1rem,4vw,3rem)] text-white/95 sm:absolute sm:-top-12 sm:left-[35%] lg:left-[7%] sm:mb-0 italic font-semibold ${
                    isMobile ? "-mt-24" : ""
                  }`}
                  style={{
                    zIndex: 5,
                    textAlign: isMobile ? "center" : "left",

                  }}
                  >
                    {project.title}
                  </motion.h3>
                )}
              </AnimatePresence>

                <div className={`relative w-[80%] mx-auto overflow-hidden bg-black/20 shadow-2xl md:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)] ${isMobile ? "mb-6 rounded-lg" : "mb-10 sm:mb-12 rounded-xl"} h-[62vh] sm:h-[66vh]`}
                style={{zIndex: 10, transition: "box-shadow 250ms ease"}}
                >
                  <img src={project.image} alt={project.title} className='w-full h-full object-cover drop-shadow-xl md:drop-shadow-2xl' 
                  style={{
                    position: "relative",
                    zIndex: 10,
                    filter: "drop-shadow(0,16px 40px rgba(0,0,0, 0.65))",
                    transition: "filter 200ms ease",
                  }}
                  loading='lazy'
                  />
                </div>

            </div>
          ))}          
        </div>

        <div className={`absolute ${isMobile ? "bottom-4" : "bottom-4"}`}>
        <a target='_blank' rel='noopener noreferrer' className=' inline-block px-6 py-3 font-semibold rounded-lg bg-white text-black hover:bg-gray-300 transition-all z-30' aria-label={`view ${activeProject?.title}`} href={activeProject?.link}>View Project</a>
      </div>

      </div>

      

    </section>
  )
}

