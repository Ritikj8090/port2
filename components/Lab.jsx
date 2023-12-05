import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import movix from "../public/movix/movix1.jpeg";

const Lab = () => {
  return (
    <section id="about" className=" w-full relative ">
      <div id="lab1" className="relative"></div>
      <div className=" ease-in-out duration-1000 lg:left-[205px] left-[60px]">
        <div className="flex w-full ">
          <div className="circle ease-in-out duration-1000 lg:left-[205px] left-[60px] w-[11px] h-[11px] border-[#5918df] border-[2px] solid rounded-full -m-[2px] mt-3"></div>

          <div className="ease-in-out duration-1000 lg:left-[205px] left-[60px] relative ml-7">
            <motion.div
              className="deactivate text-xl font-mono relative"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
            >
              Lab/&gt;
            </motion.div>
          </div>
        </div>
        <div className="justify-between gap-7 flex flex-wrap h-screen ease-in-out duration-1000 lg:left-[205px] left-[60px] relative mt-7 font-mono text-lg deactivate font-semibold mr-20 lg:mr-5 ml-7 ">
          
          <div className="relative">
            <div className="border-2 h-[50px] mb-5 w-[150px] p-2 rounded-2xl card">
              Analog Clock
            </div>
            <div className="cardhover absolute ml-20">
              <Image src={movix} />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Lab;
