import React, { useEffect, useMemo, useState } from "react";
import ParticlesBackgrounds from "../components/ParticlesBackgrounds.jsx";
import { hover, motion, scale } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";
import avator from "../assets/avator.png"

export default function Home() {

  const roles = useMemo(() => ["Web Developer", "Frontend Developer", "UI/UX Designer", "Graphic Designer"],[]);
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[index];
    const timeout = setTimeout(() => {
      if(!deleting && subIndex < currentRole.length) setSubIndex(v => v + 1);
      else if(!deleting && subIndex === currentRole.length) setTimeout(() => setDeleting(true),1200);
      else if(deleting && subIndex > 0 ) setSubIndex(v => v - 1);
      else if(deleting && subIndex === 0) {
        setDeleting(false);
        setIndex(p => (p + 1) % roles.length);
      }
    }, deleting ? 40 : 60);
    return () => clearTimeout(timeout);

  },[subIndex, index, deleting, roles]);

  const socials = [
    {
      Icon: FaXTwitter,
      label: "X",
      href: "https://x.com/Prabhat98370655",
    },
    {
      Icon: FaLinkedin,
      label: "linkedIn",
      href: "https://www.linkedin.com/in/prabhat-kumar-2420022bb/",
    },
    {
      Icon: FaGithub,
      label: "Github",
      href: "https://github.com/prabhat-222",
    },
    {
      Icon: FaInstagramSquare,
      label: "instagram",
      href: "https://www.instagram.com/ll_the_prabhat_ll/",
    },
  ]

  const glowVerients = {
    initial: {scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))"},
    hover: {scale: 1.2, y: -3, filter: "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))", transition: {type: "spring", stiffness: 300, damping: 15}},
    tap: {
      scale: 0.95, y: 0, transition: {duration: 0.08}
    }
  }


  return (
    <section
      id="home"
      className="w-full h-screen relative bg-black overflow-hidden"
    >
      <ParticlesBackgrounds />
      <div className="absolute inset-0">
        <div className=" absolute -top-32 -left-32 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vh] sm:h-[50vh] md:h-[40vh] max-w-125 max-h-125 rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse"></div>
        <div className=" absolute bottom-0 right-0 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vh] sm:h-[50vh] md:h-[40vh] max-w-125 max-h-125 rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse delay-500"></div>
      </div>

      <div className=" relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid sm:grid-cols-1 lg:grid-cols-2">
      {/* ---------------------- left div ------------------------------ */}
        <div className="flex flex-col justify-center h-full text-center lg:text-left relative">
          <div className="w-full lg:pr-24 mx-auto max-w-3xl">
            <motion.div
            className=" text-md sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white tracking-wide min-h-[1.6em]"
            initial={{opacity: 0, y: 12}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            >
                <span className="">
                  {roles[index].substring(0, subIndex)}
                </span>
                <span className="inline-block w-0.5 ml-1 bg-white animate-pulse align-middle" style={{height: "1em"}}></span>
            </motion.div>

            <motion.h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg"
            initial={{opacity: 0, y: 40}}
            animate= {{opacity: 1, y: 1}}
            transition={{duration: 1}}
            >
              Hello, I'm 
              <br />
              <span className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:whitespace-nowrap">Prabhat Sharma</span>
            </motion.h1>
            <motion.p className="mt-6 text-base sm:text-sm md:text-md text-gray-300 max-w-2xl mx-auto lg:mx-0"
            initial={{opacity: 0, y: 2}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.4}}
            >
              I’m a passionate web developer and UI/UX designer who loves building modern websites with intuitive and engaging user interfaces. I focus on both design and functionality to deliver smooth user experiences.
            </motion.p>

            <motion.div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.8, duration: 0.8}}
            >
              <a className="px-6 py-3 rounded-full font-medium text-lg text-white bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] shadow-lg hover:scale-105 transition-all" href="#projects">View My Work</a>
              <a href="/Resume.pdf" download className="px-6 py-3 rounded-full text-lg font-medium text-black bg-white hover:bg-gray-200 shadow-lg hover:scale-105 transition-all">My Resume</a>
            </motion.div>

            <div className="mt-10 flex gap-5 text-2xl md:text-3xl justify-center lg:justify-start">
              {socials.map(({Icon, label, href}) => (
                <motion.a 
                href={href} 
                key={label} 
                target="_blank" 
                aria-label={label} 
                rel="noopener noreferrer" 
                variants={glowVerients}
                initial = "initial"
                whileHover="hover"
                whileTap="tap"
                className="text-gray-300"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>

          </div>
        </div>
      {/* ------------------- right div --------------------------- */}

        <div className="relative hidden lg:block">
            <div className=" absolute top-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              right: "10px",
              width: "min(22vh, 410px)",
              height: "min(40vh, 260px)",
              borderRadius: "50%",
              filter: "blur(38px)",
              opacity: 0.32,
              background: "conic-gradient(from 0deg, #1cd8d2, #00bf8f, #302b63, #1cd8d2)"
            }}
            />

          <motion.img src={avator} alt="prabhat"  className=" absolute top-1/2 -translate-y-1/2 object-contain select-none pointer-events-none"
          style={{
            right: "-30px",
            width: "min(45vw, 780px)",
            maxHeight: "90vh",
          }}
          initial={{opacity: 0, y: 40, scale: 0.98}}
          animate={{opacity: 1, y: 0, scale: 1}}
          transition={{delay: 0.2, duration: 0.8}}

          />
        </div>

      </div>

    </section>
  );
}
