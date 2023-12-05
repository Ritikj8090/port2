"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import PageNotFound from "../../public/images/PageNotFound.jpg";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Main = () => {
  const dotRef = useRef(null);
  const borderRef = useRef(null);
  const [mdot, setmdot] = useState({
    doot: 0,
    pooint: 0,
  });
  
  useEffect(() => {
    const dot = dotRef.current;
    const border = borderRef.current;
    setmdot({
      doot: dotRef.current,
      pooint: borderRef.current,
    });
    window.addEventListener("mousemove", function (e) {
      const posX = e?.clientX;
      const posY = e?.clientY;

      dot.style.left = `${posX}px`;
      dot.style.top = `${posY}px`;

      border.style.left = `${posX}px`;
      border.style.top = `${posY}px`;

      border.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 500, fill: "forwards" }
      );
    });
  }, []);

  const route = useRouter();
  return (
    <>

      <div>
        <div ref={borderRef} className="cursor-border"></div>
        <div ref={dotRef} className="cursor-point"></div>
      </div>
      <div className="h-screen flex w-full relative">
        <div className="flex flex-col bg-[#111a41fd] items-center justify-center w-full ">
          <img src={PageNotFound} alt="page not found" className="h-[600px] w-[600px]"/>
          <motion.button
            onMouseEnter={() => {
              mdot.pooint.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`;
            }}
            onMouseLeave={() => {
              mdot.pooint.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`;
            }}
            whileHover={{ scale: 1.2 }}
            className="btn shadow rounded-3xl p-2 font-mono px-2 py-2 mb-5 text-xl cursor-none "
            onClick={() => {
              route.push("/");
            }}
          >
            Go Back To Home
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default Main;
