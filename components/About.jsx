"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const About = ({dot, border}) => {
    const date = new Date();
  const time = {
    day: Math.abs(date.getDate() - 18),
    month: Math.abs((date.getMonth() - 8 + 13)%12),
    year: Math.abs(date.getFullYear() - 2000),
    hour: date.getHours(), 
    minute: date.getMinutes(),
    second: date.getSeconds(),
  }
  const [second, setsecond] = useState(1)
  useEffect(() => {
    const sec = setInterval(() => {
      setsecond(date.getSeconds())
    },[1000])
    return () => {clearInterval(sec)}
  },[second])
  return (
    <section id="about" className="h-full w-full relative ">
      <div id="about1" className="relative"></div>
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
              About/&gt;
            </motion.div>
          </div>
        
        </div>
        <div className="ease-in-out duration-1000 lg:left-[205px] left-[60px] relative -ml-7 mt-7 font-mono text-lg deactivate font-semibold mr-16 lg:mr-52">
        <div>
              <span>01</span>
              <span className="ml-11 text-blue-600">class</span>{" "}
              <span className="text-yellow-400">RiTik Jaiswal</span>
            </div>
            <div className="inline-flex">
              <span>02</span>
              <span className="ml-11">&nbsp;{" //"}I can, because I did.</span>
            </div>
            <div className="flex">
              <span>03</span>
              <span className="ml-11">
                &nbsp;{" //"} My vast variety of skills is continuously
                expanding.
              </span>
            </div>
            <div>
              <span>04</span>
              <span className="ml-11 text-blue-600">
                &nbsp; Constructor{" "}
                <span className="text-white">() {"\u007B"}</span>{" "}
              </span>
            </div>
            <div className="inline-flex">
              <span>05</span>
              <span className="ml-11 text-red-600">
                &nbsp; &nbsp; this
                <span className="text-white">.</span>
              </span>
              <span className="text-[#24e33a]">
                name{" "}
                <span className="text-red-500">
                  ={" "}
                  <span className="text-[#24e33a]">
                    &apos;RiTik Jaiswal&apos;
                  </span>
                </span>
              </span>
            </div>
            <div className="flex">
              <span>06</span>
              <span className="ml-11 text-red-600">
                &nbsp; &nbsp; this
                <span className="text-white">.</span>
              </span>
              <span className="text-[#24e33a]">
                Day_Of_Birth_TimeStamp{" "}
                <span className="text-red-500">
                  ={" "}
                  <span className="text-yellow-600">
                    {time.year}Y:{time.month}M:{time.day}D:{time.hour}H:{time.minute}M:{second}S
                  </span>
                </span>
              </span>
            </div>
            <div className="flex">
              <span>07</span>
              <span className="ml-11 text-yellow-400">
                &nbsp; &nbsp; Work
              </span>{" "}
              <span className="text-white">() {"\u007B"}</span>
            </div>
            <div className="flex">
              <span>08</span>
              <span className="ml-11 text-blue-500">
                &nbsp; &nbsp; &nbsp; return&nbsp;
              </span>{" "}
              <span className="text-white">[</span>
            </div>
            <div className="flex">
              <span>09</span>
              <span className="ml-11 text-white">
                &nbsp; &nbsp; &nbsp; &nbsp; {"\u007B"}
                <span className="text-[#24e33a]">&apos;2020 - 2020&apos;</span>
                &nbsp;:
                <span className="text-[#24e33a]">
                  {" '"}InternPe - Web Developer&apos;
                </span>
                {"\u007D"},{" "}
              </span>
            </div>
            
            <div className="flex">
              <span>10</span>
              <span className="ml-11 text-white">
                &nbsp; &nbsp;&nbsp;&nbsp;{" ]"}
              </span>{" "}
            </div>
            <div>
              <span>11</span>
              <span className="ml-11 text-white">&nbsp; &nbsp;{" }"}</span>{" "}
            </div>
            <div></div>
            <div className="flex">
              <span>12</span>
              <span className="ml-11 text-yellow-400">
                &nbsp; &nbsp; Educaion
              </span>{" "}
              <span className="text-white">() {"\u007B"}</span>
            </div>
            <div className="flex">
              <span>13</span>
              <span className="ml-11 text-blue-500">
                &nbsp; &nbsp; &nbsp; return&nbsp;
              </span>{" "}
              <span className="text-white">[</span>
            </div>
            <div className="flex">
              <span>14</span>
              <span className="ml-11 text-white">
                &nbsp; &nbsp; &nbsp; &nbsp; {"\u007B"}
                <span className="text-[#24e33a]">&apos;2020 - 2024&apos;</span>
                &nbsp;:
                <span className="text-[#24e33a]">
                  {" '"}Inderprastha Engineering College - Bachelor Degree in
                  Computer Science&apos;
                </span>
                {"\u007D"},{" "}
              </span>
            </div>
            <div className="flex">
              <span>15</span>
              <span className="ml-11 text-white">
                &nbsp; &nbsp; &nbsp; &nbsp; {"\u007B"}
                <span className="text-[#24e33a]">&apos;2018 - 2019&apos;</span>
                &nbsp;:
                <span className="text-[#24e33a]">
                  &nbsp;&apos;St Xaiver&apos;s School Salempur Uttar
                  Pardesh&apos;
                </span>
                {"\u007D"},{" "}
              </span>
            </div>
            <div className="flex">
              <span>16</span>
              <span className="ml-11 text-white">
                &nbsp; &nbsp; &nbsp; &nbsp; {"\u007B"}
                <span className="text-[#24e33a]">&apos;2016 - 2017&apos;</span>
                &nbsp;:
                <span className="text-[#24e33a]">
                  &nbsp;&apos;St Xaiver&apos;s School Salempur Uttar
                  Pardesh&apos;
                </span>
                {"\u007D"},
              </span>
            </div>
            <div className="flex">
              <span>17</span>
              <span className="ml-11 text-white">
                &nbsp; &nbsp;&nbsp;&nbsp;{" ]"}
              </span>{" "}
            </div>
            <div>
              <span>18</span>
              <span className="ml-11 text-white">&nbsp; &nbsp;{" }"}</span>{" "}
            </div>
            <div>
              <span>19</span>
              <span className="ml-11 text-yellow-400">
                &nbsp; &nbsp; Skills
              </span>{" "}
              <span className="text-white">() {"\u007B"}</span>
            </div>
            <div className="flex ">
              <span>20</span>
              <span className="ml-11 text-blue-500">
                &nbsp; &nbsp; &nbsp; return&nbsp;
              </span>{" "}
              <span className="text-white">[</span>
            </div>
            <div className="flex">
              <span>21</span>
              <span className="ml-11 text-white">
                &nbsp; &nbsp; &nbsp; &nbsp; {"\u007B"}
                <span className="text-[#24e33a]">
                  {"'"}HTML{"', '"}CSS{"', '"}Node.js{"', '"}React{"', '"}
                  Next.js{"', '"}TailwindCSS{"',"}
                </span>
                
              </span>
            </div>
            <div className="flex">
              <span>22</span>
              <span className="ml-11 text-white">
              &nbsp;{" "}&nbsp;{" "}&nbsp;{" "}&nbsp;{" "}&nbsp;
                <span className="text-[#24e33a]">
                {"'"}GIT{"', '"}JAVA{"', '"}C++
                  {"', '"}Python{"', '"}JavaScript{"', '"}Docker{"',"}Django{"',"}
                  
                </span>
                {"},"}
              </span>
            </div>
            <div className="flex">
              <span>&nbsp;&nbsp;</span>
              <span className="ml-11 text-white">
              &nbsp;{" "}&nbsp;{" "}&nbsp;{" "}&nbsp;{" "}&nbsp;
                <span className="text-[#24e33a]">
                {"'"}MongoDB{"',"}
                  <motion.div 
                  className="text-white inline-block cursor"
                >
                    &nbsp;|&nbsp;</motion.div>
                </span>
                {"},"}
              </span>
            </div>
            <div className="flex">
              <span>23</span>
              &nbsp;{" "}&nbsp;{" "}&nbsp;{" "}&nbsp;{" "}&nbsp;&nbsp;&nbsp;
              <span className="text-white">{"]"}</span>
            </div>
            <div className="flex">
              <span>24</span>
              &nbsp;{" "}&nbsp;{" "}&nbsp;{" "}&nbsp;{" "}&nbsp;
              <span className="text-white">{"}"}</span>
            </div>
            <div className="flex">
              <span>25</span>
              &nbsp;{" "}&nbsp;{" "}&nbsp;{" "}
              <span className="text-white">{"}"}</span>
            </div>
            <div className="flex my-10">
              <span>26</span>
              &nbsp;{" "}&nbsp;{" "}&nbsp;{" "}
              <motion.button
            onMouseEnter={() => {border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`}}
                  onMouseLeave={() => {border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`}}
              whileHover={{ scale: 1.2 }}
              className="btn text-white shadow  rounded-3xl w-[200px] h-[50px] font-mono font-semibold px-2 py-2  text-xl cursor-none "
              onClick={() => window.open("/RITIK.pdf")}
              download={true}
            >
              Download Resume
            </motion.button>
            </div>
          </div>
      </div>
    </section>
  );
};

export default About;
