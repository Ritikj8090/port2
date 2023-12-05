
"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion"
import AnimatedTextCharacter from './AnimatedTextCharacter';
import Msg from './Msg';
import Background from './Background';

const Start = ({dot, border, Visiter}) => {
  const [heights, setheights] = useState(10);
  const [show, setShow] = useState(false)
  const borderRef = useRef(null);
  useEffect(() => {
    const sec = setInterval(() => {
      const bor = borderRef.current;
      const body = document.body;
      const html = document.documentElement;
      const height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight, 
        html.scrollHeight,
        html.offsetHeight
      );
      setheights(height - 200)
      
      bor.style = `height: ${heights - 8}px; transition: ease-in-out 20s;`
    }, [1000]);
    return () => {
      clearInterval(sec);
    };
  }, [heights]);

  useEffect(() => {
    // Use a setTimeout to set showDiv to true after 4 seconds (4000 milliseconds)
    const timeoutId = setTimeout(() => {
      setShow(true);
    }, 4000);

    // Clear the timeout if the component unmounts before the timeout is reached
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>

    <section id='start' className='relative lg:ml-52 mx-16 mt-52  h-[800px] flex ease-in-out duration-1000' >
      <div className=' flex  ease-in-out duration-1000'>
      <div className={`w-[11px] h-[11px] border-[#5918df] absolute border-[2px] solid rounded-full -m-[5px] -my-[9px]`}></div>
      <div ref={borderRef} className={`bg-[#5918df]  w-[1px] absolute z-9 `}>
        
        <a
          href="#work"
          className="-rotate-90 scroll -mx-3 cursor-none  font-bold text-xl sm:my-72 my-52"
        >
          SCROLL
        </a>
      </div>
      <div className='ml-7 '>
      <motion.div
          className="deactivate text-xl font-mono  -top-5 relative"
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", delay: 3 }}
        >
          Start/&gt;
        </motion.div>
        <div className="text-3xl lg:text-6xl md:text-[50px]">
          <div className="sm:flex ">
            <AnimatedTextCharacter text={"Hi my name is "} />
            <div>
              <motion.p
                initial={{ x: -3000 }}
                animate={{ x: 0 }}
                transition={{ delay: 2 }}
                className="pri-col flex-col"
                onMouseEnter={() => {
                  border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference`;
                }}
                onMouseLeave={() => {
                  border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference`;
                }}
              >
                RiTik Jaiswal
              </motion.p>
            </div>
          </div>
          <div className="flex my-5">
            <motion.div
              initial={{ x: -2000 }}
              animate={{ x: 0 }}
              transition={{ delay: 1, type: "spring" }}
            >
              I <i className="font-serif">design</i> and develop <Msg />
            </motion.div>
          </div>
          <div className="mt-8 deactivate font-mono text-xl">
            <AnimatedTextCharacter text={"Let me show You..."} delay={4} />
            <div className='border-[1px] rounded-2xl w-fit h-fit p-2 mt-2'>Visiter Count = {Visiter}</div>
          </div>
        </div>
      </div>
      </div>
    </section>
    </>
  )
}

export default Start