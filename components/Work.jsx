"use client";
 
import { motion } from "framer-motion";
import portfolio from "../public/images/portfolio.png";
import movix from "../public/images/mo.png";
import search from "../public/images/search.png";
import blog from "../public/images/blog.png";
import analogclock from "../public/images/analogclock.png";
import digitalclock from "../public/images/digitalclock.png";
import { Tilt } from "react-tilt";
import Image from "next/image";
import github from "../public/svg/github.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import Store from '../store/Store';
import { useRouter } from "next/navigation";

const Work = ({dot, border}) => {
  const route = useRouter()
  const store = Store()
  const [Projects, setProjects] = useState({})
  useEffect(() => {
    const fetchProject = async () => {
      const res = await axios.get('http://localhost:3000/api/project');
      setProjects(res.data.res)
      
    }
    fetchProject()
  },[])
  
  return (
    <section id="work" className="h-full ">
        <div id="work1" className="relative"></div>
      <div className=" ease-in-out duration-1000 lg:left-[205px] left-[60px]">
        <div className="flex w-full">
          <div className="circle ease-in-out duration-1000 lg:left-[205px] left-[60px] w-[11px] h-[11px] border-[#5918df] border-[2px] solid rounded-full -m-[2px] mt-3"></div>

          <div className="ease-in-out duration-1000 lg:left-[205px] left-[60px] relative ml-7">
            <motion.div
              className="deactivate text-xl font-mono relative"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
            >
              
              Work/&gt;
            </motion.div>
          </div>
        </div>
        <div className="w-full h-full">
          <div className="flex flex-wrap h-full">
            {Projects.length &&
              Projects.map((pro) => {
                return(
                  <div key={pro.number} className="mx-auto" >
              <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} perspective={1000}>
                <motion.div
                onMouseEnter={() => {border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`}}
                onMouseLeave={() => {border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`}}
                initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="flex m-5 relative cursor-none gradient"
                  onClick={async () => {await store.FetchProjectId(pro._id); route.push('/Project')}}
                  
                >
                  <img
                    src={`/image/${pro.mainImage}`}
                    alt={pro.mainImage}
                    className="h-[220px] w-[500px] "
                    width={500}
                    height={220}
                    
                  />
                  <div className=" absolute bottom-5 -ml-5 ">
                    <div className="font-mono font-bold text-2xl">
                      {pro.name}
                    </div>
                    <div className="border-2 w-32 my-3"></div>
                    <div>&nbsp;&nbsp;{pro.number}</div>
                  </div>
                  <div className="absolute right-5 top-5 cursor-pointer" onClick={() => {window.open(pro.gitlink)}}>
                    <Image className="h-10 w-10" src={github} alt="github"/>
                  </div>
                </motion.div>
              </Tilt>
            </div>
                )
              })
            }
            
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work