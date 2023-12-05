"use client";

import Store from "@/store/Store";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import arrow from "../../public/svg/arrow.svg";
import loading from "../../public/svg/loadingPage.svg";
import { useRouter } from "next/navigation";


const Main = () => {
  const route = useRouter()
  const store = Store();
  const [Data, setData] = useState({});

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
  const [images, setImages] = useState([])
  useEffect(() => {
    const fetchSingleProject = async () => {
      setTimeout(async () => {
        const project = await axios.get(
          `https://portfolio-v2-production-30b2.up.railway.app/project/${store.ProjectId}`
        );
        setData(project.data.project)
          setImages(project.data.project.image)
      }, 1000);
      
    };
    fetchSingleProject();
  }, [Data]);
  console.log(images);
  return (
    <>
      <div>
        <div ref={borderRef} className="cursor-border"></div>
        <div ref={dotRef} className="cursor-point"></div>
      </div>
      <div className="flex h-screen w-full justify-between p-5">
        <div
          className="invisible md:visible w-0 md:w-[1250px] flex ease-in-out duration-500 relative"
          onMouseEnter={() => {
            mdot.pooint.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`;
          }}
          onMouseLeave={() => {
            mdot.pooint.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`;
          }}
        >
          <div className='overflow-scroll w-full'>
            {
            
              images.length === 0 ? <div className="flex mx-auto w-full h-full items-center justify-center"><Image src={loading} height={60} width={60}/></div> : images.map((img) => {
                return <Image key={Data.number} alt="iamge" src={`http://localhost:3000/${Data.number}/${img}`}/>
              })
          }
          
          </div>



        </div>
        <div className="w-[600px] min-w-[200px] bg-[#1a1527] pt-2 flex ease-in-out duration-500 pr-5 h-full rounded-lg relative">
          <div className="ml-10  h-full relative">
            <div className="flex ">
              <div
                onMouseEnter={() => {
                  mdot.pooint.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`;
                }}
                onMouseLeave={() => {
                  mdot.pooint.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`;
                }}
                className="w-7 h-7 rounded-full bg-[#5918df] my-3"
              >
                <Image
                  src={arrow}
                  alt="arrow"
                  height={15}
                  width={30}
                  className="flex items-center justify-center"
                  onClick={() => route.push('/')}
                />
                
              </div>
            </div>
            <div className="flex text-xl">{Data.name}</div>
            <div className="font-mono mt-5">
              {Data.description}
            </div>
            <div className="mt-10 font-serif">
              {Data.tech}
            </div>
            <motion.button
              onMouseEnter={() => {
                mdot.pooint.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`;
              }}
              onMouseLeave={() => {
                mdot.pooint.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`;
              }}
              whileHover={{ scale: 1.2 }}
              className="btn shadow rounded-3xl w-[100px] h-[40px] font-mono px-2 py-2  text-xl cursor-none mt-5"
              onClick={() => {
                window.open(Data.weblink)
              }}
            >
              Visit
            </motion.button>
            <div className="flex items-center gap-2 mt-3 bottom-0 ">
              <div>{Data.number}</div>{" "}
              <div className="w-full border-2 rounded-xl flex"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
