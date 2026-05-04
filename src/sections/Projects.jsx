import React, { useEffect, useMemo, useRef, useState } from 'react'
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";

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

  // ++++++++++++++++++++++++++++ project array +++++++++++++++++++++++++++++++++++++++++++++++

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

  return (
    <section id='projects' className='relative text-white'>

    </section>
  )
}

