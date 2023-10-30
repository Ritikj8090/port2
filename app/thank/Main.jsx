"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import smile from "../../public/svg/smile.svg";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
 
const Main = () => {
    const route = useRouter()
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
  return (
    <>
      <div>
        <div ref={borderRef} className="cursor-border"></div>
        <div ref={dotRef} className="cursor-point"></div>
      </div>
      <div
        className={`cursor-none justify-center items-center flex h-screen w-full top-0 right-0 left-0 bottom-0 fixed bg-[#0f0d15]`}
      >
        <div>
          <div>
            <div className="justify-center items-center flex text-3xl font-bold font-serif">
              Thank You, <Image className="h-10 w-10" src={smile} alt="smile" />
            </div>{" "}
            <br />
            <div className="text-xl font-mono">
              I wanted to take a moment to express my appreciation for your
              message. <br />
              It{"'"}s great to hear from you! Your thoughtful outreach means a
              lot to me, <br />
              and I{"'"}m glad we connected. Looking forward to more
              conversations and <br />
              catching up soon. Thanks again for reaching out! <br />
            </div>
            <div className="mt-10 text-xl font-mono font-bold">
              Best regards,
              <br />
              Ritik Jaiswal
            </div>
          </div>
          <div className="flex items-center justify-center">
            <motion.button
              onMouseEnter={() => {
                mdot.pooint.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`;
              }}
              onMouseLeave={() => {
                mdot.pooint.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`;
              }}
              whileHover={{ scale: 1.2 }}
              className="btn shadow rounded-3xl w-[150px] h-[50px] font-mono font-semibold px-2 py-2  text-xl cursor-none "
              onClick={() => route.push('/')}
            >
              CLOSE&#8594;
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
