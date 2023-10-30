import React from 'react'
import {motion} from 'framer-motion';

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
        <div className="ease-in-out duration-1000 lg:left-[205px] left-[60px] relative mt-7 font-mono text-lg deactivate font-semibold mr-16 lg:mr-5 ml-7 h-full">
            <div className='h-full w-full flex items-center justify-center mt-[400px] mb-[400px] text-5xl font-mono '>
            Coming Soon...
            </div>
        </div>
      </div>
    </section>
  )
}

export default Lab  